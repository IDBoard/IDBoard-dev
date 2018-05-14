idboard.controller('GradeController', function ($scope, $filter, GradeService, StudentService) {
    console.log("GradeController ");

    $scope.gradeService = GradeService;
    var students    = StudentService.getStudents();
    $scope.grades   = GradeService.getGrades();
    $scope.studentsNotBelongToGrade = StudentService.getStudentsNotBelongToGrade();
    
    
    $scope.gradeSelected;
    $scope.gradesActives  = GradeService.getGradesActives();
    $scope.gradesNActives = GradeService.getGradesNActives();

    console.log("gradesActives ", $scope.gradesActives);

    if ($scope.gradesActives.length > 0)
    {
        //$scope.newGradeToDuplicate = $scope.gradesActives[0].name;
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
        //console.log("selectGrade");
        $scope.gradeSelected = grade;
      
    };

    $scope.findStudentsInThisGrade = function (grade) {
        $scope.gradeSelected = grade;
        $scope.studentsInThisGrade = GradeService.getStudentsInThisGrade(grade);
    }

    $scope.deleteGrade = function (grade) {
        GradeService.deleteGrade(grade);
    };

    $scope.addStudent = function (student) {
        if ($scope.gradeSelected != null && $scope.gradeSelected !== "undefined") {
            GradeService.addStudent($scope.gradeSelected, student);
            student.grade = true;
            StudentService.changeGradeStudent(student);
        }
    };

    $scope.duplicateGrade = function(grade) {
       
        if ($scope.newGradeIdToDuplicate != null && $scope.newGradeIdToDuplicate != "undefined") {
            if ($scope.nameNewGrade != null && $scope.nameNewGrade != "undefined") {
                var nameNewGrade = $scope.nameNewGrade;
                var gradeID = $scope.newGradeIdToDuplicate;
                GradeService.duplicateGrade(gradeID, nameNewGrade);
                $scope.nameNewGrade = "";
            }
            else {
                
            }
        }
        else {
            
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
        if ($scope.gradeSelected !== null || $scope.gradeSelected === 'undefined') {
            GradeService.deleteStudent($scope.gradeSelected, student);
            student.grade = false;
            StudentService.changeGradeStudent(student);
        }
    }

    $scope.inactiveStudentPassage = function (student) {
        GradeService.inactiveStudentPassage(student);
    }


    $scope.$watch('studentsInThisGrade.length', function (newVal, oldVal) {
        $scope.studentsNotBelongToGrade = StudentService.getStudentsNotBelongToGrade();
    });


    
});

