
// 放大镜
$(function(){
		//small中的鼠标移动事件
		$('#small').mousemove(function(e){
			//move big 显示
			$('#move,#big').show();
			
			//获取鼠标的坐标
			var x=e.pageX-$(this).offset().left;
			var y=e.pageY-$(this).offset().top;
			console.log(x+":"+y);
			//鼠标居中-宽高一半
			var x=x-$('#move').width()/2;
			var y=y-$('#move').height()/2;
			
			//判断x y 的边界
			if(x<=0){
				x=0
			}else if(x>=$('#small').width()-$('#move').width()){
				x=$('#small').width()-$('#move').width()
			}
			
			if(y<=0){
				y=0;
			}else if(y>=$('#small').height()-$('#move').height()){
				y=$('#small').height()-$('#move').height()
			}
			
			
			//绑定给move
			$('#move').css({left:x,top:y});
			
			//大图和小图 比例关系
			var scale= $('#big>img').width()/$('#small>img').width();
			console.log(scale);
			//设置大图移动
			$('#big>img').css({left:-x*scale,top:-y*scale});
			//改变大图
			$('#big>img').attr('src',$('#small_pic').attr('src'));
		
		}).mouseout(function(){
			//move big 隐藏
			$('#move,#big').hide();
		});
		
		//点击更换图片
		$('#dian>li>img').click(function(){
			//small中img图片等于当前的img src
			$('#small>img').attr('src',$(this).attr('src'))
		})
	})



//右边固定 返回顶部


	$(window).scroll(function(){
		if($(window).scrollTop()>=1000){
			$('.fan_ding').show()
		}else if($(window).scrollTop()<1000){
			$('.fan_ding').hide()
		}
	})

	//右边固定 会员权益


		$('.cat').mouseover(function(){
			
			
			$('.cat1').css("display","block")
			$('.cat1').stop().animate({'left':"-100px"},300)
		}).mouseout(function(){
			
			$('.cat1').stop().animate({'left':"-150px"},300,function(){
				$('.cat1').css("display","none")
			})
			
		})

	//右边固定 我的资产


	$('.qian').mouseover(function(){
		
		
		$('.qian1').css("display","block")
		$('.qian1').stop().animate({'left':"-100px"},300)
	}).mouseout(function(){
		
		$('.qian1').stop().animate({'left':"-150px"},300,function(){
			$('.qian1').css("display","none")
		})
		
	})

	//右边固定 我的资产


	$('.xing').mouseover(function(){
		
		
		$('.xing1').css("display","block")
		$('.xing1').stop().animate({'left':"-100px"},300)
	}).mouseout(function(){
		
		$('.xing1').stop().animate({'left':"-150px"},300,function(){
			$('.xing1').css("display","none")
		})
		
	})

	//右边固定 我的资产


	$('.look').mouseover(function(){
		
		
		$('.look1').css("display","block")
		$('.look1').stop().animate({'left':"-100px"},300)
	}).mouseout(function(){
		
		$('.look1').stop().animate({'left':"-150px"},300,function(){
			$('.look1').css("display","none")
		})
		
	})

	//右边固定 我要充值


	$('.chong').mouseover(function(){
		
		
		$('.chong1').css("display","block")
		$('.chong1').stop().animate({'left':"-100px"},300)
	}).mouseout(function(){
		
		$('.chong1').stop().animate({'left':"-150px"},300,function(){
			$('.chong1').css("display","none")
		})
		
	})

	//右边固定 用户反馈


	$('.fankui').mouseover(function(){
		
		
		$('.fankui1').css("display","block")
		$('.fankui1').stop().animate({'left':"-100px"},300)
	}).mouseout(function(){
		
		$('.fankui1').stop().animate({'left':"-150px"},300,function(){
			$('.fankui1').css("display","none")
		})
		
	})

	//右边固定 二维码


	$('.saoyisao').mouseover(function(){
		
		
		$('.saoyisao1').css("display","block")
		$('.saoyisao1').stop().animate({'left':"-150px"},300)
	}).mouseout(function(){
		
		$('.saoyisao1').stop().animate({'left':"-200px"},300,function(){
			$('.saoyisao1').css("display","none")
		})
		
	})

	//右边固定 返回顶部


	$('.fan_ding').mouseover(function(){
		
		
		$('.fan_ding1').css("display","block")
		$('.fan_ding1').stop().animate({'left':"-100px"},300)
	}).mouseout(function(){
		
		$('.fan_ding1').stop().animate({'left':"-150px"},300,function(){
			$('.fan_ding1').css("display","none")
		})
		
	})

	$('.fan_ding').click(function(){
		$('html,body').animate({"scrollTop":0},500)
	})


