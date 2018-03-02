idboard.controller('EventsController', function ($scope, EventsService, StudentService) {

    $scope.events = EventsService.getEvents();

    var currentStudentId = $scope.currentStudentId;
    console.log($scope.currentStudentId);

    if (currentStudentId !== 'undefined' && currentStudentId !== null )
    {
        console.log("currentStudentId");
        console.log($scope.currentStudentId);
        var currentStudent = StudentService.getStudentById(currentStudentId);

        if (currentStudent !== null) {
            console.log(currentStudent);
            console.log("currentStudent != null");
        }


    }
   

    
});