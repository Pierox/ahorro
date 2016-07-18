// JavaScript Document

$(document).ready(function(e) {
    

//--------------------------------	Nueva animacion de la caratula
	
$("#cartel1").animate({
	opacity: 1,
	},2000).delay(5000).animate({		
		},function(){
			parte2();
			})	
$("#cartel2").animate({
	opacity: 1,
	},2000)			
		
function parte2(){	
	$("#cartel1").animate({
		width: '798px',
		height:'470px',
		marginLeft:'0px',
		marginTop:'25px',
		opacity: 0,	
		},function(){
		$("#cartel2").animate({
		width:'85px',
		height:'31px',
		marginLeft:'350px',
		marginTop:'260px',
		opacity: 0,
		},250,function(){
		$("#home").css('display','none');
		inicioNew();	

			})//fin parte 2
	})
}
function inicioNew(){
	$("#pantHome").css('display','block');
}
$("#btnInicio").click(function(){
	$("#pantHome").animate({
		opacity:0,
		
		},200,function(){
			$("#pantHome").css('display','none');
			$("#pantPrincipal").css('display','block');
			})
	})

/*------------------*/
$("#btn1").click(function(){
	$("#fondoFlechas").animate({
		height:'450px',
		
		},1000,function(){
			$("#btn2").css('display','block');
			$("#btn3").css('display','block');
			$("#btn4").css('display','block');
			})	
})

$("#btn2").click(function(){
	$("#fondoFlechas2").animate({
		width:'210px',
		},1000,function(){
			$("#btn5").css('display','block');
			$("#btn6").css('display','block');
			$("#btn7").css('display','block');
			})	
})
$("#btn3").click(function(){
	$("#fondoFlechas3").animate({
		width:'210px',
	},1000,function(){
		$("#btn8").css('display','block');
	})
})
$("#btn4").click(function(){
	$("#fondoFlechas4").animate({
		width:'210px',
	},1000,function(){
		$("#btn9").css('display','block');
		$("#btn10").css('display','block');
		$("#btn11").css('display','block');
	})
})

$("#btn5").click(function(){
	$("#fondoFlechas2").animate({
		width:'350px',
		},1000,function(){
			$("#btn12").css('display','block');
			})	
	
})

$("#btn6").click(function(){
	$("#fondoFlechas5").animate({
		width:'300px',
		},1000,function(){
			$("#btn13").css('display','block');
			$("#btn14").css('display','block');
			$("#btn15").css('display','block');
			})
})

$("#btn12").click(function(){
	$("#pantPrincipal").animate({
		opacity:'0',
	},1000,function(){
		$("#pantPrincipal").css('display','none');
		$("#rosado1").css('display','block');
		$("#rosado1").css('opacity','100');	
		})
})
$("#btn13").click(function(){
	$("#pantPrincipal").animate({
		opacity:'0',
	},1000,function(){
		$("#pantPrincipal").css('display','none');
		$("#rosado3").css('display','block');
		$("#rosado3").css('opacity','100');	
		})
})
$("#btn14").click(function(){
	$("#pantPrincipal").animate({
		opacity:'0',
	},1000,function(){
		$("#pantPrincipal").css('display','none');
		$("#rosado4").css('display','block');
		$("#rosado4").css('opacity','100');	
		})
})
$("#btn15").click(function(){
	$("#pantPrincipal").animate({
		opacity:'0',
	},1000,function(){
		$("#pantPrincipal").css('display','none');
		$("#rosado5").css('display','block');
		$("#rosado5").css('opacity','100');	
		})
})


$("#btn7").click(function(){
	$("#pantPrincipal").animate({
		opacity:'0',
	},1000,function(){
		$("#pantPrincipal").css('display','none');
		$("#rosado6").css('display','block');
		$("#rosado6").css('opacity','100');	
		})
})
$("#btn8").click(function(){
	$("#pantPrincipal").animate({
		opacity:'0',
	},1000,function(){
		$("#pantPrincipal").css('display','none');
		$("#azul1").css('display','block');
		$("#azul1").css('opacity','100');	
		})
})
$("#btn9").click(function(){
	$("#pantPrincipal").animate({
		opacity:'0',
	},1000,function(){
		$("#pantPrincipal").css('display','none');
		$("#verde1").css('display','block');
		$("#verde1").css('opacity','100');	
		})
})
$("#btn10").click(function(){
	$("#pantPrincipal").animate({
		opacity:'0',
	},1000,function(){
		$("#pantPrincipal").css('display','none');
		$("#verde2").css('display','block');
		$("#verde2").css('opacity','100');	
		})
})
$("#btn11").click(function(){
	$("#pantPrincipal").animate({
		opacity:'0',
	},1000,function(){
		$("#pantPrincipal").css('display','none');
		$("#verde3").css('display','block');
		$("#verde3").css('opacity','100');	
		})
})
$("#btn12").click(function(){
	$("#pantPrincipal").animate({
		opacity:'0',
	},1000,function(){
		$("#pantPrincipal").css('display','none');
		$("#verde4").css('display','block');
		$("#verde4").css('opacity','100');	
		})
})







$("#home1").click(function(){
	$("#rosado1").animate({
		opacity:'0',
		},1000,function(){
			$("#rosado1").css('display','none');
			$("#pantPrincipal").css('display','block');
			$("#pantPrincipal").css("opacity",'100');
			})
})
$("#home2").click(function(){
	$("#rosado2").animate({
		opacity:'0',
		},1000,function(){
			$("#rosado2").css('display','none');
			$("#pantPrincipal").css('display','block');
			$("#pantPrincipal").css("opacity",'100');
			})
})
$("#home3").click(function(){
	$("#rosado3").animate({
		opacity:'0',
		},1000,function(){
			$("#rosado3").css('display','none');
			$("#pantPrincipal").css('display','block');
			$("#pantPrincipal").css("opacity",'100');
			})
})
$("#home4").click(function(){
	$("#rosado4").animate({
		opacity:'0',
		},1000,function(){
			$("#rosado4").css('display','none');
			$("#pantPrincipal").css('display','block');
			$("#pantPrincipal").css("opacity",'100');
			})
})
$("#home5").click(function(){
	$("#rosado5").animate({
		opacity:'0',
		},1000,function(){
			$("#rosado5").css('display','none');
			$("#pantPrincipal").css('display','block');
			$("#pantPrincipal").css("opacity",'100');
			})
})
$("#home6").click(function(){
	$("#rosado6").animate({
		opacity:'0',
		},1000,function(){
			$("#rosado6").css('display','none');
			$("#pantPrincipal").css('display','block');
			$("#pantPrincipal").css("opacity",'100');
			})
})
$("#home7").click(function(){
	$("#azul1").animate({
		opacity:'0',
		},1000,function(){
			$("#azul1").css('display','none');
			$("#pantPrincipal").css('display','block');
			$("#pantPrincipal").css("opacity",'100');
			})
})

$("#home8").click(function(){
	$("#verde1").animate({
		opacity:'0',
		},1000,function(){
			$("#verde1").css('display','none');
			$("#pantPrincipal").css('display','block');
			$("#pantPrincipal").css("opacity",'100');
			})
})
$("#home9").click(function(){
	$("#verde2").animate({
		opacity:'0',
		},1000,function(){
			$("#verde2").css('display','none');
			$("#pantPrincipal").css('display','block');
			$("#pantPrincipal").css("opacity",'100');
			})
})
$("#home10").click(function(){
	$("#verde3").animate({
		opacity:'0',
		},1000,function(){
			$("#verde3").css('display','none');
			$("#pantPrincipal").css('display','block');
			$("#pantPrincipal").css("opacity",'100');
			})
})
$("#home11").click(function(){
	$("#verde4").animate({
		opacity:'0',
		},1000,function(){
			$("#verde4").css('display','none');
			$("#pantPrincipal").css('display','block');
			$("#pantPrincipal").css("opacity",'100');
			})
})









$("#back1").click(function(){
	$("#rosado2").animate({
		opacity:'0',
		},1000,function(){
			$("#rosado2").css('display','none');
			$("#rosado1").css('display','block');
			$("#rosado1").css('opacity','100');			
			})
})

$("#next1").click(function(){
	$("#rosado1").animate({
		opacity:'0',
		},1000,function(){
			$("#rosado1").css('display','none');
			$("#rosado2").css('display','block');
			$("#rosado2").css('opacity','100');			
			})
})
$("#next2").click(function(){
	$("#rosado3").animate({
		opacity:'0',
		},1000,function(){
			$("#rosado3").css('display','none');
			$("#rosado4").css('display','block');
			$("#rosado4").css('opacity','100');			
			})
})
$("#next3").click(function(){
	$("#rosado4").animate({
		opacity:'0',
		},1000,function(){
			$("#rosado4").css('display','none');
			$("#rosado5").css('display','block');
			$("#rosado5").css('opacity','100');			
			})
})

$("#nextVerde1").click(function(){
	$("#verde1").animate({
		opacity:'0',
		},1000,function(){
			$("#verde1").css('display','none');
			$("#verde2").css('display','block');
			$("#verde2").css('opacity','100');			
			})	
	
})
$("#nextVerde2").click(function(){
	$("#verde2").animate({
		opacity:'0',
		},1000,function(){
			$("#verde2").css('display','none');
			$("#verde3").css('display','block');
			$("#verde3").css('opacity','100');			
			})	
	
})
$("#nextVerde3").click(function(){
	$("#verde3").animate({
		opacity:'0',
		},1000,function(){
			$("#verde3").css('display','none');
			$("#verde4").css('display','block');
			$("#verde4").css('opacity','100');			
			})	
	
})




$("#back2").click(function(){
	$("#rosado4").animate({
		opacity:'0',
		},1000,function(){
			$("#rosado4").css('display','none');
			$("#rosado3").css('display','block');
			$("#rosado3").css('opacity','100');			
			})
})
$("#back3").click(function(){
	$("#rosado5").animate({
		opacity:'0',
		},1000,function(){
			$("#rosado5").css('display','none');
			$("#rosado4").css('display','block');
			$("#rosado4").css('opacity','100');			
			})
})

$("#backVerde2").click(function(){
	$("#verde2").animate({
		opacity:'0',
		},1000,function(){
			$("#verde2").css('display','none');
			$("#verde1").css('display','block');
			$("#verde1").css('opacity','100');			
			})	
	
})
$("#backVerde3").click(function(){
	$("#verde3").animate({
		opacity:'0',
		},1000,function(){
			$("#verde3").css('display','none');
			$("#verde2").css('display','block');
			$("#verde2").css('opacity','100');			
			})	
	
})
$("#backVerde4").click(function(){
	$("#verde4").animate({
		opacity:'0',
		},1000,function(){
			$("#verde4").css('display','none');
			$("#verde3").css('display','block');
			$("#verde3").css('opacity','100');			
			})	
	
})




});//fin ready