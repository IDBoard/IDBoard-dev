idboard.controller('EventsController', function ($scope, EventsService, StudentService) {
    
    $scope.currentStudentId = 55;
    var currentStudentId = $scope.currentStudentId;
    var countEventsOfStudent = 0;
    $scope.eventService = EventsService;

    if (currentStudentId !== 'undefined' && currentStudentId !== null )
    {
        var currentStudent = StudentService.getStudentById(currentStudentId);
        
        $scope.currentStudent = currentStudent;
        $scope.events = EventsService.getEventsByStudent(currentStudentId);
        countEventsOfStudent = $scope.events.length;
        EventsService.addEvents(null);
    }

    $scope.$watch('eventService.getEvents()', function (newVal) {
        $scope.checkEventsForNotify(newVal);
    });

    $scope.checkEventsForNotify = function (newEvents) {
        console.log("checkEventsForNotify method");
        if (currentStudent !== null && countEventsOfStudent != 0) {
            var countEventsAfterUpdate = EventsService.getEventsByStudent(currentStudentId).length;
            if (countEventsAfterUpdate > 0 && countEventsOfStudent > 0)
            {
                console.log("countEventsAfterUpdate ", countEventsAfterUpdate);
                console.log("countEventsOfStudentBeforeUpdate ", countEventsOfStudent);
                var eventsNotViewed = countEventsAfterUpdate - countEventsOfStudent;
                console.log("eventsNotViewed ", eventsNotViewed);
                $scope.eventsNotViewed = eventsNotViewed;
            }
        }
    }
   

    
});