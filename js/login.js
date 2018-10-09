
// 二维码移入
$('.erweima').mouseenter(function(){
	$('.erweima1').css('left','4px');
	$('.erweima2').css('display','block')
	$('.erweima1').css('transition','all ease 0.7s');
}).mouseleave(function(){
	$('.erweima1').css('left','');
	$('.erweima2').css('display','none')
	$('.erweima1').css('transition','all ease 0.7s');
})
// 扫码登录点击事件
$('.saom-deng').click(function(){
	$('.erweima1').css('left','4px');
	$('.erweima2').css('display','block')
	$('.erweima1').css('transition','all ease 0.5s');
})
$('.saom-deng').click(function(){
	$('.saoma2').css('display','none');
	$('.saoma1').css('display','block');
})

// 账号登录点击事件
$('.zhangh-deng').click(function(){
	$('.saoma2').css('display','block');
	$('.saoma1').css('display','none');
})

// 登录  正则验证
// $('.denglu1').click(function(){
// 	var name = $('#username').val()
// 	var pwd = $('#pwd').val()
// 	if(name==''){
// //		$('#cont1').html('请输入正确用户名');
// 		$('#cont1').css('display','block');
		
// 	}else if (/^.{6-12}$/.test(pwd)) {
		
// 	}else{
// 		$('#cont2').css('display','block');
// 	}
	
// })

