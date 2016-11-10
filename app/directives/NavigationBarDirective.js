/**
 * Created by Daniel on 10.11.2016.
 */
/**
 * Created by Claudia on 08.11.2016.
 */
'use strict';
app
    .directive('headerNav', headerNav);

/**
 * Directive to display the header navigation at the top of each page
 */
function headerNav()
{
    return {
        restrict: "E",
        templateUrl: "navigation/navigation.html"/*,

         controller: ['$scope', '$element', '$attrs',

         function ($scope, $element, $attrs) {
         // executes the expression on the current scope returning the result
         // and adds it to the scope
         scope.variable = scope.$eval($attrs.yourDirective);
         console.log($scope.variable);
         }
         ],

         controllerAs: "headerNav"*/
    };
};
