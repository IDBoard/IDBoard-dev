idboard.controller('CoursController', function ($scope, CoursService, ModuleService) {

    $scope.courService = CoursService;
    $scope.moduleService = ModuleService;

    $scope.coursList = CoursService.getCours();
    $scope.moduleList = ModuleService.getModules();

    $scope.coursNameToAdd = "";
    $scope.moduleSelected = "";
    $scope.enableEditCours = "";

    $scope.newCours = function (cours) {
        var newCours = {
            id: Date.now,
            name: $scope.coursNameToAdd,
            note: $scope.note
        }
        CoursService.addNewCours(cours);
    }

    $scope.editCours = function (cours) {
        console.log("enable editcours", $scope.enableEditCours);
        $scope.enableEditCours = true;
        console.log("enable editcours", $scope.enableEditCours);
    }

    $scope.addToModule = function (cours) {
        console.log("add to module cours", $scope.moduleSelected, cours);
        if ($scope.moduleSelected != null && $scope.moduleSelected != 'undefined' && $scope.moduleSelected != "") {
            console.log("add to module cours1");
            ModuleService.addCoursToModule($scope.moduleSelected, cours);
        }
    }

    $scope.setModuleSelected = function (module) {
       // console.log('setModuleSelected', module);
        if (module != null && module != 'undefined') {
            $scope.moduleSelected = module;
        }
        console.log('ModuleSelected is ', $scope.moduleSelected);
    }





});
