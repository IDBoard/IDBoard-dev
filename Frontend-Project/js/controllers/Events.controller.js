idboard.controller('EventsController', function ($scope, EventsService, StudentService) {
    
    $scope.currentStudentId = 55;
    var currentStudentId = $scope.currentStudentId;

    if (currentStudentId !== 'undefined' && currentStudentId !== null )
    {
        console.log("currentStudentId");
        console.log($scope.currentStudentId);
        var currentStudent = StudentService.getStudentById(currentStudentId);

        if (currentStudent !== null) {
            $scope.currentStudent = currentStudent;
            $scope.events = EventsService.getEventsByStudent(currentStudentId);
        }


    }
   

    
});