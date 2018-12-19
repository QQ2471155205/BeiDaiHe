$(function() {
    $(".box-hover-modal").on("mouseenter mouseleave",function(e) {  
                var w = $(this).width();  
                var h = $(this).height(); 
                var x=(e.pageX-this.offsetLeft-(w/2))*(w>h?(h/w):1);  
                var y=(e.pageY-this.offsetTop-(h/2))*(h>w?(w/h):1);  
                var dirNum=Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;  
                //alert(dirNum);
                 
                var eventType = e.type;  
                var aPos=[{left:0,top:-310},{left:450,top:0},{left:0,top:310},{left:-450,top:0}];  
                if(eventType == 'mouseenter'){  
                    $(this).find(".box-hover-modal-m").css(aPos[dirNum]).stop(true,true).animate({left:0,top:0},200);  
                }else{  
                    $(this).find(".box-hover-modal-m").stop(true,true).animate(aPos[dirNum],200);  
                }  
            });
}); 