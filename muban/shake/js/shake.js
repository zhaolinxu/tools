//摇一摇部分
        var SHAKE_THRESHOLD = 2700;  
        var last_update = 0;  
        var last_time = 0;
        var count=0;
        var x = y = z = last_x = last_y = last_z = 0;  
        var canShake = 1; //摇一摇开关，1表示开，0表示关
        var sound = new Howl({ urls: ['http://static.ydmap.com.cn/themes/mobile/shake/sound/shake_sound.mp3'] }).load();
        var findsound = new Howl({ urls: ['http://static.ydmap.com.cn/themes/mobile/shake/sound/shake_match.mp3'] }).load();
        var curTime;
        var isShakeble = true;
      
        function init() {  
            if (window.DeviceMotionEvent) {  
                window.addEventListener('devicemotion', deviceMotionHandler, false);
            } else {  
                alert('对不起，您的手机无法支持摇一摇！');  
            }  
            
           
        }  
        
        function deviceMotionHandler(eventData) {  
            var acceleration = eventData.accelerationIncludingGravity;  
                curTime = new Date().getTime();  
            if ((curTime - last_update) > 100 && canShake==1) {  
                var diffTime = curTime - last_update;
             if(diffTime > 100) {    
                last_update = curTime;  
                x = acceleration.x;  
                y = acceleration.y;  
                z = acceleration.z; 
                var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
                if (speed > SHAKE_THRESHOLD) {
                	if($("#innum").html()!=undefined && $("#innum").html()>0){
                		count++;
                	    shake();
                	 }	
                }
                last_x = x;  
                last_y = y;  
                last_z = z;  
              }  
            }
           
        } 

      function shake() {
    	    canShake=0;
            $("#loading").attr('class','loading loading-show');
            $("#se").css('display','none');
            $('#res_bug').hide();
            $("#res_bug").fadeIn(2000,function(){}); 
            $("#shakeup").animate({ top: "10%",}, 500, function () {
//	            	$("#div1").addClass("img-up");
//	            	$("#div2").addClass("logo-bg");
//	            	$("#shakeup").addClass("a");
//	            $(".inner").addClass("b");
            $("#shakeup").animate({ top: "25%",}, 500, function () {	
		         $("#loading").attr('class','loading');
//		         $("#div1").removeClass("img-up");
//	            	$("#div2").removeClass("logo-bg");
//	            	$("#shakeup").removeClass("a");
//	            $(".inner").removeClass("b");
              }); 
            });
            $("#shakedown").animate({ top: "40%" }, 500, function () {
//	            	$("#div2").addClass("logo-bg");
//	            	$("#div3").addClass("img-down");
//	            $(".inner").addClass("b");
//	            $("#shakedown").addClass("c");
            	$("#shakedown").animate({ top: "25%" }, 500, function () {	
//          		 $("#div3").removeClass("img-down");
//	            	$("#div2").removeClass("logo-bg");
//	            	$("#shakedown").removeClass("c");
//	            $(".inner").removeClass("b");
            		$("#se").css('display','block');canShake=1;
            		 setTimeout(function(){if(count==0){findsound.play();save();}},2000);count=0;
                });
            });
            sound.play();
          
        }
      function save(){
    	
    	  $.getJSON("/lottery/config.do",{pagaId:pagaId[0],dataId:dataid[0]},function(res){
  	       	  if(res.success){
  	       		     canShake=0;
  	                 $("#lottery").html(res.msg);
  	                 $("#innum").html(res.innum);  
  	                 setTimeout(function(){location.href="/mobile/pay.shtml?dealId="+res.dealid+"&backUri="+res.backUri;},300);
  	       	     }else{
  	                $("#innum").html(res.innum);   
  	                $("#res_bug").html(res.msg);
          		    $('#res_bug').show();
  	             }
  	       });
      }
		
	//各种初始化
    $(document).ready(function () {
        Howler.iOSAutoEnable = false;
        FastClick.attach(document.body);
        init();
    });
		