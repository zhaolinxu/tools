// JavaScript Document

var BoxShadow={
	shadowsCount:1,
	checkTxtColor:function(){
		$("#demo").css("color","#"+$("#demo-text-color").val());
	},
	showShadow:function(){
		var theShadow="";
		var shadowCount=1;
		while ($("#shadow-container" + shadowCount).length > 0) {
			var shadowHOffset=$("#h-offset"+shadowCount).val()+$("#h-offset-units" + shadowCount).val();
			var shadowVOffset=$("#v-offset"+shadowCount).val()+$("#v-offset-units" + shadowCount).val();
			var shadowBlur=$("#blur"+shadowCount).val()+$("#blur-units" + shadowCount).val();
			var shadowColor="#" + $("#shadow-color" + shadowCount).val();
			shadowCount++;
			if (theShadow == "") {
				theShadow= shadowHOffset + " " + shadowVOffset + " " + shadowBlur + " " + shadowColor;
			}else {
				theShadow = theShadow + ", " + shadowHOffset + " " + shadowVOffset + " " + shadowBlur + " " + shadowColor;
			}
		}
		$("#demo").css("text-shadow",theShadow);
		$("#code").html("text-shadow:"+theShadow+";");
	},
	addShadow:function(){
		BoxShadow.shadowsCount++;
		$("#shadow-container").clone().insertBefore("#shadow-buttons");
		
		$("#shadow-container").attr("id","shadow-container"+BoxShadow.shadowsCount);
		$("#shadow-container"+BoxShadow.shadowsCount+" h3").html("文本阴影"+BoxShadow.shadowsCount);
		
		$("#h-offset").attr("id","h-offset"+BoxShadow.shadowsCount).addClass("fd_slider_cn_halfSize fd_tween fd_tween fd_slider_cb_update_BoxShadow.showShadow fd_range_-10_10 fd_slider_cn_theSlider");
		$("#h-offset-units").attr("id","h-offset-units"+BoxShadow.shadowsCount);
		$("#v-offset").attr("id","v-offset"+BoxShadow.shadowsCount).addClass("fd_slider_cn_halfSize fd_tween fd_tween fd_slider_cb_update_BoxShadow.showShadow fd_range_-10_10 fd_slider_cn_theSlider");
		$("#v-offset-units").attr("id","v-offset-units"+BoxShadow.shadowsCount);
		$("#blur").attr("id","blur"+BoxShadow.shadowsCount).addClass("fd_slider_cn_halfSize fd_tween fd_tween fd_slider_cb_update_BoxShadow.showShadow fd_range_0_20 fd_slider_cn_theSlider");
		$("#blur-units").attr("id","blur-units"+BoxShadow.shadowsCount);
		$("#shadow-color").attr("id","shadow-color"+BoxShadow.shadowsCount);
		$("#shadow-container"+BoxShadow.shadowsCount).css("display","block");
		fdSliderController.create();
		jscolor.init();
		BoxShadow.showShadow();
	},
	deleteShadow:function(){
		if ($("#shadow-container" + BoxShadow.shadowsCount).length > 0) {
			$("#shadow-container" + BoxShadow.shadowsCount).remove();
			BoxShadow.shadowsCount--;
		}
		BoxShadow.showShadow();
	}
};
$(document).ready(function(){
	BoxShadow.showShadow();
});
