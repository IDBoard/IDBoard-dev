/**
 * Created by Visual Studio.
 * User: Antuanett Barrios
 */

idboard.controller('ClassController', function ($scope, $filter, ClassService, StudentService) {
  

    $scope.gradeService = ClassService;
    var students = StudentService.getStudents();

    $scope.grades = ClassService.getGrades();
    $scope.studentsNotBelongToGrade = StudentService.getStudentsNotBelongToGrade();
    $scope.newGradeIdToDuplicate;
    
    $scope.gradeSelected;
    $scope.gradesActives = ClassService.getGradesActives();
    $scope.gradesNActives = ClassService.getGradesNActives();
    
    /**
     * Create a new Class(Grade) and update array of grades and grades actives
     */
    $scope.newGrade = function () {
        var grade = {
            idClass: Date.now,
            name: $scope.gradeNameToAdd,
            activated: true,
            students: []
        }
        ClassService.getGrades().push(grade);
        ClassService.gradesActives().push(grade);
        $scope.gradeNameToAdd = "";
        $scope.newGradeIdToDuplicate;
    }

    /**
     * Set gradeSelected
     * @param {any} grade
     */
    $scope.selectGrade = function (grade) {
        $scope.gradeSelected = grade;
    };


    /**
     * Find Students in the grade
     * @param {any} grade
     */
    $scope.findStudentsInThisGrade = function (grade) {
        $scope.gradeSelected = grade;
        $scope.updateListStudentsInCurrentGrade(grade);
    }


    /**
     * Update List Students In Current Class (Grade)
     * @param {any} grade
     */
    $scope.updateListStudentsInCurrentGrade = function (grade) {
        var idStudentsInThisGrade = ClassService.getStudentsInThisGrade(grade);
        var students = [];
        if (idStudentsInThisGrade != null) {
            idStudentsInThisGrade.forEach(function (_idstudent) {
                var s = StudentService.getStudentById(_idstudent);
                if (s != null) {
                    students.push(s);
                }
            });
        }
        $scope.studentsInThisGrade = students;
    }

    /**
     * Delete grade
     * @param {any} grade
     */  
    $scope.deleteGrade = function (grade) {
        ClassService.deleteGrade(grade);
    };


    /**
     * Add student to grade selected
     * @param {any} student
     */
    $scope.addStudent = function (student) {
        if ($scope.gradeSelected != null && $scope.gradeSelected !== "undefined") {
            ClassService.addStudent($scope.gradeSelected, student);
            student.grade = true;
            StudentService.changeGradeStudent(student);
            $scope.findStudentsInThisGrade($scope.gradeSelected);
        }
    };


    /**
     * Duplicate grade
     * @param {any} grade
     */
    $scope.duplicateGrade = function (grade) {
        if ($scope.newGradeIdToDuplicate != null && $scope.newGradeIdToDuplicate != "undefined") {
            if ($scope.nameNewGrade != null && $scope.nameNewGrade != "undefined") {
                var nameNewGrade = $scope.nameNewGrade;
                var gradeID = $scope.newGradeIdToDuplicate;
                ClassService.duplicateGrade(gradeID, nameNewGrade);
                $scope.nameNewGrade = "";
            }
        }
    };

    /**
     * Archive Grade and update array of grade not actives
     * @param {any} grade
     */
    $scope.archiveGrade = function (grade) {
        ClassService.archiveGrade(grade);

        //remove grade in list gradeActives
        var index = $scope.gradesActives.indexOf(grade);
        $scope.gradesActives.splice(index, 1);

        //add grade in list gradeNActives
        $scope.gradesNActives.push(grade);
    }


    /**
     * Delete student
     * @param {any} student
     */
    $scope.deleteStudent = function (student) {
        if ($scope.gradeSelected !== null || $scope.gradeSelected === 'undefined') {
            $scope.gradeSelected.students = ClassService.deleteStudent($scope.gradeSelected, student);
            student.grade = false;
            StudentService.changeGradeStudent(student);
        }
    }


    /**
     * Inactive Student Passage
     * @param {any} student
     */
    $scope.inactiveStudentPassage = function (student) {
        ClassService.inactiveStudentPassage(student);
    }

    /**
     * 
     *Watch length of array  studentsInThisGrade
     */
    $scope.$watch('studentsInThisGrade.length', function (newVal, oldVal) {
        $scope.studentsNotBelongToGrade = StudentService.getStudentsNotBelongToGrade();
    });

    $scope.$watch('gradeSelected.students.length', function (newVal, oldVal) {
        if (newVal < oldVal) { // only when delete student
            $scope.studentsNotBelongToGrade = StudentService.getStudentsNotBelongToGrade();
            $scope.updateListStudentsInCurrentGrade($scope.gradeSelected);
        }
    });


    
});

