
jQuery(function($){
    var daimg=$(".daimg");
    daimg.click(function(){
        location.href="../index.html";
    })
     var code=$(".yanzheng .yzm");
     var zimu='qwertyuiopasdfghjklzxcvbnm1234567890';
    yanzhengma1();
    yanzhengma2();
    function yanzhengma1(){
        var res='';
        for(var i=0;i<4;i++){
            res+=zimu[parseInt(Math.random()*36)];
        }
        code[0].innerHTML=res;
    };
    function yanzhengma2(){
        var res='';
        for(var i=0;i<4;i++){
            res+=zimu[parseInt(Math.random()*36)];
        }
        code[1].innerHTML=res;
    };
    code[0].onclick=function(){
        yanzhengma1();
    };
    code[1].onclick=function(){
        yanzhengma2();
    };

    // var zt=location.search.slice(4);
    //  var dl=$(".dl");
    //  var zhuce=$(".zhuce");
    //  var tiao_zhuce=$(".dl .tiao_zhuce");
    //  var qudenglu=$(".zhuce .qudenglu");
    //  if(zt=="dl"){
    //     zhuce.hide();
    //     dl.show();
    // };
    // if(zt=="zc"){
    //     dl.hide();
    //     zhuce.show();
    // }
    //  tiao_zhuce.click(function(){
    //     dl.hide();
    //     zhuce.show();
    //  })
    //  qudenglu.click(function(){
    //    zhuce.hide();
    //     dl.show();
    //  });
     var shoujihao=$(".zhuce .zhu .bo .username");
     var zc_pass1=$(".zhuce .password1");
     var zc_pass2=$(".zhuce .password2");
     var zc_btn=$(".zhuce .dl_btn");
     var dl_btn=$(".dl .dl_btn");
     var zc_yan=$(".zhuce .yan");
     var dl_yan=$(".dl .yan");
     var ts5=$(".zhuce .ts5");
     var ts6=$(".zhuce .ts6");
     var ts7=$(".zhuce .ts7");
     var ts8=$(".zhuce .ts8");
     var ts1=$(".dl .ts1");
     var ts2=$(".dl .ts2");
     var ts3=$(".dl .ts3");
     var dl_shoujihao=$(".dl .bo .username");
     var dl_mima=$(".dl .password");
     dl_shoujihao.on("change",function(){
        var _dl_shoujihao=dl_shoujihao.val();
        if(!(/^1[34578]\d{9}$/.test(_dl_shoujihao))){ 
            ts1.css({"visibility":"visible"});
            return false;
        }else{
            ts1.css({"visibility":"hidden"});
        };
        // $.ajax({
        //     url:"../api/denglu.php",
        //     data:{username:_dl_shoujihao},
        //     success:function(data){
        //         if(data=="no"){
        //             ts1.css({"visibility":"visible"});
        //         }else{
        //             ts1.css({"visibility":"hidden"});
        //         }
        //     }
        // });
     });
     // dl_mima.on("change",function(){
     //    var _dl_shoujihao=dl_shoujihao.val();
     //    var _dl_mima=dl_mima.val();
     //    $.ajax({
     //        url:"../api/denglu.php",
     //        data:{
     //            username:_dl_shoujihao,
     //            password:_dl_mima,
     //            type:"reg"
     //        },
     //        success:function(data){console.log(data)
     //            if(data=="fail"){
     //                ts2.css({"visibility":"visible"});
     //            }else{
     //                ts2.css({"visibility":"hidden"});
     //            }
     //        }
     //    });
     // });
     dl_btn.on("click",function(){
        //var dl_ts=$(".dl .ts");
        if(dl_yan.val()!=code[0].innerHTML){
            ts3.css({"visibility":"visible"});
            return false;
        }else{
            ts3.css({"visibility":"hidden"});
        };
        // if(dl_ts.css("visibility")=="visible"){
        //     return false;
        // };
        //alert("恭喜你登录成功！");
        //location.href="../index.html";
    });

     shoujihao.on("change",function(){
        var _shoujihao=shoujihao.val();
        if(!(/^1[34578]\d{9}$/.test(_shoujihao))){ 
            ts5.css({"visibility":"visible"});
            return false;
        }else{
            ts5.css({"visibility":"hidden"});
        };
        // $.ajax({
        //     url:"../api/reg.php",
        //     data:{username:_shoujihao},
        //     success:function(data){
        //         if(data=="fail"){
        //             ts5.css({"visibility":"visible"});
        //             ts5.html("该用户已经被注册，你换一个吧");
        //         }else{
        //             ts5.css({"visibility":"hidden"});
        //         }
        //     }
        // });
     });
     zc_pass1.on("change",function(){
        var _zc_pass1=zc_pass1.val();
        if(!/^[^\s]{6,20}$/.test(_zc_pass1)){
            ts6.css({"visibility":"visible"});
            return false;
        }else{
            ts6.css({"visibility":"hidden"});
        }
     });
     zc_pass2.on("change",function(){
        var _zc_pass2=zc_pass2.val();
        if(!/^[^\s]{6,20}$/.test(_zc_pass2)){
            ts7.css({"visibility":"visible"});
            return false;
        }else{
            ts7.css({"visibility":"hidden"});
        }
     });

     zc_btn.on("click",function(){
        //var zc_ts=$(".zhuce .ts");
        if(zc_yan.val()!=code[1].innerHTML){
            ts8.css({"visibility":"visible"});
            return false;
        }else{
            ts8.css({"visibility":"hidden"});
        };
        // if(zc_ts.css("visibility")=="visible"){
        //     return false;
        // }
        // $.ajax({
        //     url:"../api/reg.php",
        //     data:{
        //         username:shoujihao.val(),
        //         password:zc_pass1.val(),
        //         type:"reg"
        //     },
        //     success:function(data){
        //         if(data=="success"){
        //             alert("恭喜你注册成功！");
        //             zhuce.hide();
        //             dl.show();
        //         }else{
        //             alert("404");
        //         }
        //     }
        // });

     })
});