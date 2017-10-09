var orderDetail={
	init:function(){
		$(".mengban").height($(document).height()).show();
		$(".wxMengban").height($(document).height()).show();
    },
	closeSuccessTips:function(obj){
	  $(obj).parent().parent().slideUp();	
	}
}
$(function(){
  	orderDetail.init();
});