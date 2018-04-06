idboard.controller('StudentReport', function ($scope/*, $http*/) {

    $scope.list_modules = [];
    $scope.list_modules_cache = [];
    $scope.list_modules_success = [];
    $scope.list_modules_failed = [];
    $scope.list_modules_currents = [];

    $scope.head_modules = {};
    $scope.modules_details = [];

    $scope.onload = function () {
        $scope.list_modules = $scope.get_test_list().body;
        $scope.list_modules_cache = $scope.get_test_list().body;
        $scope.head_modules = $scope.get_test_list().header;

        document.querySelector('#modules_filers').onchange = function () {
            $scope.filter_module(this.value)
        }
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
        return {
            header: {
                credits: {
                    total: 9,
                    valided: 6,
                    missing: 3
                },
                matieres: {
                    successed: 2,
                    failed: 1,
                    currents: 3
                }
            },
            body: [
                {
                    id: 0,
                    nb_notes_valides:
                        1,
                    module:
                        "ANGLAIS",
                    nb_credits:
                        3,
                    success:
                        true,
                    matieres:
                        [
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
                }
                ,
                {
                    id: 1,
                    nb_notes_valides:
                        1,
                    module:
                        "Electronique - Mise à niveau en électronique",
                    nb_credits:
                        3,
                    success:
                        true,
                    matieres:
                        [
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
                }
                ,
                {
                    id: 2,
                    nb_notes_valides:
                        1,
                    module:
                        "ALGORITHMIQUE",
                    nb_credits:
                        3,
                    success:
                        null,
                    matieres:
                        [
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
                },
                {
                    id: 3,
                    nb_notes_valides: 1,
                    module: "ECONOMIE",
                    nb_credits: 0.5,
                    success: true,
                    matieres: [
                        {
                            id: 1,
                            name: "ECO-SECTINFO-ACTU : Économie - Les dernières tendances économiques du secteur informatique",
                            type: 'ecrit',
                            date: '23/02/2018',
                            note: 10,
                            coefficient: 1,
                            moyenne: 13.2,
                            commentaire: null
                        }
                    ]
                }
            ]
        }
    };

    $scope.get_test_list_successed = function (array) {
        let tmp = [];
        array.forEach(function (module, key) {
            if (module.success === true) {
                tmp[tmp.length] = module;
            }
        });
        console.log('success');
        return tmp;
    };

    $scope.get_test_list_failed = function (array) {
        let tmp = [];
        array.forEach(function (module, key) {
            if (module.success === false) {
                tmp[tmp.length] = module;
            }
        });
        console.log('fail');
        return tmp;
    };

    $scope.get_test_list_currents = function (array) {
        let tmp = [];
        array.forEach(function (module, key) {
            if (module.success === null) {
                tmp[tmp.length] = module;
            }
        });
        console.log('current');
        return tmp;
    };

    $scope.filter_module = function (value) {
        switch (value) {
            case 'successed':
                $scope.list_modules = $scope.get_test_list_successed($scope.get_test_list().body);
                //$scope.toto = 'ekfherfu';
                break;
            case 'failed':
                $scope.list_modules = $scope.get_test_list_failed($scope.get_test_list().body);
                //$scope.toto = 'pouet';
                break;
            case 'currents':
                $scope.list_modules = $scope.get_test_list_currents($scope.get_test_list().body);
                //$scope.toto = 'lololol';
                break;
            default:
                break;
        }


        console.log($scope.list_modules);
    };
    /*$scope.filter_module = function (value) {
        $scope.$watch('list_modules.length', function (newVal, value) {
            switch (value) {
                case 'successed':
                    $scope.list_modules = $scope.get_test_list_successed($scope.get_test_list().body);
                    break;
                case 'failed':
                    $scope.list_modules = $scope.get_test_list_failed($scope.get_test_list().body);
                    break;
                case 'currents':
                    $scope.list_modules = $scope.get_test_list_currents($scope.get_test_list().body);
                    break;
                default:
                    break;
            }
        });

        console.log($scope.list_modules);   
    }*/
    
});