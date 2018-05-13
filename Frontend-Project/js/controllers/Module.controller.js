idboard.controller('ModuleController', function ($scope, GradeService, ModuleService) {
    console.log("ModuleController");
    $scope.grades  = GradeService.getGrades();
    $scope.modules = ModuleService.getModules();

    
    var moduleToShow;
    $scope.moduleSelected;
    $scope.cours;
    $scope.moduleNameToAdd;
    $scope.coursToAdd;

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
        if ($scope.gradeSelected != null)
        {
            var moduleToAdd = {
                id: Date.now(),
                name: $scope.moduleNameToAdd,
                creditsETC: $scope.moduleCreditsETCToAdd,
                cours: []
            }
            GradeService.addModule($scope.gradeSelected, moduleToAdd);
            ModuleService.getModules().push(moduleToAdd);
            $scope.moduleNameToAdd = "";
            $scope.moduleCreditsETCToAdd = "";
        }
        
    }

    $scope.$watch('gradeSelected', function (newVal, oldVal) {
        if ($scope.gradeSelected != null) {
            console.log("watch grade selected newVal ", newVal);
            console.log("watch grade selected oldVal ", oldVal);
           
            if (newVal != oldVal) {
                $scope.showModuleByGrade(newVal);
                $scope.setModuleSelected(null); //update cours list
            }
          
        }
    });

    $scope.addCoursToModule = function () {
        if ($scope.coursToAdd != null && $scope.coursToAdd != 'undefined' && $scope.coursToAdd != "") {
            var coursToadd = {
                id: Date.now(),
                name: $scope.coursToAdd,
            };

            if ($scope.moduleSelected != null && $scope.moduleSelected != 'undefined' && $scope.moduleSelected != "") {
                ModuleService.addCoursToModule($scope.moduleSelected, coursToadd);
                $scope.coursToAdd = "";
            }

        }

        console.log("cours to add is empty or undefined");      
     
    }

});