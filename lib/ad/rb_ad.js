$(function(){
    var content='';
    content +='<!-- 右下角动态内容 开始 -->';
    content +='<div class="float_layer" id="miaov_float_layer">';
    content +='<h2>';
    content +='<strong>';
    content +='每天领支付宝红包(点击查看教程)';
    content +='</strong>';
    content +='<a id="btn_min" href="javascript:;" class="min"></a>';
    content +='<a id="btn_close" href="javascript:;" class="close"></a>';
    content +='</h2>';
    content +='<div class="content">';
    content +='<div class="wrap">';
    content +='<a href="http://likexia.gitee.io/game/article/fuli.html" target="_blanck" title="从12月17日开始，凡是扫我的红包码，或者用我的口令领的支付宝红包，你消费抵扣之后（去便利店买个棒棒糖、买瓶水、超市买个菜就能用掉）。我将从我邀请你所得到的邀请奖励里面，退一半给你，0.1起退，上不封顶。真实有效，大家共赢。已经领取并消费抵扣的朋友，请加我QQ：505397145，或者微信：zhao_linxu，备注：返现。凭付款截图联系我进行返现退款。">';
    content +='<img src="http://likexia.gitee.io/game/images/game/fuli/face.jpg" style="width:100%;"/>';
    content +='</a>';
    content +='</div>';
    content +='</div>';
    content +='</div>';
    content +='<!-- 右下角动态内容 结束 -->';
    $("body").append(content);
	
    function miaovAddEvent(oEle, sEventName, fnHandler)
{
 if(oEle.attachEvent)
 {
  oEle.attachEvent('on'+sEventName, fnHandler);
 }
 else
 {
  oEle.addEventListener(sEventName, fnHandler, false);
 }
}
window.onload = function()
{
 var oDiv=document.getElementById('miaov_float_layer');
 var oBtnMin=document.getElementById('btn_min');
 var oBtnClose=document.getElementById('btn_close');
 var oDivContent=oDiv.getElementsByTagName('div')[0];
 var iMaxHeight=0;
 var isIE6=window.navigator.userAgent.match(/MSIE 6/ig) && !window.navigator.userAgent.match(/MSIE 7|8/ig);
 oDiv.style.display='block';
 iMaxHeight=oDivContent.offsetHeight;
 if(isIE6)
 {
  oDiv.style.position='absolute';
  repositionAbsolute();
  miaovAddEvent(window, 'scroll', repositionAbsolute);
  miaovAddEvent(window, 'resize', repositionAbsolute);
 }
 else
 {
  oDiv.style.position='fixed';
  repositionFixed();
  miaovAddEvent(window, 'resize', repositionFixed);
 }
 oBtnMin.timer=null;
 oBtnMin.isMax=true;
 oBtnMin.onclick=function ()
 {
  startMove
  (
   oDivContent, (this.isMax=!this.isMax)?iMaxHeight:0,
   function ()
   {
    oBtnMin.className=oBtnMin.className=='min'?'max':'min';
   }
  );
 };
 oBtnClose.onclick=function ()
 {
  oDiv.style.display='none';
 };
};
function startMove(obj, iTarget, fnCallBackEnd)
{
 if(obj.timer)
 {
  clearInterval(obj.timer);
 }
 obj.timer=setInterval
 (
  function ()
  {
   doMove(obj, iTarget, fnCallBackEnd);
  },30
 );
}
function doMove(obj, iTarget, fnCallBackEnd)
{
 var iSpeed=(iTarget-obj.offsetHeight)/8;
 if(obj.offsetHeight==iTarget)
 {
  clearInterval(obj.timer);
  obj.timer=null;
  if(fnCallBackEnd)
  {
   fnCallBackEnd();
  }
 }
 else
 {
  iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
  obj.style.height=obj.offsetHeight+iSpeed+'px';
  ((window.navigator.userAgent.match(/MSIE 6/ig) && window.navigator.userAgent.match(/MSIE 6/ig).length==2)?repositionAbsolute:repositionFixed)()
 }
}
function repositionAbsolute()
{
 var oDiv=document.getElementById('miaov_float_layer');
 var left=document.body.scrollLeft||document.documentElement.scrollLeft;
 var top=document.body.scrollTop||document.documentElement.scrollTop;
 var width=document.documentElement.clientWidth;
 var height=document.documentElement.clientHeight;
 oDiv.style.left=left+width-oDiv.offsetWidth+'px';
 oDiv.style.top=top+height-oDiv.offsetHeight+'px';
}
function repositionFixed()
{
 var oDiv=document.getElementById('miaov_float_layer');
 var width=document.documentElement.clientWidth;
 var height=document.documentElement.clientHeight;
 oDiv.style.left=width-oDiv.offsetWidth+'px';
 oDiv.style.top=height-oDiv.offsetHeight+'px';
}
});