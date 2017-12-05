var app = angular.module("app", ["ui.router","oc.lazyLoad"]);//ui-route路由单页跳转

app.config(function ($stateProvider,$ocLazyLoadProvider) {//将路由引擎作为函数参数传入
    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };
    $ocLazyLoadProvider.config({
        debug:true,
        events:true
    });
    $stateProvider.
        state("one", {
            url: "/one",
            template: "<h1>welcome</h1>"//页面第一个显示出来的状态
        }).
        state("two", {
            url: "/two",
            template: "<h1>公司列表</h1>"
        }).
        state("tree", {
            url: "/tree",
            template: "<h1>职员列表</h1>"
        }).
        state("master", {
            url: "/master?size&page&time1&time2&type&status&id",
            params: null,
            templateUrl: "html/master.html",
            controller: "master",
            controllerAs: "vm",
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/master/master.js',
                    'js/master/masterFactory.js',
                    'js/master/masterPage.js',
                    'js/other/pathUrl.js',
                    'css/master.css'
                ])
            }
        }).
        state("master.plus", {
            url: "/plus?title&plusType&plusStatus&plusContent&img&plusUrl",
            templateUrl: "html/plus.html",//master页面的新增页面
            controller: "plus",
            controllerAs: "vm",
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/plus/plus.js',
                    'js/plus/plusFactory.js',
                    'bower_components/wangEditor/release/wangEditor.min.js',
                    'css/plus.css'
                ])
            }
        })
});

