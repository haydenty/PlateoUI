plateoApp.factory('AuthenticationFactory', function ($window) {
    var auth = {
        isLogged: false,
        check: function () {
            if ($window.localStorage.token && $window.localStorage.user) {
                this.isLogged = true;
            } else {
                this.isLogged = false;
                delete this.user;
            }
        }
    }
    return auth;
});

plateoApp.factory('UserAuthFactory', function ($window, $location, $http, AuthenticationFactory, userService) {
    return {
        login: function (username, password) {
            return $http.post(baseUrl + 'login', {
                username: username,
                password: password
            });
        },
        logout: function () {
            if (AuthenticationFactory.isLogged) {
                AuthenticationFactory.isLogged = false;
                delete AuthenticationFactory.user;
                delete AuthenticationFactory.userRole;
                delete $window.localStorage.token;
                delete $window.localStorage.user;
                delete $window.localStorage.userRole;
                userService.setCurrentUser({});
                $location.path("/login");
            }
        },
        register: function (firstname, lastname, email, username, password) { //TODO: create user object to pass not individual attributes
            return $http.post(baseUrl + 'register', {
                firstname: firstname,
                lastname: lastname,
                email: email,
                username: username,
                password: password,
                verifyPassword: password
            });
        }
    }
});
plateoApp.factory('TokenInterceptor', function ($q, $window) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.localStorage.token) {
                config.headers['X-Access-Token'] = $window.localStorage.token;
                config.headers['Content-Type'] = "application/json";
            }
            return config || $q.when(config);
        },
        response: function (response) {
            return response || $q.when(response);
        }
    };
});
