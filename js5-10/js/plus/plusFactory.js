"use strict";
angular.module("app")
    .factory("plusFactory", function ($http, $stateParams, $state, pathUrl) {
        return {
            plusEdit_Http: function (vm) {
                $http.get(pathUrl.plusEditid_url + $stateParams.id)
                    .then(function (res) {//获取数据
                        vm.item.title = res.data.data.article.title;
                        vm.item.type = res.data.data.article.type + "";
                        vm.item.img = res.data.data.article.img;
                        editor.txt.html(res.data.data.article.content);
                        vm.item.url = res.data.data.article.url;
                        vm.item.industry = res.data.data.article.industry + "";
                        vm.item.createAt = res.data.data.article.createAt;
                        document.getElementById("preview").src = vm.item.img;
                        vm.item.type != 3 ? vm.item.industryHide = true : vm.item.industryHide = false;///type为行业大图时出现表单
                    }, function () {
                        bootbox.alert("服务端获取失败请稍后再试")
                    });
            },

            imgUpload: function (vm, scope) {//ajax传输formdata
                var file = document.getElementById("upload").files[0];
                var formDa = new FormData();//新建formdata对象
                formDa.append("file", file);
                var xhr = new XMLHttpRequest();//创建xhr对象
                xhr.open("POST", pathUrl.plusImgUpload_url, true);//调用open方法请求还没发送
                xhr.onload = function () {//调用open方法请求还没发送
                    if (xhr.status == 200) {
                        vm.no = true;
                        vm.ok = false;//显示表单操作成功√
                        scope.$apply();
                        vm.item.img = JSON.parse(xhr.responseText).data.url;//获取图片url
                    } else {
                        vm.no = false;//显示表单操作失败×
                        vm.ok = true;
                    }
                };
                xhr.upload.onprogress = function (e) {
                    e = e || event;
                    if (e.lengthComputable) {
                        var per = Math.floor(e.loaded / e.total * 100);
                        $("progress").val(per);
                    }
                };
                xhr.send(formDa);//发送请求
            },

            imgDelete: function (vm) {//图片删除按钮
                vm.ok = true;
                vm.no = true;
                document.getElementById("preview").src = "";
                vm.item.url = "";
                $("#plusList").css("display", "none");
                $("progress").val(0);
            },

            typeClick: function (vm) {//type为行业大图时出现表单
                vm.item.type != 3 ? vm.item.industryHide = true : vm.item.industryHide = false;
            },

            online1: function (a, vm) {//编辑下点击上线
                vm.item.content = editor.txt.html();
                vm.item.status = a;
                var url = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
                if ( vm.item.type == 4 || vm.item.industry == 4 && vm.item.industryHide == false || vm.item.title == undefined || vm.item.img == undefined || url.test(vm.item.url) == false) {
                    bootbox.alert("请完整填写表单");
                } else {
                    $http({
                        method: "PUT",
                        url: pathUrl.plusOnline_url + $stateParams.id,
                        params: vm.item
                    }).then(function () {
                        $state.go("master", {}, {reload: true});
                    }, function () {
                        bootbox.alert("上传失败")
                    });
                }
            },

            online2: function (a, vm) {//新增下点击上线
                vm.item.content = editor.txt.html();
                vm.item.status = a;
                if (vm.item.type == 4 || vm.item.industry == 4 && vm.item.industryHide == false || vm.item.title == undefined || vm.item.img == undefined || vm.item.url == undefined) {
                    bootbox.alert("请完整填写表单");
                } else {
                    $http({
                        method: "post",
                        url: pathUrl.plusOnline_url,
                        params: vm.item
                    }).then(function () {
                        $state.go("master", {}, {reload: true})
                    }, function () {
                        bootbox.alert("上传失败")
                    });
                }
            },

            cancel: function () {//取消按钮
                $state.go("master", {},{reload: true})
            }
        }
    });