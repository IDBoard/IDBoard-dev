idboard.controller('MainController', function ($scope) {
    $scope.showEvents = false;

    $scope.setShowEvents = function(visible){

       $scope.showEvents = visible;
    }

});