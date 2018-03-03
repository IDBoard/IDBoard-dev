idboard.service('EventsService', function () {
    var eventsList = [
        {
            id: '48',
            msg: "Convocation à l'entretien d'admission",
            date: new Date("10, 12, 2016"),
            student: '55'
        },
        {
            id: '1',
            msg: "Admissible M1 ESD Sophia Antipolis",
            date: new Date("10,13, 2016"),
			student: '55'
        },
        {
            id: '44',
            msg: "Examen Admission Oral",
            date: new Date("10,13, 2016"),
            student: '55'
        },
        {
            id: '47',
            msg: "Avis Favorable de la Commission d'Admission",
            date: new Date("05, 31, 2016"),
            student: '55'
        },
        {
            id: '87',
            msg: "Absence",
            date: new Date("10, 26, 2017"),
            student: '55'
        },
        {
            id: '2',
            msg: "Reception du dossier demande d'admission",
            date: new Date("10, 13, 2016"),
            student: '96'
        },
        {
            id: '3',
            msg: "Demande d'Admission M1 ESD",
            date: new Date("10, 13, 2016"),
            student: '85'
        },
        {
            id: '4',
            msg: "Examen Admission Oral",
            date: new Date("11, 22, 2017"),
            student: '74'
        },


    ];

    this.getEvents = function () {
        return eventsList;
    }

    this.getEventsByStudent = function (id)
    {
        var events = [];
        for (var i = 0; i < eventsList.length; i++)
        {
            if (eventsList[i].student == id)
            {
                events.push(eventsList[i]);
            }
        }
        console.log("events");
        console.log(events);
        return events;
    }
});