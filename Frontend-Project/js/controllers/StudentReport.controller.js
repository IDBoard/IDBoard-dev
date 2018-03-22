idboard.controller('StudentReport', function ($scope/*, $http*/) {

    $scope.list_modules = [];
    $scope.modules_details = [];

    $scope.onload = function () {
        $scope.list_modules = $scope.get_test_list();
    };

    $scope.get_matieres = function (id) {
        console.log(document.querySelector('#module' + id + '_detail'));
        console.log(document.querySelector('#module' + id + '_detail').classList);
        if (document.querySelector('#module' + id + '_detail').classList.contains('opened')) {
            document.querySelector('#module' + id + '_detail').classList.remove('opened').add('closed');
        }
        else {
            if (document.querySelector('#module' + id + '_detail').classList.contains('closed')) {
                document.querySelector('#module' + id + '_detail').classList.remove('closed').add('opened');
            }
            else {
                document.querySelector('#module' + id + '_detail').classList.add('closed');
            }
        }
    };

    $scope.get_test_list = function () {
        return [
            {
                id: 0,
                module: "ANGLAIS",
                nb_credits: 3,
                success: true,
                matieres: [
                    {
                        name: 'ANG-SECTINFO-NIV4 : Anglais sur le thème de l\'informatique - Niveau 4',
                        type: 'ecrit',
                        date: '22/03/2018',
                        note: 12,
                        coefficient: 1,
                        moyenne: 11.8,
                        commentaire: ""
                    }
                ]
            },
            {
                id: 1,
                module: "Electronique - Mise à niveau en électronique",
                nb_credits: 3,
                success: true,
                matieres: [
                    {
                        name: 'ELEC-EMB-MAN : Electronique - Mise à niveau en électronique',
                        type: 'ecrit',
                        date: null,
                        note: 20,
                        coefficient: 1,
                        moyenne: 18.3,
                        commentaire: ""
                    }
                ]
            },
            {
                id: 2,
                module: "ALGORITHMIQUE",
                nb_credits: 3,
                success: false,
                matieres: [
                    {
                        name: 'ELEC-EMB-MAN : Electronique - Mise à niveau en électronique',
                        type: 'ecrit',
                        date: '22/12/2017',
                        note: 2,
                        coefficient: 1,
                        moyenne: 3,
                        commentaire: ""
                    },
                    {
                        name: 'ALGO-TRTSND : Algorithmique - Algorithmes et heuristiques appliqués au traitement du son',
                        type: null,
                        date: null,
                        note: null,
                        coefficient: null,
                        moyenne: null,
                        commentaire: null
                    },
                    {
                        name: 'ALGO-TRTIMG : Algorithmique - Algorithmes et heuristiques appliqués au traitement de l’image',
                        type: null,
                        date: null,
                        note: null,
                        coefficient: null,
                        moyenne: null,
                        commentaire: null
                    },
                    {
                        name: 'ALGO-CRYPTO : Algorithmique - Algorithmes et heuristiques appliqués à la cryptographie',
                        type: null,
                        date: null,
                        note: null,
                        coefficient: null,
                        moyenne: null,
                        commentaire: null
                    }
                ]
            }
        ]
    }
});