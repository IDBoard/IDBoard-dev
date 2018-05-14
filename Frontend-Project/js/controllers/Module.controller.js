idboard.controller('ModuleController', function ($scope, GradeService, ModuleService) {
    console.log("ModuleController");
    $scope.grades  = GradeService.getGrades();
    $scope.modules = ModuleService.getModules();

    
    var moduleToShow;
    $scope.moduleSelected;
    $scope.cours;
    $scope.moduleNameToAdd;

    $scope.showModuleByGrade = function (idgrade) {
        console.log("showModuleByGrade ", idgrade);
        var _grade = GradeService.findGradeById(idgrade);
        $scope.currentGrade = _grade;
        moduleToShow = ModuleService.allModulesByGrade(_grade);
        console.log("modules to show ", moduleToShow);
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
        console.log("addModuleToGrade");
        if ($scope.idGradeSelected != null && $scope.idGradeSelected != "undefined" && $scope.idGradeSelected != "")
        {
            console.log("addModuleToGrade  idGradeSelected", $scope.idGradeSelected);
            if ($scope.moduleNameToAdd != null && $scope.moduleNameToAdd != "undefined" && $scope.moduleNameToAdd != "") {
                if ($scope.moduleCreditsETCToAdd != null && $scope.moduleCreditsETCToAdd != "undefined" && $scope.moduleCreditsETCToAdd != "") {
                    var moduleToAdd = {
                        id: Date.now(),
                        name: $scope.moduleNameToAdd,
                        creditsETC: $scope.moduleCreditsETCToAdd,
                        cours: []
                    }
                    $scope.gradeSelected = GradeService.findGradeById($scope.idGradeSelected);
                    console.log("addModuleToGrade  gradeSelected", $scope.gradeSelected);
                    GradeService.addModule($scope.gradeSelected, moduleToAdd);
                    console.log("addModuleToGrade  set array modulesOfGradeSelected");
                    ModuleService.getModules().push(moduleToAdd);
                    console.log("all modules after adding the last ", ModuleService.getModules());
                    $scope.moduleNameToAdd = "";
                    $scope.moduleCreditsETCToAdd = "";
                }
            }
        }
    }

    $scope.$watch('modules.length', function (newVal, oldVal) {
        console.log("watch modules  length newval", newVal);
        console.log("watch modules  length oldVal", oldVal);
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
            console.log("watch grade selected newVal ", newVal);
            console.log("watch grade selected oldVal ", oldVal);
           
            if (newVal != oldVal) {
                if (newVal != "" && newVal != null && newVal != "undefinded") {
                    $scope.showModuleByGrade(newVal);
                    $scope.setModuleSelected(null); //update cours list
                }
                else {
                    console.log("newVal is empty or null");
                    $scope.modulesOfGradeSelected = [];
                    $scope.setModuleSelected(null); //update cours list
                }
            }
          
        }
    });

});