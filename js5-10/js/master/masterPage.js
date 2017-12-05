"use strict";
angular.module("app")
    .factory("masterPage", function ($stateParams, $state) {
        return {
            pagesClick: function (a,vm) {//点击页数跳转
                vm.params.page = a.x;
                $state.go("master", vm.params);
                console.log(vm.params);
            },
            pageKed: function (e,vm) {//自定义每页的条数 键盘事件
                var keycode = window.event ? e.keyCode : e.which;
                if (keycode == 13) {
                    vm.params.page = 1;
                    $state.go("master", vm.params)
                }
            },
            pagesClickS: function (vm) {//首页
                vm.params.page = 1;
                $state.go("master",vm.params)
            },
            pagesClickSy: function (vm) {//上一页
                if (vm.params.page > 1) {
                    vm.params.page = vm.params.page - 1;
                    $state.go("master", vm.params);
                }
                else {
                    bootbox.alert("当前页为首页");
                }
            },
            pagesClickXy: function (vm) {//下一页
                if (vm.params.page < vm.pages) {
                    vm.params.page = parseInt(vm.params.page) + 1;
                    $state.go("master", vm.params)
                }
                else {
                    bootbox.alert("当前页为末页");
                }
            },
            pagesClickM: function (vm) {//末页
                vm.params.page = vm.pages;
                $state.go("master", vm.params)
            },
            pagesNumClick: function (vm) {//跳转指定页面
                if (vm.pagesNum <= vm.pages && vm.pagesNum > 0) {
                    vm.params.page = parseInt(vm.pagesNum);
                    $state.go("master", vm.params)
                } else {
                    bootbox.alert({
                        message: "请输入正确的页数",
                        size: 'small'
                    });
                }
            },
            pageArr: function (vm) {//循环添加页
                if (vm.pages > 5) {
                    vm.params.page = parseInt(vm.params.page);
                    if (vm.params.page >= 3 && vm.params.page <= vm.pages - 3) {
                        vm.pageCycle = [vm.params.page - 2, vm.params.page - 1, vm.params.page, vm.params.page + 1, vm.params.page + 2];
                    } else {
                        if (vm.params.page < 3) {
                            vm.pageCycle = [];
                            for (var e = 1; e <= 5; e++) {
                                vm.pageCycle.push(e);
                            }
                        } else if (vm.params.page > vm.pages - 3) {
                            vm.pageCycle = [];
                            var g = vm.pages - 4;
                            for (var f = g; f <= vm.pages; f++) {//循环添加页
                                vm.pageCycle.push(f);
                            }
                        }
                    }
                }
                else {
                    vm.pageCycle = [];
                    for (var y = 1; y <= vm.pages; y++) {//循环添加页
                        vm.pageCycle.push(y);
                    }
                }
            }
        }
    });