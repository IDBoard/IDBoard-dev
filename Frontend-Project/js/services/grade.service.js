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

    this.getGrades = function () {
        return gradeList;
    }

    this.getStudentsNotBelongToGrade = function () {
        return studentsNotBelongToGradeList;
    }

    this.getStudentsInThisGrade = function(grade){
        return grade.students;
    }

});