angular.module('delhivry.directive', [])
    .directive('delhiveryInput', function() {
        return {
            scope: {
                'pattern': '@',
                'name': '@',
                'model': '@'
            },
            restrict: 'E',
            template: '<div class="row">' +
                '<label class="left">{{name}}</label>' +
                '<div class="middle">' +
                '<input type="text" required class="input" name="{{name}}" ng-pattern="{{pattern}}" placeholder="Enter name" maxlength="35" ng-model="{{model}}">' +
                '<div ng-messages="detailForm.id.$error" ng-show="detailForm.id.$touched || detailForm.$submitted" class="help-block">' +
                '<p ng-message="pattern">Enter a valid {{name}}</p>' +
                '<p ng-message="required">{{name}} is required.</p>' +
                '</div>' +
                '</div>' +
                '</div>',
            replace: true,
            compile: function() {

            }
        }
    })
