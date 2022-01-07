$(document).ready(function(){
	$('#open').click(function(){
		$('.top').addClass('open');
		$('#open').fadeOut(1200)
		// $('.message').addClass('pull').animate({top:'-37vw',height:($('.wrapper')[0].offsetHeight)/100 + 'vw'});
		// $('.message').addClass('pull').animate({top:'-40vw',height:'80vh'});
		let a = $('.wrapper')[0].offsetWidth/2 - $('.wrapper')[0].offsetHeight/10 + 'px'
		let b = $('.wrapper')[0].offsetHeight*0.8 + 'px'
	/*	alert(a)
		alert($('.wrapper')[0].offsetHeight)
		alert(document.documentElement.clientHeight + 1)*/
		$('.message').addClass('pull').animate({top: "-" + a,height:b});
	setTimeout(function () {
		let scroll1 = new BScroll('.message', {
			click: true,
			useTransition: false //解决ios13.4以上回弹问题
		})
		var timerhb = setInterval(hby, 400)
	},3000)

		$('#open').css('zIndex',349)
	})

	/* 爱心 */
	function hby () {
		// var wh = $(window).height();//高
		var f = 87// 宽
		var e = Math.random() * f// [-100,宽-100)
		var o = 0.5 + Math.random();//[0.5,1.5)
		// var fon = 10 + Math.random() * 30// [10,40)
		var l = e + 5 * Math.random() - 2.5// [-200,宽)
		var k = 4000 + 5000 * Math.random()// [2000,7000)
		var html
		switch (Math.floor(Math.random() * 6 + 1)) { // [1,6]
			case 1:
				html = "<div data-key='rain' class='rain rain-1'><div>"
				break
			case 2:
				html = "<div data-key='rain' class='rain rain-2'><div>"
				break
			case 3:
				html = "<div data-key='rain' class='rain rain-3'><div>"
				break
			case 4:
				html = "<div data-key='rain' class='rain rain-4'><div>"
				break
			case 5:
				html = "<div data-key='rain' class='rain rain-5'><div>"
				break
			case 6:
				html = "<div data-key='rain' class='rain rain-6'><div>"
				break
		}

		$(html).appendTo('.container').css({
			left: e + 'vw',
			opacity: o
			// 'font-size': fon
		}).animate({
			// top: (wh * 1) + "px",
			top: '100vh',
			left: l + 'vw',
			opacity: 0.1
		}, k, 'linear', function () {
			$(this).remove()
		})
	};
});
