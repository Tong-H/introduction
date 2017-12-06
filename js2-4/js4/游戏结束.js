var m=JSON.parse(sessionStorage.getItem("m"));//杀手
var n=JSON.parse(sessionStorage.getItem("n"));//平民
var y=JSON.parse(sessionStorage.getItem("y"));//已死的杀手
var s=JSON.parse(sessionStorage.getItem("s"));//已死的平民
var kills = JSON.parse(sessionStorage.getItem("kills"));//取死人名单
var ii = JSON.parse(sessionStorage.getItem("ii"));//取死人身份
var h=Math.round((y+s)/2);//天数
console.log(m,n,y,s,h);
console.log(kills);
console.log(ii);
var main2=document.getElementsByClassName("main-2");
$(".td1").text("杀 手剩余"+(m-y)+"人");
$(".td2").text("平 民剩余"+(n-s)+"人");
if(m-y !=0){
    alert("游戏结束!   卧底胜利!")
}
else{
    alert("游戏结束!   平民胜利!")
}
$(document).ready(function (){
    for(var b = 0;b < h;b++){
        if(b>0) {
            $(".main-2").first().clone().appendTo($(".copy"));//复制生成块
        }
        $(".main-2-row-font1").last().text("第"+(b+1)+"天");
    }

    for(var c = 0;c < kills.length;c++) {
/*
        console.log(c,kills[c]);
        $(".main-2-row-font5").eq(c).text((kills[c]+1)+"号被杀手杀死，");
*/
        if(kills[c+1]%2 == 1){
            $(".main-2-row-font5").eq(c).text("杀手杀死："+(kills[c]+1)+"号被投票投死");
        }
        else{
            $(".main-2-row-font5").eq(c).text("全民投票："+(kills[c]+1)+"号被杀手杀死");
        }
    }
    for(var z = 0;z < ii.length;z++) {
        console.log(z,ii[z]);
        $(".main-2-row-font6").eq(z).text("身份是"+ii[z]);
    }
});//游戏详情
$(".footer-1").click(function (){
    window.location.href = "../js2-3/task2-1.html";
    sessionStorage.clear("btn","btn","btn3","kills");
});//再来一局
$(".footer-2").click(function (){
    window.location.href = "../js2-3/task2-1.html";
});//再来一局
$(".column-4").html(kills[kills.length-1]+1+"号被杀手杀死，"+"身份是"+ii[ii.length-1]).css({"padding": "0.5rem"});
