(function (app) { 
    var gradeService = function ($http) {
        var Grades = {};
        var gradeList = [
            {
                id: '1',
                name: 'Jane',
                role: 'Designer',
                location: 'New York',
                twitter: 'gijane',
                students: [
                    {
                        activated: false
                    },
                    {
                        activated: true
                    },
                    {
                        activated: true
                    }
                ]
            },
            {
                id: '2',
                name: 'Bob',
                role: 'Developer',
                location: 'New York',
                twitter: 'billybob',
                students: [
                    {
                        activated: true
                    }
                ]
            },
            {
                id: '3',
                name: 'Jim',
                role: 'Developer',
                location: 'Chicago',
                twitter: 'jimbo',
                students: [
                    {
                        activated: false
                    }
                ]
            },
            {
                id: '4',
                name: 'Bill',
                role: 'Designer',
                location: 'LA',
                twitter: 'dabill',
                students: [
                    {
                        activated: false
                    }
                ]
            }
        ];

        // Defining all to make our test pass. It doesn't need to do anything yet.
        Grades.all = function () {
            return gradeList;
        };

        Grades.findById = function (id) {
            return gradeList.find(function (grade) {
                return grade.id === id;
            });
        };

        Grades.create = function (grade) {

        };

        Grades.update = function (grade) {

        };

        Grades.delete = function (id) {

        };
        // Show Students activated or not
        Grades.findStudentByActivation = function (gradeId, isActivated) {
            var grade = Grades.findById(gradeId);
            var students = grade.students;

            return students.filter(function (student) {
                return student.activated === isActivated;
            });
        };
    };
    app.factory("gradeService", gradeService);
}(angular.module("App")));

