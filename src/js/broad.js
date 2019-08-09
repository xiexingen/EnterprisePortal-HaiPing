$(document).ready(

    function(){
        var json0 = { "width":48, "height":32, "top":93, "left":-70};
        var json1 = { "width":55, "height":53.5, "top":16, "left":16};
        var json2 = { "width":73, "height":72, "top":7.5, "left":70};
        var json3 = { "width":87, "height":84.5, "top":0, "left":140 };
        var json4 = { "width":73, "height":72, "top":7.5, "left":225 };
        var json5 = { "width":55, "height":53.5, "top":16, "left":296};
        var json6 = { "width":48, "height":32, "top":93, "left":693 };
        $(".youanniu").click(
            function(){
                if(!$("#yixing li").is(":animated")){
                    //先交换位置
                    $(".no1").animate(json0,400);
                    $(".no2").animate(json1,400);
                    $(".no3").animate(json2,400);
                    $(".no4").animate(json3,400);
                    $(".no5").animate(json4,400);
                    $(".no6").animate(json5,400);
                    $(".no0").css(json6);



                    //再交换身份

                    $(".no0").attr("class","denghou");
                    $(".no1").attr("class","no0");
                    $(".no2").attr("class","no1");
                    $(".no3").attr("class","no2");
                    $(".no4").attr("class","no3");
                    $(".no5").attr("class","no4");
                    $(".no6").attr("class","no5");
                    //上面的交换身份，把no0搞没了！所以，我们让no1前面那个人改名为no0

                    if($(".no5").next().length != 0){
                        //如果no5后面有人，那么改变这个人的姓名为no6
                        $(".no5").next().attr("class","no6");
                    }else{
                        //no5前面没人，那么改变此时队列最开头的那个人的名字为no0
                        $("#yixing li:first").attr("class","no6");
                    }
                    //发现写完上面的程序之后，no6的行内样式还是json0的位置，所以强制：
                    $(".no6").css(json6);
                }
                $("#yixing").find(".no3").addClass("rotate");
            }
        );


    }

);
