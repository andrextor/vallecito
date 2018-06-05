$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});
	// alto = $(SVGViewElement).width();

	// if(alto < 900){
	// 	$("body").css({"background-color": "red"});
	// }
	$("header").css({"background-color": "rgba(46, 241, 114, 0.7)"});
	$("#logo").css({"margin-top": "150px", "width": "240px","height":"240px"});

	var flag = false;
	var scroll;
	


	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px"});
				// $("#banner").css({"height": "200px"});
				$("header").css({"background-color": "rgba(46, 241, 114, 0.9)"});

			
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "250px","height":"250px"});
				// $("#banner").css({"height": "200px"});
				$("header").css({"background-color": "rgba(46, 241, 114, 0.5)"});
				flag = false;
			}
		}


	});

});