angular.module('detailCtrl', []).controller('viewDetailsCtrl',['$scope','$location','dataService', function($scope,$location,dataService) {

    //Block to get the index of user to edit 
    var url = $location.path().split("/");
    var userNumber = url[url.length - 1];

    //Data from Service
    $scope.data = dataService.getUserData()
    $scope.data = $scope.data[userNumber];

    $scope.confirmAddition = function(){
    	$location.url('/');
    }


    $scope.goBack = function(){
    	$location.url('/addEmployee/' +userNumber);
    }
}]);
