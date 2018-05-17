/**
 * Created by Visual Studio.
 * User: Antuanett Barrios
 */
idboard.service('CoursService', function () {
    var coursList = [
        {
            id: '1',
            name: "Le framework Ember.js",
            note : 10
        },
        {
            id: '2',
            name: " L'architecture des systèmes parallèles et distribués",
            note: 20
        },
        {
            id: '31',
            name: "Gestion laboratoire",
            note: 10

        },
        {
             id: '44',
             name: "FSHARP-BASE : F# - Les bases",
             note: 20
        }
    ];

    this.getCours = function () {
        return coursList;
    }

    this.addNewCours = function (cours) {
        var i = coursList.indexOf(cours);
        console.log("cours to add ", cours);
        console.log("position of cours ", i);
        if (i == -1) {
            coursList.push(cours);
        }
    }

    this.setCours = function (cours) {
        var i = coursList.indexOf(cours);
        console.log("position of cours ", i);
        coursList[i] = cours;
        console.log("cours setted ", coursList);
    }

    this.deleteCours = function (cours) {
        var i = coursList.indexOf(cours);
        console.log("cours to delete ", cours);
        console.log("position of cours ", i);
        if (i !== -1) {
            console.log("cours deleted", cours.name);
            coursList.splice(i, 1);
        }
        console.log("cours service cours after deleting one cours ", coursList);
    }



});