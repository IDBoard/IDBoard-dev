idboard.controller('EventsController', function ($scope, $timeout, $filter, EventsService, StudentService) {

    $scope.countNotificationEvents = 0;
    $scope.currentStudentId = 55;

    var currentStudentId = $scope.currentStudentId;
    var countEventsOfStudent = 0;

    $scope.eventService = EventsService;
    $scope.eventsNotViewed = EventsService.getEventsNotViewedByStudent(currentStudentId);
    console.log('eventsNotViewed', $scope.eventsNotViewed);


    $scope.showEventsOrder = function () {
        $scope.propertyName = 'date';
        $scope.reverse = true;
        console.log("events not ordered", $scope.events);
        $scope.events = $filter('orderBy')($scope.events, $scope.propertyName, $scope.reverse);
        console.log("events ordered", $scope.events);
        countEventsOfStudent = $scope.events.length;
     
        if (countEventsOfStudent > 3) {
            $scope.events.splice(3);
        }
        else {
            $scope.events.splice(countEventsOfStudent)
        }
    }

    if (currentStudentId !== 'undefined' && currentStudentId !== null )
    {
        var currentStudent = StudentService.getStudentById(currentStudentId);
        
        $scope.currentStudent = currentStudent;
        $scope.events = EventsService.getEventsByStudent(currentStudentId);
        $scope.showEventsOrder();
    }
    

    $scope.addEvent = function (event) {
        console.log('addEvent');
        var eventToAdd = {
            id: '96',
            msg: "Event Test",
            date: new Date("03, 04, 2018"),
            student: '55',
            viewed: false
        }
        EventsService.addEvents(eventToAdd);
    }

    $scope.$watch('eventService.getEvents().length', function (newcount) {
        console.log("$watch method", newcount);
        $scope.checkEventsForNotify(newcount);
    });

    $scope.checkEventsForNotify = function (newcount) {

        if (currentStudent !== null && countEventsOfStudent != 0) {

            var countEventsAfterUpdate = EventsService.getEventsByStudent(currentStudentId).length;

            console.log('eventsbyStudent', EventsService.getEventsByStudent(currentStudentId));

            if (countEventsAfterUpdate > 0 && countEventsOfStudent > 0) {

                console.log("countEventsAfterUpdate ", countEventsAfterUpdate);
                console.log("countEventsOfStudentBeforeUpdate ", countEventsOfStudent);

                var countNotificationEvents = countEventsAfterUpdate - countEventsOfStudent;
                $scope.eventsNotViewed = EventsService.getEventsNotViewedByStudent(currentStudentId);

                console.log('eventsNotViewed by student', $scope.eventsNotViewed);
                console.log("countNotificationEvents ", countNotificationEvents);

                if (countNotificationEvents < 0) {
                    $scope.countNotificationEvents = 0;
                }
                else {
                    $scope.countNotificationEvents = countNotificationEvents;
                }
                
            }
        }
    }


    $scope.eventsViewed = function ()
    {
        console.log("eventsViewed");
        if ($scope.countNotificationEvents > 0)
        {
            $timeout(function () {

                console.log('eventsNotViewed', $scope.eventsNotViewed);
                $scope.eventsNotViewed.forEach(function (_newEvent) {
                    EventsService.setEventsNotViewedToEventList(_newEvent);
                });
               
                ///Init values for notification
                $scope.countNotificationEvents = 0;
                $scope.eventsNotViewed = [];
                $scope.events = EventsService.getEventsByStudent(currentStudentId);
                $scope.showEventsOrder();
            }, 2000);
        }
    }

    
});