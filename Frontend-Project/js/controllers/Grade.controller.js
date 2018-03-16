﻿idboard.controller('GradeController', function ($scope, GradeService, StudentService) {

    $scope.gradeService = GradeService;
    var students    = StudentService.getStudents();
    $scope.grades   = GradeService.getGrades();
    $scope.studentsNotBelongToGrade = StudentService.getStudentsNotBelongToGrade();
   
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
        console.log("selectGrade");
        gradeSelected = grade;
        $scope.studentsInThisGrade = GradeService.getStudentsInThisGrade(grade);
        var index = $scope.grades.indexOf(gradeSelected);
    };

    $scope.deleteGrade = function (grade) {
        console.log("deleteGrade");
        console.log(grade.id);
        GradeService.deleteGrade(grade);
    };

    $scope.addStudent = function (student) {
        if (gradeSelected) {
            console.log("grade selected");
            console.log(gradeSelected);
            GradeService.addStudent(gradeSelected, student);
            student.grade = true;
            StudentService.changeGradeStudent(student);
        }
    };

    $scope.duplicateGrade = function(grade) {
        console.log("duplicateGrade method");
        grade = gradeSelected;
        var nameNewGrade = $scope.nameNewGrade;
        GradeService.duplicateGrade(grade, nameNewGrade);
    };

    $scope.archiveGrade = function (grade) {
        console.log("archiverGrade method");
        GradeService.archiveGrade(grade);
    }

    $scope.deleteStudent = function (student) {
        console.log("deleteStudent method");
        GradeService.deleteStudent(gradeSelected, student);
        student.grade = false;
        StudentService.changeGradeStudent(student);
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
