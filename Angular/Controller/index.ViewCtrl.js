app.controller('ViewCtrl', function ($scope, $location, $window, appService) {
    $scope.page = {
        init: function() {
            this.dblClickEvent();
            this.clickEvent();
        },
        clickEvent: function(){
            $scope.viewObject = {
                viewShow: {
                    buildViewShow : true,
                    wareViewShow : true,
                    useViewShow : true,
                    knowViewShow : true
                },
                load: {
                    loadBar : false,
                    loadGauge : false,
                    loadPie : false,
                    loadDomain : false,
                    loadGrade : false,
                    loadUse : false,
                    loadKnow : false
                },
                toShowView: function(view) {
                    var showArray = this.viewShow;
                    switch(view) {
                        case "buildViewShow":
                            //load状态归位
                            $scope.viewObject.load.loadBar = false;
                            $scope.viewObject.load.loadGauge = false;
                            $scope.viewObject.load.loadPie = false;

                            appService.getBarFormData().then(function() {
                                if(appService.statusBar == true) {
                                    $scope.viewObject.load.loadBar = !$scope.viewObject.load.loadBar;
                                    $scope.chartOptionBar = appService.getOptionBar();
                                }
                            });
                            appService.getGaugeFormData().then(function() {
                                if(appService.statusGauge == true) {
                                    $scope.viewObject.load.loadGauge = !$scope.viewObject.load.loadGauge;
                                    $scope.chartOptionGauge = appService.getOptionGauge();
                                }
                            });
                            appService.getPieFormData().then(function () {
                                if(appService.statusPie == true) {
                                    $scope.viewObject.load.loadPie = !$scope.viewObject.load.loadPie;
                                    $scope.chartOptionPie = appService.getOptionPie();
                                }
                            });
                            break;
                        case "wareViewShow":
                            //load状态归位
                            $scope.viewObject.load.loadDomain = false;
                            $scope.viewObject.load.loadGrade = false;
                            $scope.viewObject.load.loadNum = false;

                            //先例库数据显示
                            appService.getSendData().then(function () {
                                if(appService.statusNum == true) {
                                    $scope.viewObject.load.loadNum = !$scope.viewObject.load.loadNum;
                                    $scope.firstMember = appService.sendData;
                                    $scope.monthMember = 68; //appService.sendData
                                }
                            });
                            //按钮二图表生成
                            appService.getDomainFormData().then(function () {
                                if(appService.statusDomain == true) {
                                    $scope.viewObject.load.loadDomain = !$scope.viewObject.load.loadDomain;
                                    $scope.chartOptionDomain = appService.getOptionDomain();
                                }
                            });
                            appService.getGradeFormData().then(function () {
                                if(appService.statusGrade == true) {
                                    $scope.viewObject.load.loadGrade = !$scope.viewObject.load.loadGrade;
                                    $scope.chartOptionGrade = appService.getOptionGrade();
                                }
                            });
                            break;
                        case "useViewShow":
                            $scope.viewObject.load.loadUse = false;
                            appService.getAppData().then(function () {
                                if (appService.statusUse == true) {
                                    $scope.viewObject.load.loadUse = !$scope.viewObject.load.loadUse;
                                    $scope.arrayDataApp = appService.allUseData();
                                }
                            });
                            break;
                        case "knowViewShow":
                            $scope.viewObject.load.loadKnow = false;
                            appService.getKnowData().then(function () {
                                if (appService.statusKnow == true) {
                                    $scope.viewObject.load.loadKnow = !$scope.viewObject.load.loadKnow;
                                    $scope.ayyayDataKnow = appService.allKnowData();
                                }
                            });
                            break;
                        default:
                            break;
                    }

                    for (var item in showArray) {
                        if (item == view) {
                            $scope.viewObject.viewShow[item] = !$scope.viewObject.viewShow[item];
                        }
                        else{
                            $scope.viewObject.viewShow[item] = true;
                        }
                    }
                }
            };
        },
        dblClickEvent: function() {
            //4个按钮双击事件
            $scope.toBuildUrl = function () {
                $location.path('/build');
            };
            $scope.toWareUrl = function () {
                $location.path('/ware');
            };
            $scope.toUseUrl = function () {
                $location.path('/use');
            };
            $scope.toKnowledgeUrl = function () {
                $location.path('/know');
            };
        }
    };
    $scope.page.init();
});