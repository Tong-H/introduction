var num = JSON.parse(sessionStorage.getItem("people"));//取身份数组
var main = document.getElementsByClassName("main-3");//html块
var btn = JSON.parse(sessionStorage.getItem("btn"));//取游戏步骤
console.log("游戏步骤"+btn);
var kills = JSON.parse(sessionStorage.getItem("kills"));
if(kills == undefined){//死亡数组
    kills=[]
}
var ii = JSON.parse(sessionStorage.getItem("ii"));
if(ii == undefined){//死亡数组
    ii=[]
}
console.log(kills);//死亡数组
console.log(ii);//死亡数组
$(document).ready(function (){ //分配身份，复制box
    for(var b = 0;b < num.length;b++){
        if(b>=1) {
            $(".main-3").first().clone(true).appendTo($("main"));//复制生成块
        }
        if(num[b] == 1){
            $(".shenf").last().html("水民");
        }
        else{
            $(".shenf").last().html("杀手");
        }
        $(".hao").last().html(b+1+"号");
    }
});
$(document).ready(function (){
    var c;
    var i;
    for(var x = 0;x < main.length;x++){
        if(kills.indexOf(x) != -1){
            $(".main-3").eq(x).find(".main-2-box").css({"background-color":"#f0f0f0"});
        }
    }//改变死人颜色
    if(btn%2 == 1){//页面为全面投票
        $("header").html("全民投票");
        $(".header-5-font").html("请选择投票");
        $(".main-3").click(function (){//点击杀人
        $(".main-3").find(".main-2-box").css({"background-color":"#fbb435"});
                $(this).find(".main-2-box").css({"background-color":"#f0f0f0"});
                c=$(this).index();
                i=$(this).find(".shenf").text();
                console.log("选定"+c+"号，"+"身份"+i);
            for(var x = 0;x < main.length;x++){//改变死人颜色
                if(kills.indexOf(x) != -1){
                    $(".main-3").eq(x).find(".main-2-box").css({"background-color":"#f0f0f0"});
                }
            }
            for(var o = 0;o <= kills.length;o++) {
                if (c == kills[o]) {
                    alert("请选择活着的玩家");
                    break;
                }
            }
        });
    }
    else{//页面为杀手杀人
        $(".main-3").click(function (){//点击杀人
            $(".main-3").find(".main-2-box").css({"background-color":"#fbb435"});
            if($(this).find(".shenf").text() == "水民"){
                $(this).find(".main-2-box").css({"background-color":"#f0f0f0"});
                c=$(this).index();
                i=$(this).find(".shenf").text();
                console.log("选定"+c+"号，"+"身份"+i);
            }
            else{
                alert("我你都杀？？？");
            }
            for(var o = 0;o <= kills.length;o++) {
                if (c == kills[o]&&i == "水民") {
                    alert("请选择活着的玩家");
                    break;
                }
            }
            for(var x = 0;x < main.length;x++){//改变死人颜色
                if(kills.indexOf(x) != -1){
                    $(".main-3").eq(x).find(".main-2-box").css({"background-color":"#f0f0f0"});
                }
            }
        });
    }
    $(".sure").click(function () {//点击存储+跳转
        if(kills.length == 0){
            if(i != null){
                kills.push(c);
                ii.push(i);
                sessionStorage.setItem("kills", JSON.stringify(kills));
                sessionStorage.setItem("ii", JSON.stringify(ii));
                window.location.href = "法官台本.html";
            }
            else{
                alert("请至少选择一个")
            }
        }
        else{
                if(i == null){
                    alert("请至少选择一个");
                }
                else if(kills.indexOf(c) != -1){
                    alert("请选择活着的玩家");
                }
                else{
                    kills.push(c);
                    ii.push(i);
                    sessionStorage.setItem("kills", JSON.stringify(kills));
                    sessionStorage.setItem("ii", JSON.stringify(ii));
                    window.location.href = "法官台本.html";
            }
        }

    });
});

