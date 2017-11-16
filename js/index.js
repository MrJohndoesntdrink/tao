// JavaScript Document
var i=0;
var timer;
$(function(){
	$(".ig").eq(0).css("opacity","1").siblings().css("opacity","0");
	Showtime();

    $(".tab").hover(function(){
    	clearInterval(timer);
    	i=$(this).index();
    	Show();
    },function(){
    	Showtime();
    });

	})

function Show(){
		$(".ig").eq(i).css("opacity","1").siblings().css("opacity","0");
		$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}
function Showtime(){
	timer=setInterval(function(){
		if(i==3){
			i=-1;
		}
		i++;
		Show();
	},2000);
}