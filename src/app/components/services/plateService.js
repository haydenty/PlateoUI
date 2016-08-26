plateoApp.service('plateService', function($q){
  var plateToShow; //FIXME: Check to see if this is good practice to share across controllers, if not remove all references(getter, setter)
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
        var deferred = $q.defer();
        deferred.resolve(data);
        return deferred.promise;
      },
      searchPlates : function(plateNum, state) {
        //TODO: make call to api - do all filtering on api side
        var deferred = $q.defer();
        var data = [
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
        deferred.resolve(data);
        return deferred.promise;
      },
      getMyPlates : function() { //TODO: must know user info here
        //TODO: make call to api - do all filtering on api side for user
        var deferred = $q.defer();
        var data = [
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
        deferred.resolve(data);
        return deferred.promise;
      },
      addComment : function(plate, comment){
        var deferred = $q.defer();
        plate.conversation.push(comment);
        var data = plate;
        deferred.resolve(data);
        return deferred.promise;
        //TODO: refresh page? - try catch the response and pass it back to controller in promise - response from app should be the new plate obj api call
      }
  };
});
