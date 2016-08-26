// (function () {
//     'use strict';
    //var plateoApp = angular.module('plateoApp');
    plateoApp.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/home/home.html',
                controller: 'mainController'
            })

        .when('/plateSearch', {
                templateUrl: './components/search/plateSearch.html',
                controller: 'searchController'
            })
            .when('/myPlates', { //TODO: this requires login, other views that have follow buttons should use ng-if="loggedIn"
                templateUrl: './components/myPlates/myPlates.html',
                controller: 'myPlatesController'
            })

        .when('/plate', { //TODO: pass plate obj as parameter
            templateUrl: './components/plate/plate.html',
            controller: 'plateController'
        })

        .when('/login', {
                templateUrl: './shared/login/login.html',
                controller: 'loginController'
            })
            .when('/register', {
                templateUrl: './shared/register/register.html',
                controller: 'registerController'
            })
    });

// }());
