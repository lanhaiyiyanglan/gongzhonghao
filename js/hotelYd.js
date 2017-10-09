var hotelYd={
  init:function(){
  	
  },
  search:function(obj){
    var startTime=$("#startTime").val();
  	var endTime=$("#endTime").val();
  	var picker=$("#picker").val();
  	$(obj).parent().parent().hide();
  	$(".hideBox").show();
  	$(".hdLine dl#rz dd").text(startTime);
  	$(".hdLine dl#ld dd").text(endTime);
  	$(".resetSearch span").text(picker);
  },
  reSearch:function(obj){
  	$(obj).parent().parent().toggle();
  	$(".searchBox").show();
  }
}
$(function(){
	hotelYd.init();
	var swiper = new Swiper('.ydBanner', {//顶部图片切换
      autoplay :2000,
      speed:300,
	  loop:true
    });
});