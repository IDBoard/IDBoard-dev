idboard.service('StudentService', function () {

    var students = [
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

    this.getStudents = function () {
        return students;
    }

});