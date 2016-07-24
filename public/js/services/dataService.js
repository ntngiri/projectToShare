angular.module('dataServiceModule', [])
    .factory('dataService', ['$templateCache', function($templateCache) {
        return {
            getAddressTemplate: function(line) {
            	var template = '<input type="text" class="input ng-pristine ng-untouched ng-valid ng-valid-maxlength" name="designation" placeholder="Address line ' + line + '" maxlength="35" ng-model="user.address.line' + line + '">'
                $http( /* ... */ ).then(function(result) {
                    $templateCache.put('my-tpl', template);
                });
            }
        };
    }])
