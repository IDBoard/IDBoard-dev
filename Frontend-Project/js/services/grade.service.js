idboard.service('GradeService', function () {

    var gradeList = [
        {
            id: '1',
            name: 'M2',
            active: true,
            students: [
                {
                    name: "Jorge",
                    active: true
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
            contents: [],
            modules: [
                {
                    id: 3
                },
                {
                    id: '5'
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
                    active: true,
                    grade: true
                },
                {
                    name: "Pepe33",
                    active: true,
                    grade: true
                },
                {
                    name: "Pepe44",
                    active: true,
                    grade: true
                },

            ],
            contents: [
                {
                    id: "1",
                    name: "contents1"
                }
            ],
            modules: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
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
                    active: true,
                    grade: true
                }
            ],
            contents: [
                {
                    id: "2",
                    name: "contents2"
                }
            ],
            modules: [
                {
                    id: '4'
                },
                {
                    id: '5'
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
                    active: true,
                    grade: true
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
                }
            ],
            modules: [
                {
                    id: '1'
                },
                {
                    id: '5'
                }
            ]
        }
    ];
    
    this.getGrades = function () {
        return gradeList;
    }

    this.getStudentsInThisGrade = function (grade) {
        if (grade)
            return grade.students;
    }

    this.duplicateGrade = function (grade, nameNewGrade) {
        console.log('grade to duplique', grade.name);
        console.log('content of grade to duplique', grade.contents);
        var newGrade = {
            id: '44',
            name: nameNewGrade,
            active: true,
            students: [],
            contents: grade.contents
        };
        gradeList.push(newGrade);
        console.log("new grade dupliqued", nameNewGrade);
        console.log("content new grade dupliqued", newGrade.contents);
    }

    this.archiveGrade = function (grade) {
        console.log('grade is active before archive',grade.active);
        if (grade.active === true) {
            grade.active = false;
        }
        console.log('grade is active after archive method', grade.active);
    }

    this.deleteGrade = function (grade) {
        var index = gradeList.indexOf(grade);
        gradeList.splice(index, 1);
    }

    this.addStudent = function (grade, student) {
        console.log('student added id', student.id);
        if (!this.studentExisted(grade, student)) {
            console.log('this student not existed', student.id );
            grade.students.push(student);
        }
    }

    this.studentExisted = function (grade, student)
    { 
        var existed = false;
        var studentList = grade.students;
        for (var i = 0; i < studentList.length; i++)
        {
            if (studentList[i].id == student.id)
            {
                existed = true;
                break;
            }
        }

        return existed;
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
        console.log("before set active student");
        console.log(student.active);
        console.log(student.name);
        student.active = false;
        console.log("after set active student");
        console.log(student.active);
    }

    this.addModule = function (grade, module) {
        console.log("addModuleToGrade", grade, module);
        var _module = {
            id : module.id
        };
        grade.modules.push(_module);
        console.log("modulesInthisgrade", grade.modules);
    }
});