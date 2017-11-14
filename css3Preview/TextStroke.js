// JavaScript Document

var TextStroke={
	checkTxtColor:function(){
		$("#demo-stroke").css("color","#"+$("#demo-text-color").val());
		//alert()
		if($("#demo-fill-color input[name='radio']:checked").val()=="fill"){
			$("#demo-stroke").css("webkitTextFillColor","#"+$("#fill-color").val());
		}else if($("#demo-fill-color input[name='radio']:checked").val()=="transparent"){
			$("#demo-stroke").css("webkitTextFillColor","transparent");
		}
	},
	showStroke:function(){
		
		var strokeWidth=$("#stroke-width").val()+$("#stroke-width-units").val();
		var fillColor="#"+$("#stroke-color").val();
		var theStroke=strokeWidth+" "+fillColor;
		$("#demo-stroke").css("webkitTextStroke",theStroke);
		$("#code").html("-webkit-text-stroke: " + theStroke+";");
	}
};
$(document).ready(function(){
	TextStroke.showStroke();
	TextStroke.checkTxtColor();
});
