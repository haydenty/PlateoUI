plateoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/components/home/home.html',
            controller: 'mainController'
        })

    .when('/plateSearch', {
            templateUrl: 'app/components/search/plateSearch.html',
            controller: 'searchController'
        })
        .when('/myPlates', { //TODO: this requires login, other views that have follow buttons should use ng-if="loggedIn"
            templateUrl: 'app/components/myPlates/myPlates.html',
            controller: 'myPlatesController'
        })

    .when('/plate', { //TODO: pass plate obj as parameter
        templateUrl: 'app/components/plate/plate.html',
        controller: 'plateController'
    })

    .when('/login', {
            templateUrl: 'app/shared/login/login.html',
            controller: 'loginController'
        })
        .when('/register', {
            templateUrl: 'app/shared/register/register.html',
            controller: 'registerController'
        })
});
