idboard.controller('Connection', function ($scope) {

    // Initialisation du numéro d'IDBoard et du mot de passe
    $scope.idboard_number = '';
    $scope.password = '';

    // Message d'erreur ou de success
    $scope.logs = '';
    // Phrase dans le footer
    $scope.phrase_daccroche = 'CampusID La Grande Ecole de l\'Institut Européen de l\'Intelligence Digitale à Sophia Antipolis qui forme les Experts Programmeurs de demain.';

    // Pictograme pour afficher ou cacher le mot de passe
    $scope.showPassword = 'open';

    // Lieux de l'école'
    $scope.lieux = 'Sophia Antipolis';

    // Fonction de validation de l'authentification
    $scope.valider = function () {
        if ($scope.idboard_number !== '' && $scope.password !== '') {
            $scope.logs = 'Vous êtes connectés, vous allez être rediriger.';
            $scope.color = 'green';
        }
        else {
            $scope.logs = 'Votre numéro d\'IDBoard ou votre mot de passe est incorrecte.';
            $scope.color = 'red';
        }
    };

    // Fonction d'affichage ou de cachage du mot de passe
    $scope.showHidePassword = function () {
        if ($scope.showPassword == 'open') {
            $scope.showPassword = 'close';
            document.querySelector('#password').setAttribute('type', 'text');
        }
        else if ($scope.showPassword == 'close') {
            $scope.showPassword = 'open';
            document.querySelector('#password').setAttribute('type', 'password');
        }
    }
});