// JavaScript Document

var linearGradientsWebkit={
	linearGradientsCount:1,
	hasBoxShadow:function(){
		if($("#demo-box-shadow")[0].checked==true){
			$("#demo").addClass("has-shadow");
		}else{
			$("#demo").removeClass("has-shadow");
		}
	},
	showLinearGradients:function(){
		var linearGradientsC=1;
		var startColor="#"+$("#start-color").val();
		var startHPos=$("#start-h-position").val()+"%";
		var startVPos=$("#start-v-position").val()+"%";
		var endColor="#"+$("#end-color").val();
		var endHPos=$("#end-h-position").val()+"%";
		var endVPos=$("#end-v-position").val()+"%";
		var theLinearGradient="";
		var stopsVal=[];
		var stopsString="";
		var stopPos="";
		var StopColor="";
		while($("#stop-container"+linearGradientsC).length>0){
			stopPos=$("#stop-position"+linearGradientsC).val();
			StopColor="#"+$("#stop-color"+linearGradientsC).val();
			stopsVal.push("color-stop(" + stopPos +"," + StopColor + ")");
			linearGradientsC++;
		}
		stopsString=stopsVal.join();
		theLinearGradient="-webkit-gradient(linear,"+startHPos+" "+startVPos+", "+endHPos+" "+endVPos+", "+"from("+startColor+"), to("+endColor+")";
		if (stopsString!="") {
			theLinearGradient=theLinearGradient+ ", " +stopsString  +")";
		}else {
			theLinearGradient=theLinearGradient+")";
		}
		$("#demo").css("background-image",theLinearGradient);
		$("#code").html(theLinearGradient);
	},
	addLinearGradients:function(){
		linearGradientsWebkit.linearGradientsCount++;
		$("#stop-container").clone().insertBefore("#shadow-buttons");
		$("#stop-container").attr("id","stop-container"+linearGradientsWebkit.linearGradientsCount);
		$("#stop-container"+linearGradientsWebkit.linearGradientsCount+" h3").html("停靠"+linearGradientsWebkit.linearGradientsCount);
		$("#stop-container"+linearGradientsWebkit.linearGradientsCount).css("display","block")
		$("#stop-color").attr("id","stop-color"+linearGradientsWebkit.linearGradientsCount);
		$("#stop-position").attr("id","stop-position"+linearGradientsWebkit.linearGradientsCount).addClass("fd_slider_cn_halfSize fd_tween fd_tween fd_slider_cb_update_linearGradientsWebkit.showLinearGradients fd_range_0_1 fd_inc_0d1 fd_slider_cn_theSlider");
		fdSliderController.create();
		jscolor.init();
		linearGradientsWebkit.showLinearGradients();
	},
	delLinearGradients: function(){
		if ($("#stop-container" + linearGradientsWebkit.linearGradientsCount).length > 0) {
			$("#stop-container" + linearGradientsWebkit.linearGradientsCount).remove();
			linearGradientsWebkit.linearGradientsCount--;
		}
		linearGradientsWebkit.showLinearGradients();
	}
};
$(document).ready(function(){
	
	linearGradientsWebkit.showLinearGradients();
});
