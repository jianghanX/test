// fixed固定定位

$(window).scroll(function(){
	if($(window).scrollTop()>=700){
		$('.fixed').slideDown(500)
	}else if($(window).scrollTop()<700){
		$('.fixed').slideUp(500)
	}
})



// banner轮播

$(function(){
		
		var m=0;
		
		function run(){
			timer=setInterval(function(){
				
				m++;
				if(m>4){
					m=0;
				}
				$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
				$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
			},1000)
		
		}
		run();
		

		$('#box').mouseenter(function(){
			clearInterval(timer);
			
			$('.num li').mouseenter(function(){
			
				m=$(this).index();
			
				$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
		
				$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
			
			
			})
			
		}).mouseleave(function(){
		
			run();
		})
		
	})


// 品牌闪购

$('.tu2').mouseover(function(){
	$('.ceng').css('display','block');
}).mouseout(function(){
	$('.ceng').css('display','none');
})

$('.tu3').mouseover(function(){
	$('.ceng1').css('display','block');
}).mouseout(function(){
	$('.ceng1').css('display','none');
})

$('.tu4').mouseover(function(){
	$('.ceng2').css('display','block');
}).mouseout(function(){
	$('.ceng2').css('display','none');
})

// 天猫超市left透明移入

$('.tian_bottom_left').mouseover(function(){
	$('.ceng').css('display','block');
}).mouseout(function(){
	$('.ceng').css('display','none');
})


// 天猫超市选项卡

$('#tab ul li').mouseover(function(){
	$(this).addClass('selected').siblings().removeClass('selected');
		
	var index=$(this).index();

	$('#cont div').eq(index).show().siblings().hide();
})


// 天猫国际left透明移入

$('.tmgj_list1').mouseover(function(){
	$(this).css('opacity','0.8');
}).mouseout(function(){
	$(this).css('opacity','1');
})

$('.tmgj_list6').mouseover(function(){
	$(this).css('opacity','0.8');
}).mouseout(function(){
	$(this).css('opacity','1');
})


// 美丽人生left透明移入

$('.mei_bottom_left').mouseover(function(){
	$('.ceng').css('display','block');
}).mouseout(function(){
	$('.ceng').css('display','none');
})



// 潮店酷玩left透明移入

$('.chao_bottom_left').mouseover(function(){
	$(this).css('opacity','0.8');
}).mouseout(function(){
	$(this).css('opacity','1');
})


// 居家生活left透明移入

$('.ju_bottom_left').mouseover(function(){
	$(this).css('opacity','0.8');
}).mouseout(function(){
	$(this).css('opacity','1');
})



// 打造爱巢left透明移入

$('.da_bottom_left').mouseover(function(){
	$(this).css('opacity','0.8');
}).mouseout(function(){
	$(this).css('opacity','1');
})


// 户外出行left透明移入

$('.hu_bottom_left').mouseover(function(){
	$(this).css('opacity','0.8');
}).mouseout(function(){
	$(this).css('opacity','1');
})


// 楼层

$(function(){
		$(window).scroll(function(){
			if($(window).scrollTop()>=1000){
				$('.lou').slideDown(500)
			}else if($(window).scrollTop()<1000){
				$('.lou').slideUp(500)
			}
		})

		$('.lou ul li').click(function(){
			var index=$(this).index();
			
			console.log($('.floor').eq(index).offset().top);

			var top=$('.floor').eq(index).offset().top;

			$('html').animate({
			scrollTop:top},500);
		
		})
		var heights=[];
		$('.floor').each(function(){
			
			heights.push($(this).offset().top)
		})

		$(window).scroll(function(){
			//获取滚动的距离值
			var top=$(window).scrollTop();
			console.log(top);
			//声明变量
			var index;
			//遍历每一个楼层距离顶部的位置
			for(var i=0;i<heights.length;i++){

				//判断1F 滚动距离>100<700 
				if(top>=heights[i] && top<heights[i+1]){
					index=i;
					$(' .lou ul li').eq(index).css('background','green').siblings().css('background','#666');
				
				
				}else if(top>=heights[heights.length-1]){
					index=heights.length-1;
					$(' .lou ul li').eq(index).css('background','green').siblings().css('background','#666');
				}
			
			}
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




