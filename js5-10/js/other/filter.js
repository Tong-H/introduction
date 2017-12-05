app.filter("listStatus1",function (){//状态过滤器
    return function(x){
        x=(x == 2)?"上线":"草稿";
        return x
    }
});
app.filter("listStatus2",function (){//改变状态的过滤器
    return function(x){
        x=(x == 1)?"上线":"下线";
        return x
    }
});
app.filter("listType",function (){//改变类型
    return function(x){
        switch (x){
            case 0:
                x="找职位";
                break;
            case 1:
                x="找首页";
                break;
            case 2:
                x="找精英";
                break;
            case 3:
                x="行业大图";
                break;
        }
        return x
    }
});
app.filter("search2",function (){//改变类型
    return function(x){
        switch (x){
            case 0:
                x="找职位";
                break;
            case 1:
                x="找首页";
                break;
            case 2:
                x="找精英";
                break;
            case 3:
                x="行业大图";
                break;
        }
        return x
    }
});
/*
app.filter("time",function(){
   return function(a,b,c){
       a.substring(0,4);
       b.substring(5,7);
       c.substring(8,10);
   }
});
*/
