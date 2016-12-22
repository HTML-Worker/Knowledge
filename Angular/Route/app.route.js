app.config(['$routeProvider', function($routeProvider)  {
        $routeProvider
            .when('/', {
                templateUrl: './index.html',
                controller: 'ViewCtrl'
            })
            .when('/build', {
                templateUrl: './index.html',
                controller: 'ViewCtrl'
            })
            .when('/ware', {
                templateUrl: './Angular/urlTo/test.html'
            })
            .when('/use', {
                templateUrl: './Angular/urlTo/test.html'
            })
            .when('/know', {
                templateUrl: './Angular/urlTo/test.html'
            })

            .otherwise({redirectTo: '/'});
    }]);
