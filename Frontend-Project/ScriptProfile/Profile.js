var myApp = angular.module('MyModule', []);
myApp.controller('DBcontroller', function ($scope, $http) {
    $http.get('/ControllerName/MethodName') // If the controller name is AccountController we'll write just Account/
        .then(function (response) {
            //we'll send a json response to the scope , the method in the controller send a json 
            $scope.student = response.data
        })
})