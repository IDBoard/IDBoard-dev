idboard.controller('MainController', function ($scope) {
    console.log('MainController');
    $scope.showEvents = false;

    $scope.setShowEvents = function(visible){
        console.log("setShowEvents");
       $scope.showEvents = visible;
    }

});