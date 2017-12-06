var box = document.getElementsByClassName("box");
var a,d,c;
var myVar;
function adc(){
    for(var i=0 ;i<9;i--){
        a = Math.floor(Math.random() * 9);
        d = Math.floor(Math.random() * 9);
        c = Math.floor(Math.random() * 9);
        if(a!==d&&a!==c&&d!==c){
            break;
        }
    }
}
function rgba(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    return 'rgb('+r+','+g+','+b+')';
}
function start(){
    start2();
    start1();
}
function start2(){
    for(var count=0;count<box.length;count++){
        box[count].style.backgroundColor = "#e6e6e6";
    }
}
function start1(){
    adc();
    box[a].style.backgroundColor = rgba();
    box[d].style.backgroundColor = rgba();
    box[c].style.backgroundColor = rgba();
}
function start3(){
    if(myVar==undefined){
        myVar = setInterval('start()',1000);
    }else{
    return false;
    }
}
function stop(){
    clearInterval(myVar);
    for(var count=0;count<box.length;count++){
        box[count].style.backgroundColor = "#e6e6e6";
    }
}






