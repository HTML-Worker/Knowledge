//json数据获取服务
app.factory("appService", function($http) {
    var appService = {};
    var option = {
        //油表图
        chartGauge: {
            backgroundColor: 'white',
            tooltip: {
                formatter: "{b} : {c}%"
            },
            title: {
                text: '先例评审通过率',
                left: 'center',
                top: '5%'
            },
            series: [
                {
                    // name: '业务指标',
                    type: 'gauge',
                    radius: '100%',
                    center: ['50%', '70%'],    // 默认全局居中
                    title: {
                        offsetCenter: [0, '25%']     // x, y，单位px
                    },
                    axisTick: {            // 坐标轴小标记
                        show: false
                    },
                    startAngle: 180,
                    endAngle: 0,
                    //指针调整
                    pointer:{
                        length:'50%'
                    },
                    //副标题设置
                    detail: {
                        formatter: '通过率：{value}%',
                        offsetCenter:[0, '20%'],
                        textStyle: {
                            fontSize: 17,
                            color: '#5469e5',
                            fontFamily:'微软雅黑',
                            fontWeight: 'bold'
                        }
                    },
                    data: []
                    /* data: [{value: 95, name: '通过率'}]*/
                }
            ]
        },

        //柱状图
        chartBar:{
            backgroundColor: 'white',
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },

            //标题
            title: {
                text:'先例评审进度一览表',
                left: 'center',
                top:'5%'
            },

            //图例
            legend:{
                top:'80%',
                data: ['超期','快过期','正常']
            },

            color:['#e73440', '#f08300', '#18cf6e'],

            grid: {
                left: '10%',
                right: '10%',
                containLabel: true
            },

            //y轴
            yAxis: {
                axisTick: {show: false},
                data: ["审核环节","编辑环节","审核环节","初筛环节"],
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                }

            },

            xAxis:{
                axisTick: {show: false},
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                }
            },

            //数据
            series:[
                {
                    name:'快过期',
                    type:'bar',
                    stack:'a',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data:[]
                },

                {
                    name:'正常',
                    stack:'a',
                    type:'bar',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data:[]
                },

                {
                    name:'超期',
                    type:'bar',
                    stack:'a',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data:[]
                }
            ]
        },

        //环状图
        charPie: {
            backgroundColor: 'white',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            //标题
            title: {
                text:'先例推荐来源统计',
                left: 'center',
                top:'5%'
            },
            legend: {
                top:'60%',
                left:'5%',
                orient: 'vertical',
                x: 'left',
                data: []
            },

            color: ['#5867c3', '#b1b9ea', '#8d98df', '#6b79cb'],

            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '60%'],
                    center: ['70%' , '55%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: []
                }
            ]
        },

        //领域图
        charDomain:{
            backgroundColor: 'white',
            title : {
                text: '先例领域分布图',
                x:'center',
                top:'5%'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            color:
                ['#c3d8f0', '#aac7e8', '#6796ca', '#5588c1','#497ebb', '#3878c1', '#2b6cb8', '#1c5fad','#0f529f', '#064a98'].reverse(),

            series : [
                {
                    name:'面积模式',
                    type:'pie',
                    roseType : 'area',
                    radius : ['20%','60%'],
                    center : ['50%', '58%'],
                    label: {
                        normal: {
                            textStyle: {
                                color: '#6a6876',
                                fontFamily: "Microsoft Yahei",
                                fontSize: 12
                            }
                        }
                    },
                    labelLine:{
                        normal: {
                            show: true,
                            lineStyle: {
                                color: '#808e8e',
                                width: 1,
                                type: 'solid'
                            }
                        }
                    },
                    data:[
                        // {value:0, name:'商标权'},
                        // {value:0, name:'著作权'},
                        // {value:0, name:'反不正当竞争'},
                        // {value:0, name:'计算机网络域名'},
                        // {value:0, name:'特许经营'},
                        // {value:0, name:'集成电路布图设计'},
                        // {value:0, name:'植物新品种'},
                        // {value:0, name:'技术服务合同'},
                        // {value:0, name:'综合程序'},
                        // {value:0, name:'专利权'}
                    ]
                }
            ]
        },

        //等级效力图
        charGrade: {
            backgroundColor: 'white',
            title : {
                text: '先例效力等级分布图',
                x:'center',
                top:'5%'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            color:
                ['#c3d8f0', '#aac7e8', '#6796ca', '#5588c1','#497ebb', '#3878c1', '#2b6cb8', '#1c5fad','#0f529f', '#064a98'].reverse(),

            series : [
                {
                    name:'面积模式',
                    type:'pie',
                    roseType : 'area',
                    radius : ['0%','60%'],
                    center : ['50%', '58%'],
                    label: {
                        normal: {
                            textStyle: {
                                color: '#6a6876',
                                fontFamily: "Microsoft Yahei",
                                fontSize: 12
                            }
                        }
                    },
                    labelLine:{
                        normal: {
                            show: true,
                            lineStyle: {
                                color: '#808e8e',
                                width: 1,
                                type: 'solid'
                            }
                        }
                    },
                    data:[]
                    // {value:0, name:'高级法院的其他先例'},
                    // {value:0, name:'高级法院典型案例'},
                    // {value:0, name:'高级法院参阅案例'},
                    // {value:0, name:'最高法院典型案例'},
                    // {value:0, name:'最高法院公报案例'},
                    // {value:0, name:'最高法院指导性案例'},
                    // {value:0, name:'基层法院先例'},
                    // {value:0, name:'中级法院先例'}
                }
            ]
        }
    };

    //环状图封装
    appService.getOptionPie = function () {
        var i = 0;
        var returnOption = angular.copy(option.charPie);
        for(item in appService.pieFormData) {
            if(item != "TotalCount") {
                if (appService.pieFormData[item].m_Item2 > 0) {
                    returnOption.legend.data[i] = appService.pieFormData[item].m_Item1;
                    returnOption.series[0].data[i] = {
                        value:appService.pieFormData[item].m_Item2,
                        name:appService.pieFormData[item].m_Item1
                    };
                    i++;
                }
            }
        }
        return returnOption;
    };

    //柱状图封装
    appService.getOptionBar = function () {
        var returnOption = angular.copy(option.chartBar);
        var i = 3;
        for(item in appService.barFormData) {
            returnOption.series[0].data[i] = appService.barFormData[item].OvertimeCount;
            returnOption.series[1].data[i] = appService.barFormData[item].CloseToOvertimeCount;
            returnOption.series[2].data[i] = appService.barFormData[item].NormalCount;
            i --;
        }
        return returnOption;
    };

    //油表图封装
    appService.getOptionGauge = function () {
        var returnOption = angular.copy(option.chartGauge);
        returnOption.series[0].data = (Math.round((appService.gaugeFormData.PassingRate)*1000))/10;
        return returnOption;
    };

    //等级图封装
    appService.getOptionGrade = function () {
        var returnOption = angular.copy(option.charGrade);
        var i = 0;
        for (item in appService.gradeFormData) {
            if(item != "全部") {
                returnOption.series[0].data[i] = {
                    value: appService.gradeFormData[item],
                    name: item
                };
                i++;
            }
        }
        return returnOption;
    };

    //领域图封装
    appService.getOptionDomain = function () {
        var returnOption = angular.copy(option.charDomain);
        var i = 0;
        for (item in appService.domainFormData) {
            if(item != "全部") {
                returnOption.series[0].data[i] = {
                    value: appService.domainFormData[item],
                    name: item
                };
                i++;
            }
        }
        return returnOption;
    };

    //知产案例应用与法规知识库数据整合
     appService.allUseData = function () {
        var dictionaryApp = {
            "TypicalCase":"先例数",
            "BaseJudgement":"基础案例数",
            "CodeNum":"案例要旨数",
            "Keystone":"知产码数",
            "RefTimes":"先例被援引次数"
        };
         var data = getAllMix(dictionaryApp, appService.useData);
         return data
    };

     appService.allKnowData = function () {
         var dictionaryKnow = {
             "Law":"法律库",
             "View":"观点库",
             "Book":"图书库",
             "Magzine":"期刊库",
             "KeystoneProvision":"对应案例要旨法条库"
         };
         var data = getAllMix(dictionaryKnow, appService.knowData);
         return data;
     };

    //数据获取组装成json格式
     getAllMix = function ( dictionary,data) {
         var array = [];
         for (var item in data) {
             if (data[item] < 0) {
                 data[item] = 0;
                 var newObj = {
                     "name": dictionary[item],
                     "value": data[item]
                 };
             }else {
                 var newObj = {
                     "name": dictionary[item],
                     "value": data[item]
                 };
             }

             array.push(newObj);
         }
         return array;
     };

    //页面数据获取
    var prefix = "http://10.200.50.205:1025/api/Main/";
    var urls = {
        urlBar: prefix + "GetCaseReviewSchedule",
        urlGauge: prefix + "GetCasePassingRate",
        urlPie: prefix + "GetTypicalCaseSourceStat",
        urlDomain: prefix + "GetCaseField",
        urlGrade: prefix + "GetEffectiveLevel",
        urlSend: prefix + "GetTotal",
        urlUse: prefix + "GetKnowledgebaseApplicationCount",
        urlKnow: prefix + "GetLawKnowledgebaseCount"
    };

    //柱状图表
    appService.getBarFormData = function () {
        return $http.get(urls.urlBar).then (
            function(result ) {
                if(result.status == 200) {
                    appService.statusBar = true;
                    //遍历数据，将等于0的置为空
                    for (item in result.data.Data) {
                        for (i in result.data.Data[item]) {
                            if (result.data.Data[item][i] == 0) {
                                result.data.Data[item][i] = "";
                            }
                        }
                    }
                    appService.barFormData = result.data.Data;
                }
            });
    };
    //油表图
    appService.getGaugeFormData = function () {
        return $http.get(urls.urlGauge).then (
            function(result ) {
                if(result.status == 200) {
                    appService.statusGauge = true;
                    appService.gaugeFormData = result.data;
                }
            });
    };
    //环状图
    appService.getPieFormData = function () {
        return $http.get(urls.urlPie).then (
            function(result ) {
                if(result.status == 200) {
                    appService.statusPie = true;
                    appService.pieFormData = result.data.Data;
                }
            });
    };

    //先例领域分布
    appService.getDomainFormData = function () {
        return $http.get(urls.urlDomain).then (
            function(result ) {
                if(result.status == 200) {
                    appService.statusDomain = true;
                    appService.domainFormData = result.data;
                }
            });
    };

    //等级图封装
    appService.getGradeFormData = function () {
        return $http.get(urls.urlGrade).then (
            function(result ) {
                if(result.status == 200) {
                    appService.statusGrade = true;
                    appService.gradeFormData = result.data;
                }
            });
    };

    //先例库数据
    appService.getSendData = function () {
        return $http.get(urls.urlSend).then (
            function(result ) {
                if(result.status == 200) {
                    appService.statusNum = true;
                    appService.sendData = result.data;
                }
            });
    };

    //知产案例应用
    appService.getAppData = function () {
        return $http.get(urls.urlUse).then (
            function(result ) {
                if(result.status == 200) {
                    appService.statusUse = true;
                    appService.useData = result.data;
                }
            });
    };

    //法规知识库
    appService.getKnowData = function () {
        return $http.get(urls.urlKnow).then (
            function(result) {
                if(result.status == 200) {
                    appService.statusKnow = true;
                    appService.knowData = result.data;
                }
            });
    };

    return appService;
});