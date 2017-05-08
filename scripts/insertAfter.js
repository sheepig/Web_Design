function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;//parentElement父元素
    if (parent.lastChild == targetElement){
        parent.appendChild(newElement);
        //如果目标元素独生子
    }
    else{
        parent.insertBefore(newElement,targetElement.nextSibling);
        //如果目标元素不是父元素的最后一个子元素，则将新元素插入到目标元素紧挨着的下一个兄弟元素之前。
    }
}
addLoadEvent(insertAfter);