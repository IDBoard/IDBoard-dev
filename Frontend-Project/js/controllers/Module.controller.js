idboard.controller('ModuleController', function ($scope, GradeService, ModuleService) {

    $scope.grades  = GradeService.getGrades();
    $scope.modules = ModuleService.getModules();

    
    var moduleToShow;
    var moduleSelected;

    $scope.moduleNameToAdd;
    $scope.coursToAdd;

    $scope.showModuleByGrade = function (grade) {
        $scope.modulesOfGradeSelected = ModuleService.allModulesByGrade(grade);
        moduleToShow = $scope.modulesOfGradeSelected;
        $scope.gradeSelected = grade;
        console.log("grade name", $scope.gradeSelected.name);
    };
    
    $scope.setModuleSelected = function (module) {
        moduleSelected = module;
    }

    $scope.addModuleToGrade = function (grade, module) {
        console.log("addModuleToGrade");
        console.log("addModuleToGrade name", $scope.moduleNameToAdd);
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

    $scope.$watch('gradeSelected.modules.length', function (newVal, oldVal) {
        console.log('watch gradeSelected.modules');
        if ($scope.gradeSelected != null) {
            if ($scope.gradeSelected.modules.length > 0) {
                console.log("modulesOfGradeSelected", $scope.modulesOfGradeSelected);
                if (newVal > oldVal)
                {
                    $scope.modulesOfGradeSelected = ModuleService.allModulesByGrade($scope.gradeSelected);
                }
               
            }
        }
    });

    $scope.addCoursToModule = function () {
        console.log("moduleSelected", moduleSelected);
        var coursToadd = {
            id: Date.now(),
            name: $scope.coursToAdd,
        };

        if (moduleSelected != null || moduleSelected == 'undefined') {
            ModuleService.addCoursToModule(moduleSelected, coursToadd);
            $scope.coursToAdd = "";
        }
     
    }

});