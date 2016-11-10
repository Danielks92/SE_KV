app.directive('correctEmail', function () {
    return {
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.correctEmail = function(modelValue) {
                if (modelValue.indexOf("@") > 0 && modelValue.lastIndexOf(".") > modelValue.indexOf("@") && modelValue.lastIndexOf(".") < modelValue.length-1) {
                    return true;
                } else {
                    return false;
                }
            };

            scope.$watch("modelValue", function() {
                ngModel.$validate();
            });
        }
    };
});