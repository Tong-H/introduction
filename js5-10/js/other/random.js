$(".sidebar2").hide();
$(".sidebar4").hide();
$(".sidebar1").click(function () {//侧边导航栏点击隐藏和显示
    $(".sidebar2").toggle();
});
$(".sidebar3").click(function () {//侧边导航栏点击隐藏和显示
    $(".sidebar4").toggle();
});
$("input").focus(function () {//聚焦样式
    $("input").css({
        "border": "red",
        "box-shadow": "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(237, 27, 36, 0.6)"
    })
});
$("input").blur(function () {//失焦样式
    $("input").css({"border": "none", "box-shadow": "none"})
});

var upload = new FileReader();//创建FileReader对象
function img(a) { //创建onchange函数
    var file = a.files[0];//创建变量遍历input的文件信息
    $(".imgName").html(file.name);//操作dom改变名称
    if (Math.round(file.size / 1024) > 1024) {//判断字节除以1024后是否大于1024
        $(".imgSize").html(parseFloat(file.size / 1024 / 1024).toFixed(2) + "MB");//true单位为MB
    } else {
        $(".imgSize").html(Math.round(file.size / 1024) + "KB");//false单位为KB
    }
    upload.onloadend = function (e) {
        document.getElementById("preview").src = e.target.result;//获取文件路径预览图片
    };
    upload.readAsDataURL(file);//将文件转换为DataURL
    if($("#plusList")[0]) {
        $("#plusList")[0].style.display="table-row";//显示表格行
    }else{
        $("#plusList").css("display", "table-row");//显示表格行
    }
}