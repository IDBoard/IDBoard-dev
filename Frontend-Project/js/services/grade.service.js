idboard.service('GradeService', function (StudentService) {

    var gradeList = [
        {
            id: '1',
            name: 'M2',
            active: true,
            students: [
                {
                    name: "Jorge",
                    active: false
                },
                {
                    name: "Antuanett",
                    active: true
                },
                {
                    name: "Pepe",
                    active: true
                }
            ],
            contents: []
        },
        {
            id: '88',
            name: 'B1',
            active: true,
            checked: false,
            students: [
                {
                    name: "Pepe1",
                    active: true
                },
                {
                    name: "Pepe33",
                    active: true
                },
                {
                    name: "Pepe44",
                    active: true
                },

            ],
            contents: [
                {
                    id: "1",
                    name: "contents1"
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
            ],
            contents: [
                {
                    id: "2",
                    name: "contents2"
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
            ],
            contents: [
                {
                    id: "3",
                    name: "contents3"
                },
                {
                    id: "4",
                    name: "contents4"
                },

            ]
        }
    ];

    // Student do not belong to a grade
    var studentsNotBelongToGradeList = StudentService.getStudents();

    this.getGrades = function () {
        return gradeList;
    }

    this.getStudentsNotBelongToGrade = function () {
        return studentsNotBelongToGradeList;
    }

    this.getStudentsInThisGrade = function(grade){
        return grade.students;
    }

    this.duplicateGrade = function (grade, nameNewGrade) {
        console.log(grade.name);
        var newGrade = {
            id: '44',
            name: nameNewGrade,
            active: true,
            students: [],
            contents: grade.contents
        };
        gradeList.push(newGrade);
    }

    this.archiverGrade = function (grade) {
        if (grade.active === true) {
            grade.active = false;
        }
        console.log(grade);
    }

    this.deleteGrade = function (grade) {
        var index = gradeList.indexOf(grade);
        gradeList.splice(index, 1)
    }

    this.addStudent = function (grade, student) {
        grade.students.push(student);
    }

    this.deleteStudent = function (grade, student)
    {
        var index = grade.students.indexOf(student);
        console.log("position student to delete");
        console.log(index);
        console.log(student.name);
        grade.students.splice(index, 1)
    }

    this.inactiveStudentPassage = function (student) {
        //var index = grade.students.indexOf(student);
        console.log("before set active student");
        console.log(student.active);
        console.log(student.name);
        //grade.students[index].active = false;
        student.active = false;
        console.log("after set active student");
        console.log(student.active);
    }

});