angular.module("app")
    .factory("pathUrl", function () {
        return {
            masterList_url:"/carrots-admin-ajax/a/article/search", //列表渲染
            masterTypeClick_url: "/carrots-admin-ajax/a/u/article/status",//状态更改
            masterDeleteClick_url: "/carrots-admin-ajax/a/u/article/",//删除数据

            //新增页面
            plusEditid_url: "/carrots-admin-ajax/a/article/",//编辑页面渲染信息
            plusImgUpload_url: "/carrots-admin-ajax/a/u/img/task",//图片上传
            plusOnline_url: "/carrots-admin-ajax/a/u/article/"//点击上传
        }
    });