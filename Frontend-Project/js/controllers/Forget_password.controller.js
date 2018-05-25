idboard.controller('Forget_password', function ($scope) {

    // Initialisation du numéro d'IDBoard et du mot de passe
    $scope.idboard_number = '';
    $scope.password1 = '';
    $scope.password2 = '';
    $scope.cryptPassword = '';

    // Message d'erreur ou de success
    $scope.logs = '';

    // Pictograme pour afficher ou cacher le mot de passe
    $scope.showPassword1 = 'open';
    $scope.showPassword2 = 'open';

    // Lieux de l'école'
    $scope.lieux = 'Sophia Antipolis';

    // Fonction de validation de l'authentification
    $scope.change_password = function () {
        if ($scope.idboard_number !== '' && $scope.password1 !== '' && $scope.password2 !== '') {
            if ($scope.password1 === $scope.password2) {
                $scope.color = 'green';
                $scope.logs = 'Vous allez recevoir un email de confirmation.';
            }
            else {
                $scope.color = 'red';
                $scope.logs = 'Les mots de passe ne sont pas identiques.';
            }
        }
        else {
            $scope.color = 'red';
            $scope.logs = 'Veuillez remplir tous les champs.';
        }
    };

    // Fonction d'affichage ou de cachage du mot de passe
    $scope.showHidePassword = function (num_password) {
        switch (num_password) {
            case 1:
                if ($scope.showPassword1 === 'open') {
                    $scope.showPassword1 = 'close';
                    document.querySelector('#password1').setAttribute('type', 'text');
                }
                else if ($scope.showPassword1 === 'close') {
                    $scope.showPassword1 = 'open';
                    document.querySelector('#password1').setAttribute('type', 'password');
                }
                break;
            case 2:
                if ($scope.showPassword2 === 'open') {
                    $scope.showPassword2 = 'close';
                    document.querySelector('#password2').setAttribute('type', 'text');
                }
                else if ($scope.showPassword2 === 'close') {
                    $scope.showPassword2 = 'open';
                    document.querySelector('#password2').setAttribute('type', 'password');
                }
                break;
        }
        
    }
});