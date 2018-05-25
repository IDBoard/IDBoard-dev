/**
 * Created by Visual Studio.
 * User: Antuanett Barrios
 */
idboard.service('ClassService', function () {
    console.log("ClassService ");
    var gradeList = [
        {
            id: '1',
            name: 'M2',
            active: true,
            students: [
                {
                    id: '55'
                },
                {
                    id: '77'
                },
                {
                    id: '47'
                }
            ],
            contents: [],
            modules: [
                {
                    id: '153'
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
                    id: '96'
                },
                {
                    id: '85'
                },
                {
                    id: '11'
                }

            ],
            contents: [
                {
                    id: '1',
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
            id: '255',
            name: 'M1',
            active: true,
            checked: false,
            students: [],
            contents: [],
            modules: []
        },
        {
            id: '3',
            name: 'B2',
            active: true,
            checked: false,
            students: [
                {
                    id: '55'
                }
            ],
            contents: [
                {
                    id: '2',
                    name: "contents2"
                }
            ],
            modules: [
                {
                    id: '455'
                },
                {
                    id: '5'
                }
            ]
        },
        {
            id: '4',
            name: 'B3',
            active: false,
            checked: false,
            students: [
                {
                    id: '126'
                }
            ],
            contents: [
                {
                    id: '3',
                    name: "contents3"
                },
                {
                    id: '4',
                    name: "contents4"
                }
            ],
            modules: [
                {
                    id: '265416'
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

    var gradesActives = [];
    var gradesNActives = [];

    this.getStudentsInThisGrade = function (grade) {
        if (grade)
            return grade.students;
    }

    this.gradesActives = function () {
        return gradesActives;
    }

    this.gradesNActives = function () {
        return gradesNActives;
    }

    this.getGradesActives = function () {
        gradeList.forEach(function (_grade) {
            if (_grade.active) {
                if (gradesActives.length == 0) {
                    gradesActives.push(_grade);
                }
                else {
                    var i = gradesActives.indexOf(_grade);
                    if (i == -1) {
                        gradesActives.push(_grade);
                    }
                }
            }
        });
        return gradesActives;
    }

    this.getGradesNActives = function () {

        gradeList.forEach(function (_grade) {
            if (!_grade.active) {
                if (gradesNActives.length == 0) {
                    gradesNActives.push(_grade);
                }
                else {
                    var i = gradesNActives.indexOf(_grade);
                    if (i == -1) {
                        gradesNActives.push(_grade);
                    }
                }
            }
        });
        return gradesNActives;
    }

    this.duplicateGrade = function (gradeID, nameNewGrade) {
    
        var grade = null;
        gradeList.forEach(function (_grade) {
            if (_grade.id == gradeID) {
                grade = _grade;
            }
        });
        var newGrade = {
            id: Date.now(),
            name: nameNewGrade,
            active: true,
            students: grade.students,
            contents: grade.contents
        };
        gradeList.push(newGrade);

        //add new grade as active
        gradesActives.push(newGrade);
        if (grade != null) {
            this.archiveGrade(grade);
        }
        //delete in list active grades
        var i = gradesActives.indexOf(grade);
        if (i !== -1) {
            gradesActives.splice(i, 1);
        }
        //add in list not active grades
        gradesNActives.push(grade);
        
    }

    this.archiveGrade = function (grade) {
        if (grade.active === true) {
            grade.active = false;
            grade.students.forEach(function (_student) {
                _student.active = false;
            });
        }
    }

    this.deleteGrade = function (grade) {
        var i = gradesActives.indexOf(grade);
        if (i !== -1) {
            gradesActives.splice(i, 1);
        }
        else {
            var _i = gradesNActives.indexOf(grade);
            if (_i !== -1) {
                gradesNActives.splice(_i, 1);
            }
        }
        var index = gradeList.indexOf(grade);
        gradeList.splice(index, 1);
    }

    this.addStudent = function (grade, student) {
        console.log("addStudent ", student);
        console.log("grade after adding student ", grade);
        if (!this.studentExisted(grade, student)) {
            var s = { id: student.id };
            grade.students.push(s);
        }
    }

    this.studentExisted = function (grade, student)
    {
        var existed = false;
        if (grade != null && grade != "undefined") {
            var studentList = grade.students;
            for (var i = 0; i < studentList.length; i++) {
                if (studentList[i].id == student.id) {
                    existed = true;
                    break;
                }
            }
            return existed;
        }
        else {
            return true;
        }
        
    }

    this.deleteStudent = function (grade, student)
    {
        console.log("grade service delete student in grade", grade);
        for (var i = 0; i < grade.students.length; i++) {
            if (grade.students[i].id == student.id) {
                console.log("grade service student delected");
                grade.students.splice(i, 1);
                break;
            }
        }
        return grade.students;
        console.log("grade service after deleting student in grade", grade);
    }

    this.inactiveStudentPassage = function (student) {
        student.active = false;
    }

    this.addModule = function (grade, module) {
        console.log("GradeService add Module ", module);
        var _module = {
            id : module.id
        };
        grade.modules.push(_module);
    }


    this.getModules = function (idGrade) {
        var modules = [];

        gradeList.forEach(function (_grade) {
            if (_grade.id == idGrade) {
                modules = _grade.modules;
                console.log("modules of grade ", idGrade, modules);
            }
        });
        return modules;
    }

    this.findGradeById = function (idGrade) {
        var grade;
        var keepGoing = true;
        if (idGrade != null) {
            gradeList.forEach(function (_grade) {
                if (keepGoing) {
                    if (_grade.id == idGrade) {
                        grade = _grade;
                        keepGoing = false;
                    }
                }

            });
        }
        return grade;
    }
});
