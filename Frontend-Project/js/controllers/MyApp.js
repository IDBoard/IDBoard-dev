var app = angular.module('myApp', ['ui.calendar']);
app.controller('myNgController',['$scope', '$http', 'uiCalendarConfig', function ($scope, $http, uiCalendarConfig) {

    $scope.SelectedEvent = null;
    var isFirstTime = true;

    $scope.events = [];
    $scope.eventSources = [$scope.events];


    //Here we will put a json result like this : 
    /*
     home is the controller's name and getevents the method
     public JsonResult GetEvents()
     {
    //Here MyDatabaseEntities is our entity datacontext (see Step 4)
    using (MyDatabaseEntities dc = new MyDatabaseEntities())
        {
        var v = dc.Events.OrderBy(a => a.StartAt).ToList();
        return new JsonResult { Data = v, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
     }   
     */

 
    
  


    /*$http.get('/home/getevents', {
        cache: true,
        params: {}
    }).then(function (data) {
        $scope.events.slice(0, $scope.events.length);
        angular.forEach(data.data, function (value) {
            $scope.events.push({
                title: value.Title,
                description: value.Description,
                start: new Date(parseInt(value.StartAt.substr(6))),
                end: new Date(parseInt(value.EndAt.substr(6))),
                allDay: value.IsFullDay,
                stick: true
            });
        });
    })*/

    //configure calendar
    $scope.uiConfig = {
        calendar: {
            height: 450,
            editable: true,
            displayEventTime: false,
            header: {
                left: 'month basicWeek basicDay agendaWeek agendaDay',
                center: 'title',
                right: 'today prev,next'
            },
            eventClick: function (event) {
                $scope.SelectedEvent = event;
            },
            eventAfterAllRender: function () {
                if ($scope.events.length > 0 && isFirstTime) {
                    //Focus first event
                    uiCalendarConfig.calendars.myCalendar.fullCalendar('gotoDate', $scope.events[0].start);
                    isFirstTime = false;
                }
            }
        }
    };

}])