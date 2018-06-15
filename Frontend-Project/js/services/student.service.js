/**
 * Created by Visual Studio.
 * User: Antuanett Barrios
 */

idboard.service('StudentService', function () {

    var students = [
        {
            id: '1',
            name: 'Peter',
            lastName: 'LL',
            active: false,
            grade: false
        },
        {
            id: '55',
            name: 'Lian',
            lastName: 'LL',
            active: false,
            grade: true
        },
        {
            id: '77',
            name: 'Robin',
            lastName: 'LL',
            active: false,
            grade: true
        },
        {
            id: '47',
            name: 'George',
            lastName: 'LL',
            active: false,
            grade: true
        },
        {
            id: '74',
            name: 'Laure',
            lastName: 'LL',
            active: false,
            grade: false
        },
        {
            id: '11',
            name: 'Laurence',
            lastName: 'LL',
            active: false,
            grade: true
        },
        {
            id: '85',
            name: 'Anne',
            lastName: 'LL',
            active: false,
            grade: true
        },
        {
            id: '96',
            name: 'Lola',
            lastName: 'LL',
            active: false,
            grade: false
        },
        {
            id: '28455',
            name: 'Nicolas',
            lastName: 'T',
            active: false,
            grade: false
        },
        {
            id: '3648',
            name: 'Mario',
            lastName: 'Espe',
            active: false,
            grade: false
        },
        {
            id: '5423',
            name: 'Juin',
            lastName: 'P',
            active: false,
            grade: false
        },
        {
            id: '126',
            name: 'Forme',
            lastName: 'LL',
            active: false,
            grade: false
        }
    ];

    this.getStudents = function () {
        return students;
    }

    this.getStudentById = function (id) {
        var student;
        for (var i = 0; i < students.length; i++)
        {
            if (students[i].id == id.id) {
                student = students[i];
                 break;
            }
        }
        return student;
    }

    this.getStudentsNotBelongToGrade = function () {
        var studentsNotBelongToGradeList = [];
        for (var i = 0; i < students.length; i++) {
            if (!students[i].grade) {
                studentsNotBelongToGradeList.push(students[i]);
            }
        }
        return studentsNotBelongToGradeList;
    }

    this.changeGradeStudent = function (student) {
        students.forEach(function (_student) {
            if (_student.id === student.id) {
                _student.grade = student.grade;
            }
        })
    }

    this.getStudentByName = function (name) {
        var student;
        if (name != null && name != 'undefined') {
            students.forEach(function (_student) {
                if (_student.name === name) {
                    student = _student;
                }
            })
        }
        return student;
    }

    this.getStudentByNameInList = function (name, studentsL) {
        var student;
        if (name != null && name != 'undefined') {
            studentsL.forEach(function (_student) {
                if (_student.name === name) {
                    student = _student;
                }
            })
        }
        return student;
    }

    this.getStudentByIdInList = function (id, studentsL) {
        var student;
        if (id !== 'undefined') {
            for (var i = 0; i < studentsL.length; i++) {
                if (studentsL[i].id == id) {
                    student = studentsL[i];
                    break;
                }
            }
        }
        return student;
    }

   
});