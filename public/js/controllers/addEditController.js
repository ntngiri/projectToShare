angular.module('addEditCntr', []).
controller('addEditController', ["$scope", "$location", "$compile", 'dataService', function($scope, $location, $compile, dataService) {

        var url = $location.path().split("/"); // gets url params
        var userNumber = url[url.length - 1]; // gets last param in url
        var line = 1; // used for maintaining adrress lines
        $scope.data = dataService.getUserData(); // getting employees data from server
        $scope.qualificationData = [{ "id": "1", "name": "Graduation" }, { "id": "2", "name": "Post Graduation" }]; // qualification Object - can be stored in service but is not needed on other pages, thats why stored in controller
        $scope.citiesData = [{ "id": "1", "name": "Mumbai" }, { "id": "2", "name": "Delhi" }, { "id": "3", "name": "Kolkata" }, { "id": "4", "name": "Chennai" }, { "id": "5", "name": "Bangalore" }, { "id": "6", "name": "Hyderabad" }, { "id": "7", "name": "Ahmadabad" }, { "id": "8", "name": "Pune" }, { "id": "999", "name": "Others" }];

        /**
         * Adds an adress line.
         *
         * @param      {<type>}  obj     The object
         */
        $scope.addAdressLine = function(obj) {
            line++;
            var addressField = '<input type="text" class="input ng-pristine ng-untouched ng-valid ng-valid-maxlength" name="designation" placeholder="Address line ' + line + '" maxlength="35" ng-model="user.address.line' + line + '">'
            var elm = angular.element(document.querySelector('#addressLines'));
            $scope.user.address['line' + line] = "";
            elm.append(addressField);
            $compile(elm)($scope);
        }

        /**
         * { Exit the current add or edit process and gets back to home page }
         */
        $scope.exitAdd = function() {
            $location.path('/');
        }

        /**
         * { Events on selecting the work radio buttons }
         */
        $scope.workNature = function() {
            // alert($scope.user.workNature['selected']);
            if ($scope.user.workNature['selected'] == 'Part time') {
                $scope.WorkNatureDetails = true;
                $scope.partTimeDetails = true;
                $scope.contractDetails = false;
            } else if ($scope.user.workNature['selected'] == 'Casual') {
                $scope.contractDetails = true;
                $scope.WorkNatureDetails = true;
                $scope.partTimeDetails = false;
            } else {
                $scope.contractDetails = false;
                $scope.WorkNatureDetails = false;
                $scope.partTimeDetails = false;
            }
           
        }

        /**
         * block to deep copy object in case of edit, or new object initialize in add new case
         *
         */
        if (userNumber != "new") {
            $scope.user = angular.copy($scope.data[userNumber]);
            $scope.workNature();
        } else {
            $scope.user = {};
        }


        /**
         * { callback function for qualification drop down }
         *
         * @param      {<type>}  item    The item selected
         */
        $scope.qualCallback = function(item) {
            if (!$scope.user['qualification']) {
                $scope.user['qualification'] = {};

                $scope.user['qualification']['gradDetail'] = {};
                // $scope.user['qualification']['gradDetail']['courseName'] = "";
                // $scope.user['qualification']['gradDetail']['university'] = "";
                // $scope.user['qualification']['gradDetail']['passingYear'] = "";
                $scope.user.qualification.postgradDetail = {};
            }
            $scope.user['qualification']['selected'] = item.id;
            $scope.user['qualification']['selectedName'] = item.name;
            if (item.id == "1") {
                $scope.qualBox = true;
                $scope.gradBox = true;
                $scope.postgradBox = false;


            } else {
                $scope.qualBox = true;
                $scope.gradBox = true;
                $scope.postgradBox = true;

            }
        }

        /**
         * { submit all details on add and edit case }
         */
        $scope.submitDetails = function() {
            if (userNumber != "new") {
                $scope.data.splice(userNumber, 1, $scope.user)
                dataService.saveUserData($scope.data);
                $location.url("/confirmDetail/" + userNumber)
            } else {
                $scope.data.push($scope.user);
                dataService.saveUserData($scope.data);
                $location.url("/confirmDetail/" + ($scope.data.length - 1));
            }
        }

        /**
         * { callback function for city drop down }
         *
         * @param      {<type>}  item    The item selected
         */
        $scope.cityCallback = function(item) {
            if (!$scope.user['city']) {
                $scope.user['city'] = {};
                $scope.user['city']['selected'] = item.id
            }
            if (item.id == "999") {
                $scope.otherCityBox = true;
            } else {
                $scope.otherCityBox = false;
            }
        }
    }])
    
