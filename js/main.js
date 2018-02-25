$(document).ready(function(){

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        $(".logo").css({
            'transform' : 'translate(0px, ' + wScroll/4 +'%)'
        });

        if(wScroll> $(".product-section").offset().top -($(window).height()/1.3)){
            $(".product-section figure").each(function(i){
                setTimeout(function(){
                    $(".product-section figure").eq(i).addClass("is-showing");
                }, 150* (i+1));
            });
        }

        if(wScroll>$(".large-window").offset().top-$(window).height()){
            
            $(".large-window").css({'background-position':'center '+ (wScroll -$(".large-window").offset().top) +'px'});

            var opacity = (wScroll-$(".large-window").offset().top+400) / (wScroll/5);

            $(".window-tint").css({'opacity':opacity});
        }

        if(wScroll>$(".blog-posts").offset().top-$(window).height()){

            var offset = Math.min(0, wScroll - $(".blog-posts").offset().top +$(window).height()-350);
            $(".post-1").css({'transform':'translate('+offset+'px, '+Math.abs(offset*0.2)+'px)'});
            $(".post-3").css({'transform':'translate('+Math.abs(offset)+'px, '+Math.abs(offset*0.2)+'px)'});
        }

    });

    $("figure").hover(function(){
        $(this).find("figcaption").css("left", "0%");
        $(this).find("img").css("transform", "scale(1.3)");
        }, function(){
        $(this).find("figcaption").css("left", "-100%");
        $(this).find("img").css("transform", "scale(1)");
    });


});