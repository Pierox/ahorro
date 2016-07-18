// JavaScript Document







/*********************************************/
/****ROTACION DE LOS HUESOS DE LA CARATULA****/
/*********************************************/

var brilloo = function (){
   $(".brillo").rotate({
      angle:0, 
      animateTo:360, 
	  callback: brilloo,
      easing: function (x,t,b,c,d){       
          return c*(t/d)+b;
      }
   });
}


var brill = function (){
   $(".brilloo").rotate({
      angle:0, 
      animateTo:115, 
	  callback: brill,
      easing: function (x,t,b,c,d){       
          return c*(t/d)+b;
      }
   });
}
/*********************************************/
/****ROTACION DE LOS HUESOS DE LA CARATULA****/
/*********************************************/



/*********************************************/
/********** QUE EMPIEZE EL ROCK **************/
/*********************************************/

$(document).ready(function(e) {
	
	var music = $("#sonido1")[0];
	var shock = $("#sonido2")[0];
	var pase = $("#sonido3")[0];
	var mezcla1 = $("#sonido4")[0];
	var letrero = $("#sonido5")[0];
	var plip = $("#sonido6")[0];
	var tin = $("#sonido7")[0];
	var titulo = $("#sonido8")[0];
	var elsol = $("#sonido9")[0];
	var tress = $("#sonido10")[0];
	var cuatroo = $("#sonido11")[0];
	var finn = $("#sonido12")[0];
	var pen = $("#sonido13")[0];
	var tinn = $("#sonido14")[0];
	
$('#nubes').pan({fps: 30, speed: 2, dir: 'right'});
$('#link1').sprite({fps: 10, no_of_frames: 2});
$('#link2').sprite({fps: 10, no_of_frames: 2});
$('#link3').sprite({fps: 10, no_of_frames: 2});
$('#link4').sprite({fps: 10, no_of_frames: 2});
$('#link5').sprite({fps: 10, no_of_frames: 2});
$('#link6').sprite({fps: 10, no_of_frames: 2});

function sun(){
$("#rayos_sol").animate({
	top:'59px',
	left:'438px',
	width:'39%'
	},400,function(){
		$("#rayos_sol").animate({
			top:'97px',
			left:'476px',
			width:'31%'
			},400,sun());
		});
}

sun();
brill();
brilloo();
pase.play();
$("#intro").fadeIn(1000).delay(500).fadeOut(1000,function(){
	music.play();
	music.currentTime = 0;
	caratula();
	});

function caratula(){
	$("#caratula").fadeIn(1);
	$("#foco_caratula").delay(500).fadeIn(500,function(){
		shock.play();
		$("#foco_caratula").fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(800,function(){
				$("#ciclo_caratula").fadeIn(500,function(){
					letrero.play();
					$("#titulo_caratula").animate({
						top:'-6px'
						},300,function(){
							$("#titulo_caratula").animate({
								top:'-44px'
								},300,function(){
									mezcla1.play();
									mezcla1.currentTime = 0;
									botones_caratula();
									});		
							});
					});		
			});
		});
	
	};
	
function botones_caratula(){
	$("#boton1").fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(500,function(){
		$("#img1").css('background-position','-40px -116px');
		$("#enlace1").fadeIn(1);
		});
	$("#boton2").delay(1000).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(500,function(){
		$("#img2").css('background-position','30px -114px');
		$("#enlace2").fadeIn(1);
		});
	$("#boton3").delay(2000).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(500,function(){
		$("#img3").css('background-position','-44px -116px');
		$("#enlace3").fadeIn(1);
		});
	$("#boton4").delay(3000).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(500,function(){
		$("#img4").css('background-position','34px -114px');
		$("#enlace4").fadeIn(1);
		});
	$("#boton5").delay(4000).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(500,function(){
		$("#img5").css('background-position','-40px -116px');
		$("#enlace5").fadeIn(1);
		});
	$("#boton6").delay(5000).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(500,function(){
		$("#img6").css('background-position','29px -116px');
		$("#enlace6").fadeIn(1,function(){
			});
		});
}


function titulo_anim()
{
	$(".titulo").animate({
		top:'11px'	
	},400);
};

function text1(){
	titulo.play();
	titulo.currentTime = 0;
	$("#texto1").delay(400).animate({
		left:'496px'
		},200);
	}
function text2(){
	elsol.play();
	elsol.currentTime = 0;
	$("#texto2").delay(400).animate({
		left:'86px'
		},200);
	}
function text3(){
	tress.play();
	tress.currentTime = 0;
	$("#texto3").delay(400).animate({
		left:'79px'
		},200,function(){
			$("#dl").delay(200).animate({
				left:'536px'
				},200,function(){
					$("#titulo3_2").delay(200).animate({
						width:'450px'
						},200);
					});
			});
	
	}
function text5(){
	pen.play();
	pen.currentTime = 0;
	$("#texto5").delay(400).animate({
		left:'95px'
		},200,function(){
			$("#tabla").delay(150).animate({
				top:'300px'
				},200);
			});
	}
function text6(){
	finn.play();
	finn.currentTime = 0;
	$("#texto6").delay(400).animate({
		left:'88px'
		},200,function(){
			$("#foco2").fadeIn(300);
			});
	}

function sol(){
	$("#solario2").delay(1000).fadeOut(300);
	$("#solario").delay(1000).fadeIn(300);
	$("#sol").delay(1000).fadeIn(300,function(){
		$("#rayos_sol").fadeIn(300)		
		});
	
	}

$("dt").click(function(){
	tin.play();
	tin.currentTime = 0;
	});

$(".inicio").mouseover(function(){
	tin.play();
	tin.currentTime = 0;
	});
$(".anterior").click(function(){
	tin.play();
	tin.currentTime = 0;
	});
$(".siguiente").click(function(){
	tin.play();
	tin.currentTime = 0;
	});

/*****************************************************/
/*     EFECTO DE LOS BOTONES DEL MENU PRINCIPAL      */
/*****************************************************/

$("#enlace1").mouseover(function(){
	tin.play();
	tin.currentTime = 0;
	$("#img1").css('background-position','-40px -239px');
	});
	

	$("#enlace1").mouseleave(function(){
	$("#img1").css('background-position','-40px -116px');
	});

	

/********************************************/

$("#enlace2").mouseover(function(){
	tin.play();
	tin.currentTime = 0;
	$("#img2").css('background-position','30px -237px');
	});

$("#enlace2").mouseleave(function(){
	$("#img2").css('background-position','30px -114px');
	});

/********************************************/

$("#enlace3").mouseover(function(){
	tin.play();
	tin.currentTime = 0;
	$("#img3").css('background-position','-43px -238px');
	});

$("#enlace3").mouseleave(function(){
	
	$("#img3").css('background-position','-44px -116px');
	});

/********************************************/

$("#enlace4").mouseover(function(){
	tin.play();
	tin.currentTime = 0;
	$("#img4").css('background-position','34px -237px');
	});

$("#enlace4").mouseleave(function(){
	$("#img4").css('background-position','34px -114px');
	});

/********************************************/

$("#enlace5").mouseover(function(){
	tin.play();
	tin.currentTime = 0;
	$("#img5").css('background-position','-40px -238px');
	});

$("#enlace5").mouseleave(function(){
	$("#img5").css('background-position','-40px -116px');
	});

/********************************************/
	
$("#enlace6").mouseover(function(){
	tin.play();
	tin.currentTime = 0;
	$("#img6").css('background-position','29px -240px');
	});

$("#enlace6").mouseleave(function(){
	$("#img6").css('background-position','29px -116px');
	});


/*****************************************************/
/*     ENLACE DE LOS BOTONES DEL MENU PRINCIPAL      */
/*****************************************************/
	
$("#enlace1").click(function(){
		music.pause();
	mezcla1.pause();
	mezcla1.currentTime = 0;
	music.currentTime = 0;
	reseteo();
	titulo_anim();
	text1();
	$("#caratula").fadeOut(1);
	$("#escena1").fadeIn(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	$("#escena7").fadeOut(1);
	});

$("#enlace2").click(function(){
		music.pause();
	mezcla1.pause();
	mezcla1.currentTime = 0;
	music.currentTime = 0;
	reseteo();
	text2();
	sol();
	titulo_anim();
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeIn(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	$("#escena7").fadeOut(1);
	});

$("#enlace3").click(function(){
	music.pause();
	mezcla1.pause();
	mezcla1.currentTime = 0;
	music.currentTime = 0;
	reseteo();
	titulo_anim();
	text3();
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeIn(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	$("#escena7").fadeOut(1);
	});

$("#enlace4").click(function(){
		music.pause();
	mezcla1.pause();
	mezcla1.currentTime = 0;
	music.currentTime = 0;
	reseteo();
	titulo_anim();
	titulo.play();
	titulo.currentTime = 0;
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeIn(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	$("#escena7").fadeOut(1);
	});

$("#enlace5").click(function(){
		music.pause();
	mezcla1.pause();
	mezcla1.currentTime = 0;
	music.currentTime = 0;
	reseteo();
	titulo_anim();
	text5();
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeIn(1);
	$("#escena6").fadeOut(1);
	$("#escena7").fadeOut(1);
	});

$("#enlace6").click(function(){
		music.pause();
	mezcla1.pause();
	mezcla1.currentTime = 0;
	music.currentTime = 0;
	reseteo();
	titulo_anim();
	text6();
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeIn(1);
	});

/*****************************************************/
/*            ANTERIOR Y SIGUIENTE                   */
/*****************************************************/
$(".inicio").click(function(){
	caratula();
	reseteo();
	$("#texto1").css('left','990px').stop();
	$("#texto2").css('left','-460px').stop();
	$("#texto3").css('left','-472px').stop();
	$("#texto5").css('left','-832px').stop();
	$("#texto6").css('left','-416px').stop();
	$("#dl").css('left','1016px').stop();
	$("#titulo3_2").css('width','0px').stop();
	$(".titulo").css('top','-226px').stop();
	$("#solario2").fadeIn(1);
	$("#solario").fadeOut(1);
	$("#tabla").css('top','695px').stop();
	$("#foco2").css('display','none').stop();
	
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	
	music.play();
	music.currentTime = 0;
	titulo.pause();
	tress.pause();
	});
	
/************************************/
	$("#anterior1").on("click", function () {
			$('#texto1').clearQueue().stop().css('left','990px');
	});
	$("#siguiente1").on("click", function () {
			$('#texto1').clearQueue().stop().css('left','990px');
	});
	
$("#anterior1").click(function(){
	
	$(".titulo").css('top','-226px').stop();
	caratula();
	reseteo();
	
	music.play();
	music.currentTime = 0;
	$("#caratula").fadeIn(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	});

$("#siguiente1").click(function(){
	
	$(".titulo").css('top','-226px').stop();
	titulo_anim();
	text2();
	sol();
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeIn(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	});

/*************************************/
$("#anterior2").on("click", function () {
			$('#texto2').clearQueue().stop().css('left','-460px');
			$("#sol").clearQueue().stop().css('display','none');
			$("#rayos_sol").css('display','none');
	});

$("#siguiente2").on("click", function () {
			$('#texto2').clearQueue().stop().css('left','-460px');
			$("#sol").clearQueue().stop().css('display','none');
			$("#rayos_sol").css('display','none');
	});


$("#anterior2").click(function(){
	elsol.pause();
	$(".titulo").css('top','-226px').stop();
	$("#solario2").fadeIn(1);
	$("#solario").fadeOut(1);
	titulo_anim();
	text1();
	$("#caratula").fadeOut(1);
	$("#escena1").fadeIn(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	});

$("#siguiente2").click(function(){
	$(".titulo").css('top','-226px').stop();
	$("#solario2").fadeIn(1);
	$("#solario").fadeOut(1);
	elsol.pause();
	titulo_anim();
	text3();
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeIn(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	});
	
/*************************************/
$("#anterior3").on("click", function () {
			$('#titulo3_2').clearQueue().stop().css('width','0px');
			$('#dl').clearQueue().stop().css('left','1016px');
			$('#texto3').clearQueue().stop().css('left','-472px');
	});
$("#siguiente3").on("click", function () {
			$('#titulo3_2').clearQueue().stop().css('width','0px');
			$('#dl').clearQueue().stop().css('left','1016px');
			$('#texto3').clearQueue().stop().css('left','-472px');
	});
	
	
$("#anterior3").click(function(){
	$(".titulo").css('top','-226px').stop();
	titulo_anim();
	text2();
	sol();
	tress.pause();
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeIn(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	});

$("#siguiente3").click(function(){
	$(".titulo").css('top','-226px').stop();
	titulo_anim();
	tress.pause();
	titulo.play();
	titulo.currentTime = 0;
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeIn(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	});
	
/*************************************/

$("#anterior4").click(function(){
	
	$(".titulo").css('top','-226px').stop();
	titulo_anim();
	text3();

	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeIn(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	});

$("#siguiente4").click(function(){
	$(".titulo").css('top','-226px').stop();
	titulo_anim();
	text5();

	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeIn(1);
	$("#escena6").fadeOut(1);
	});
	
/*************************************/
$("#anterior5").on("click", function () {
			$('#tabla').clearQueue().stop().css('top','695px');
	});
$("#siguiente5").on("click", function () {
			$('#tabla').clearQueue().stop().css('top','695px');
	});


$("#anterior5").click(function(){
	titulo.play();
	titulo.currentTime = 0;
	$(".titulo").css('top','-226px').stop();
	titulo_anim();
	pen.pause();
	$("#texto5").css('left','-832px').stop();
	$("#tabla").css('top','695px').stop();
	
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeIn(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	});

$("#siguiente5").click(function(){
	$(".titulo").css('top','-226px').stop();
	pen.pause();
	titulo_anim();
	$("#texto5").css('left','-832px').stop();
	$("#tabla").css('top','695px').stop();
	
	text6();
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeIn(1);
	});
	
/*************************************/
$("#anterior6").on("click", function () {
			$('#foco2').clearQueue().stop().css('display','none');
	});


$("#anterior6").click(function(){
	finn.pause();
	$(".titulo").css('top','-226px').stop();
	titulo_anim();
	text5();
	$("#texto6").css('left','-416px').stop();
	
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeIn(1);
	$("#escena6").fadeOut(1);
	});

$("#siguiente6").click(function(){
	location.reload();
	});


/************************************************/
/********** RESETEO DE LA CARATULA **************/
/************************************************/

function reseteo(){
	$("#ciclo_caratula").css('display','none').stop();
	$("#foco_caratula").css('display','none').stop();
	$("#titulo_caratula").css('top','-273px').stop();
	$(".enlace").css('display','none').stop();
	$(".boton").css('display','none').stop();
	$("#img1").css('background-position','-40px -8px').stop();
	$("#img2").css('background-position','30px -6px').stop();
	$("#img3").css('background-position','-44px -8px').stop();
	$("#img4").css('background-position','34px -5px').stop();
	$("#img5").css('background-position','-40px -8px').stop();
	$("#img6").css('background-position','29px -7px').stop();
	$("#swich").css('background-position','-24px -19px').stop();
	
	$("#enlace1").mouseleave(function(){
	$("#img1").css('background-position','-40px -116px');
	});
	$("#enlace2").mouseleave(function(){
	$("#img2").css('background-position','30px -114px');
	});
	$("#enlace3").mouseleave(function(){
	$("#img3").css('background-position','-44px -116px');
	});
	$("#enlace4").mouseleave(function(){
	$("#img4").css('background-position','34px -114px');
	});
	$("#enlace5").mouseleave(function(){
	$("#img5").css('background-position','-40px -116px');
	});
	$("#enlace6").mouseleave(function(){
	$("#img6").css('background-position','29px -116px');
	});
	};


/*****************************************************/
/*                ENLACES DE RECURSOS                */
/*****************************************************/

$("#cuadro1").mouseover(function(){
	tinn.play();
	tinn.currentTime = 0;
	$("#uno").animate({
		top:'223px',
		left:'196px',
		width:'10%'
		},200);
	$("#link1").fadeIn(1);
	$("#espuma1").delay(150).fadeIn(1);
	});
	
$("#cuadro1").mouseleave(function(){
	tinn.pause();
	$("#uno").animate({
		top:'250px',
		left:'202px',
		width:'7%'
		},200);
	$("#link1").fadeOut(1);
	$("#espuma1").fadeOut(1);
	});

/******************************/


$("#cuadro2").mouseover(function(){
	tinn.play();
	tinn.currentTime = 0;
	$("#dos").animate({
		top:'234px',
		left:'340px',
		width:'10%'
		},200);
	$("#link2").fadeIn(1);
	$("#espuma2").delay(150).fadeIn(1);
	});
	
$("#cuadro2").mouseleave(function(){
	tinn.pause();
	$("#dos").animate({
		top:'255px',
		left:'345px',
		width:'7%'
		},200);
	$("#link2").fadeOut(1);
	$("#espuma2").fadeOut(1);
	});

/******************************/


$("#cuadro3").mouseover(function(){
	tinn.play();
	tinn.currentTime = 0;
	$("#tres").animate({
		top:'242px',
		left:'480px',
		width:'10%'
		},200);
	$("#link3").fadeIn(1);
	$("#espuma3").delay(150).fadeIn(1);
	});
	
$("#cuadro3").mouseleave(function(){
	tinn.pause();
	$("#tres").animate({
		top:'261px',
		left:'478px',
		width:'7%'
		},200);
	$("#link3").fadeOut(1);
	$("#espuma3").fadeOut(1);
	});

/******************************/

$("#cuadro4").mouseover(function(){
	tinn.play();
	tinn.currentTime = 0;
	$("#cuatro").animate({
		top:'248px',
		left:'599px',
		width:'10%'
		},200);
	$("#link4").fadeIn(1);
	$("#espuma4").delay(150).fadeIn(1);
	});
	
$("#cuadro4").mouseleave(function(){
	tinn.pause();
	$("#cuatro").animate({
		top:'268px',
		left:'595px',
		width:'7%'
		},200);
	$("#link4").fadeOut(1);
	$("#espuma4").fadeOut(1);
	});

/******************************/


$("#cuadro5").mouseover(function(){
	tinn.play();
	tinn.currentTime = 0;
	$("#cinco").animate({
		top:'252px',
		left:'704px',
		width:'10%'
		},200);
	$("#link5").fadeIn(1);
	$("#espuma5").delay(150).fadeIn(1);
	});
	
$("#cuadro5").mouseleave(function(){
	tinn.pause();
	$("#cinco").animate({
		top:'273px',
		left:'700px',
		width:'7%'
		},200);
	$("#link5").fadeOut(1);
	$("#espuma5").fadeOut(1);
	});

/***********************************/

$("#cuadro6").mouseover(function(){
	tinn.play();
	tinn.currentTime = 0;
	$("#seis").animate({
		top:'256px',
		left:'801px',
		width:'10%'
		},200);
	$("#link6").fadeIn(1);
	$("#espuma6").delay(150).fadeIn(1);
	});
	
$("#cuadro6").mouseleave(function(){
	tinn.pause();
	$("#seis").animate({
		top:'278px',
		left:'800px',
		width:'7%'
		},200);
	$("#link6").fadeOut(1);
	$("#espuma6").fadeOut(1);
	});

/******************************/

/******************************/
/*****************************************************/
/*                   DE PROCESOS                     */
/*****************************************************/




$('dl dd').hide(); 
  $('dl dt').click(function(){ 
   if ($(this).hasClass('activo')) { 
        $(this).removeClass('activo'); 
        $(this).next().slideUp(); 
   } else { 
        $('dl dt').removeClass('activo'); 
        $(this).addClass('activo'); 
        $('dl dd').slideUp(); 
        $(this).next().slideDown(); 
   } 
}); 


}); //fin de ready//


















