idboard.controller('GradeController', function ($scope, $filter, GradeService, StudentService) {

    $scope.gradeService = GradeService;
    var students    = StudentService.getStudents();
    $scope.grades   = GradeService.getGrades();
    $scope.studentsNotBelongToGrade = StudentService.getStudentsNotBelongToGrade();
    
    
    $scope.gradeSelected;
    $scope.gradesActives = GradeService.getGradesActives();
    $scope.gradesNActives = GradeService.getGradesNActives();

    if ($scope.gradesActives.length > 0)
    {
        $scope.nameGradeToDuplicate = $scope.gradesActives[0].name;
    }

   

    $scope.newGrade = function () {
        console.log("add new grade");
        var grade = {
            id: '77',
            name: $scope.gradeNameToAdd,
            activated: true,
            students: [
                {
                    name: "Antuanett",
                    activated: true,
                    checked: false,
                }
            ]
        }
        GradeService.getGrades().push(grade);
        GradeService.gradesActives().push(grade);
        $scope.gradeNameToAdd = "";
    }
    
    $scope.selectGrade = function (grade) {
        console.log("selectGrade");
        $scope.gradeSelected = grade;
        $scope.studentsInThisGrade = GradeService.getStudentsInThisGrade(grade);
    };

    $scope.deleteGrade = function (grade) {
        console.log("deleteGrade");
        console.log(grade.id);
        GradeService.deleteGrade(grade);
    };

    $scope.addStudent = function (student) {
        if ($scope.gradeSelected != null || $scope.gradeSelected == 'undefined') {
            console.log("grade selected");
            console.log($scope.gradeSelected);
            GradeService.addStudent($scope.gradeSelected, student);
            student.grade = true;
            StudentService.changeGradeStudent(student);
        }
    };

    $scope.duplicateGrade = function(grade) {
        console.log("duplicateGrade method");
        console.log('nameGradeToDuplicate', $scope.nameGradeToDuplicate);
        grade = $scope.gradeSelected;
        var nameNewGrade = $scope.nameNewGrade;
        if (grade != null) {
            GradeService.duplicateGrade(grade, nameNewGrade);
            $scope.nameNewGrade = "";
        }
    };

    $scope.archiveGrade = function (grade) {
        console.log("archiverGrade method");
        GradeService.archiveGrade(grade);

        //remove grade in list gradeActives
        var index = $scope.gradesActives.indexOf(grade);
        $scope.gradesActives.splice(index, 1);

        //add grade in list gradeNActives
        $scope.gradesNActives.push(grade);
        console.log("grade non actives", $scope.gradesNActives);
    }

    $scope.deleteStudent = function (student) {
        console.log("deleteStudent method");
        if ($scope.gradeSelected != null || $scope.gradeSelected == 'undefined') {
            GradeService.deleteStudent($scope.gradeSelected, student);
            student.grade = false;
            StudentService.changeGradeStudent(student);
        }
    }

    $scope.inactiveStudentPassage = function (student) {
        console.log("inactiveStudentPassage method");
        GradeService.inactiveStudentPassage(student);
    }


    $scope.$watch('studentsInThisGrade.length', function (newVal, oldVal) {
        console.log('watch studentsInThisGrade');

        $scope.studentsNotBelongToGrade = StudentService.getStudentsNotBelongToGrade();
        console.log('Watch: studentNotBelongTo', $scope.students);
    });

    
});

