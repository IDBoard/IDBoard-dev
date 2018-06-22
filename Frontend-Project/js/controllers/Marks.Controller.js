/**
 * Created by Visual Studio.
 * User: Antuanett Barrios
 */

idboard.controller('MarksController', function ($scope, ClassService, StudentService) {


    $scope.studentService = StudentService;
    $scope.classService = ClassService;
    $scope.grades = $scope.classService.getGrades();
    $scope.students = $scope.studentService.getStudents();
    $scope.idGradeSelected;
    $scope.studentsByGrade = [];
    $scope.seachStudentBy = "";
    
    $scope.$watch('idGradeSelected', function (newVal, oldVal) {
        if ($scope.idGradeSelected != null) {

            if (newVal != oldVal) {
                if (newVal != "" && newVal != null && newVal != "undefinded") {
                    $scope.updateListStudentsByGrade();
                }
                else {
                    $scope.studentsByGrade = [];
                }
            }
        }
    });

    $scope.updateListStudentsByGrade = function (grade) {
        var grade = $scope.classService.findGradeById($scope.idGradeSelected);
        if (grade != null) {
            $scope.studentsByGrade = [];
            for (var i = 0; i < grade.students.length; i++) {
                var eId = grade.students[i];
                var e = StudentService.getStudentById(eId);
                if (e != null) {
                    $scope.studentsByGrade.push(e);
                }
            }
        }
    }
  
 
});