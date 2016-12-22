app.directive('echartsDirective', function() {
    function link($scope, element, attrs) {
        //图表模块化加载
        var myChart = echarts.init(element[0]);
        //给$scope赋值
        // var event = $scope.$eval(attrs.event);
        $scope.$watch(attrs['viewData'], function() {
            var option = $scope.$eval(attrs.viewData);
            if (angular.isObject(option)) {
                myChart.clear();
                myChart.setOption(option);
                // if (event) {
                //     myChart.on(event.name, event.func);
                // }
            }
        }, true);
        // $(window).on('resize', function() {
        //     myChart.resize();
        // });
        // $scope.getDom = function() {
        //     return {
        //         'height': element[0].offsetHeight,
        //         'width': element[0].offsetWidth
        //     };
        // };
        // $scope.$watch($scope.getDom, function() {
        //     myChart.resize();
        // }, true);
    }
    return {
        restrict: 'A',
        link: link
    };
});