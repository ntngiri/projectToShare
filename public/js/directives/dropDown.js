angular.module('delhivry.directive', [])
    .directive('dropDown', function() {
        return {
            //isolated scope
            scope: {
                "ddData": "=",
                "placeholderText": "@",
                "selectedId": "=",
                callback: "&dropdownCallback"
            },
            restrict: 'E',
            template: '<div class="ddwn">' +
                '<div class="DDwrap">' +
                '<ul class="DDsearch">' +
                '<li class="frst" style="float: none;">' +
                '<div class="DDinputWrap">' +
                '<span class="ddIcon srchTxt" ng-click="showDrop()"></span>' +
                '<input type="text" required ng-focus="showDrop()" ng-click="showDrop()" ng-blur="blurOut()" id="" placeholder="{{::placeholderText}}" class="srchTxt" autocomplete="off"  ng-model="selectedName">' +
                '</div></li></ul></div>' +
                '<div class="dd_dwn" ng-show="show">' +
                '<ul class="listing">' +
                '<li ng-repeat="item in ddData | filter:{$:selectedName}" ng-mousedown="checkItem(this.item,$event)" >' +
                '<div class="tuple">{{item.name}}</div>' +
                '</li>' +
                '</ul>' +
                '</div>' +
                '</div>',
            replace: true,
            compile: function() {

                return function linking(scope, iElm, iAttrs) {
                    /**
                     * { function to hide drop down on blur }
                     */
                    scope.blurOut = function() {
                        scope.show = false;
                        if (scope.selectedName == "" || !scope.selectedName) {
                            scope.selectedName = scope.lastSelected;
                        }
                    }

                    /**
                     * { function to check a partical item in drop down }
                     *
                     * @param      {<type>}  item    object of item to select
                     * @param      {<type>}  event   The event
                     */
                    scope.checkItem = function(item, event) {
                        scope.selectedName = item.name;
                        scope.lastSelected = scope.selectedName;
                        scope.show = false;
                        scope.callback({ "item": item });
                    }

                    //array of id's used to select items based on id--- (used because obj is multilevel and cant be selected based on index)
                    scope.idHash = [];
                    if (scope.ddData) {
                        scope.ddData.forEach(function(x) {
                            scope.idHash.push(x.id);
                        });
                    }

                    // block for preselected case - it selects iten based on id (uses idHash)
                    if (scope.selectedId) {
                        var elm = scope.ddData[scope.idHash.indexOf(scope.selectedId)];
                        scope.checkItem(elm);
                    }
                    //drop initially hidden 
                    scope.show = false;
                    /**
                     * Shows the drop.
                     */
                    scope.showDrop = function() {
                        if (!scope.show) {
                            scope.lastSelected = scope.selectedName;
                            scope.selectedName = '';
                            scope.show = true;
                        } else {
                            scope.show = false;
                            scope.show = true;
                        }

                    }



                }
            }
        }
    });
