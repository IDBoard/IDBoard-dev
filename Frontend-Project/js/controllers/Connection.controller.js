app.controller('Connection', function ($scope) {

    $scope.idboard_number = 2011644;
    $scope.password = '2669NICOLAS2107';
    $scope.logs = '';
    $scope.click = function () {
        if ($scope.idboard_number !== '' && $scope.password !== '') {
            alert('envoyé !!');
            $scope.logs = $scope.idboard_number + ' ' + $scope.password;
            $scope.color = 'green';
        }
    }
});