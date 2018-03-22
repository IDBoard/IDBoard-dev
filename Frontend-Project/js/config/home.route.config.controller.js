idboard.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/Accueil.html',
        controller: function ($scope) {

        }
    })
}]);