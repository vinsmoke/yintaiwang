


//getElementByClassName
   // html里边的引用;
  //   window.onload=function(){
  //   var one1=getClassName("one")
  //   var two2=getClassName("two",one1[0])[0];

  //   alert(two2.innerHTML);
  // }

function getClass(classname,range){
	var range=range?range:document;
	if(range.getElementsByClassName){
		return range.getElementsByClassName(classname);
		//FF下因为有此方法，所以可以直接获取到
	}else{

	var all=range.getElementsByTagName("*");
	//获取页面里所有元素，因为他会匹配全页面元素，所以性能上有缺陷，但是可以约束他的搜索范围
	var arr=[];
	//用来保存符合的className；   all[i].className==classname;
	for(var i=0;i<all.length;i++){
       if(hasClass(all[i],classname)){
          arr.push(all[i]);
       }
	}
	return arr;
   }
}
function hasClass(obj,classname){
	var cName=obj.className.split(" ");
	for(var i=0;i<cName.length;i++){
		if(cName[i]==classname){
			return true;
		}
	}
	return false;
}









//给指定元素传入一个值
//***********************************************
function getcontent(obj,val){
	if(obj.textContent){
      if(val==undefined){
      	return obj.textContent;	
       }
          obj.textContent=val;
	}else{
      if(val==undefined){
      	return obj.innerHTML;	
       }
          obj.innerHTML=val;
	}
}

// 获取样式，obj 指定的样式，pro 获取的样式
//********************************************
function getStyle(obj,pro){
	if(obj.currentStyle){
		var a=obj.currentStyle[pro];
       return a;
	}else{
		var b=getComputedStyle(obj,null)[pro];

		return b; 
	}
}



// $ 获取. # div 等
// console.log($("div")[0]);
function $(selecter,range){
  if(typeof selecter=="string"){
  var range=range?range:document;
	var first=selecter.charAt(0);
	if(first=="."){
    return getClass(selecter.substring(1),range);
	}else if(first=="#"){
		return range.getElementById(selecter.substring(1));
	}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
	  return range.getElementsByTagName(selecter);
  }
  else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
	  return range.createElement(selecter.slice(1,-1));
  }
}else if(typeof selecter=="function"){
  addEvent(window,"load",selecter)
}

}



 // 用来获取某个对象的子元素
 // getChilds(obj,type)
 // obj  父元素
 // type  true  获取父元素的里的元素节点和有意义的文本
 //        false  只获取元素节点
//console.log(getChilds(out,true));
function getChilds(obj,type){
	var type=type?type:false;
	var childs=obj.childNodes;
	    var newNodes=[];
	    if(type===false){
		for(var i in childs){
		if(childs[i].nodeType==1){
		newNodes.push(childs[i]);
			 }
		}

		}else if(type===true){
			for(var i in childs){
		if(childs[i].nodeType==1||(childs[i].nodeType==3&&!(/^\s+$/.test(childs[i].nodeValue)))){
		newNodes.push(childs[i]);
			 }
		}
        
		}
		
		 return newNodes;
		}



//用来获取某个对象的第一个子元素
   function getFirst(obj){
   	return getChilds(obj)[0];
   }


   //用来获取某个对象的最后一个子元素
    function getLast(obj){
   	return getChilds(obj)[getChilds(obj).length-1];
   }
 //用来获取某个对象的num子元素
   function getNum(obj,num){
      return getChilds(obj)[num-1];}

//getNext(obj,type)
// obj  父元素
 // type  true  识别有意义的文本
 //        false  忽略文本

   function getNext(obj,type){
   	var type=type?type:false;
   	var next=obj.nextSibling;
   	if(type===false){
       if(!next){
   		 return false;
   		 }
   		 while(next.nodeType==3||next.nodeType==8){
   		 	next=next.nextSibling;
   		 	if(!next){
   		 return false;
   		 }
   		 }
   }else if(type===true){
      if(!next){
   		 return false;
   		 }
   		 while((next.nodeType==3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8){
   		 	next=next.nextSibling;
   		 	if(!next){
   		 return false;
   		 }
   		 }
   	}
   	
   	
   }


//insertAfter(obj,next,type)
//obj 要插入的元素
//next 要插入的位置
 // type  true  识别有意义的文本
 //        false  忽略文本


 function inserAfter(obj,next,type){
   	var type=type?type:false;
   	var pos=getNext(next,type);
   	var parent=next.parentNode;
   	if(!pos){
   		parent.appendChild(obj);

   	}else{
   		parent.insertBefore(obj.pos);
   	}
 }


 // function insertAfter(inner,div){
 // 	var a=inner.parentNode;
 // 	var childs=getChilds(a);
 // 	for(var i=0; i<childs.length;i++){
 // 		if(childs[i]==inner){
 // 			var index=i;
 // 			break;
 // 		}
 // 	}
 // 	var after=childs[index+1];
 // 	a.insertAfter(div,after);
 // }

//addEvent(obj,type,fn)
//obj 对象
//type 事件类型   click  onclick
//fn  函数体

function addEvent(obj,type,fn){
  if(obj.addEventListener){
    obj.addEventListener(type,fn,false)
  }else if(obj.attachEvent){
    obj.attachEvent("on"+type,fn)
  }
}
function removeEvent(obj,type,fn){
  if(obj.removeEventListener){
    obj.removeEventListener(type,fn,false)
  }else if(obj.detachEvent){
    obj.detachEvent("on"+type,fn)
  }
}

