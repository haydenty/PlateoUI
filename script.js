var plateoApp = angular.module('plateoApp', ['ngRoute']);

plateoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

      .when('/plateSearch', {
          templateUrl: 'pages/plateSearch.html',
          controller: 'searchController'
      })
      .when('/myPlates', {    //TODO: this requires login, other views that have follow buttons should use ng-if="loggedIn"
          templateUrl: 'pages/myPlates.html',
          controller: 'myPlatesController'
      })

      .when('/plate', {  //TODO: pass plate obj as parameter
          templateUrl: 'pages/plate.html',
          controller: 'plateController'
      })

      .when('/login', {
          templateUrl: 'pages/login.html',
          controller: 'loginController'
      })
      .when('/register', {
          templateUrl: 'pages/register.html',
          controller: 'registerController'
      })
});
plateoApp.service('plateService', function(){
  var plateToShow;
  return {
      plateChoosen : function(plate) {
        plateToShow = plate;
      },
      getPlateToShow : function(){
        return plateToShow;
      },
      follow : function() {
        //TODO: make save to api
        //TODO: refresh page? - try catch the response and pass it back to controller in promise - change icon to blue
        alert('call to the api happened user now follows this plate');
      },
      searchPlates : function(plateNum, state) {
        //TODO: make call to api - do all filtering on api side
        return [
            {
              number : 'EYEMAC',
              state : {
                name: 'WISCONSIN', abbreviation: 'WI'
              },
              conversation : [
                {
                  username : 'sknyforeal',
                  message : 'tire is flat',
                  createdDateTime : '5-1-16'
                }
              ]
            },
            {
              number : 'ABC123',
              state : {
                name: 'ALABAMA', abbreviation: 'AL'
              },
              conversation : [
                {
                  username : 'jtimbers',
                  message : 'you are cute',
                  createdDateTime : '5-12-16'
                },
                {
                  username : 'tswift',
                  message : 'thanks want to grab ice cream? @jtimbers',
                  createdDateTime : '5-12-16'
                },
                {
                  username : 'jtimbers',
                  message : 'how about next McDonalds take the exit',
                  createdDateTime : '5-12-16'
                }
              ]
            }
        ];
      },
      getMyPlates : function() { //TODO: must know user info here
        //TODO: make call to api - do all filtering on api side for user
        return [
            {
              number : 'Test Plate',
              state : {
                name: 'MINNESOTA', abbreviation: 'MN'
              },
              conversation : [
                {
                  username : 'jtimbers',
                  message : 'you are cute',
                  createdDateTime : '5-12-16'
                },
                {
                  username : 'tswift',
                  message : 'thanks want to grab ice cream? @jtimbers',
                  createdDateTime : '5-12-16'
                },
                {
                  username : 'jtimbers',
                  message : 'how about next McDonalds take the exit',
                  createdDateTime : '5-12-16'
                },
                {
                  username : 'jtimbers',
                  message : 'whats your number',
                  createdDateTime : '5-12-16'
                },
                {
                  username : 'tswift',
                  message : '999-234-0987',
                  createdDateTime : '5-12-16'
                },
                {
                  username : 'jtimbers',
                  message : 'thanks ;)',
                  createdDateTime : '5-12-16'
                }
              ]
            }
        ];
      },
      addComment : function(plate, comment){
        plate.conversation.push(comment);
        return plate;
        //TODO: refresh page? - try catch the response and pass it back to controller in promise - response from app should be the new plate obj api call
      }
  };
});
plateoApp.controller('mainController', function ($scope) {
    var vm = $scope;
});
plateoApp.controller('loginController', function ($scope) {
    var vm = $scope;
});
plateoApp.controller('registerController', function ($scope) {
    var vm = $scope;
});
plateoApp.controller('myPlatesController', function ($scope, $location, plateService) {
    var vm = $scope;
    vm.plateClicked = function(plate){
      plateService.plateChoosen(plate);
      $location.path('plate');
    };
    vm.myPlates = plateService.getMyPlates();//TODO: make promise and handler errors
});
plateoApp.controller('plateController', function ($scope, plateService) {
    var vm = $scope;
    vm.initialize = function(){
      vm.plate = plateService.getPlateToShow();
    }
    vm.follow = function () {
      plateService.follow();
    };
    vm.addComment = function(){
      const plate = vm.plate;
      const comment = {
        username : 'test', //TODO: authentication stuff
        message : vm.newComment,
        createdDateTime: JSON.stringify(new Date())
      };
      vm.plate = plateService.addComment(plate, comment);//TODO: may want to make a const before passing - not sure if pass by value or ref?
      //vm.comment = "";
    }
    vm.initialize();
});
plateoApp.controller('searchController', function ($scope, $location, plateService) {
    var vm = $scope;
    vm.states = [
        { name: 'ALABAMA', abbreviation: 'AL'},
        { name: 'ALASKA', abbreviation: 'AK'},
        { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
        { name: 'ARIZONA', abbreviation: 'AZ'},
        { name: 'ARKANSAS', abbreviation: 'AR'},
        { name: 'CALIFORNIA', abbreviation: 'CA'},
        { name: 'COLORADO', abbreviation: 'CO'},
        { name: 'CONNECTICUT', abbreviation: 'CT'},
        { name: 'DELAWARE', abbreviation: 'DE'},
        { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
        { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
        { name: 'FLORIDA', abbreviation: 'FL'},
        { name: 'GEORGIA', abbreviation: 'GA'},
        { name: 'GUAM', abbreviation: 'GU'},
        { name: 'HAWAII', abbreviation: 'HI'},
        { name: 'IDAHO', abbreviation: 'ID'},
        { name: 'ILLINOIS', abbreviation: 'IL'},
        { name: 'INDIANA', abbreviation: 'IN'},
        { name: 'IOWA', abbreviation: 'IA'},
        { name: 'KANSAS', abbreviation: 'KS'},
        { name: 'KENTUCKY', abbreviation: 'KY'},
        { name: 'LOUISIANA', abbreviation: 'LA'},
        { name: 'MAINE', abbreviation: 'ME'},
        { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
        { name: 'MARYLAND', abbreviation: 'MD'},
        { name: 'MASSACHUSETTS', abbreviation: 'MA'},
        { name: 'MICHIGAN', abbreviation: 'MI'},
        { name: 'MINNESOTA', abbreviation: 'MN'},
        { name: 'MISSISSIPPI', abbreviation: 'MS'},
        { name: 'MISSOURI', abbreviation: 'MO'},
        { name: 'MONTANA', abbreviation: 'MT'},
        { name: 'NEBRASKA', abbreviation: 'NE'},
        { name: 'NEVADA', abbreviation: 'NV'},
        { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
        { name: 'NEW JERSEY', abbreviation: 'NJ'},
        { name: 'NEW MEXICO', abbreviation: 'NM'},
        { name: 'NEW YORK', abbreviation: 'NY'},
        { name: 'NORTH CAROLINA', abbreviation: 'NC'},
        { name: 'NORTH DAKOTA', abbreviation: 'ND'},
        { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
        { name: 'OHIO', abbreviation: 'OH'},
        { name: 'OKLAHOMA', abbreviation: 'OK'},
        { name: 'OREGON', abbreviation: 'OR'},
        { name: 'PALAU', abbreviation: 'PW'},
        { name: 'PENNSYLVANIA', abbreviation: 'PA'},
        { name: 'PUERTO RICO', abbreviation: 'PR'},
        { name: 'RHODE ISLAND', abbreviation: 'RI'},
        { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
        { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
        { name: 'TENNESSEE', abbreviation: 'TN'},
        { name: 'TEXAS', abbreviation: 'TX'},
        { name: 'UTAH', abbreviation: 'UT'},
        { name: 'VERMONT', abbreviation: 'VT'},
        { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
        { name: 'VIRGINIA', abbreviation: 'VA'},
        { name: 'WASHINGTON', abbreviation: 'WA'},
        { name: 'WEST VIRGINIA', abbreviation: 'WV'},
        { name: 'WISCONSIN', abbreviation: 'WI'},
        { name: 'WYOMING', abbreviation: 'WY' }
    ];
    vm.selectedState = vm.states[0];
    vm.searchComplete = false;
    vm.search = function(){
      vm.searchComplete = false;
      const plateNum = vm.enteredPlateNumber;
      const state = vm.selectedState;

      vm.searchResultPlates = plateService.searchPlates(plateNum, state);
      //TODO: make it a promise
      if(vm.searchResultPlates.length === 0)
          vm.searchComplete = true;
    };
    vm.plateClicked = function(plate){
      plateService.plateChoosen(plate);
      $location.path('plate');
    };
});
