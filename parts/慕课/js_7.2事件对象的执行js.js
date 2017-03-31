window.onload = function(){
    var box = document.getElementById('box');
    var maopao = document.getElementById('maopao');
    var bumaopao = document.getElementById('bumaopao');
    var moren = document.getElementById('moren');
    var leixing  = document.getElementById('leixing');
    var mubiao = document.getElementById('mubiao');

    eventUtil.addHandler(box,'click',function(){
        alert('我来自父盒子！');
    });

    eventUtil.addHandler(maopao,'click',function(){
        alert('我是按钮的弹出事件');
    });

    eventUtil.addHandler(bumaopao,'click',function(e){
        alert('我是按钮的弹出事件');
        eventUtil.stopPropagation(e);
    });

    eventUtil.addHandler(moren,'click',function(event){
        event = eventUtil.getEvent(event);
        alert('我是'+eventUtil.getElement(event).nodeName+'标签,'+'我被阻止了默认跳转');
        eventUtil.stopPropagation(event);
        eventUtil.preventDefault(event);
    });

    eventUtil.addHandler(leixing,'mouseout',function(e){
        alert(eventUtil.getType(e));
        eventUtil.stopPropagation(event);
    });

    eventUtil.addHandler(leixing,'click',function(e){
        alert(eventUtil.getType(e));
        eventUtil.stopPropagation(event);
    });

    eventUtil.addHandler(mubiao,'mouseover',function(e){
        alert(eventUtil.getElement(e));
        eventUtil.stopPropagation(event);
    });

}