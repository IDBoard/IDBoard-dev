idboard.controller('StudentReport', function ($scope/*, $http*/) {

    $scope.list_modules = [];
    $scope.modules_details = [];

    $scope.onload = function () {
        $scope.list_modules = $scope.get_test_list();
    };

    $scope.change_fleche = function (id) {
        if (document.querySelector('#button_module_' + id).classList.contains('fa-angle-up')) {
            document.querySelector('#button_module_' + id).classList.remove('fa-angle-up');
            document.querySelector('#button_module_' + id).classList.add('fa-angle-down');
        }
        else {
            console.log('toto 2');
        }
    };

    $scope.get_test_list = function () {
        return [
            {
                id: 0,
                nb_notes_valides: 1,
                module: "ANGLAIS",
                nb_credits: 3,
                success: true,
                matieres: [
                    {
                        id: 1,
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
                nb_notes_valides: 1,
                module: "Electronique - Mise à niveau en électronique",
                nb_credits: 3,
                success: true,
                matieres: [
                    {
                        id: 1,
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
                nb_notes_valides: 1,
                module: "ALGORITHMIQUE",
                nb_credits: 3,
                success: false,
                matieres: [
                    {
                        id: 1,
                        name: 'ELEC-EMB-MAN : Electronique - Mise à niveau en électronique',
                        type: 'ecrit',
                        date: '22/12/2017',
                        note: 2,
                        coefficient: 1,
                        moyenne: 3,
                        commentaire: ""
                    },
                    {
                        id: 3,
                        name: 'ALGO-TRTSND : Algorithmique - Algorithmes et heuristiques appliqués au traitement du son',
                        type: null,
                        date: null,
                        note: null,
                        coefficient: null,
                        moyenne: null,
                        commentaire: null
                    },
                    {
                        id: 4,
                        name: 'ALGO-TRTIMG : Algorithmique - Algorithmes et heuristiques appliqués au traitement de l’image',
                        type: null,
                        date: null,
                        note: null,
                        coefficient: null,
                        moyenne: null,
                        commentaire: null
                    },
                    {
                        id: 5,
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
    };

    $scope.get_head_infos = function () {
        return []
    }
});