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
            grade: true
        },
        {
            id: '126',
            name: 'Lillie',
            lastName: 'LL',
            active: true,
            grade: true
        }
    ];

    this.getStudents = function () {
        return students;
    }

    this.getStudentById = function (id) {
        console.log("getStudentById method");
        console.log("getStudentById method students", students);
        console.log(id);
        var student;

        for (var i = 0; i < students.length; i++)
        {
            if (students[i].id == id.id) {
                console.log("students in list has same student id", id.id);
                student = students[i];
                break;
            }
            else {
                console.log("students in list has not the same student id", id.id);
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
                console.log('changed grade to student:', _student.id);
            }
        })
    }

   
});