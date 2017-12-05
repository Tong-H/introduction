angular.module("app")
.controller("master", function ($stateParams, $state, masterPage, masterFn) {//获取服务器上的article列表
    var vm = this;
    vm.params = $state.params;
    vm.params.Page = $stateParams.page || 1;
    document.getElementsByName("input");
    vm.params.startAt = vm.params.time1 ? Date.parse(vm.params.time1) : "";//解决data转换空值为NAN的问题
    vm.params.endAt = vm.params.time2 ? Date.parse(vm.params.time2) : '';
    masterFn.masterList_Http(vm);

    /*......搜.............索....................................................*/
    vm.typeShow = $stateParams.type || "4";//输入框显示的内容
    vm.stataShow = $stateParams.status || "4";
    vm.params.time1 = $stateParams.time1 || "";
    vm.params.time2 = $stateParams.time2 || "";
    vm.search1 = function () {
        masterFn.search1(vm)
    };//搜索
    vm.clear = function () {
        masterFn.clear(vm)
    };//清除

    /*.............编辑等....按钮.................................................*/
    vm.operate1 = function (a, b) {
        masterFn.operate1(a, b)
    };
    //上下线状态
    vm.operate2 = function (a) {
        masterFn.operate2(a)
    };//删除
    vm.operate3 = function (a) {
        masterFn.operate3(a)
    };//编辑按钮
    vm.plus = function () {
        masterFn.plus()
    };//新增按钮

    /*.............分............页.............................................*/
    vm.pagesClick = function (a) {
        masterPage.pagesClick(a, vm);
    };//点击页数跳转
    vm.params.size = $stateParams.size || 10;//输入框显示每页条数 默认为10
    vm.pageKed = function (e) {
        masterPage.pageKed(e, vm)
    };//自定义每页的条数 键盘事件
    vm.pagesClickS = function () {
        masterPage.pagesClickS(vm)
    };//首页
    vm.pagesClickSy = function () {
        masterPage.pagesClickSy(vm)
    };//上一页
    vm.pagesClickXy = function () {
        masterPage.pagesClickXy(vm)
    };//下一页
    vm.pagesClickM = function () {
        masterPage.pagesClickM(vm)
    };//末页
    vm.pagesNum = vm.params.Page;//输入框显示当前页面
    vm.pagesNumClick = function () {
        masterPage.pagesNumClick(vm)
    };//跳转指定页面
});