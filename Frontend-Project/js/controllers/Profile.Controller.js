angular.module('IDBoard').controller('ProfileController', function ($scope, $http) {
    console.log('hi from profile controller');

    $scope.student = {};
    $scope.student.Nom = "Davide";
    $scope.student.Prenom = "Gagliardi";
    $scope.student.lieudeneissance = "Turin";
    $scope.student.Datedeneissance = "29/08/1994";
    $scope.student.id = "29301";
    $scope.student.role = "Student";



    /*  $http.get('/ControllerName/MethodName') // If the controller name is AccountController we'll write just Account/
          .then(function (response) {
              //we'll send a json response to the scope , the method in the controller send a json 
              $scope.student = response.data
          })*/
});