var dpr, rem, scale;
var docEl = document.documentElement;
var fontEl = document.createElement('style');
var metaEl = document.querySelector('meta[name="viewport"]');
//dpr = window.devicePixelRatio || 1;
dpr = 1;
rem = docEl.clientWidth * dpr / 10;
var deviceHeight = docEl.clientHeight;
var deviceWidth = docEl.clientWidth;
scale = 1 / dpr;
// 设置viewport，进行缩放，达到高清效果
//metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=true');
// 设置data-dpr属性，留作的css hack之用
docEl.setAttribute('data-dpr', dpr);
// 动态写入样式
if(docEl.firstElementChild) {
	docEl.firstElementChild.appendChild(fontEl);
} else {
	docEl.firstChild.appendChild(fontEl);
}
if(navigator.userAgent.indexOf("MSIE") > 0) {
	if(navigator.userAgent.indexOf("MSIE 6.0") > 0) {
		alert("请升级您的ie以获得更快速更安全的浏览体验");
	} else if(navigator.userAgent.indexOf("MSIE 7.0") > 0) {
		alert("请升级您的ie以获得更快速更安全的浏览体验");
	} else if(navigator.userAgent.indexOf("MSIE 8.0") > 0 && !window.innerWidth) { //这里是重点，你懂的
		//ie8 什么都不做
	} else {
		fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';//ie9及以上
	}
} else {
	fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';//非ie
}
// 给js调用的，某一dpr下rem和px之间的转换函数
window.rem2px = function(v) {
	v = parseFloat(v);
	return v * rem;
};
window.px2rem = function(v) {
	v = parseFloat(v);
	return v / rem;
};

window.dpr = dpr;
window.rem = rem;