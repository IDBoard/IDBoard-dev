idboard.service('ModuleService', function () {
    var moduleList = [
        {
            id: '153',
            name: 'LANGAGE JAVASCRIPT',
            creditsETC: 2,
            cours: [
                {
                    id : '1',
                    name: "Le framework Ember.js",
                    note: 20
                }
            ]
        },
        {
            id: '265416',
            name: 'ARCHITECTURE',
            creditsETC: 0.5,
            cours: [
                {
                    id: '2',
                    name: " L'architecture des systèmes parallèles et distribués",
                    note: 10
                }
            ]
        },
        {
            id: '356',
            name: 'Les techniques de cybersecurisation',
            creditsETC: 0,
            cours: []
        },
        {
            id: '47962',
            name: ' AMBASSADEUR',
            creditsETC: 6,
            cours: []
        },
        {
            id: '455',
            name: 'ALGORITHMIQUE',
            creditsETC: 1,
            cours: [
                {
                    id: '3',
                    name: " La complexité",
                    note: 10
                },
                {
                    id: '4',
                    name: "Les algorithmes et les heuristiques pour l'informatique parallèle",
                    note: 10
                }
            ]
        },
        {
            id: '677',
            name: 'ANLAIS',
            creditsETC: 6,
            cours: []
        }
    ];

    this.getModules = function () {
        return moduleList;
    }

    this.allModulesByGrade = function (grade) {
        console.log("Module service allModulesByGrade", grade);
        var arrayResultModules = [];
        var modulesOfThisGrade = grade.modules;
        if (modulesOfThisGrade != null)
        {
            if (modulesOfThisGrade.length > 0)
            {
                modulesOfThisGrade.forEach(function (_module) {
                    console.log("module item  ", _module);
                    moduleList.forEach(function (__module) {
                        
                    if (_module.id == __module.id) {
                        var moduleToAdd = __module;
                        console.log("module found ", moduleToAdd);
                        arrayResultModules.push(moduleToAdd)
                    }
                        
                    });
                });
            }
        }
        return arrayResultModules;
    }
    
    this.addCoursToModule = function (module, cours) {

        if (!this.coursExisted(module, cours)) {
            module.cours.push(cours);
        }
    };

    this.coursExisted = function (module, cours) {
        var existed = false;
        if (module != null && module != "undefined") {
            var coursList = module.cours;
            for (var i = 0; i < coursList.length; i++) {
                if (coursList[i].id == cours.id) {
                    existed = true;
                    break;
                }
            }
            return existed;
        }
        else {
            return true;
        }

    }
});