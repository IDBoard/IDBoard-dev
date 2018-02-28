idboard.controller('GradeController', function ($scope, GradeService) {

    $scope.grades   = GradeService.getGrades();
    $scope.students = GradeService.getStudentsNotBelongToGrade();

    $scope.newGrade = function () {
        console.log("add new grade");
        GradeService.getGrades().push(
            {
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
        );
    }

    var gradeSelected;

    $scope.selectGrade = function (grade) {
        console.log(grade.id);
        gradeSelected = grade;
        //$scope.studentsInThisGrade = grade.students;
        $scope.studentsInThisGrade = GradeService.getStudentsInThisGrade(grade);
        var index = $scope.grades.indexOf(gradeSelected);
    };

    $scope.deleteGrade = function (grade) {
        console.log("deleteGrade");
        console.log(grade.id);
        GradeService.deleteGrade(grade);
        /*var index = $scope.grades.indexOf(grade);
        $scope.grades.splice(index, 1);*/
    };

   /* $scope.saveGrade = function (grade) {
        console.log("saveGrade");
        var index = $scope.grades.indexOf(grade);
        var gradeToSave = $scope.grades[index];

        console.log("attr ative before set");
        console.log(gradeToSave.active);
        gradeToSave.active = false; //update attr active
        console.log("attr ative after set");
        console.log(gradeToSave.active);
    };*/

    $scope.addStudent = function (student) {
        console.log(student.id);
        if (gradeSelected) {
            console.log("grade selected");
            console.log(gradeSelected);
            GradeService.addStudent(gradeSelected, student);
        }
    };

    $scope.duplicateGrade = function(grade) {
        console.log("duplicateGrade method");
        grade = gradeSelected;
        var nameNewGrade = $scope.nameNewGrade;
        GradeService.duplicateGrade(grade, nameNewGrade);
    };

    $scope.archiverGrade = function (grade) {
        console.log("archiverGrade method");
        GradeService.archiverGrade(grade);
    }

    $scope.deleteStudent = function (student) {
        console.log("deleteStudent method");
        GradeService.deleteStudent(gradeSelected, student);
    }

    $scope.inactiveStudentPassage = function (student) {
        console.log("inactiveStudentPassage method");
        GradeService.inactiveStudentPassage(student);
    }


    
});


