plateoApp.controller('plateController', function($scope, plateService) {
    var vm = $scope;
    vm.initialize = function() {
        vm.plate = plateService.getPlateToShow(); //NOTE: no promises needed because it doesn't call api
    }
    vm.follow = function() {
        plateService.follow().then(function(response) {}, function(response) {
            alert('Error occurred trying to follow plate: ', JSON.stringify(response)); //TODO: handle error appro.
        });
    };
    vm.addComment = function() { //TODO add validation for blank text box
        const plate = vm.plate;
        const comment = {
            username: 'test', //TODO: authentication stuff
            message: vm.newComment,
            createdDateTime: JSON.stringify(new Date())
        };

        var addCommentPromise = plateService.addComment(plate, comment);
        addCommentPromise.then(function(response) {
            vm.plate = response;
            vm.newComment = "";
        }, function(response) {
            alert('Error happened adding comment on plate: ', JSON.stringify(response)); //TODO: appropriate error handling toastr, maybe
        });
    }
    vm.initialize();
});
