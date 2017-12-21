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
	$(".voice_2 ul li").hover(function(){
		var li_index = $(this).index();
		$(this).css('width','3.3rem')
		$(this).find(".unfold").show();
		$(this).find(".fold").hide();
		$(this).siblings().css('width','1.65rem')
		$(this).siblings().find(".unfold").hide();
		$(this).siblings().find(".fold").show();
	})
})
