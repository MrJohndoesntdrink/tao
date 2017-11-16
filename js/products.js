// JavaScript Document
var i=0;
var timer;
$(function(){
	$(".content1 li").eq(0).css("display","block").siblings().css("display","none");
	Show();


	$(".list li").hover(function(){
			clearInterval(timer);
			i=$(this).index();
			$(".content1 li").eq(i).css("display","block").siblings().css("display","none");
			$(".list li").eq(i).addClass("bg").siblings().removeClass("bg");
	},function(){
			Show();
	});




		$("figure").hover(function(){
			clearInterval(timer);
	},function(){
			Show();
	});




	});



function Show(){
	timer=setInterval(function(){		
		i++;
		if(i==7){
			i=0;	
		}
		$(".content1 li").eq(i).css("display","block").siblings().css("display","none");
		$(".list li").eq(i).addClass("bg").siblings().removeClass("bg");
	},4000);
}