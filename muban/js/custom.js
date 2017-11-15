//input聚焦时自动滚动到该input的位置
$("input").on("focus",function(){
    this.scrollIntoView();
})
