app.controller('Main', function ($scope) {
    $scope.name = "John";

    $scope.click = function () {
        $scope.name = 'toto';
    }
});