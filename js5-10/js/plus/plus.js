angular.module("app")
    .controller("plus", function (plusFactory, $stateParams, $state, $scope) {
        var vm = this;
        scope = $scope;
        vm.item = $state.params;
        vm.ok = true;//隐藏表单操作成功√
        vm.no = true;//隐藏表单操作失败×
        vm.item.industryHide = true;//行业大图显示隐藏

        vm.imgUpload = function () {//图片上传
            plusFactory.imgUpload(vm, scope)
        };

        vm.imgDelete = function () {//图片删除按钮
            plusFactory.imgDelete(vm)
        };
        vm.typeClick = function () {//type为行业大图时出现表单
            plusFactory.typeClick(vm)
        };
        if ($stateParams.id != undefined) {//编辑状态
            $(".plus-main1").html("<strong>编辑Article</strong>");
            plusFactory.plusEdit_Http(vm);
            vm.online = function (a) {//点击上线
                plusFactory.online1(a, vm);
            };
        }
        else {//新增状态
            vm.online = function (a) {//点击上线
                plusFactory.online2(a, vm);
            }
        }
        vm.cancel = function () {//取消按钮
            plusFactory.cancel();
        }
    });


/*
 $.ajax({
 url: '/carrots-admin-ajax/a/u/img/task',
 method: 'POST',
 data: formDa,
 contentType: false, // 注意这里应设为false
 processData: false,
 cache: false
 }).done(function (res) {

 }).fail(function () {
 vm.no = false;//显示表单操作失败×
 vm.ok = true;
 });
 */
/*
 vm.imgUpload = function () {//图片上传
 var file = document.getElementById("upload").files[0];
 var formDa = new FormData();//新建formdata对象
 onProgress: function(file, loaded, total) {
 var percent = Math.round(loaded / total * 100);
 $("progress").css("visibility", "visible").val(percent);
 $("#uploadProgress").html(percent + "%");
 };
 formDa.append("file", file);
 $http({
 method: "post",
 url: "/carrots-admin-ajax/a/u/img/task",
 data: formDa,
 headers: {'Content-Type': undefined}
 }).then(function successCallback(res) {
 vm.no = true;
 vm.imgurl = res.data.data.url;//获取图片url
 vm.ok = false;//显示表单操作成功√
 }, function errorCallback() {
 vm.no = false;//显示表单操作失败×
 vm.ok = true;
 });
 };
 */