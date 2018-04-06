// Création du module principal 'idboard'
var idboard = angular.module('IDBoard', ['ngRoute']);
idboard.config(function ($routeProvider, $locationProvider) {
    console.log("ngroute");
    $routeProvider
        .when('/main', {
            templateUrl: "views/main.html"
        })
        .when('/cours', {
            templateUrl: "views/cours.html"
        })
        .when('/mainTestURL', {
            templateUrl: "views/mainTestURL.html"
        })
        .when('/grades', {
            templateUrl: "views/grades.html",
            controller: "GradeController"
        })
        .when('/moduleTestURL', {
            templateUrl: 'views/moduleTestURL.html',
            controller: "ModuleController"
        })
        .when('/eventsTestURL', {
            templateUrl: 'views/eventsTestURL.html'
        })
        
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode({enabled : true, requireBase : false});

});