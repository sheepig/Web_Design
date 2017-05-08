function prepareSlideshow(){
	//确保浏览器支持DOM
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	//确保元素存在
	if(!document.getElementById("linklist")) return false;
	if(!document.getElementById("preview")) return false;
	//为图片应用样式
	var preview = document.getElementById("preview");
	preview.style.position = "absolute";
	//preview.style.left = "0px";
	//preview.style.top = "0px";
	//取得列表中所有链接
	var list = document.getElementById("linklist");
	var links = document.getElementsByTagName("a");
	//为onmouseover事件添加动画效果
	links[0].onmouseover = function(){
		moveElement("preview",-138,0,10);
	}
	links[1].onmouseover = function(){
		moveElement("preview",-276,0,10);
	}
	links[2].onmouseover = function(){
		moveElement("preview",-414,0,10);
	}
	
}
addLoadEvent(prepareSlideshow);