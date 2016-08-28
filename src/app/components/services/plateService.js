plateoApp.service('plateService', function($q, $http, userService) {
    var plateToShow = {}; //FIXME: Check to see if this is good practice to share across controllers, if not remove all references(getter, setter)
    return {
        plateChoosen: function(plate) {
            console.log('setting plate', plate);
            plateToShow = plate;
        },
        getPlateToShow: function() {
            return plateToShow;
        },
        follow: function() {
          $http({
              method: 'POST',
              url: baseUrl + 'api/v1/plates/follow',
              headers: {
                  'Content-Type': 'application/json', //TODO can i use the TokenInterceptor
                  'X-Access-Token': sessionStorage.token
              },
              data: {
                  userId: userService.getCurrentUser()._id,//AuthenticationFactory.user._id,
                  plateId: plate._id,
                  createDateTime : new Date()
              }
          }).then(function success(response) {
              return response;
          });
        },
        searchPlates: function(plateNum, state) { //TODO: Search Functionality
            return $http.get(baseUrl + "plates").then(function(response) {
                return response.data;
            });
        },
        getMyPlates: function() {
          var user = userService.getCurrentUser();
          return $http({
              method: 'GET',
              url: baseUrl + 'api/v1/plates/' + user._id,//AuthenticationFactory.user._id,
              headers: {
                  'Content-Type': 'application/json', //TODO can i use the TokenInterceptor
                  'X-Access-Token': ''//sessionStorage.token
              },
              data: {}
          }).then(function success(response) {
              return response;
          });
        },
        getComments: function() {
          const plate = plateToShow;
           return $http.get(baseUrl + "comments/" + plate._id).then(function(response) {
              return response.data;
          });
        },
        addComment: function(comment) {
          const plate = plateToShow;
          const user = userService.getCurrentUser();
          return $http({
              method: 'POST',
              url: baseUrl + 'api/v1/plates/comment',
              headers: {
                  'Content-Type': 'application/json', //TODO can i use the TokenInterceptor
                  'X-Access-Token': 'test'//sessionStorage.token
              },
              data: {
                  plateId: plate._id,
                  comment : comment,
                  user: {
                      userId: user._id,//AuthenticationFactory.user._id,
                      username: user.username,//AuthenticationFactory.user.username
                  },
                  createDateTime : new Date()
              }
          }).then(function success(response) {
              return response;
          });
        }
    };
});
