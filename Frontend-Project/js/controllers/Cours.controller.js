/**
 * Created by Visual Studio.
 * User: Antuanett Barrios
 */

idboard.controller('CoursController', function ($scope, CoursService, ModuleService) {

    $scope.courService = CoursService;
    $scope.moduleService = ModuleService;

    $scope.coursList = CoursService.getCours();
    $scope.moduleList = ModuleService.getModules();

    $scope.coursNameToAdd = "";
    $scope.moduleSelected = "";
    $scope.enableEditCours = "";

    /**
     * Create new cours
     * @param {any} cours
     */
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
                $scope.coursNameToAdd = "";
                $scope.note = "";
            }
        }
    }


    /**
     * Edit a cours
     * @param {any} cours
     */
    $scope.editCours = function (cours) {
        $scope.coursSetted.name = $scope.coursNameToEdit;
        $scope.coursSetted.note = $scope.noteToEdit;
        CoursService.setCours($scope.coursSetted);
    }

    /**
     * Add the cours to module selected
     * @param {any} cours
     */
    $scope.addToModule = function (cours) {
        if ($scope.moduleSelected != null && $scope.moduleSelected != 'undefined' && $scope.moduleSelected != "") {
          
            var added = $scope.moduleService.addCoursToModule($scope.moduleSelected, cours);
            if (added) {
                $scope.courService.deleteCours(cours);
            }
        }
    }


    /**
     * Set variable coursSetted
     * @param {any} cours
     */
    $scope.setCours = function (cours) {
        $scope.coursSetted = cours;
        $scope.coursNameToEdit = cours.name;
        $scope.noteToEdit = cours.note;
    }

    /**
     * Set Module Selected
     * @param {any} module
     */
    $scope.setModuleSelected = function (module) {
        if (module != null && module != 'undefined') {
            $scope.moduleSelected = module;
        }
    }


    /**
     * 
     *Watch length of array  moduleSelected.cours
     */
    $scope.$watch('moduleSelected.cours.length', function (newVal, oldVal) {
        $scope.coursList = CoursService.getCours();
    });

});
