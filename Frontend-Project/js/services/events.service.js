idboard.service('EventsService', function () {
    var eventsList = [
        {
            id: '48',
            msg: "Convocation à l'entretien d'admission",
            date: new Date("10, 12, 2016"),
            student: '55',
            viewed: true
        },
        {
            id: '1',
            msg: "Admissible M1 ESD Sophia Antipolis",
            date: new Date("10,13, 2016"),
            student: '55',
            viewed: true
        },
        {
            id: '75',
            msg: "Admissible M1 ESD Sophia Antipolis 01",
            date: new Date("1,13, 2017"),
            student: '55',
            viewed: true
        },
        {
            id: '14',
            msg: "Admissible M1 ESD Sophia Antipolis 03",
            date: new Date("03,13, 2017"),
            student: '55',
            viewed: true
        },
        {
            id: '44',
            msg: "Examen Admission Oral",
            date: new Date("10,13, 2016"),
            student: '55',
            viewed: true
        },
        {
            id: '47',
            msg: "Avis Favorable de la Commission d'Admission",
            date: new Date("05, 31, 2016"),
            student: '55',
            viewed: true
        },
        {
            id: '87',
            msg: "Absence",
            date: new Date("10, 26, 2017"),
            student: '55',
            viewed: true
        },
        {
            id: '2',
            msg: "Reception du dossier demande d'admission",
            date: new Date("10, 13, 2016"),
            student: '96',
            viewed: true
        },
        {
            id: '3',
            msg: "Demande d'Admission M1 ESD",
            date: new Date("10, 13, 2016"),
            student: '85',
            viewed: true
        },
        {
            id: '4',
            msg: "Examen Admission Oral",
            date: new Date("11, 22, 2017"),
            student: '74',
            viewed: true
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
        return events;
    }

    this.existedEvent = function (event) {
        var existed = false;
        for (var i = 0; i < eventsList.length; i++) {
            if (eventsList[i].id == event.id) {
                existed = true;
                break;
            }
        }
        return existed;
    }
 
    this.addEvents = function (event) {
        if (!this.existedEvent(event)) {
            console.log('addedEvenet', event.msg);
            eventsList.push(event);
        }
    }

    this.getEventsNotViewedByStudent = function (id) {
        var eventsNotViewed = [];
        eventsList.forEach(function (_newEvent) {
            if (!_newEvent.viewed && _newEvent.student == id) {
                eventsNotViewed.push(_newEvent);
            }
        });
        return eventsNotViewed;
    }

    this.setEventsNotViewedToEventList = function (eventsNotViewed)
    {
        eventsNotViewed.viewed = true;
    }
});