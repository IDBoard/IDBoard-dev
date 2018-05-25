/**
 * Created by Visual Studio.
 * User: Antuanett Barrios
 */

idboard.controller('MarksController', function ($scope, GradeService, StudentService) {

    $scope.grades = GradeService.getGrades();
    $scope.students = StudentService.getStudents();
    $scope.studentService = StudentService;
    $scope.idGradeSelected;
    $scope.studentsByGrade = [];
    $scope.seachStudentBy = "";


    $scope.$watch('seachStudentBy', function (newVal, oldVal) {
        if ($scope.seachStudentBy != null) {
            console.log("watch  seachStudentBy newVal ", newVal);
            console.log("watch seachStudentBy  oldVal ", oldVal);

            if (newVal != oldVal) {
                var studentByName = $scope.studentService.getStudentByNameInList(newVal, $scope.studentsByGrade);
                var studentById;
                if (studentByName == null) {
                    console.log("student searched By Name == null");
                    console.log("before searching student by id ", newVal);
                    studentById = $scope.studentService.getStudentByIdInList(newVal, $scope.studentsByGrade);
                    if (studentById != null) {
                        console.log("student searched By Id != null");
                        $scope.studentsByGrade = [];
                        $scope.studentsByGrade.push(studentById);
                    }
                    else {
                        console.log("student searched By Id == null");
                        $scope.updateListStudentsByGrade();
                    }
                }
                else {
                    console.log("student searched By Name != null");
                    $scope.studentsByGrade = [];
                    $scope.studentsByGrade.push(studentByName);
                }
            }

        }
    });

    $scope.$watch('idGradeSelected', function (newVal, oldVal) {
        if ($scope.idGradeSelected != null) {
            console.log("watch grade selected newVal ", newVal);
            console.log("watch grade selected oldVal ", oldVal);

            if (newVal != oldVal) {
                if (newVal != "" && newVal != null && newVal != "undefinded") {
                    $scope.updateListStudentsByGrade();
                }
                else {
                    console.log("newVal is empty or null");
                    $scope.studentsByGrade = [];
                }
            }
        }
    });

    $scope.updateListStudentsByGrade = function (grade) {
        var grade = GradeService.findGradeById($scope.idGradeSelected);
        console.log("grade ", grade);
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