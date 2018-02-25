(function (app) {
    var GradeController = function ($scope) {
      
        var gradeList = [
            {
                id: '1',
                name: 'M2',
                active: true,
                students: [
                    {
                        name: "Jorge",
                        activated: false
                    },
                    {
                        name: "Antuanett",
                        activated: true
                    },
                    {
                        name: "Pepe",
                        activated: true
                    }
                ]
            },
            {
                id: '88',
                name: 'B1',
                active: true,
                checked: false,
                students: [
                    {
                        name: "Pepe1",
                        activated: true
                    }
                ]
            },
            {
                id: '3',
                name: 'B2',
                active: true,
                checked: false,
                students: [
                    {
                        name: "Pepe11",
                        active: false
                    }
                ]
            },
            {
                id: '4',
                name: 'B3',
                active: true,
                checked: false,
                students: [
                    {
                        name: "Pepe77",
                        active: false
                    }
                ]
            }
        ];
        var studentsList = [
            {
                id: '1',
                name: 'Pepito',
                lastName: 'LL'
            },
            {
                id: '55',
                name: 'Juan',
                lastName: 'LL'
            },
            {
                id: '77',
                name: 'Pepito4',
                lastName: 'LL'
            },
            {
                id: '47',
                name: 'Pepito44',
                lastName: 'LL'
            },
            {
                id: '74',
                name: 'PepitoL',
                lastName: 'LL'
            },
            {
                id: '11',
                name: 'Pepito',
                lastName: 'LL'
            },
            {
                id: '85',
                name: 'PepitoMo',
                lastName: 'LL'
            },
            {
                id: '96',
                name: 'Pepito',
                lastName: 'LL'
            }
        ];

        $scope.grades = gradeList;
        $scope.students = studentsList;

        $scope.newGrade = function () {
            console.log("add new grade");
            gradeList.push(
                {
                    id: '77',
                    name: $scope.className,
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
            $scope.studentsInThisGrade = grade.students;
            var index = $scope.grades.indexOf(gradeSelected);
        };

        $scope.deleteGrade = function (grade) {
            console.log("deleteGrade");
            console.log(grade.id);
            var index = $scope.grades.indexOf(grade);
            $scope.grades.splice(index, 1);  
        };

        $scope.saveGrade = function (grade) {
            console.log("saveGrade");
            var index = $scope.grades.indexOf(grade);
            var gradeToSave = $scope.grades[index];

            console.log("attr ative before set");
            console.log(gradeToSave.active);
            gradeToSave.active = false; //update attr active
            console.log("attr ative after set");
            console.log(gradeToSave.active);
        };

        $scope.selectStudent = function (studient) {
            console.log(studient.id);
            var studientSelected = studient;
            if (gradeSelected)
            {
                console.log("grade selected");
                console.log(gradeSelected);
                var index = $scope.grades.indexOf(gradeSelected);
                $scope.grades[index].students.push(studient);
            }
        };
        

    };
    app.controller("GradeController", GradeController);
}(angular.module("App")));