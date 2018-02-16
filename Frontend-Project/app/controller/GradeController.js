(function (app) {
    var GradeController = function ($scope) {
      
        var gradeList = [
            {
                id: '1',
                name: 'Jane',
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
                name: 'Bob',
                active: true,
                students: [
                    {
                        name: "Pepe1",
                        activated: true
                    }
                ]
            },
            {
                id: '3',
                name: 'Jim',
                active: true,
                students: [
                    {
                        name: "Pepe11",
                        active: false
                    }
                ]
            },
            {
                id: '4',
                name: 'Bill',
                active: true,
                students: [
                    {
                        name: "Pepe77",
                        active: false
                    }
                ]
            }
        ];

         
        $scope.grades = gradeList;
        
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
                            activated: true
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


    };
    app.controller("GradeController", GradeController);
}(angular.module("App")));