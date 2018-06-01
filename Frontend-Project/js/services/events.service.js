/**
 * Created by Visual Studio.
 * User: Antuanett Barrios
 */

idboard.service('EventsService', function () {
    var eventsList = [
        {
            idEvent: '48',
            bBCode: "Convocation à l'entretien d'admission",
            date: new Date("10, 12, 2016"),
            idBusinessEntity: '55',
            viewed: true
        },
        {
            idEvent: '1',
            bBCode: "Admissible M1 ESD Sophia Antipolis",
            date: new Date("10,13, 2016"),
            idBusinessEntity: '55',
            viewed: true
        },
        {
            idEvent: '75',
            bBCode: "Admissible M1 ESD Sophia Antipolis 01",
            date: new Date("1,13, 2017"),
            idBusinessEntity: '55',
            viewed: true
        },
        {
            idEvent: '14',
            bBCode: "Admissible M1 ESD Sophia Antipolis 03",
            date: new Date("03,13, 2017"),
            idBusinessEntity: '55',
            viewed: true
        },
        {
            idEvent: '44',
            bBCode: "Examen Admission Oral",
            date: new Date("10,13, 2016"),
            idBusinessEntity: '55',
            viewed: true
        },
        {
            idEvent: '47',
            bBCode: "Avis Favorable de la Commission d'Admission",
            date: new Date("05, 31, 2016"),
            idBusinessEntity: '55',
            viewed: true
        },
        {
            idEvent: '87',
            bBCode: "Absence",
            date: new Date("10, 26, 2017"),
            idBusinessEntity: '55',
            viewed: true
        },
        {
            idEvent: '2',
            bBCode: "Reception du dossier demande d'admission",
            date: new Date("10, 13, 2016"),
            idBusinessEntity: '96',
            viewed: true
        },
        {
            idEvent: '3',
            bBCode: "Demande d'Admission M1 ESD",
            date: new Date("10, 13, 2016"),
            idBusinessEntity: '85',
            viewed: true
        },
        {
            idEvent: '4',
            bBCode: "Examen Admission Oral",
            date: new Date("11, 22, 2017"),
            idBusinessEntity: '74',
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
            if (eventsList[i].idBusinessEntity == id)
            {
                events.push(eventsList[i]);
            }
        }
        return events;
    }

    this.existedEvent = function (event) {
        var existed = false;
        for (var i = 0; i < eventsList.length; i++) {
            if (eventsList[i].idEvent == event.id) {
                existed = true;
                break;
            }
        }
        return existed;
    }
 
    this.addEvents = function (event) {
        if (!this.existedEvent(event)) {
            console.log('addedEvenet', event.bBCode);
            eventsList.push(event);
        }
    }

    this.getEventsNotViewedByStudent = function (id) {
        var eventsNotViewed = [];
        eventsList.forEach(function (_newEvent) {
            if (!_newEvent.viewed && _newEvent.idBusinessEntity == id) {
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