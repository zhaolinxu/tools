// JavaScript Document

var Transform={
	hasBoxShadow:function(){
		if($("#demo-box-shadow")[0].checked==true){
			$("#demo").addClass("has-shadow");
		}else{
			$("#demo").removeClass("has-shadow");
		}
	},
	showTransform:function(){
            var originX=$("#originX").val()+$("#originX-units").val();
            var originY=$("#originY").val()+$("#originY-units").val();
            var transformOriginString=originX+" "+originY;
            var rotate=$("#rotate").val()+"deg";
            var scaleX=$("#scaleX").val();
            var scaleY=$("#scaleY").val();
            var translateX=$("#translateX").val()+$("#translateX-units").val();
            var translateY=$("#translateY").val()+$("#translateY-units").val();
            var skewX=$("#skewX").val()+"deg";
            var skewY=$("#skewY").val()+"deg";
            var transformString="rotate("+rotate+") scale("+scaleX+","+scaleY+") translate("+translateX+","+translateY+") skew("+skewX+","+skewY+")";
            $("#demo").css({"-moz-transform":transformString,
                "-moz-transform-origin":transformOriginString,
                "-webkit-transform":transformString,
                "-webkit-transform-origin":transformOriginString,
                "-o-transform":transformString,
                "-o-transform-origin":transformOriginString
                });
            $("#code").html("-moz-transform:"+transformString+";-moz-transform-origin:"+transformOriginString+";-webkit-transform:"+transformString+";-webkit-transform-origin:"+transformOriginString+";-o-transform:"+transformString+";-o-transform-origin:"+transformOriginString+";transform:"+transformString+";transform-origin:"+transformOriginString)
    }
};
$(document).ready(function(){
	Transform.hasBoxShadow();
	Transform.showTransform();
});
