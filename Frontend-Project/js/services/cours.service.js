idboard.service('CoursService', function () {
    var coursList = [
        {
            id: '1',
            name: "Le framework Ember.js"
        },
        {
            id: '2',
            name: " L'architecture des systèmes parallèles et distribués"
        },
        {
            id: '77',
            name: "Gestion laboratoire"
        },
        {
             id: '855',
             name: "FSHARP-BASE : F# - Les bases"
        }
    ];

    this.getCours = function () {
        return coursList;
    }

    this.addNewCours = function (cours) {
        coursList.push(cours);
    }

});