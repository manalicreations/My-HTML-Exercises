
var eventUtil = {
    //兼容DOM0/2级和IE的添加/删除事件：
    addHandler:function(obj,type,handler){
        if (obj.addEventListener) {  //DOM2
            obj.addEventListener(type,handler,false);
        } else if(obj.attachEvent) {  //IE
            obj.attachEvent('on'+type,handler);
        } else{
            obj['on'+type] = handler; //DOM0
        }
    },
    removeHandler:function(obj,type,handler){
        if (obj.removeEventListener) {
            obj.removeEventListener(type,handler,false);
        } else if(obj.detachEvent) {
            obj.detachEvent('on'+type,handler);
        } else{
            obj['on'+type] = null;
        }
    },

    //获取事件：
    getEvent:function(event){
        return event?event:window.event;
        // event = event || window.event;
    },

    //获取该元素节点上的事件类型(通用属性)
    getType:function(event){
        return event.type;
    },

    //获取该事件加载在了哪个目标上
    getElement:function(event){
        return event.target || event.srcElement;
    },

    //阻止冒泡：
    stopPropagation:function(event){
        if (event.stopPropagation) {//以属性的形式 判断 不要加()
            event.stopPropagation(); 
        } else {
            event.cancleBubble = true;
        }
    },

    //阻止事件默认行为：
    preventDefault:function(event){
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }

}

