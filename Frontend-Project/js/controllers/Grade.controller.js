
/**
 * Created by Visual Studio.
 * User: Antuanett Barrios
 */

idboard.controller('GradeController', function ($scope, $filter, GradeService, StudentService) {
    console.log("GradeController ");

    $scope.gradeService = GradeService;
    var students = StudentService.getStudents();

    console.log("students on data base", students);

    $scope.grades = GradeService.getGrades();
    $scope.studentsNotBelongToGrade = StudentService.getStudentsNotBelongToGrade();


    $scope.gradeSelected;
    $scope.gradesActives = GradeService.getGradesActives();
    $scope.gradesNActives = GradeService.getGradesNActives();

    console.log("gradesActives ", $scope.gradesActives);

    if ($scope.gradesActives.length > 0) {
        //$scope.newGradeToDuplicate = $scope.gradesActives[0].name;
    }


    $scope.newGrade = function () {
        console.log("add new grade");
        var grade = {
            id: '53',
            name: $scope.gradeNameToAdd,
            activated: true,
            students: []
        }
        GradeService.getGrades().push(grade);
        GradeService.gradesActives().push(grade);
        $scope.gradeNameToAdd = "ciaociao";
    }

    $scope.selectGrade = function (grade) {
        //console.log("selectGrade");
        $scope.gradeSelected = grade;

    };

    $scope.findStudentsInThisGrade = function (grade) {
        $scope.gradeSelected = grade;
        $scope.updateListStudentsInCurrentGrade(grade);
    }

    $scope.updateListStudentsInCurrentGrade = function (grade) {
        console.log("updateListStudentsInCurrentGrad");
        var idStudentsInThisGrade = GradeService.getStudentsInThisGrade(grade);
        console.log("idStudentsINThisGrade", idStudentsInThisGrade);
        var students = [];
        if (idStudentsInThisGrade != null) {
            idStudentsInThisGrade.forEach(function (_idstudent) {
                var s = StudentService.getStudentById(_idstudent);
                if (s != null) {
                    console.log("student found ", s.name);
                    students.push(s);
                }
            });
        }
        $scope.studentsInThisGrade = students;
    }



    $scope.deleteGrade = function (grade) {
        GradeService.deleteGrade(grade);
    };

    $scope.addStudent = function (student) {
        if ($scope.gradeSelected != null && $scope.gradeSelected !== "undefined") {
            GradeService.addStudent($scope.gradeSelected, student);
            student.grade = true;
            StudentService.changeGradeStudent(student);
            $scope.findStudentsInThisGrade($scope.gradeSelected);
        }
    };

    $scope.duplicateGrade = function (grade) {

        if ($scope.newGradeIdToDuplicate != null && $scope.newGradeIdToDuplicate != "undefined") {
            if ($scope.nameNewGrade != null && $scope.nameNewGrade != "undefined") {
                var nameNewGrade = $scope.nameNewGrade;
                var gradeID = $scope.newGradeIdToDuplicate;
                GradeService.duplicateGrade(gradeID, nameNewGrade);
                $scope.nameNewGrade = "";
            }
        }

    };


    $scope.archiveGrade = function (grade) {
        GradeService.archiveGrade(grade);

        //remove grade in list gradeActives
        var index = $scope.gradesActives.indexOf(grade);
        $scope.gradesActives.splice(index, 1);

        //add grade in list gradeNActives
        $scope.gradesNActives.push(grade);
    }

    $scope.deleteStudent = function (student) {
        console.log("deleteStudent", student);
        if ($scope.gradeSelected !== null || $scope.gradeSelected === 'undefined') {
            $scope.gradeSelected.students = GradeService.deleteStudent($scope.gradeSelected, student);
            student.grade = false;
            StudentService.changeGradeStudent(student);
        }
    }

    $scope.inactiveStudentPassage = function (student) {
        GradeService.inactiveStudentPassage(student);
    }


    $scope.$watch('studentsInThisGrade.length', function (newVal, oldVal) {
        console.log("watch studentsInThisGrade newVal", newVal, "oldVal", oldVal);
        $scope.studentsNotBelongToGrade = StudentService.getStudentsNotBelongToGrade();
    });

    $scope.$watch('gradeSelected.students.length', function (newVal, oldVal) {
        console.log("watch gradeSelected newVal", newVal, "oldVal", oldVal);
        if (newVal < oldVal) { // only when delete student
            $scope.studentsNotBelongToGrade = StudentService.getStudentsNotBelongToGrade();
            console.log("watch gradeSelected studentsInThisGrade", $scope.studentsInThisGrade);
            console.log("watch gradeSelected gradeSelected.students", $scope.gradeSelected.students);
            $scope.updateListStudentsInCurrentGrade($scope.gradeSelected);
        }

    });



});
