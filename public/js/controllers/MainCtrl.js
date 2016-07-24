angular.module('MainCtrl', [])
.controller('MainController', ["$scope", "dataService", "$location", function($scope, dataService, $location) {
    var deleteEmpIndex;
    $scope.data = dataService.getUserData();

    /**
     * Adds a new emp.
     */
    $scope.addNewEmp = function() {
        $location.path('/addEmployee/new');
    }

    /**
     * { Edit the current user }
     *
     * @param      {string}  index   The index of user to edit
     */
    $scope.modifyUser = function(index) {
        $location.path('/addEmployee/' + index)
    }
}]);
