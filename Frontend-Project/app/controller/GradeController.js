(function (app) {
    var GradeController = function ($scope) {
      
        var gradeList = [
            {
                id: '1',
                name: 'Jane',
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
                students: [
                    {
                        name: "Pepe11",
                        activated: false
                    }
                ]
            },
            {
                id: '4',
                name: 'Bill',
                students: [
                    {
                        name: "Pepe77",
                        activated: false
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
        };

        $scope.deleteGrade = function (grade) {
            console.log("deleteGrade");
            console.log(grade.id);
            var index = $scope.grades.indexOf(grade);
            $scope.grades.splice(index, 1);  
        };


    };
    app.controller("GradeController", GradeController);
}(angular.module("App")));