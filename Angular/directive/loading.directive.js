app.directive("loaderDirective", function() {
    function link($scope, element, attrs) {
        $scope.$watch(attrs['load'], function() {
            var load = $scope.$eval(attrs.load);
            if (load !== undefined) {
                if (!load) {
                    $(element[0]).append("<div class='loader'></div>" );
                }
                else {
                    $(element[0]).find(">.loader").remove();
                }
            }
        });
    }
    return {
        restrict: "A",
        link: link
    };
});