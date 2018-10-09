// 验证码
(function(window,document,undefined){
    var dog = {//声明一个命名空间，或者称为对象
        $:function(id){
            return document.querySelector(id);
        },
        on:function(el,type,handler){
            el.addEventListener(type,handler,false);
        },
        off:function(el,type,handler){
            el.removeEventListener(type,handler,false);
        }
    };
//封装一个滑块类
    function Slider(){
        var args = arguments[0];
        for(var i in args){
            this[i] = args[i]; //一种快捷的初始化配置
        }
//直接进行函数初始化，表示生成实例对象就会执行初始化
        this.init();
    }
    Slider.prototype = {
        constructor:Slider,
        init:function(){
            this.getDom();
            this.dragBar(this.handler);
        },
        getDom:function(){
            this.slider = dog.$('#'+this.id);
            this.handler = dog.$('.handler');
            this.bg = dog.$('.drag_bg');
        },
        dragBar:function(handler){
            var that = this,
                startX = 0,
                lastX = 0,
                doc = document,
                width = this.slider.offsetWidth,
                max = width - handler.offsetWidth,
                drag = {
                    down:function(e){
                        var e = e||window.event;
                        that.slider.classList.add('unselect');
                        startX = e.clientX - handler.offsetLeft;
                        console.log('startX: '+startX+' px');
                        dog.on(doc,'mousemove',drag.move);
                        dog.on(doc,'mouseup',drag.up);
                        return false;
                    },
                    move:function(e){
                        var e = e||window.event;
                        lastX = e.clientX - startX;
                        lastX = Math.max(0,Math.min(max,lastX)); //这一步表示距离大于0小于max，巧妙写法
                        console.log('lastX: '+lastX+' px');
                        if(lastX>=max){
                            handler.classList.add('handler_ok_bg');
                            that.slider.classList.add('slide_ok');
                            dog.off(handler,'mousedown',drag.down);
                            drag.up();
                        }
                        that.bg.style.width = lastX + 'px';
                        handler.style.left = lastX + 'px';
                    },
                    up:function(e){
                        var e = e||window.event;
                        that.slider.classList.remove('unselect');
                        if(lastX < width){
                            that.bg.classList.add('ani');
                            handler.classList.add('ani');
                            that.bg.style.width = 0;
                            handler.style.left = 0;
                            setTimeout(function(){
                                that.bg.classList.remove('ani');
                                handler.classList.remove('ani');
                            },300);
                        }
                        dog.off(doc,'mousemove',drag.move);
                        dog.off(doc,'mouseup',drag.up);
                    }
                };
            dog.on(handler,'mousedown',drag.down);
        }
    };
    window.S = window.Slider = Slider;
})(window,document);
var defaults = {
    id:'slider'
};
new S(defaults);



// 遮罩
$(function(){
	setTimeout(function(){
		$('.mask').css('display','block');
		$('.zhe').css('opacity','0.5');
	},1000)
})


$('.agreen').click(function(){
	$('.mask').css('display','none');
	$('.zhe').css('background','').css('opacity','1');
})

$('.shuzi').mousedown(function(){
	return false
})
$('.shuzi').click(function(){
	$('.p_erji').toggle()
})


$('#input1').click(function(){
	$(this).css("border","1px solid #999")
	$('#shu').css('display','block');
	$('#p2').css('display','none');
	$('#p3').css('display','none');
}).blur(function(){
	$(this).css("border","")
	$('#shu').css('display','none');
	
})


$('#p1').click(function(){
	var shu=$('#input1').val();
	if(shu==''){
		$('#p2').css('display','block')
	}else if(/^1(([358]\d)|(47)|(66)|(7[013678]))\d{8}$/){
		$('#p3').css('display','block')
	}
})



//拖拽效果
$('#show').mousedown(function(e){
			$(this).css('cursor','move');
			

			var offset=$(this).offset();
			console.log(offset);

			var x=e.pageX-offset.left;
			var y=e.pageY-offset.top;
			

			$(document).mousemove(function(evt){

				var ll=evt.pageX-x;
				var tt=evt.pageY-y;
				console.log(ll+":"+tt);
				

				if(ll<=0){
					ll=0
				}else if(ll>=$(document).width()-$('#show').width()){
					ll=$(document).width()-$('#show').width();
				}
				
				if(tt<=0){
					tt=0;
				}else if(tt>=$(document).height()-$('#show').height()){
					tt=$(document).height()-$('#show').height();
				}
				

				$('#show').css({left:ll+'px',top:tt+'px'});
				
			
			})
		
		})
		

		$(document).mouseup(function(){

			$('#show').css('cursor','default');

			$(this).off('mousemove');
		})




	

	
