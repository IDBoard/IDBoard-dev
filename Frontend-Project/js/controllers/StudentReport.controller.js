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

        $scope.write_liste();
        
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
            case 'all':
                $scope.list_modules = $scope.get_test_list().body;
                break;
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


        $scope.write_liste();
    };

    $scope.write_liste = function () {
        let liste = $scope.list_modules;
        let html = '';

        function write_detail(liste, key) {
            let html = '                            <div class="row closed collapse hide" id="module' + liste[key].id + '_detail">\n' +
                '                                <div class="col-12">\n' +
                '                                    <table class="table table-sm table-responsive-sm"\n' +
                '                                           style="width: 100%; overflow-x: auto">\n' +
                '                                        <thead>\n' +
                '                                        <tr>\n' +
                '                                            <th class="text-center">Type d\'évaluation</th>\n' +
                '                                            <th class="text-center">Date</th>\n' +
                '                                            <th class="text-center">Note</th>\n' +
                '                                            <th class="text-center">Coefficient</th>\n' +
                '                                            <th class="text-center">Moyenne de la classe</th>\n' +
                '                                            <th class="text-center">Commentaire</th>\n' +
                '                                        </tr>\n' +
                '                                        </thead>\n' +
                '                                        <tbody>\n';

            liste[key].matieres.forEach(function (detail, key2) {
                html += '                                        <tr scope="row">\n' +
                    '                                            <th colspan="6" class="course-title">' + detail.name + '</th>\n' +
                    '                                        </tr>\n' +
                    (detail.no != null ? '                                        <tr scope="row" class="evaluated">\n' +
                        '                                            <td class="font-weight-bold text-center">' + detail.type + ' n°\n' +
                        '                                                ' + detail.id +
                        '                                            </td>\n' +
                        '                                            <td class="font-weight-bold text-center">' + detail.date + '</td>\n' +
                        '                                            <td class="font-weight-bold text-center">' + detail.note + '</td>\n' +
                        '                                            <td class="font-weight-bold text-center">' + detail.coefficient + '</td>\n' +
                        '                                            <td class="font-weight-bold text-center">' + detail.moyenne + '</td>\n' +
                        (detail.commentaire != null && detail.commentaire !== '' ? '<td class="font-weight-bold text-center"\n' + detail.commentaire + '\n' +
                            '                                            </td>\n' :
                            '                                            <td class="font-weight-bold text-center"\n>Aucun\n' +
                            '                                                commentaire\n' +
                            '                                            </td>\n') +
                        '                                        </tr>\n' :
                        '                                        <tr>\n' +
                        '                                            <td colspan="6" class="text-center dont-evaluated">Pas de note</td>\n' +
                        '                                        </tr>\n');
            });

            html += '                                        </tbody>\n' +
                '                                    </table>\n' +
                '                                </div>\n' +
                '                            </div>\n';

            return html;
        }

        liste.forEach(function (module, key) {
            html += '<div class="row">\n' +
                '                        <div class="col-12 module card">\n' +
                '                            <div class="row card-header">\n' +
                (module.success === true ?
                    '                                <div class="col-xs-1 col-md-2 check-module">\n' +
                    '                                    <i class="fa fa-check-circle ok"></i>\n' +
                    '                                </div>\n' : (module.success === false) ? '                                <div class="col-xs-1 col-md-2 check-module">\n' +
                        '                                    <i class="fa fa-times-circle fail"></i>\n' +
                        '                                </div>\n' : '                                <div class="col-xs-1 col-md-2 check-module">\n' +
                        '                                    <i class="fa fa-times-circle fail"></i>\n' +
                        '                                </div>\n') +
                '                                <div class="col-xs-4 col-md-5" style="padding-top: 15px;">\n' +
                '                                    <b>' + module.module + '</b>\n' +
                '                                </div>\n' +
                '                                <div class="col-xs-3 col-md-3" style="padding-top: 15px;">\n' +
                '                                    <b>' + module.nb_credits + ' ECTS</b>\n' +
                '                                </div>\n' +
                '                                <div class="col-xs-1 col-md-1" style="padding-top: 15px;">\n' +
                '                                    <b>' + module.nb_notes_valides + '/' + module.matieres.length + '</b>\n' +
                '                                </div>\n' +
                '                                <div class="col-xs-1">\n' +
                '                                    <div class="circle closed">\n' +
                '                                        <a href="#module' + module.id + '_detail"\n' +
                '                                           data-id="' + module.id + '"\n' +
                '                                           onclick="if($(this).hasClass(\'fa-angle-up\')) {\n' +
                '                                                        $(this).removeClass(\'fa-angle-up\').addClass(\'fa-angle-down\');\n' +
                '                                                    }\n' +
                '                                                    else {\n' +
                '                                                        $(this).removeClass(\'fa-angle-down\').addClass(\'fa-angle-up\');\n' +
                '                                                    }"\n' +
                '                                           data-parent="#modules"\n' +
                '                                           data-toggle="collapse"\n' +
                '                                           aria-expanded="true"\n' +
                '                                           aria-controls="module' + module.id + '_detail"\n' +
                '                                           class="fa up fa-angle-up"></a>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                write_detail(liste, key) +
                '                        </div>\n' +
                '                    </div>';
        });

        document.querySelector('#modules').innerHTML = html;
    }
    
});