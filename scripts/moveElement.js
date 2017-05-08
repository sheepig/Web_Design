function moveElement(elementID,final_x,final_y,interval){//元素id,目的地址xy，移动速度
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	//获取元素位置信息
	var elem = document.getElementById(elementID);
	//复位moveElement属性
	if(elem.moveElemet){
		clearTimeout(elem.moveElement);
	}
	//检查并初始化位置
	if(!elem.style.left){
		elem.style.left = "0px";
	}
	if(!elem.style.top){
		elem.style.top = "0px";
	}
	//起始位置
	xpos = parseInt(elem.style.left);
	ypos = parseInt(elem.style.top);
	var dist = 0;
	//是否到达目的地
	if(xpos == final_x && ypos == final_y){
		return true;
	}
	//移动位置
	if(xpos < final_x){
		dist = Math.ceil((final_x - xpos)/10);
		xpos = xpos + dist;
	}
	if(xpos > final_x){
		dist = Math.ceil((xpos - final_x)/10);
		xpos = xpos - dist;
	}
	if(ypos < final_y){
		dist = Math.ceil((final_y  - ypos)/10);
		ypos = ypos + dist;
	}
	if(ypos > final_y){
		dist = Math.ceil((ypos - final_y)/10);
		ypos = ypos - dist;
	}
	//更新位置
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	//函数延时
	var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
	movement = setTimeout(repeat,interval);
}