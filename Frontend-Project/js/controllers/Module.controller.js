idboard.controller('ModuleController', function ($scope, GradeService, ModuleService) {

    $scope.grades = GradeService.getGrades();
    $scope.modules = ModuleService.getModules();

    var gradeSelected;
    var moduleToShow;
    var moduleSelected;

    $scope.moduleNameToAdd;

    $scope.showModuleByGrade = function (grade) {
        $scope.modulesOfGradeSelected = ModuleService.allModulesByGrade(grade);
        moduleToShow = $scope.modulesOfGradeSelected;
        gradeSelected = grade;
    };


    $scope.setModuleSelected = function (module) {
        moduleSelected = module;
    }

    $scope.addModuleToGrade = function (grade, module) {
        if (moduleSelected != null && gradeSelected != null)
        {
            
            GradeService.addModule(gradeSelected, moduleSelected);
        }
        
    }


});