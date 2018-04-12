idboard.controller('CoursController', function ($scope, CoursService, ModuleService) {

    $scope.courService = CoursService;
    $scope.moduleService = ModuleService;

    $scope.coursList = CoursService.getCours();
    $scope.moduleList = ModuleService.getModules();

    $scope.coursNameToAdd = "";
    $scope.moduleSelected = "";
    $scope.enableEditCours = "";
    
    $scope.newCours = function (cours) {
        if ($scope.coursNameToAdd != "" && $scope.coursNameToAdd != null || $scope.coursNameToAdd != 'undefined')
        {
            if ($scope.note != "" && $scope.note != null && $scope.note != 'undefined') {
                var newCours = {
                    id: Date.now,
                    name: $scope.coursNameToAdd,
                    note: $scope.note
                }
                CoursService.addNewCours(newCours);
                console.log("cours list", CoursService.getCours());
            }
        }
        
    }

    $scope.editCours = function (cours) {
        $scope.coursSetted.name = $scope.coursNameToEdit;
        $scope.coursSetted.note = $scope.noteToEdit;
        CoursService.setCours($scope.coursSetted);
    }

    $scope.addToModule = function (cours) {
        if ($scope.moduleSelected != null && $scope.moduleSelected != 'undefined' && $scope.moduleSelected != "") {
            console.log("add to module cours1", cours, $scope.moduleSelected);
            //ModuleService.addCoursToModule($scope.moduleSelected, cours);
            $scope.moduleService.addCoursToModule($scope.moduleSelected, cours);
        }
    }

    $scope.setCours = function (cours) {
        $scope.coursSetted = cours;
        $scope.coursNameToEdit = cours.name;
        $scope.noteToEdit = cours.note;
    }

    $scope.setModuleSelected = function (module) {
        if (module != null && module != 'undefined') {
            $scope.moduleSelected = module;
        }
        console.log('ModuleSelected is ', $scope.moduleSelected);
    }

   



});
