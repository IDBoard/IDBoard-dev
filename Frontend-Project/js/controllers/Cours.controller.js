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
                $scope.coursNameToAdd = "";
                $scope.note = "";
            }
        }
        
    }

    $scope.editCours = function (cours) {
        $scope.coursSetted.name = $scope.coursNameToEdit;
        $scope.coursSetted.note = $scope.noteToEdit;
        CoursService.setCours($scope.coursSetted);
    }

    $scope.addToModule = function (cours) {
        console.log("add To Module This Cours", cours);
        if ($scope.moduleSelected != null && $scope.moduleSelected != 'undefined' && $scope.moduleSelected != "") {
            console.log("add to module cours", cours, "module selected", $scope.moduleSelected);
            var added = $scope.moduleService.addCoursToModule($scope.moduleSelected, cours);
            console.log("cours added in module selected", added);
            if (added) {
                console.log("before deleting cours ");
                $scope.courService.deleteCours(cours);
                console.log("cours list after deleting cours", $scope.coursList);
            }
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

    $scope.$watch('moduleSelected.cours.length', function (newVal, oldVal) {
        console.log("watch moduleSelected.cours.length newVal", newVal, "oldVal", oldVal);
        $scope.coursList = CoursService.getCours();
    });

    $scope.$watch('coursList.length', function (newVal, oldVal) {
        console.log("watch coursList newVal", newVal, "oldVal", oldVal);
        
    });



});
