/**
 * Created by Visual Studio.
 * User: Antuanett Barrios
 */

// Création du module principal 'idboard'
var idboard = angular.module('IDBoard', ['ngRoute']);

idboard.config(function ($routeProvider, $locationProvider) {
    console.log("ngroute");
    $routeProvider
        .when('/main', {
            templateUrl: "views/main.html"
        })
        .when('/cours', {
            templateUrl: "views/cours.html",
            controller: "CoursController"
        })
        .when('/module', {
            templateUrl: "views/module.html",
            controller: "ModuleController"
        })
        .when('/grades', {
            templateUrl: "views/grades.html",
            controller: "GradeController"
        })
        .when('/events', {
            templateUrl: 'views/events1.html',
            controller: "EventsController"
        })
        .when('/marks', {
            templateUrl: 'views/marks.html',
            controller: "MarksController"
        })
        
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode({ enabled: true, requireBase: false });

    /*idboard.run(function ($rootScope, $templateCache) {
        $rootScope.$on('$viewContentLoaded', function () {
            $templateCache.removeAll();
        });
    });*/

   
});