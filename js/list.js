
// 轮播图
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

// 国际大牌选项卡
$('#tab ul li').mouseover(function(){

		$(this).addClass('selected').siblings().removeClass('selected');

		var index=$(this).index();
		console.log(index);
		

		$('#cont div').eq(index).show().siblings().hide();
	})

// 今日疯抢
$('#tab1 ul li').mouseover(function(){

		$(this).addClass('selected').siblings().removeClass('selected');

		var index=$(this).index();
		console.log(index);
		

		$('#cont1 div').eq(index).show().siblings().hide();
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

// 青春甜美轮播
$(function(){

		var i=0;
		function pao(){
			ss=setInterval(function(){

				i++;

				if(i>1){
					i=0;
				}

				$('.img1 li').eq(i).addClass('show').siblings('li').removeClass('show');
			},1000)
		
		}
		pao();
		
		$('.s_mid').mouseenter(function(){
			clearInterval(ss);
			$('.lr').show();
			
		}).mouseleave(function(){
			pao();
			$('.lr').hide();
		})
	
		$('.lr .right').click(function(){
				i++;
				if(i>1){
					i=0;
				}
				$('.img1 li').eq(i).addClass('show').siblings('li').removeClass('show');
			})
			$('.lr .left').click(function(){
				i--;
				if(i<0){
					i=1;
				}
				$('.img1 li').eq(i).addClass('show').siblings('li').removeClass('show');
			})
			
	
	
	})

// 气质淑女轮播
$(function(){

		var k=0;
		function dong(){
			sss=setInterval(function(){

				k++;

				if(k>1){
					k=0;
				}

				$('.img2 li').eq(k).addClass('show').siblings('li').removeClass('show');
			},1000)
		
		}
		dong();
		
		$('.s_mid1').mouseenter(function(){
			clearInterval(sss);
			$('.lr1').show();
			
		}).mouseleave(function(){
			dong();
			$('.lr1').hide();
		})
	
		$('.lr1 .right').click(function(){
				k++;
				if(k>1){
					k=0;
				}
				$('.img2 li').eq(k).addClass('show').siblings('li').removeClass('show');
			})
			$('.lr1 .left').click(function(){
				k--;
				if(k<0){
					k=1;
				}
				$('.img2 li').eq(k).addClass('show').siblings('li').removeClass('show');
			})
			
	
	
	})

// 优雅名媛轮播
$(function(){

		var j=0;
		function pp(){
			ssss=setInterval(function(){

				j++;

				if(j>1){
					j=0;
				}

				$('.img3 li').eq(j).addClass('show').siblings('li').removeClass('show');
			},1000)
		
		}
		pp();
		
		$('.s_mid2').mouseenter(function(){
			clearInterval(ssss);
			$('.lr2').show();
			
		}).mouseleave(function(){
			pp();
			$('.lr2').hide();
		})
	
		$('.lr2 .right').click(function(){
				j++;
				if(j>1){
					j=0;
				}
				$('.img3 li').eq(j).addClass('show').siblings('li').removeClass('show');
			})
			$('.lr2 .left').click(function(){
				j--;
				if(j<0){
					j=1;
				}
				$('.img3 li').eq(j).addClass('show').siblings('li').removeClass('show');
			})
			
	
	
	})
	
	
	
	
	//瀑布流
	$(window).scroll(function(){
		
		var y=$(window).scrollTop();
	
	var pan=$('#clone').offset().top;
	if(y>=pan && y<=4000){
	$('#clone').clone().appendTo('#ss');
	}
	
	})
