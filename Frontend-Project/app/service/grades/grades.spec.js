describe('Grades Factory', function () {
    var Grades;
    // The array of grades our factory will provide us
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

    //The single grade we expect to receive when calling findById('2')
    var singleGrade = {
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
    };

    // Before each test load our api.users module
    beforeEach(angular.mock.module('api.grades'));

    // Before each test set our injected Grades factory (_Grades_) to our local Grades variable
    beforeEach(inject(function(_Grades_) {
        Grades = _Grades_;
    }));

    // A simple test to verify the Grades factory exists
    it('should exist', function() {
        expect(Grades).toBeDefined();
    });

    // A set of tests for our Users.all() method
    describe('.all()', function() {
        // A simple test to verify the method all exists
        it('should exist', function() {
            expect(Grades.all).toBeDefined();
        });

        // A test to verify that calling all() returns the array of grades we hard-coded above
        it('should return a hard-coded list of grades', function() {
            expect(Grades.all()).toEqual(gradeList);
        });
    });

    describe('.findById(id)', function() {
        // A simple test to verify the method findById exists
        it('should exist', function() {
            expect(Grades.findById).toBeDefined();
        });

        // A test to verify that calling findById() with an id, in this case '2', returns a single grade
        it('should return one grade object if it exists', function() {
            expect(Grades.findById('2')).toEqual(singleGrade);
        });

        // A test to verify that calling findById() with an id that doesn't exist, in this case 'ABC', returns undefined
        it('should return undefined if the grade cannot be found', function() {
            expect(Grades.findById('ABC')).not.toBeDefined();
        });
    });

    describe('.create(grade)', function() {
        // A simple test to verify the method create exists
        it('should exist', function() {
            expect(Grades.create).toBeDefined();
        });
    });

    describe('.delete(grade)', function() {
        // A simple test to verify the method delete exists
        it('should exist', function() {
            expect(Grades.delete).toBeDefined();
        });
    });

    describe('.update(grade)', function() {
        // A simple test to verify the method update exists
        it('should exist', function() {
            expect(Grades.update).toBeDefined();
        });
    });

    describe('.studentsActivated', function () {
        it('should exist', function () {
            expect(Grades.findStudentByActivation).toBeDefined()
        });

        it('should return more than one students activated on grade 1', function () {
            var results = Grades.findStudentByActivation('1', true);
            expect(results.length).toBeGreaterThan(1);
        });

        it('should return zero students activated on grade 3', function () {
            var results = Grades.findStudentByActivation('3', true);
            expect(results.length).toEqual(0);
        });

        it('should return more than 0 students not activated on grade 3', function () {
            var results = Grades.findStudentByActivation('3', false);
            expect(results.length).toBeGreaterThan(0);
        });
    })
});