"use strict";
angular.module("app")
    .factory("masterFn", function ( $stateParams, $state,$http, pathUrl,masterPage) {
        return {
            masterList_Http:function(vm){
                $http({
                    method: "get",
                    url: pathUrl.masterList_url,
                    params: vm.params
                }).then(function successCallback(response) {
                    vm.list = response.data.data.articleList;//取列表
                    vm.total = response.data.data.total;//总条数
                    vm.params.size = response.data.data.size;//每页显示的条数
                    vm.params.page = response.data.data.page;//当前页
                    vm.pages = Math.ceil(vm.total / vm.params.size);//总页数
                    masterPage.pageArr(vm);//分页函数
                }, function errorCallback() {
                    bootbox.alert("获取article列表失败")
                });
            },
            search1: function (vm) {
                vm.params.type = (vm.timeType == 4) ? "" : vm.timeType;//若为4就为空
                vm.params.status = (vm.timeStata == 4) ? "" : vm.timeStata;
                vm.params.page = 1;
                if (Date.parse(vm.params.time2) <= Date.parse(vm.params.time1)) {//比较创建时间和修改时间
                    bootbox.alert("请选择正确的时间")
                } else {
                    vm.thisPage = 1;
                    $state.go("master", vm.params);
                }
            },
            clear: function (vm) {//清除
                vm.params.time1 = "";
                vm.params.time2 = "";
                vm.params.type = "";
                vm.params.status = "";
                $state.go("master", vm.params, {reload: true});
            },
            operate1: function (a, b) {//上下线状态
                bootbox.confirm({
                    message: "确定删除此操作不可撤销",
                    buttons: {
                        confirm: {
                            label: '确定',
                            className: 'btn-success'
                        },
                        cancel: {
                            label: '取消',
                            className: 'btn-danger'
                        }
                    },
                    callback: function (result) {
                        if (result == true) {
                            b = (b == 1) ? "2" : "1";//更改状态
                            $http({
                                method: "put",
                                url: pathUrl.masterTypeClick_url,
                                params: {//设置传递参数
                                    id: a,
                                    status: b
                                }
                            }).then(function successCallback() {
                                    $state.go("master", {}, {reload: true})
                                }, function errorCallback() {
                                    bootbox.alert("服务器正忙请稍后再试")
                                }
                            )
                        }
                    }
                })
            },
            operate2: function (a) {//删除
                bootbox.confirm({
                    message: "确定删除此操作不可撤销",
                    buttons: {
                        confirm: {
                            label: '<i class="fa fa-times"></i> 确定',
                            className: 'btn-success'
                        },
                        cancel: {
                            label: '<i class="fa fa-check"></i> 取消',
                            className: 'btn-danger'
                        }
                    },
                    callback: function (result) {
                        if (result == true) {
                            $http.delete(pathUrl.masterDeleteClick_url + a)
                                .then(function () {
                                    $state.go("master", {}, {reload: true})
                                }, function () {
                                    bootbox.alert("删除失败请稍后再试")
                                })
                        }
                    }
                });
            },
            operate3: function (a) {//编辑按钮
                $state.go("master.plus", {
                    "id": a
                })
            },
            plus: function () {//新增按钮
                $state.go("master.plus", {
                    "id": ""
                })
            }
        }
    });
