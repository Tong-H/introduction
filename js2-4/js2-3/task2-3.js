/**
 * Created by Administrator on 2017/10/13.
 */
var shuffle=JSON.parse(sessionStorage.getItem("people"));
console.log(shuffle);

/*
for(var b=0;b<=shuffle.length;b++){
    if(shuffle[b]!==1){
        document.getElementById("ldentity").innerHTML = "平民";
    }
    else{
        document.getElementById("ldentity").innerHTML = "杀手";
    }
}
*/
var c=1;
function clickCounter(){
    var total = (shuffle.length*2)-1;//总点击数
    var odd = (Math.floor(c/2))+1;//玩家人数
    var even = odd+1;//隐藏并传递比玩家人数多一个人
    if(c == total){
        document.getElementById("round1").innerHTML = odd;//玩家人数
        document.getElementById("img1").style.display = "none";//隐藏翻牌页面
        document.getElementById("box2").style.display = "block";//显示身份
        document.getElementById("next").innerHTML = "法官查看";
    }
    if(c > total){
        window.location.href = "../js4/法官日志.html";//最后跳转
    }
    if(c < total){
        if(c%2 !== 0){
            document.getElementById("round1").innerHTML = odd;//玩家人数
            document.getElementById("img1").style.display = "none";//隐藏翻牌页面
            document.getElementById("box2").style.display = "block";//显示身份
                if(shuffle[(Math.floor(c/2))]== 1){
                    document.getElementById("ldentity").innerHTML = "水民";
                }
                else{
                    document.getElementById("ldentity").innerHTML = "杀手";
                }
            document.getElementById("next").innerHTML = "隐藏并传递给"+even+"号";

        }
        else{
            document.getElementById("round1").innerHTML = odd;
            document.getElementById("img1").style.display = "inline-block";//显示翻牌页面
            document.getElementById("box2").style.display = "none";//隐藏身份
            document.getElementById("next").innerHTML = "查看"+odd+"号身份";
        }
    }
    c++;
    console.log(c);
    return c;
}
