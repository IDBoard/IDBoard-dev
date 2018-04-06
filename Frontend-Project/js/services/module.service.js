idboard.service('ModuleService', function () {
    var moduleList = [
        {
            id: '1',
            name: 'LANGAGE JAVASCRIPT',
            creditsETC: 2,
            cours: [
                {
                    id : '1',
                    name: "Le framework Ember.js"
                }
            ]
        },
        {
            id: '2',
            name: 'ARCHITECTURE',
            creditsETC: 0.5,
            cours: [
                {
                    id: '2',
                    name: " L'architecture des systèmes parallèles et distribués"
                }
            ]
        },
        {
            id: '3',
            name: 'Les techniques de cybersecurisation',
            creditsETC: 0,
            cours: []
        },
        {
            id: '4',
            name: ' AMBASSADEUR',
            creditsETC: 6,
            cours: []
        },
        {
            id: '5',
            name: 'ALGORITHMIQUE',
            creditsETC: 1,
            cours: [
                {
                    id: '3',
                    name: " La complexité"
                },
                {
                    id: '4',
                    name: "Les algorithmes et les heuristiques pour l'informatique parallèle"
                }
            ]
        },
        {
            id: '6',
            name: 'ANLAIS',
            creditsETC: 6
        }
    ];

    this.getModules = function () {
        return moduleList;
    }

    this.allModulesByGrade = function (grade) {
        console.log("allModulesByGrade method");
        var arrayResultModules = [];
        var modulesOfThisGrade = grade.modules;
        if (modulesOfThisGrade != null)
        {
            if (modulesOfThisGrade.length > 0)
            {
                console.log("modulesOfThisGrade", modulesOfThisGrade);
                modulesOfThisGrade.forEach(function (_module) {
                    var moduleToAdd = moduleList.find(function (__module) {
                        return __module.id == _module.id;
                    });
                    arrayResultModules.push(moduleToAdd);
                });
            }
        }
        console.log("arrayResultModules", arrayResultModules);
        return arrayResultModules;
    }

    this.addCoursToModule = function (module, cours) {
        console.log("addCoursToModule");
        module.cours.push(cours);
    }

});