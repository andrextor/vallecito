$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});
	// alto = $(SVGViewElement).width();

	// if(alto < 900){
	// 	$("body").css({"background-color": "red"});
	// }
	$("header").css({"background-color": "rgba(46, 241, 114, 0.7)"});
	$("#logo").css({"margin-top": "130px", "width": "260px","height":"250px","background":"rgba(255,255,255,0.5)"});

	var flag = false;
	var scroll;
	


	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px","background":"white"});
				// $("#banner").css({"height": "200px"});
				$("header").css({"background-color": "rgba(46, 241, 114, 0.9)"});

			
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "130px", "width": "260px","height":"250px", "background":"rgba(255,255,255,0.5)"});
				// $("#banner").css({"height": "200px"});
				$("header").css({"background-color": "rgba(46, 241, 114, 0.5)"});
				flag = false;
			}
		}


	});

	

});


	  