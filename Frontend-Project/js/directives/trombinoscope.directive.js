idboard.directive('trombi', function () {
    return {
        templateUrl: './Trombinoscope.html',
        controller: function ($scope, $http) {

            $scope.get_id_class = function () {
                $scope.id_classe = 5;
            };

            $scope.get_trombi = function () {
                /*$http.get('http://localhost:4725/api/GetTrombi/' + $scope.id_classe)
                    .then(function(data) {
                        console.log(data);
                    },
                    function(data) {
                        data = $scope.genere_json_test();
                        console.log(data);
                    });*/

                data = $scope.genere_json_test();

                data.listStudent = $scope.delete_unactive_students(data.listStudent);

                $scope.class_name = data.nameClasse;
                $scope.nbr_etudiants = data.nbStudent;
                $scope.etudiants = data.listStudent;
            };

            $scope.delete_unactive_students = function (students) {
                for (let i = 0, max = students.length; i < max; i++) {
                    if (!students[i].active) {
                        delete students[i];
                    }
                }
                return students;
            };

            $scope.genere_json_test = function () {
                return {
                    nbStudent: 6,
                    nameClasse: 'M1 SDEAM Sophia Antipolis 2017/2018',
                    listStudent: [
                        {
                            id: 2011644,
                            name: "CHOQUET",
                            firstname: "Nicolas",
                            picture: "/Uploads/2011644/photo_Choquet%20Nicolas%20-%202011644.jpg",
                            active: true

                        },
                        {
                            id: 2013342,
                            name: "CARRIE",
                            firstname: "Stéphanie",
                            picture: "/Uploads/2013342/photo_Stéphanie%20CARRIE.jpg",
                            active: true
                        },
                        {
                            id: 2011602,
                            name: "GIUNTI",
                            firstname: "Hugo",
                            picture: "/Uploads/2011602/photo_GIUNTI%20Hugo%20-%202011602.jpg",
                            active: true
                        },
                        {
                            id: 2011455,
                            name: "GODART",
                            firstname: "Killian",
                            picture: "/Uploads/2011455/photo_Killian%20Godart%20-%202011455.jpg",
                            active: true
                        },
                        {
                            id: 2011662,
                            name: "VAUTHIER",
                            firstname: "Stéphane",
                            picture: "/Uploads/2011662/photo_Vauthier%20Stéphane.jpg",
                            active: true
                        },
                        {
                            id: 2013393,
                            name: "LEON",
                            firstname: "Valentin",
                            picture: "/Uploads/2013393/photo_LEON.png",
                            active: true
                        },
                        {
                            id: 2013310,
                            name: "TOTO",
                            firstname: "MOAMÈDE",
                            picture: "/Uploads/2013393/photo_LEON.png",
                            active: false
                        }
                    ]
                }
            };

        }
    }
});