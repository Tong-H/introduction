var number;/*总人数*/

var people1 = document.getElementById("people1");/*幽灵*/
var people2 = document.getElementById("people2");/*杀手*/
function deliver(){
    number = document.getElementById("numeber").value;
    people1.innerHTML = Math.round(number/4*3);
    people2.innerHTML = Math.round(number-Math.round(number/4*3));
    return people2.innerHTML;
}
/*输入人数*/
function ip() {
     number = document.getElementById("numeber").value;
    var ldentity = [];

    console.log(number)

    if (number >= 4 && number <= 18) {
        //分配幽灵与杀手
        //number = document.getElementById("numeber").value;
        for(var a=number-1; a>=0; a--){
            if(a<deliver()){
                ldentity[a]=0;
            }
            else{
                ldentity[a]=1;
            }
        }
        ldentity=shuffle(ldentity);

        console.log(ldentity);
        sessionStorage.setItem("people",JSON.stringify(shuffle(ldentity)));
        window.location.href = "task2-3.html";
    }
    else {
        alert("请输入正确的玩家数量");
        document.getElementById("numeber").value = "";
    }
}
//console.log(ldentity);
//生成数组
function shuffle(ldentity) {/*需要乱序的数组*/
    var length = ldentity.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
        rand = ~~(Math.random() * (index + 1));
        if (rand !== index) {
            shuffled[index] = shuffled[rand];
        }
        shuffled[rand] = ldentity[index];
    }
    return shuffled;
}
//console.log(shuffle(ldentity));
//数组乱序


