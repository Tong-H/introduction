$(document).ready(function (){
    var num = JSON.parse(sessionStorage.getItem("people"));//取身份数组
    console.log(num);
    var kills = JSON.parse(sessionStorage.getItem("kills"));//取死亡名单
    if(kills == undefined){
        kills = [];
    }
    console.log(kills);
    var main = document.getElementsByClassName("main-3");
    for(var b = 0;b < num.length;b++){
        if(b>=1){
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
    for(var c = 0;c < main.length;c++){
        if(kills.indexOf(c) != -1){
            $(".main-3").eq(c).find(".main-2-box").css({"background-color":"#f0f0f0"});
        }
    }
    });
$("button").click(function btn(){
    location.href = ("法官台本.html")
});
