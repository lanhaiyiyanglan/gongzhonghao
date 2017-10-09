var uploader = uploadJSSDK;
function upload(e) {
	var files = e.target.files;
	//上传
	for (var i = 0; i < files.length; i++) {
		uploader({
			file: files[i],   //文件，必填,html5 file类型，不需要读数据流
			token: 'UPLOAD_AK_TOP MjMzMTY4NTg6ZXlKa1pYUmxZM1JOYVcxbElqb2lNU0lzSW1sdWMyVnlkRTl1YkhraU9pSXdJaXdpYm1GdFpYTndZV05sSWpvaVozVnphR1Z1YW1saGIzbHZkU0lzSW1WNGNHbHlZWFJwYjI0aU9pMHhmUTplZWY1Nzc5Y2YzNDNmYjRhNzRmYjAyMDQ5OGU3YWZlMGJmNmI0MmUw',  //token，必填
			name: new Date().getTime(),
			dir: '/pic',  //目录，选填，默认根目录''
			retries: '0',  //重试次数，选填，默认0不重试
			maxSize: '2048000',  //上传大小限制，选填，默认0没有限制
			callback: function (percent, result) {
				//percent（上传百分比）：-1失败；0-100上传的百分比；100即完成上传
				//result(服务端返回的responseText，json格式)
				console.log(result)
				$('#upfile').val('');
				if (result.code == 'OK') {
					var doms = $('<li><img src=' + result.url + '><i onClick="del(this);"></i></li>');
					$(doms).insertBefore("#addBtn");
				} else {
					alert('图片大小不能超过2M！');
				}
				if ($("#addImg li").length <= 4) {//限制图片张数
					$("#addBtn").show();
				} else {
					$("#addBtn").hide();
				}
			}
		});
	}
}
//删除上传的图片
function del(obj) {
	if ($("#addImg li").length <= 4) {//限制图片张数
		$("#addBtn").show();
	} else {
		$("#addBtn").hide();
	}
	$(obj).parent().remove();
}
/*文字截取*/
function remainSub2(whatIn, number) {
	whatIn = "#" + whatIn;
	if ($(whatIn).val().length >= number) {
		$(whatIn).val($(whatIn).val().substr(0, number - 1));
	}
}
$(function(){
     $("#addpicSure").click(function () {
				var img = $('#addImg').children('li').not('#addBtn').children('img');
				var imgVal = [];
				for (var n = 0; n < img.length; n++) {
					imgVal.push($($(img)[n]).attr('src'));
				}
				console.log(imgVal)
				$.ajax({
					type: "POST",
					url: "",
					dataType: "json",
					data: {
						feedText: $('#feedText').val(),
						filepath: imgVal.join(';')
					},
					success: function (data) {
						
					},
					error: function (x, e) {
					},
					complete: function (x) {
					}
				});
		});
});
