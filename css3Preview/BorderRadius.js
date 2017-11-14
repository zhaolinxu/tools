// JavaScript Document

var BorderRadius={//has-shadow
	hasShadow:function(){
		if($("#demo-box-shadow")[0].checked==true){
			$("#demo-radius").addClass("has-shadow");
		}else{
			$("#demo-radius").removeClass("has-shadow");
		};
		if($("#demo-box-border")[0].checked==true){
			$("#demo-radius").css("border","1px solid #666666");
		}else{
			$("#demo-radius").css("border","0 none");
		};
	},
	showAllRadius:function(){
		var radiusSize=$("#all-radius").val()+$("#all-radius-units").val();
		$("#demo-radius").css({
			"webkitBorderRadius":radiusSize,		
			"MozBorderRadius":radiusSize,		
			"borderRadius":radiusSize
		});
		$("#code").html("-moz-border-radius:"+radiusSize+"; -webkit-border-radius:"+radiusSize+"; border-radius:"+radiusSize+";");
	},
	showRadius:function(){
		var topLeft=$("#top-left").val()+$("#top-left-units").val();
		var topRight=$("#top-right").val()+$("#top-right-units").val();
		var bottomLeft=$("#bottom-left").val()+$("#bottom-left-units").val();
		var bottomRight=$("#bottom-right").val()+$("#bottom-right-units").val();
		$("#demo-radius").css({
			"-webkit-border-top-left-radius": topLeft,
			"-webkit-border-top-right-radius": topRight,
			"-webkit-border-bottom-right-radius": bottomRight,
			"-webkit-border-bottom-left-radius": bottomLeft,
			"-moz-border-radius-topleft": topLeft,
			"-moz-border-radius-topright": topRight,
			"-moz-border-radius-bottomright": bottomRight,
			"-moz-border-radius-bottomleft": bottomLeft,
			"border-top-left-radius": topLeft,
			"border-top-right-radius": topRight,
			"border-bottom-right-radius": bottomRight,
			"border-bottom-left-radius": bottomLeft
		});
		$("#code").html("-webkit-border-top-left-radius:"+ topLeft+
			";<br /> -webkit-border-top-right-radius:"+ topRight+
			";<br /> -webkit-border-bottom-right-radius:"+ bottomRight+
			";<br /> -webkit-border-bottom-left-radius:"+ bottomLeft+
			";<br /> -moz-border-radius-topleft:"+ topLeft+
			";<br /> -moz-border-radius-topright:"+ topRight+
			";<br /> -moz-border-radius-bottomright:"+ bottomRight+
			";<br /> -moz-border-radius-bottomleft:"+ bottomLeft+
			";<br /> border-top-left-radius:"+ topLeft+
			";<br /> border-top-right-radius:"+ topRight+
			";<br /> border-bottom-right-radius:"+ bottomRight+
			";<br /> border-bottom-left-radius:"+ bottomLeft+";");
	}
};
$(document).ready(function(){
  	BorderRadius.hasShadow();
	BorderRadius.showAllRadius();
});
