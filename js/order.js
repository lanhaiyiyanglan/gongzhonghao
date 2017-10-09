var order={
	init:function(){
		$("#docHeight").height($(document.body).height());
		$("#mengban1").click(function(evt){
			var myRequire="";
			var evt = window.event ? window.event : evt,
			target = evt.srcElement || evt.target;
			if (target.className == "mengban") {
			   $(this).slideUp();  
			   $(".yanUl li").each(function(){
				  if($(this).hasClass("on")){
					 myRequire=$(this).text(); 
				  }
			   });
			   if($(".ckBox input").prop("checked")==true){
				  myRequire+=",尽量安排宽带"; 
			   }
			   $("#myRequire").val(myRequire);
			}
	    });
		$("#mengban2").click(function(){
		  $(this).slideUp();  
                               });
		$(".yanUl li").click(function(){
		   $(this).addClass("on").siblings().removeClass("on");	
		});
	},
	showRequire:function(obj){
		var obj="#"+obj;
		$(obj).height($("#docHeight").height()).show();
	},
	showRequire1:function(obj1,obj2){
         var obj1="#"+obj1;
         var obj2="."+obj2;
		 $(obj1).height($("#docHeight").height()).show();
         var top=($("#docHeight").height()-$(obj2).height())/2;
		 $(obj2).css("margin-top",top);
	},
	add:function(){//房间间数增加
	  $("#perHouse").text(parseInt($("#perHouse").text())+1);
	  $("#livePer").append('<input type="text" class="addinput" placeholder="姓名，每间只需填写一人">');
      order.changeColor();
	},
	Minus:function(){//房间间数减少
	  if(parseInt($("#perHouse").text())>1){
        $("#perHouse").text(parseInt($("#perHouse").text())-1);
		$("#livePer input:last-child").remove();
      }else{
        $("#perHouse").text(1);
      }
      order.changeColor();
	},
	changeColor:function(){
		if(parseInt($("#perHouse").text())>1){
		  $(".changeNum a.jian").addClass("blue");
		}else{
		  $(".changeNum a.jian").removeClass("blue");
		}
	},
	close:function(obj){
		$(obj).parent().parent().hide();
                                 $(".yanUl li").each(function(){
				  if($(this).hasClass("on")){
				      myRequire = $(this).text();
				      $("#hidSpecialRequirements").val($(this).attr("data-id"));
				  }
			   });
			   if (myRequire == "") myRequire = "无要求";
			   if($(".ckBox input").prop("checked")==true){
				  myRequire+=",尽量安排宽带"; 
			   }
			   $("#myRequire").val(myRequire);
	}
}
$(function(){
  	order.init();
});


	
