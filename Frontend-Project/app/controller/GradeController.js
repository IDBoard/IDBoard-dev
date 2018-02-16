(function (app) {
    var GradeController = function ($scope, apiGrades) {
        $scope.message = "Grades";
        
    };
    app.controller("GradeController", GradeController);
}(angular.module("App")));