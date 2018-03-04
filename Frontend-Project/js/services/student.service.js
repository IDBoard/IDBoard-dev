idboard.service('StudentService', function () {

    var students = [
        {
            id: '1',
            name: 'Pepito1',
            lastName: 'LL'
        },
        {
            id: '55',
            name: 'Juan',
            lastName: 'LL',
            active: false,
            grade: false
        },
        {
            id: '77',
            name: 'Pepito4',
            lastName: 'LL',
            active: false,
            grade: false
        },
        {
            id: '47',
            name: 'Pepito44',
            lastName: 'LL',
            active: false,
            grade: false
        },
        {
            id: '74',
            name: 'PepitoL',
            lastName: 'LL',
            active: false,
            grade: false
        },
        {
            id: '11',
            name: 'Pepito11',
            lastName: 'LL',
            active: false,
            grade: false
        },
        {
            id: '85',
            name: 'PepitoMo',
            lastName: 'LL',
            active: false,
            grade: false
        },
        {
            id: '96',
            name: 'Pepito96',
            lastName: 'LL',
            active: false,
            grade: false
        },
        {
            id: '126',
            name: 'Lillie',
            lastName: 'LL',
            active: true,
            grade: false
        }
    ];

    this.getStudents = function () {
        return students;
    }

    this.getStudentById = function (id) {
        console.log("getStudentById method");
        console.log(id);

        var student;

        for (var i = 0; i < students.length; i++)
        {
            if (students[i].id == id)
            {
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
                console.log('changed grade to student:', _student.id);
            }
        })
    }

});