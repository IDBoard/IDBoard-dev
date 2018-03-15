idboard.controller('Trombinoscope', function ($scope, $http) {

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

        data.students = [];
        for (var i = 0, max = data.nameStudent.length; i < max; i++) {
            data.students[i] = {
                id: data.idStudent[i],
                firstname: data.firstnameStudent[i],
                lastname: data.nameStudent[i],
                picture: data.pictureStudent[i]
            }
        }

        delete data.idStudent;
        delete data.nameStudent;
        delete data.firstnameStudent;

        $scope.class_name = data.nameClasse;
        $scope.nbr_etudiants = data.nbStudent;
        $scope.etudiants = data.students;
    };

    $scope.genere_json_test = function () {
        return {
            nbStudent: 6,
            nameClasse: 'M1 SDEAM Sophia Antipolis 2017/2018',
            nameStudent: [
                'CHOQUET',
                'CARRIE',
                'GIUNTI',
                'GODART',
                'VAUTHIER',
                'LEON'
            ],
            firstnameStudent: [
                'Nicolas',
                'Stéphanie',
                'Hugo',
                'Killian',
                'Stéphane',
                'Valentin'
            ],
            idStudent: [
                2011644,
                2013342,
                2011602,
                2011455,
                2011662,
                2013393
            ],
            pictureStudent: [
                '/Uploads/2011644/photo_Choquet%20Nicolas%20-%202011644.jpg',
                '/Uploads/2013342/photo_Stéphanie%20CARRIE.jpg',
                '/Uploads/2011602/photo_GIUNTI%20Hugo%20-%202011602.jpg',
                '/Uploads/2011455/photo_Killian%20Godart%20-%202011455.jpg',
                '/Uploads/2011662/photo_Vauthier%20Stéphane.jpg',
                '/Uploads/2013393/photo_LEON.png'
            ]
        }
    };

});