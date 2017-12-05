var txt = "<div class='txt'></div>";
$("button").before(txt);
$(".txt").css({"font-size":"2rem","color":"white","text-align":"center"});
function ajax(){
    var login = new XMLHttpRequest;//创建 XMLHttpRequest 对象
    var number = document.getElementById("555").value;//获取输入框的值
    var password = document.getElementById("666").value;//获取密码框的值
    console.log(number,password);
    var login2 = "name="+number+"&pwd="+password;//创建输入信息和密码的变量
    login.open("post","/carrots-admin-ajax/a/login","true");//
    login.setRequestHeader("Content-type","application/x-www-form-urlencoded");//发送信息
    login.send(login2);//发送请求
    login.onreadystatechange = function(){
        if(login.readyState == 4 && login.status == 200){
           var login3 = JSON.parse(login.responseText);//定义返回消息的变量
            console.log(login3);
            if(login3.message === "success"){
                window.location.href = "html/js5-2.html";
            }
            else{
                if(login3.message === "密码错误"){
                   $(".txt").html("密码错误");
                }
                else{
                    $(".txt").html("用户不存在");
                }
            }
        }
    }
}
