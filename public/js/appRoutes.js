angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/addEmployee/:userId?',{
             templateUrl: 'views/addEdit.html',
             controller:'addEditController'
        })
        .when('/confirmDetail/:userId',{
            templateUrl: 'views/viewDetails.html',
            controller:'viewDetailsCtrl'
        })
         .otherwise({redirectTo:'/'});

    $locationProvider.html5Mode(true);

}]);