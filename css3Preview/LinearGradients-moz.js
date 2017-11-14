// JavaScript Document

var linearGradientsMoz={
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
                var endColor="#"+$("#end-color").val();
		var HPos=$("#h-position").val()+"%";
		var VPos=$("#v-position").val()+"%";
                var Deg=$("#deg-num").val()+"deg";
		var theLinearGradient="";
		var stopsVal=[];
		var stopsString="";
		var stopPos="";
		var StopColor="";
		while($("#stop-container"+linearGradientsC).length>0){
			stopPos=$("#stop-position"+linearGradientsC).val()+"%";
			StopColor="#"+$("#stop-color"+linearGradientsC).val();
			stopsVal.push(StopColor+" "+stopPos);
			linearGradientsC++;
		}
		stopsString=stopsVal.join();
		theLinearGradient="-moz-linear-gradient("+HPos+" "+VPos+" "+Deg+", "+startColor+","+endColor;
		if (stopsString!="") {
			theLinearGradient=theLinearGradient+ ", " +stopsString  +")";
		}else {
			theLinearGradient=theLinearGradient+")";
		}
		$("#demo").css("background-image",theLinearGradient);
		$("#code").html(theLinearGradient);
	},
	addLinearGradients:function(){
		linearGradientsMoz.linearGradientsCount++;
		$("#stop-container").clone().insertBefore("#shadow-buttons");
		$("#stop-container").attr("id","stop-container"+linearGradientsMoz.linearGradientsCount);
		$("#stop-container"+linearGradientsMoz.linearGradientsCount+" h3").html("停靠"+linearGradientsMoz.linearGradientsCount);
		$("#stop-container"+linearGradientsMoz.linearGradientsCount).css("display","block")
		$("#stop-color").attr("id","stop-color"+linearGradientsMoz.linearGradientsCount);
		$("#stop-position").attr("id","stop-position"+linearGradientsMoz.linearGradientsCount).addClass("fd_slider_cn_halfSize fd_tween fd_tween fd_slider_cb_update_linearGradientsMoz.showLinearGradients fd_range_0_100 fd_slider_cn_theSlider");
		fdSliderController.create();
		jscolor.init();
		linearGradientsMoz.showLinearGradients();
	},
	delLinearGradients: function(){
		if ($("#stop-container" + linearGradientsMoz.linearGradientsCount).length > 0) {
			$("#stop-container" + linearGradientsMoz.linearGradientsCount).remove();
			linearGradientsMoz.linearGradientsCount--;
		}
		linearGradientsMoz.showLinearGradients();
	}
};
$(document).ready(function(){
	
	linearGradientsMoz.showLinearGradients();
});
