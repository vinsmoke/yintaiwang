// 顶部选项卡

var wechat=$('.top-wechat')[0];
var ytseller=$('.yt-seller',wechat)[0];
var TabControl=function  (parent,down,change) {
	parent.onmouseover=function  () {
		down.style.display='block';
		this.firstElementChild.classList.add(change);
	}
	parent.onmouseout=function  () {
		down.style.display='none';
		this.firstElementChild.classList.remove(change);
	}	
}
TabControl(wechat,ytseller,'change');

var phone=$('.top-j_phone')[0];
var pseller=$('.yt-seller-phone',phone)[0];
TabControl(phone,pseller,'phone-change');

var home=$('.log-yt-home')[0];
var hlink=$('.yt-home-link',home)[0];
TabControl(home,hlink,'home-change')


//banner左侧选项卡
var cateAll=$('.menu-cate-all')[0];
var dl=$('dl',cateAll);
var dd=$('dd',cateAll);
var dt=$('dt',cateAll);
for(var i=0;i<dl.length;i++){
	dl[i].index=i;
	dl[i].onmouseover=function  () {
		dd[this.index].style.display='block';
		dt[this.index].classList.add('selected');
		dt[this.index].lastElementChild.style.display='none';
	}
	dl[i].onmouseout=function  () {
		dd[this.index].style.display='none';
		dt[this.index].classList.remove('selected');
		dt[this.index].lastElementChild.style.display='block';
	}
}
//购物车
var miniCart=$('.miniCart')[0];
var bags=$('.yt-bags')[0];
miniCart.onmouseover=function  () {
	bags.style.display='block';
}
miniCart.onmouseout=function  () {
	bags.style.display='none';
}
//banner轮播

var box=$('.tab-nav')[0];
var pannels=$('.pannels')[0];
var imgs=$('li',pannels);
var trriger=$('.nav-trriger')[0];
var rans=$('li',trriger);
var pW=document.documentElement.clientWidth;
var nav=$('.nav-trriger')[0];
var nW=nav.offsetWidth;
nav.style.left=(pW-nW)/2+'px';
var t=setInterval(move,1000);
var num=0;
var lef=$('.eva-prev')[0];
var rig=$('.eva-next')[0];
var flag=true;
rans[0].classList.add('eva-switchable-active');

box.onmouseover=function  () {
	clearInterval(t);
	lef.style.display='block';
	rig.style.display='block';
}
box.onmouseout=function  () {
	t=setInterval(move,1000);
	lef.style.display='none';
	rig.style.display='none';
}
for(var i=0;i<rans.length;i++){
	rans[i].index=i;
	rans[i].onmouseover=function  () {
		for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0},300);
			rans[i].classList.remove('eva-switchable-active');
		}
		animate(imgs[this.index],{opacity:1},300);
		rans[this.index].classList.add('eva-switchable-active');
	}
}
rig.onclick=function  () {
	move();
}
lef.onclick=function  () {
	moveL()
}
function move() {
	if(!flag){
		return;
	}
	flag=false;
	num++;
	if(num==imgs.length){
		num=0;
	}
	for(var i=0; i<imgs.length;i++){
		animate(imgs[i],{opacity:0},300,function  () {
			flag=true;
		});
		rans[i].classList.remove('eva-switchable-active');
	}
	animate(imgs[num],{opacity:1},300,function  () {
		flag=true;
	});
	rans[num].classList.add('eva-switchable-active');
}
function moveL() {
	if(!flag){
		return;
	}
	flag=false;
	num--;
	if(num<0){
		num=imgs.length-1;
	}
	for(var i=0; i<imgs.length;i++){
		animate(imgs[i],{opacity:0},300,function  () {
			flag=true;
		});
		rans[i].classList.remove('eva-switchable-active');
	}
	animate(imgs[num],{opacity:1},300,function  () {
		flag=true;
	});
	rans[num].classList.add('eva-switchable-active');
}

//超值特卖
var brand=$('.brand-contents')[0];
var tm_option=$('li',brand);
var pr=$('.pr-list-ts',brand);
for(var i=0;i<tm_option.length;i++){
	tm_option[i].index=i;
	tm_option[i].onmouseover=function  () {
		for(var j=0;j<tm_option.length;j++){
			pr[j].style.display='none';
			tm_option[j].classList.remove('eva-active');
		}
		pr[this.index].style.display='block';
		tm_option[this.index].classList.add('eva-active');
	}
}

//专柜同款
var triggers=$('.eva-switchable-triggers')[0];
var zg_change=$('li',triggers);
var zg_panels=$('.eva-switchable-panels');
for(var i=0;i<zg_change.length;i++){
	zg_change[i].index=i;
	zg_change[i].onmouseover=function  () {
		for(var j=0;j<zg_change.length;j++){
			zg_panels[j].style.display='none';
			zg_change[j].classList.remove('ytbh-change');
		}
		zg_panels[this.index].style.display='block';
		zg_change[this.index].classList.add('ytbh-change');
	}
}

//楼层轮播

var lunbo=function(win){
var imgs=$('.floor_b_pannelsimgs',win);
var rou=$("li",win);
var harfL=$(".eva-switchable-prev",win)[0];  
var harfR=$(".eva-switchable-next",win)[0];
var num=0;
var flag=true;   //解决轮播快速显示bug 
var index=0;
var imgsW=parseInt(getStyle(imgs[0],"width"));  //获取图片宽度
for(var i=0; i<imgs.length;i++){  
	imgs[i].style.left=imgsW+"px";
}
imgs[0].style.left=0+"px";           //让第一张图片显示 

var t=setInterval(movef1R,3000);
win.onmouseover=function(){
	clearInterval(t);
	 animate(harfR,{right:0},100,Tween.Quart.easeIn );
	animate(harfL,{left:0},100,Tween.Quart.easeIn );
}
win.onmouseout=function(){
	t=setInterval(movef1R,3000);
	animate(harfR,{right:-30},100,Tween.Quart.easeIn );
	animate(harfL,{left:-30},100,Tween.Quart.easeIn );
}
for(var i=0; i<rou.length;i++){     //for
  rou[i].index=i;              //用rou[i]的index来储存i的值
  rou[i].onclick=function(){
    for(var i=0; i<rou.length;i++){        //for让所有的rou圆变为灰色
    	rou[i].classList.remove('ranchange'); 
    }
    rou[this.index].classList.add('ranchange');  //让点击的圆（index）变为红色
    imgs[this.index].style.left=imgsW+"px";         //让点击要出现的图片准备好
    animate(imgs[index],{left:-imgsW},400,Tween.Quart.easeIn );       //让当前index图片移出
    animate(imgs[this.index],{left:0},400,Tween.Quart.easeIn);        //让num图片进入
    index=num=this.index;                    // 点击后num index 都为当前this.index
}
}

harfL.onclick=function(){
	movef1L();
}
harfR.onclick=function(){
	movef1R();
}

function movef1R(){
  if(!flag){    //  如果为假 证明门还是关的，直接返回 等执行完之后再处理
    return;     // 如果为真，证明函数已经执行完，可以进入
}
flag=false;       //进入后改为false 也就是把门关上
num++;    
if(num==imgs.length){    
	num=0;
}
  imgs[num].style.left=-imgsW+"px";  //让下一张图片到位准备轮播
  animate(imgs[index],{left:imgsW},400,Tween.Quart.easeIn,function(){  //让当前index图片移出
    flag=true;                  //利用回调函数返回true 证明门已开    
});
  animate(imgs[num],{left:0},400,Tween.Quart.easeIn,function(){   //让num图片进入
  	flag=true;
  });
  for(var i=0; i<imgs.length;i++){
      rou[i].classList.remove('ranchange');    //for使圆都变灰
  }
    rou[num].classList.add('ranchange');   //让num图片，也就是当前图片变色
  index=num;           //因为num图片已经进入，所以num赋值给Index

}
function movef1L(){
	if(!flag){
		return;
	}
flag=false;       //解决轮播快速显示bug
num--;    
if(num<0){    
	num=imgs.length-1;
}
  imgs[num].style.left=imgsW+"px";  //让下一张图片到位准备轮播
  animate(imgs[index],{left:-imgsW},400,Tween.Quart.easeIn,function(){  //让当前index图片移出
  	flag=true;         
  });
  animate(imgs[num],{left:0},400,Tween.Quart.easeIn,function(){   //让num图片进入
  	flag=true;
  });
  for(var i=0; i<imgs.length;i++){
      rou[i].classList.remove('ranchange');    //for使圆都变灰
  }
    rou[num].classList.add('ranchange');   //让num图片，也就是当前图片变色
  index=num;           //因为num图片已经进入，所以num赋值给Index

}

}
var floor_banner_slide=$('.floor_banner_slide');
for(var i=0;i<floor_banner_slide.length;i++){
	lunbo(floor_banner_slide[i]);
}

//楼层左侧轮播

var leftlunbo=function  (win) {
	var imgs=$('.floorbanner-lefts',win);
	var lef=$('.floorbannerleft',win)[0];
	var rig=$('.floorbannerright',win)[0];
	var num=0;
	var index=0;
	var flag=true;
    var imgsW=parseInt(getStyle(imgs[0],"width"));  //获取图片宽度
    for(var i=0; i<imgs.length;i++){  
    	imgs[i].style.left=imgsW+"px";
    }
    imgs[0].style.left=0+"px"; 
    lef.onclick=function  () {
    	move();
    }
    rig.onclick=function  () {
    	moveR();
    }
    var move=function  () {
    	if(!flag){
    		return;
    	}
    	flag=false;
    	num--;    
    	if(num<0){    
    		num=imgs.length-1;
    	}
    	imgs[num].style.left=imgsW+"px";  
    	animate(imgs[index],{left:-imgsW},400,Tween.Quart.easeIn,function(){  
    		flag=true;         
    	});
    	animate(imgs[num],{left:0},400,Tween.Quart.easeIn,function(){   
    		flag=true;
    	});  
    	index=num;         

    }
    var moveR=function  () {
    	if(!flag){
    		return;
    	}
    	flag=false;
    	num++;    
    	if(num>=imgs.length){    
    		num=0;
    	}
    	imgs[num].style.left=-imgsW+"px";  
    	animate(imgs[index],{left:imgsW},400,Tween.Quart.easeIn,function(){  
    		flag=true;         
    	});
    	animate(imgs[num],{left:0},400,Tween.Quart.easeIn,function(){   
    		flag=true;
    	});  
    	index=num;         

    }
}
var floorbarndSlide=$('.floorbarndSlide');
for(var i=0;i<floorbarndSlide.length;i++){
	leftlunbo(floorbarndSlide[i]);
}

// 楼层跳转

var floors=$('.yt_floor_item');
var box=$('.float-nav')[0];
var fs=$('a',box);
var floorArr=[];
var kaiguan=true;
var pH=document.documentElement.clientHeight;
for(var i=0;i<floors.length;i++){
	floorArr.push(floors[i].offsetTop)
}
for(var i=0;i<fs.length-1;i++){
	fs[i].index=i;
	fs[i].onclick=function  () {
		kaiguan=false;
		animate(document.body,{scrollTop:floorArr[this.index]},function(){
			kaiguan=true;
		});
		animate(document.documentElement,{scrollTop:floorArr[this.index]},function(){
			kaiguan=true;
		});
		for(var j=0;j<fs.length-1;j++){
			fs[j].classList.remove('f-active');
		}
		fs[this.index].classList.add('f-active');
	}
}
var ns=fs.length;
fs[ns-1].onclick=function  () {
	var obj=document.body.scrollTop?document.body:document.documentElement;
    animate(obj,{scrollTop:0});
}
var kg=true;
window.onscroll=function  () {
	if(!kaiguan){
		return;
	}
	var obj=document.body.scrollTop?document.body:document.documentElement //三元判断火狐和谷歌
    var tops=obj.scrollTop;  
	for(var i=0;i<fs.length-1;i++){
		if(tops+pH>=floorArr[i]+300){
			for(var j=0;j<fs.length-1;j++){
				fs[j].classList.remove('f-active');
			}
			fs[i].classList.add('f-active');
		}
	}
	if(tops>floorArr[0]){
		box.style.display='block';
		kg=false;
	}else{
		box.style.display='none';
		kg=true;
	}
}

