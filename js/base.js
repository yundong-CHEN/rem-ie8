$(function(){
	$(".voice_2 ul li").each(function(){
		var fold = $(this).find(".fold");
		var unfold = $(this).find(".unfold");
		if(fold.is(":hidden")){
			$(this).css('width','3.3rem')
		}else{
			$(this).css('width','1.65rem')
		}
	})
	$(".voice_2 ul li").click(function(){
		var li_index = $(this).index();
		$(this).animate({width:'3.3rem'},'3.3rem');
		$(this).find(".unfold").show();
		$(this).find(".fold").hide();
		$(this).siblings().animate({width:'1.65rem'},'3.3rem');
		$(this).siblings().find(".unfold").hide();
		$(this).siblings().find(".fold").show();
	})
})
