function ocultar_contacto(){
		$("#menu_inferior").animate({
			'bottom':'-400px',
			}, { duration: 2000,
                    easing: 'easeOutBounce'
                })	
		$('.btn_extra').fadeOut('slow');
	}
	
					
				
$(document).ready(function() {
	
	$('#menu_btn_cont').click(function(){
		$("#content").animate({
			marginTop:'0px',
			},2000,function(){ 
		$("#menu_btn_cont").css('opacity','0');
		});
			ocultar_contacto();
	});
	
	$('.inicio_web').click(function(){
		$("#content").animate({
			marginTop:'0px',
			},2000,function(){ 
		$("#menu_btn_cont").css('opacity','0');
		});
			ocultar_contacto();
	});
	
	$('.conocenos_web').click(function(){
		$("#content").animate({
			marginTop:'-1160px',
			},2000,function(){ 
		$("#menu_btn_cont").css('opacity','1');
		});
			ocultar_contacto();
	});
	
	$('.servicio_web').click(function(){
		$("#content").animate({
			marginTop:'-2230px',
			},2000,function(){ 
		$("#menu_btn_cont").css('opacity','1');
		});
			ocultar_contacto();
	});
	
	$('.division_web').click(function(){
		$("#content").animate({
			marginTop:'-3319px',
			},2000,function(){ 
		$('.btn_extra').fadeIn('slow');
		});
		$("#menu_btn_cont").css('opacity','0');
			ocultar_contacto();
	});
	
	$('.financiera_web').click(function(){
		$("#content").animate({
			marginTop:'-4409px',
			},2000,function(){ 
		$('.btn_extra').fadeIn('slow');
		});
		$("#menu_btn_cont").css('opacity','0');
			ocultar_contacto();
	});
	
	$('.solucion_web').click(function(){
		$("#content").animate({
			marginTop:'-5499px',
			},2000,function(){ 
		$('.btn_extra').fadeIn('slow');
		});
		$("#menu_btn_cont").css('opacity','0');
			ocultar_contacto();
	});
	
	$('.enfoque_web').click(function(){
		$("#content").animate({
			marginTop:'-6793px',
			},2000,function(){ 
		});
		$("#menu_btn_cont").css('opacity','1');
			ocultar_contacto();
	});
	
	$('.socios_web').click(function(){
		$("#content").animate({
			marginTop:'-7679px',
			},2000,function(){ 
		});
		$("#menu_btn_cont").css('opacity','1');
			ocultar_contacto();
	});
	
	
	
	/***************************************************/
	
	$('#servic_2').click(function(){
		$("#content").animate({
			marginTop:'-3319px',
			},2000,function(){ 
		$('.btn_extra').fadeIn('slow');
		});
		$("#menu_btn_cont").css('opacity','0');
			ocultar_contacto();
	});
	
	$('#servic_3').click(function(){
		$("#content").animate({
			marginTop:'-4409px',
			},2000,function(){ 
		$('.btn_extra').fadeIn('slow');
		});
		$("#menu_btn_cont").css('opacity','0');
			ocultar_contacto();
	});
	
	$('#servic_4').click(function(){
		$("#content").animate({
			marginTop:'-5499px',
			},2000,function(){ 
		$('.btn_extra').fadeIn('slow');
		});
		$("#menu_btn_cont").css('opacity','0');
			ocultar_contacto();
	});

	$('.contactenos_web').click(function(){
		$("#content").animate({
			marginTop:'-8539px',
			},2000,function(){ 
		});
		$("#menu_inferior").animate({
			'bottom':'0px',
			},{ duration: 2000,
                    easing: 'easeOutBounce'
                })
		
		$("#menu_btn_cont").css('opacity','1');
		
	});
	
	$('.btn_extra').click(function(){
		$("#content").animate({
			marginTop:'-2230px',
			},1000,function(){ 
		});
		$("#menu_btn_cont").css('opacity','1');
		$('.btn_extra').fadeOut('slow');
			ocultar_contacto();
	});
	
	
/*	$('#servic_2').mouseover(function(){
		$("#servic_2").animate({
			height:'40px',
			},400)
	});
	$('#servic_2').mouseout(function(){
		$("#servic_2").animate({
			height:'53px',
			},400)
	});
	$('#servic_3').mouseover(function(){
		$("#servic_3").animate({
			height:'40px',
			},400)
	});
	$('#servic_3').mouseout(function(){
		$("#servic_3").animate({
			height:'53px',
			},400)
	});
	$('#servic_4').mouseover(function(){
		$("#servic_4").animate({
			height:'40px',
			},400)
	});
	$('#servic_4').mouseout(function(){
		$("#servic_4").animate({
			height:'53px',
			},400)
	});
*/	
	
	
//	$('.contactenos_web').click(function(){
//		$("#menu_btn_cont").css('opacity','1');
//			//ocultar_contacto();
//	});
	
	
	
	//redrawDotNav();
	
	/* Scroll event handler 
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		//redrawDotNav();
    });
    */
	/* Next/prev and primary nav btn click handlers */
/*	$('.inicio_web').click(function(){
    	$('content').animate({
    		top:0
    	}, 2000, function() {
		});
    	return false;
	});
    $('.conocenos_web').click(function(){
    	$('html, body').animate({
    		margin-Top:1090
    	}, 2000, function() {
		});
    	return false;
    });
    $('a.servicio_web').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#servicio_web').offset().top
    	}, 2000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.division_web').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#division_web').offset().top
    	}, 2000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
*/    
    /* Show/hide dot lav labels on hover */
//    $('nav#primary a').hover(
//    	function () {
//			$(this).prev('h1').show();
//		},
//		function () {
//			$(this).prev('h1').hide();
//		}
//    );
    
});

/* Scroll the background layers 
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}
*/
/* Set navigation dots to an active state as the user scrolls */
