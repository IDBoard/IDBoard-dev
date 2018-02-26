idboard.service('GradeService', function () {

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
                    activated: true
                }
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
    var studentsNotBelongToGradeList = [
        {
            id: '1',
            name: 'Pepito',
            lastName: 'LL'
        },
        {
            id: '55',
            name: 'Juan',
            lastName: 'LL',
            active: false
        },
        {
            id: '77',
            name: 'Pepito4',
            lastName: 'LL',
            active: false
        },
        {
            id: '47',
            name: 'Pepito44',
            lastName: 'LL',
            active: false
        },
        {
            id: '74',
            name: 'PepitoL',
            lastName: 'LL',
            active: false
        },
        {
            id: '11',
            name: 'Pepito',
            lastName: 'LL',
            active: false
        },
        {
            id: '85',
            name: 'PepitoMo',
            lastName: 'LL',
            active: false
        },
        {
            id: '96',
            name: 'Pepito',
            lastName: 'LL',
            active: false
        }
    ];

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

});