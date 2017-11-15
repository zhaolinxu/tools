(function ($) {  
    $.fn.lazyloading = function (options) {  
        var defaults = {  
            preyimg: "/load.gif",  
            picpath: "data-original",  
            container: $(window),  
            loadfirst: false, //进入页面后是否加载当前页面的图片  
            defaultHeightID: "lazyloadingHeight"//页面上默认高度的input标签id  
            //imgPaddingID: "lazyloadingPadding"//img的padding值  
        };  
        var params = $.extend({}, defaults, options || {});  
        params.cache = [];  
        $(this).each(function () {  
            var node = this.nodeName.toLowerCase(), url = $(this).attr(params["picpath"]), preyimg = params["preyimg"];  
            var defaultheight = $("#" + params["defaultHeightID"]).val(); //, padding = $("#" + params["imgPaddingID"]).val(); //  
            //重组  
            var data = {  
                obj: $(this),  
                tag: node,  
                url: url,  
                preyimg: preyimg,  
                defaultheight: defaultheight  
            };  
            params.cache.push(data);  
        });  

        var init = function () {  
            $.each(params.cache, function (i, data) {  
                var thisImg = data.obj, tag = data.tag, url = data.url, preyimg = data.preyimg;  
                if (typeof (url) != "undefined")// 判断是否需要延迟加载  
                {  
                    var parent1 = thisImg.parent(); //a  
                    var Inner = null; //  
                    if (parent1.is("a") == true) {//img wrap by a  
                        Inner = parent1;  
                    }  
                    else {  
                        Inner = thisImg;  
                    }  
                    var width = thisImg.attr("width") || thisImg.css("width");  
                    var height = data.defaultheight || thisImg.css("height");  
                    //if (i == 0) alert(data.defaultheight);  
                    var attrheight = thisImg.attr("height");  
                    if (attrheight != null) height = attrheight;  
                    if (width != null && width.indexOf("px") > -1) width.replace("px", "");  
                    if (height != null && height.indexOf("px") > -1) height.replace("px", "");  
                    var divstr = "<div class='.loading' style='text-align: left;position:relative;float:left;width:" + width + "px;";  
                    var HasHeight = true; //图片是否指定了高度  
                    divstr = divstr + "height:" + height + "px;";  
                    if (attrheight == null || attrheight == "") {  
                        HasHeight = false;  
                    }  

                    thisImg.css("position", "relative");  

                    divstr = divstr + "' ></div>"  
                    //修正外层div：text-align的影响  
                    Inner.wrap(divstr);  
                    //修正img外面不是a标签时parent()已经改变的问题  
                    parent1 = thisImg.parent();  
                    if (HasHeight == true) { parent1.attr("lazyloading_hasheight", "1"); } //是否指定了高度  
                    else { { parent1.attr("lazyloading_hasheight", "0"); } }  
                    parent1.append("<img class='loadhiddenimg' width='0' height='0' style='display:none;' src='' />");  
                    thisImg.attr("src", preyimg);  
                    thisImg.removeAttr("width").removeAttr("height");  
                    thisImg.attr("width1", width).attr("height1", attrheight);  

                    ////thisImg.attr("width", "50px").attr("height", "50px"); //loading图大小  
                    //thisImg.css("margin", "0 auto");  
                    thisImg.css("margin", ((height / 2) - 25) + "px auto auto " + ((width / 2) - 25) + "px");  
                    $(".lazyloading").css("display", "table"); //.css("position", "relative");  
                }  
            });  
        }  
        //动态显示数据  
        var loading1 = function () { };  
        var loading = function () {  
            //窗口的高度+看不见的顶部的高度=屏幕低部距离最顶部的高度  
            var thisButtomTop = parseInt($(window).height()) + parseInt($(window).scrollTop());  
            var thisTop = parseInt($(window).scrollTop()); //屏幕顶部距离最顶部的高度  

            $.each(params.cache, function (i, data) {  
                var thisImg = data.obj, tag = data.tag, url = data.url, post, posb;  

                if (thisImg) {//对象不为空  
                    if (typeof (url) != "undefined") {// 判断是否需要延迟加载  
                        var PictureTop = parseInt(thisImg.offset().top);  
                        //如果处理可见范围内，并且原图地址data-original不等于src,则加载图片  
                        if (PictureTop >= thisTop && PictureTop <= thisButtomTop && thisImg.attr("data-original") != thisImg.attr("src")) {  
                            var hiddenImg = thisImg.siblings("img.loadhiddenimg");  

                            hiddenImg.load(function () { //隐藏图片加载完之后的回调函数  
                                var width = thisImg.attr("width1");  
                                var height = thisImg.attr("height1");  
                                thisImg.attr("width", width).attr("height", height).removeAttr("width1").removeAttr("height1");  
                                thisImg.css("margin", "0 auto");  
                                if (thisImg.parent().attr("lazyloading_hasheight") == "0") {//没有指定高度时，加载图片后去掉div高度自适应  
                                    if (thisImg.parent().is("a") == true) {  
                                        thisImg.parent().parent().css("height", "");  
                                    }  
                                    else {  
                                        thisImg.parent().css("height", "");  
                                    }  
                                }  
                                thisImg.load(function () {  
                                    if (thisImg.parent().is("a") == true) {  
                                        thisImg.parent().parent().css("height", thisImg.height());  
                                    }  
                                    else {  
                                        thisImg.parent().css("height", thisImg.height());  
                                    }  
                                });  
                                thisImg.css('opacity', '0.2');  
                                thisImg.attr("src", hiddenImg.attr("src"));  
                                thisImg.animate({ opacity: 1.0 });  
                                if (thisImg.attr("alt") != "") {  
                                    thisImg.attr("title", thisImg.attr("alt"));  
                                    thisImg.attr("alt", "");  
                                }  
                            }).error(function () {  
                                thisImg.error(function () {  
                                    thisImg.css("margin", "0 auto auto 0");  
                                    if (thisImg.parent().attr("lazyloading_hasheight") == "0") {//没有指定高度时，加载图片后去掉div高度自适应  
                                        if (thisImg.parent().is("a") == true) {  
                                            thisImg.parent().parent().css("height", "");  
                                        }  
                                        else {  
                                            thisImg.parent().css("height", "");  
                                        }  
                                    }  
                                });  
                                thisImg.attr("src", hiddenImg.attr("src")); //alert("error");  
                                if (thisImg.attr("alt") != "") {  
                                    thisImg.attr("title", thisImg.attr("alt"));  
                                    thisImg.attr("alt", "");  
                                }  
                            });  
                            hiddenImg.attr("src", url);  
                        }  
                    }  
                }  
            });  
        };  
        //初始化  
        init();  
        //事件触发  
        //加载完毕即执行  
        if (params["loadfirst"] == true) loading();  
        //滚动执行  
        params.container.bind("scroll", loading).bind("resize", loading);  
    };  
})(jQuery); 