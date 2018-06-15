idboard.controller('ModuleController', function ($scope, ClassService, ModuleService) {

    $scope.classService = ClassService;
    $scope.grades = $scope.classService.getGrades();
    $scope.modules = ModuleService.getModules();

    
    var moduleToShow;
    $scope.moduleSelected;
    $scope.cours;
    $scope.moduleNameToAdd;

    $scope.showModuleByGrade = function (idgrade) {
        var _grade = $scope.classService.findGradeById(idgrade);
        $scope.currentGrade = _grade;
        moduleToShow = ModuleService.allModulesByGrade(_grade);
        $scope.modulesOfGradeSelected = moduleToShow;
    };
    
    $scope.setModuleSelected = function (module) {
        if (module != null) {
            $scope.moduleSelected = module;
            $scope.cours = module.cours;
        }
        else {
            $scope.moduleSelected = null;    
            $scope.cours = [];
        }
       
    }

    $scope.addModuleToGrade = function (grade, module) {
        if ($scope.idGradeSelected != null && $scope.idGradeSelected != "undefined" && $scope.idGradeSelected != "")
        {
            if ($scope.moduleNameToAdd != null && $scope.moduleNameToAdd != "undefined" && $scope.moduleNameToAdd != "") {
                if ($scope.moduleCreditsETCToAdd != null && $scope.moduleCreditsETCToAdd != "undefined" && $scope.moduleCreditsETCToAdd != "") {
                    var moduleToAdd = {
                        id: Date.now(),
                        name: $scope.moduleNameToAdd,
                        creditsETC: $scope.moduleCreditsETCToAdd,
                        cours: []
                    }
                    $scope.gradeSelected = $scope.classService.findGradeById($scope.idGradeSelected);
           
                    $scope.classService.addModule($scope.gradeSelected, moduleToAdd);
                    ModuleService.getModules().push(moduleToAdd);
                    $scope.moduleNameToAdd = "";
                    $scope.moduleCreditsETCToAdd = "";
                }
            }
        }
    }

    $scope.$watch('modules.length', function (newVal, oldVal) {
        if (newVal != oldVal) {
            if (newVal != null && newVal != "undefined") {
                if ($scope.gradeSelected != null && $scope.gradeSelected != "undefined") {
                    $scope.modulesOfGradeSelected = ModuleService.allModulesByGrade($scope.gradeSelected);
                }
                
            }
        }
    });


    $scope.$watch('idGradeSelected', function (newVal, oldVal) {
        if ($scope.idGradeSelected != null) {
           
            if (newVal != oldVal) {
                if (newVal != "" && newVal != null && newVal != "undefinded") {
                    $scope.showModuleByGrade(newVal);
                    $scope.setModuleSelected(null); //update cours list
                }
                else {
                    $scope.modulesOfGradeSelected = [];
                    $scope.setModuleSelected(null); //update cours list
                }
            }
          
        }
    });

});