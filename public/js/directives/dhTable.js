angular.module('delhivry.table', [])
    .directive('delhiveryTable', [function() {
        return {
            // scope: {
            //     "data": "="
            // },
            restrict: 'E',
            template: '<section ng-repeat="x in data |filter:searchText"><div>{{x.id}}</div><div>{{x.name}}</div><div>{{x.designation}}</div><div>{{x.phone}}</div><div>{{x.email}}</div><div><button ng-click="modifyUser($index)">Modify</button></div><div><button ng-click="deleteEmp($index)">Delete</button></div></section>',
            replace: true,
            compile: function() {
                return function linking($scope, iElm, iAttrs) {
                    /**
                     * { event for cancel delete functionality of lightbox }
                     */
                    $scope.cancelDelete = function() {
                        deleteEmpIndex = "";
                        $scope.deleteConfirmBox = false;
                    }

                    /**
                     * { function to delete marked item for deletion and close lightbox }
                     */
                    $scope.deleteConfirm = function() {
                        $scope.data.splice(deleteEmpIndex, 1);
                        $scope.deleteConfirmBox = false;
                        dataService.saveUserData($scope.data);
                    }

                    /**
                     * { function used for marking item for deletion and open lightbox }
                     *
                     * @param      {<type>}  index   The index of item to be deleted
                     */
                    $scope.deleteEmp = function(index) {
                        deleteEmpIndex = index;
                        $scope.tobedel = $scope.data[index].email;
                        $scope.deleteConfirmBox = true;
                    }
                }
            }
        }
    }])
    //directive to validate input date and date range
    .directive('myDate', ['$timeout', '$filter', function($timeout, $filter) {
        return {
            restrict: 'A',
            require: 'ngModel',

            link: function($scope, $element, $attrs, ctrl) {

                /**
                 * { validate if date range is incremental }
                 *
                 */
                var validate = function(viewValue, dt) {
                    var comparisonModel = $attrs.myDate.split("/");;
                    var compDt = new Date(comparisonModel[1] + "/" + comparisonModel[0] + "/" + comparisonModel[2]);
                    if ($attrs.myDate) {

                        var ifTrue = (dt >= compDt);
                        if (ifTrue) {
                            return viewValue;
                        }
                    } else {
                        return viewValue;
                    }
                };

                var dateFormat = 'dd/mm/yyyy';
                ctrl.$parsers.push(function(viewValue) {//used for input from view
                    var parts = viewValue.split("/");
                    var dt = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);

                    var flag = (dt.getDate() == parts[0] && dt.getMonth() + 1 == parts[1] && dt.getFullYear() == parts[2]);
                    if (flag) {
                        return validate(viewValue, dt);
                    }
                    return undefined;

                });
                ctrl.$formatters.push(function(modelValue) {//used when input from model
                    if (modelValue != undefined) {
                        var parts = modelValue.split("/");
                        var updateDate = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
                        var pDate = Date.parse(updateDate);
                        if (isNaN(pDate) === false) {
                            return validate(modelValue, updateDate);
                        }
                        return undefined;
                    }
                });
            }
        };
    }])
