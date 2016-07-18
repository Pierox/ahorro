// JavaScript Document

$(document).ready(function(e) {
	
/*   --------------------------     */
/*   --------------------------     */
/*   animacion de los botones       */	
/*   de la pantalla principal       */
/*   --------------------------     */
/*   --------------------------     */

   
   
/*$("#Santillana_present").fadeIn(500).delay(2000).fadeOut(500,function(){
			//content control principal
		
});
*/
		$("#contPrincipal").fadeIn(500,function(){});


	
$("#btn1").click(function(){
	$("#line1").animate({height: '404px',},1000,function(){
		$("#line1").animate({width: '69px',},1000,function(){
		
			$("#btn1").css('background-image','url(img/principal2/btnAprendimos2.png)');
			$("#btn2").css('display','block');
			$("#btn3").css('display','block');
			$("#btn4").css('display','block');
		});
	});
})
	
$("#btn2").click(function(){
	$("#line2").animate({
		width:'64px',
		},1000,function(){
			$("#btn2").css('background-image','url(img/principal2/btnComprension2.png)');
			$("#btn5").css('display','block');
			$("#btn6").css('display','block');
			$("#btn7").css('display','block');			
		})
	})
$("#btn3").click(function(){
	$("#line3").animate({
		width:'46px',
		},1000,function(){
			$("#btn3").css('background-image','url(img/principal2/btnExpresion2.png)');
			$("#btn8").css('display','block');
			})
	})
	
$("#btn4").click(function(){
	$("#line4").animate({
		width:'64px',
		},1000,function(){
			$("#btn4").css('background-image','url(img/principal2/btnProduccion2.png)');
			$("#btn9").css('display','block');
			$("#btn10").css('display','block');
			$("#btn11").css('display','block');			
			})
	})
	
$("#btn5").click(function(){
	$("#line5").animate({
		width:'46px',
		},1000,function(){
			$("#btn5").css('background-image','url(img/principal2/sub1b.png)');
			$("#btn12").css('display','block');
			})
	})
	
$("#btn6").click(function(){
	$("#line6").animate({
		width:'46px',
		},1000,function(){
			$("#btn6").css('background-image','url(img/principal2/sub2b.png)');
			$("#btn13").css('display','block');
			$("#btn14").css('display','block');
			$("#btn15").css('display','block');
			})
	})
/*   --------------------------     */
/*   --------------------------     */
/*   animacion de los botones       */	
/*   para ir a los contenidos       */
/*   --------------------------     */
/*   --------------------------     */

/*botones de Home */
$("#Home1a").click(function(){
	$("#marco1a").animate({
		opacity:0,
		},1000,function(){
			$("#marco1a").css('display','none');
			$("#contPrincipal").css('display','block');
				$("#contPrincipal").animate({
				opacity:1,
				},1000)
			})
	})
$("#Home1b").click(function(){
	$("#marco1b").animate({
		opacity:0,
		},1000,function(){
			$("#marco1b").css('display','none');
			$("#contPrincipal").css('display','block');
				$("#contPrincipal").animate({
				opacity:1,
				},1000)
			})
	})
	
	
$("#Home2a").click(function(){
	$("#marco2a").animate({
		opacity:0,
		},1000,function(){
			$("#marco2a").css('display','none');
			$("#contPrincipal").css('display','block');
				$("#contPrincipal").animate({
				opacity:1,
				},1000)
			})
})	

$("#Home2b").click(function(){
	$("#marco2b").animate({
		opacity:0,
		},1000,function(){
			$("#marco2b").css('display','none');
			$("#contPrincipal").css('display','block');
				$("#contPrincipal").animate({
				opacity:1,
				},1000)
			})
})
$("#Home2c").click(function(){
	$("#marco2c").animate({
		opacity:0,
		},1000,function(){
			$("#marco2c").css('display','none');
			$("#contPrincipal").css('display','block');
				$("#contPrincipal").animate({
				opacity:1,
				},1000)
			})
})

$("#Home3").click(function(){
	$("#marco3").animate({
		opacity:0,
		},1000,function(){
			$("#marco3").css('display','none');
			$("#contPrincipal").css('display','block');
				$("#contPrincipal").animate({
				opacity:1,
				},1000)
			})
})
$("#Home4").click(function(){
	$("#marco4").animate({
		opacity:0,
		},1000,function(){

					
		var beepThree1 = $("#audio_4")[0];
		beepThree1.pause();
		beepThree1.currentTime = 0;
		$('#audio_4').stop();
		

			
			$("#marco4").css('display','none');
			$("#contPrincipal").css('display','block');
				$("#contPrincipal").animate({
				opacity:1,
				},1000,function(){
					})
			})
})

$("#Home5a").click(function(){
	$("#marco5a").animate({
		opacity:0,
		},1000,function(){
			$("#marco5a").css('display','none');
			$("#contPrincipal").css('display','block');
				$("#contPrincipal").animate({
				opacity:1,
				},1000)
			})
})	

$("#Home5a1").click(function(){
	$("#marco5a1").animate({
		opacity:0,
		},1000,function(){
			$("#marco5a1").css('display','none');
			$("#contPrincipal").css('display','block');
				$("#contPrincipal").animate({
				opacity:1,
				},1000)
			})
})	


$("#Home5b").click(function(){
	$("#marco5b").animate({
		opacity:0,
		},1000,function(){
			$("#marco5b").css('display','none');
			$("#contPrincipal").css('display','block');
				$("#contPrincipal").animate({
				opacity:1,
				},1000)
			})
})

$("#Home5c").click(function(){
	$("#marco5c").animate({
		opacity:0,
		},1000,function(){
			$("#marco5c").css('display','none');
			$("#contPrincipal").css('display','block');
				$("#contPrincipal").animate({
				opacity:1,
				},1000)
			})
})

$("#Home5c1").click(function(){
	$("#marco5c1").animate({
		opacity:0,
		},1000,function(){
			$("#marco5c1").css('display','none');
			$("#contPrincipal").css('display','block');
				$("#contPrincipal").animate({
				opacity:1,
				},1000)
			})
})


/*botones next*/
/*pantalla 1 y 2*/
$("#btnNextP1a").click(function(){
	$("#marco1a").animate({
		opacity:0,
		},1000,function(){
			$("#marco1a").css('display','none');
			$("#marco1b").css('display','block');
			$("#marco1b").animate({opacity:1}, 1000,function(){
			$("#caja2z").delay(1000).fadeIn( 1000,function(){
				$("#caja3z").delay(1000).fadeIn( 1000,function(){
					$("#cuad1").delay(1000).fadeIn( 1000,function(){
						$("#cont1").delay(1000).fadeIn( 1000,function(){
							$("#cuad2").delay(1000).fadeIn( 1000,function(){
								$("#cont2").delay(1000).fadeIn( 1000,function(){
									$("#cuad3").delay(1000).fadeIn( 1000,function(){
										$("#cont3").delay(1000).fadeIn( 1000,function(){});							
									});							
								});							
							});
						});
					});
				});
			});
		});	
	});	
})
$("#btnBackP2a").click(function(){
	$("#marco1b").animate({
		opacity:0,
		},1000,function(){
			$("#marco1b").css('display','none');
			$("#marco1a").css('display','block');
			$("#marco1a").animate({
				opacity:1,
				},1000)
		})
})
/*pantalla 3,4 y 5 (anaranjados)*/
$("#btnNext2a1").click(function(){
	$("#marco2a").animate({
		opacity:0,
		},1000,function(){
			$("#marco2a").css('display','none');
			$("#marco2b").css('display','block');
			$("#marco2b").animate({opacity:1,},1000,function(){
				diapositiva_05_A();
			});
		});
})
$("#btnNext2b1").click(function(){
	$("#marco2b").animate({
		opacity:0,
	},1000,function(){
		$("#marco2b").css('display','none');
		$("#marco2c").css('display','block');
		$("#marco2c").animate({opacity:1,},1000,function(){
				diapositiva_06_A();
		});
	});
})

$("#btnBack2c1").click(function(){
	$("#marco2c").animate({
		opacity:0,
		},1000,function(){
			$("#marco2c").css('display','none');
			$("#marco2b").css('display','block');
			$("#marco2b").animate({opacity:1,},1000,function(){
				diapositiva_05_A();
			});
		});
})			
			
$("#btnBack2b1").click(function(){
	$("#marco2b").animate({
		opacity:0,
		},1000,function(){
			$("#marco2b").css('display','none');
			$("#marco2a").css('display','block');
			$("#marco2a").animate({opacity:1,},1000,function(){
				diapositiva_04_A();
			});
		});
})

/*pantalla 7,8,9 (verdes)*/

$("#btnNext5a1").click(function(){
	$("#marco5a").animate({
		opacity:0,
		},1000,function(){
			$("#marco5a").css('display','none');
			$("#marco5a1").css('display','block');
			$("#marco5a1").animate({opacity:1,},1000,function(){
			
					  $("#caja5aB").delay(1000).fadeIn( 1000,function(){
						  $("#caja5aC").fadeIn( 1000,function(){
							  $("#Cuad5aB").delay(1000).fadeIn( 1000,function(){
							  $("#Cuad5aB_1").fadeIn( 1000,function(){
								  
								  $("#Cuad5aA").fadeIn( 1000,function(){
					  $("#Cuad5aC").fadeIn( 1000,function(){
						  $("#Cuad5aD").fadeIn( 1000,function(){
							  $("#Cuad5aE").fadeIn( 1000,function(){
							  });
						   });							
					   });
								  });
								  
							  });  
							  });
						   });							
					   });
			
			
			});
	});
});


$("#btnBack5a1").click(function(){
	$("#marco5a1").animate({
		opacity:0,
		},1000,function(){
			$("#marco5a1").css('display','none');
			$("#marco5a").css('display','block');
			$("#marco5a").animate({
				opacity:1,
				},1000)
			})
	})


	
$("#btnNext5c1").click(function(){
	$("#marco5c").animate({
		opacity:0,
		},1000,function(){
			$("#marco5c").css('display','none');
			$("#marco5c1").css('display','block');
			$("#marco5c1").animate({opacity:1,},1000,function(){
				$("#caja5c1B").delay(1000).fadeIn( 1000,function(){
					$("#caja5c1C").delay(1000).fadeIn( 1000,function(){
						$("#ContentMarc5c1A").delay(1000).fadeIn( 1000,function(){
							
							$("#Cuad5c1C").delay(1000).fadeIn( 1000,function(){
								$("#Cuad5c1E").delay(1000).fadeIn( 1000,function(){
									$("#Cuad5c1B").fadeIn( 1000,function(){
										$("#Cuad5c1H").delay(1000).fadeIn( 1000,function(){
											$("#Cuad5c1A").delay(1000).fadeIn( 1000,function(){
												$("#Cuad5c1D").delay(1000).fadeIn( 1000,function(){
													
													$("#Cuad5c1J").fadeIn( 1000,function(){
														$("#Cuad5c1P").delay(1000).fadeIn( 1000,function(){
															$("#Cuad5c1K").delay(1000).fadeIn( 1000,function(){
																$("#Cuad5c1Q").delay(1000).fadeIn( 1000,function(){
																	$("#Cuad5c1Y").fadeIn( 1000,function(){
																		$("#Cuad5c1V").delay(1000).fadeIn( 1000,function(){
													$("#Cuad5c1F").fadeIn( 1000,function(){
														$("#Cuad5c1L").delay(1000).fadeIn( 1000,function(){
															$("#Cuad5c1R").delay(1000).fadeIn( 1000,function(){
																$("#Cuad5c1M").delay(1000).fadeIn( 1000,function(){
																	$("#Cuad5c1S").fadeIn( 1000,function(){
																		$("#Cuad5c1W").delay(1000).fadeIn( 1000,function(){
													$("#Cuad5c1G").fadeIn( 1000,function(){
														$("#Cuad5c1N").delay(1000).fadeIn( 1000,function(){
															$("#Cuad5c1T").delay(1000).fadeIn( 1000,function(){
																$("#Cuad5c1I").delay(1000).fadeIn( 1000,function(){
																	$("#Cuad5c1O").fadeIn( 1000,function(){
																		$("#Cuad5c1U").delay(1000).fadeIn( 1000,function(){
																			$("#Cuad5c1X").delay(1000).fadeIn( 1000,function(){
																		});
																	});							
																});							
															});							
														});
													});
																		});
																	});							
																});							
															});							
														});
													});
																		});
																	});							
																});							
															});							
														});
													});
												});
											});							
										});							
									});							
								});
							});
						});
					});
				});
				
				});
			
			});
	});
})


$("#btnBack5c1").click(function(){
	$("#marco5c1").animate({
		opacity:0,
		},1000,function(){
			$("#marco5c1").css('display','none');
			$("#marco5c").css('display','block');
			$("#marco5c").animate({
				opacity:1,
				},1000)
			})
})	


/*botones de pantalla*/



$("#btn12").click(function(){ //el lenguaje literario
	$("#btn12").css('background-image','url(img/principal2/sub1_1b.png)');
	$("#contPrincipal").animate({opacity:0,},1000,function(){
		$("#contPrincipal").css('display','none');
		$("#marco1a").css('display','block');
		$("#marco1a").animate({opacity:1}, 1000,function(){
			$("#caja2").delay(1000).fadeIn( 1000,function(){
				$("#caja3").delay(1000).fadeIn( 1000,function(){
					$("#circuloPantalla1").delay(1000).fadeIn( 1000,function(){
						$("#cuadroPantalla1").delay(1000).fadeIn( 1000,function(){
							$("#mano_excribiendo").fadeIn(500).animate({
								"margin-left":"844px",
								"margin-top":"199px"}, 1000,function(){
									$("#mano_excribiendo").animate({
										"margin-left":"464px",
										"margin-top":"219px"}, 500,function(){
											$("#mano_excribiendo").animate({
												"margin-left":"794px",
												"margin-top":"219px"}, 1000,function(){
													$("#mano_excribiendo").animate({
														"margin-left":"811px",
														"margin-top":"171px"}, 300,function(){
													});
											});
									});
							});
							
							$("#cont_txt_p").animate({
								"width":"346px",
								"height":"20px"}, 1500,function(){
									$("#cont_txt_p").animate({
										"width":"346px",
										"height":"40px"}, 1000,function(){
							$("#bird1").fadeIn(1000).animate({"margin-left":"574px","margin-top":"430px"}, 3000,function(){
								$("#bird1").fadeOut( 1000,function(){});	
								$("#bird").delay(1000).fadeIn( 1000,function(){});	
							});
									 });	
							});	

						});
					});
				});
			});
		});
	});
})

function diapositiva_04_A(){
			$("#caja2a").delay(1000).fadeIn( 1000,function(){
				$("#caja3a").delay(1000).fadeIn( 1000,function(){
					$("#cuad2a").delay(1000).fadeIn( 1000,function(){
						$("#circ2a").delay(1000).fadeIn( 1000,function(){
							$("#flecha2a").delay(1000).fadeIn( 1000,function(){
								$("#infcuad2a").fadeIn( 1000,function(){
									$("#cuad3a").delay(1000).fadeIn( 1000,function(){
										$("#circ3a").delay(1000).fadeIn( 1000,function(){
											$("#flecha3a").delay(1000).fadeIn( 1000,function(){
												$("#infcuad3a").fadeIn( 1000,function(){
													$("#cuad4a").delay(1000).fadeIn( 1000,function(){
														$("#circ4a").delay(1000).fadeIn( 1000,function(){
															$("#flecha4a").delay(1000).fadeIn( 1000,function(){
																$("#infcuad4a").fadeIn( 1000,function(){
																	$("#cuad5a").delay(1000).fadeIn( 1000,function(){
																		$("#circ5a").delay(1000).fadeIn( 1000,function(){
																			$("#flecha5a").delay(1000).fadeIn( 1000,function(){
																				$("#infcuad5a").fadeIn( 1000,function(){});							
																			});
																		});
																	});
																});							
															});							
														});							
													});
												});
											});
										});							
									});							
								});							
							});
						});
					});
				});
			});
	};

$("#btn13").click(function(){ //texto narrativo
	$("#btn13").css('background-image','url(img/principal2/sub2_1b.png)');
	$("#contPrincipal").animate({
		opacity:0,
	},1000,function(){
		$("#contPrincipal").css('display','none');
		$("#marco2a").css('display','block');
		$("#marco2a").animate({opacity:1}, 1000,function(){
			diapositiva_04_A();
		});
	});
})

function diapositiva_05_A(){
		  $("#caja2aA").delay(1000).fadeIn( 1000,function(){
			 $("#caja4a").delay(1000).fadeIn( 1000,function(){
				  $("#BigCirc4a5").delay(1000).fadeIn( 1000,function(){
					  $("#Titulo4a5").fadeIn( 1000,function(){
					 	 $("#Titulo4a5").animate({"margin-top":"26px","margin-left":"102px"}, 3000,function(){
								$("#Arrow4B1").fadeIn( 1000,function(){
									$("#Circ4a1").fadeIn( 1000,function(){
										$("#Titulo4a5").animate({"margin-top":"76px","margin-left":"562px"}, 3000,function(){
											$("#Arrow4B2").fadeIn( 1000,function(){
												$("#Circ4a2").fadeIn( 1000,function(){
													$("#Titulo4a5").animate({"margin-top":"306px","margin-left":"562px"}, 3000,function(){
														$("#Arrow4B3").fadeIn( 1000,function(){
															$("#Circ4a3").delay(1000).fadeIn( 1000,function(){
																$("#Titulo4a5").animate({"margin-top":"306px","margin-left":"80px"}, 2000,function(){
																	$("#Arrow4B4").fadeIn( 1000,function(){
																		$("#Circ4a4").delay(1000).fadeIn( 1000,function(){
																			$("#Titulo4a5").animate({"margin-top":"76px","margin-left":"80px"}, 2000,function(){
																				$("#Arrow4a5").fadeIn( 1000,function(){
																					$("#Circ4a5").fadeIn( 1000,function(){
																						$("#Titulo4a5").animate({"margin-top":"416px","margin-left":"322px"}, 2000,function(){});
																					});							
																				});
																			});
																		});
																	});							
																});							
															});							
														});
													});
												});
											});							
										});
									 });
							  });	
						  });							
					  });
				  });
			  });
		   });
};


$("#btn14").click(function(){ //el relato histórico
	$("#btn14").css('background-image','url(img/principal2/sub2_2b.png)');
	$("#contPrincipal").animate({
		opacity:0,
	},1000,function(){
		$("#contPrincipal").css('display','none');
		$("#marco2b").css('display','block');
		$("#marco2b").animate({opacity:1},1000,function(){
			diapositiva_05_A();
		});
	});
})

function diapositiva_06_A(){
			  $("#caja2atxtlit").delay(1000).fadeIn( 1000,function(){
				  $("#caja3atxtlit").delay(1000).fadeIn( 1000,function(){
					  $("#Circ2c1").delay(1000).fadeIn( 1000,function(){
						  $("#Arrow2c1").animate({"height":"45px"}, 3000,function(){
							  $("#Circ2c2").fadeIn( 1000,function(){
								  $("#Arrow2c1").animate({"height":"140px"}, 3000,function(){
									  $("#Circ2c3").fadeIn( 1000,function(){});
									  $("#Circ2c7").fadeIn( 1000,function(){	
										  $("#Arrow2c1").animate({"height":"200px"}, 3000,function(){
											  $("#Circ2c4").fadeIn( 1000,function(){/*});
											  $("#Circ2c8").fadeIn( 1000,function(){*/
												  $("#Arrow2c1").animate({"height":"270px"}, 3000,function(){
													  $("#Circ2c5").fadeIn( 1000,function(){/*});
													  $("#Circ2c9").fadeIn( 1000,function(){	*/
														  $("#Arrow2c1").animate({"height":"340px"}, 3000,function(){
															  $("#Circ2c6").fadeIn( 1000,function(){
																	  $("#Arrow2c2").animate({"height":"50px"}, 3000,function(){
																		  $("#Circ2c8").fadeIn( 1000,function(){
																			  $("#Arrow2c2").animate({"height":"120px"}, 3000,function(){
																				  $("#Circ2c9").fadeIn( 1000,function(){
																						  $("#Arrow2c2").animate({"height":"220px"}, 3000,function(){
																							  $("#Circ2c0").fadeIn( 1000,function(){
																								  });
																						  });
																					  });
																			  });
																			});
																	  });
																  });
														  });
													  });
												  });
											  });
										  });	
									  });							
								  });							
							  });
						  });
					  });
				  });
			  });		
};

$("#btn15").click(function(){ //los textos literarios orales
	$("#btn15").css('background-image','url(img/principal2/sub2_3b.png)');
	$("#contPrincipal").animate({
		opacity:0,
	},1000,function(){
		$("#contPrincipal").css('display','none');
		$("#marco2c").css('display','block');
		$("#marco2c").animate({opacity:1},1000,function(){
				diapositiva_06_A();
		});
	});
})


$("#btn7").click(function(){ //boton palabra clave
	$("#btn7").css('background-image','url(img/principal2/sub3b.png)');
	$("#contPrincipal").animate({
		opacity:0,
	},1000,function(){
		$("#contPrincipal").css('display','none');
		$("#marco3").css('display','block');
		$("#marco3").animate({opacity:1},1000,function(){
			  $("#caja2aClave").delay(1000).fadeIn( 1000,function(){
			  $("#caja3aClave").delay(1000).fadeIn( 1000,function(){
					  $("#Circ3c1").delay(1000).fadeIn( 1000,function(){
						  $("#Arrow3c1").animate({"height":"48px"}, 2000,function(){
							  $("#Circ3cA").fadeIn( 1000,function(){
								  $("#lectura3A").fadeIn( 1000,function(){
											  $("#Circ3c2").delay(1000).fadeIn( 1000,function(){
												  $("#Arrow3c2").animate({"height":"48px"}, 2000,function(){
													  $("#Circ3cB").fadeIn( 1000,function(){
														  $("#lectura3D").fadeIn( 1000,function(){
															  
										  $(".TxtLectu3D").fadeIn(2000);
										  $("#ManoWrite").fadeIn(100).animate({"margin-top":"550px","margin-left":"430px"}, 1000,function(){ 
															  
											  $("#Circ3c3").delay(1000).fadeIn( 1000,function(){
												  $("#Arrow3c3").animate({"height":"48px"}, 2000,function(){
													  $("#Circ3cC").fadeIn( 1000,function(){
														  
														  $("#lectura3C").fadeIn( 1000,function(){
															
															$(".TxtLectu3").fadeOut(100,function(){});
														  	$("#TxtLectu3_negrita").fadeIn( 100,function(){
															   
															  
										  $("#ManoWrite").animate({"margin-top":"296px","margin-left":"728px"}, 1000,function(){ 
												$("#cont_txt3C").animate({"height":"17px"}, 2000,function(){});
												$("#ManoWrite").animate({"margin-top":"296px","margin-left":"898px"}, 1000,function(){ 
										  $("#ManoWrite").animate({"margin-top":"321px","margin-left":"728px"}, 1000,function(){ 
												$("#cont_txt3C").animate({"height":"37px"}, 2000,function(){});
												$("#ManoWrite").animate({"margin-top":"321px","margin-left":"908px"}, 1000,function(){ 
										  $("#ManoWrite").animate({"margin-top":"341px","margin-left":"728px"}, 1000,function(){
												$("#cont_txt3C").animate({"height":"73px"}, 2000,function(){});
												$("#ManoWrite").animate({"margin-top":"351px","margin-left":"908px"}, 1000,function(){ 
												$("#ManoWrite").animate({"margin-top":"461px","margin-left":"808px"}, 1000,function(){ 
												
																	  $("#Circ3c4").delay(1000).fadeIn( 1000,function(){
																		  $("#Arrow3c4").animate({"height":"48px"}, 2000,function(){
																			  $("#Circ3cD").fadeIn( 1000,function(){
																				  
														 							 $("#lectura3B").fadeIn( 1000,function(){
												$("#ManoWrite").animate({"margin-top":"414px","margin-left":"578px"}, 1000,function(){
													 	$("#cont_txt4B").animate({"height":"35px"}, 1000,function(){});
														$("#ManoWrite").animate({"margin-top":"414px","margin-left":"758px"}, 1000,function(){
															
												$("#ManoWrite").animate({"margin-top":"450px","margin-left":"578px"}, 1000,function(){
													 	$("#cont_txt4B").animate({"height":"71px"}, 1000,function(){});
														$("#ManoWrite").animate({"margin-top":"450px","margin-left":"758px"}, 1000,function(){
															
												$("#ManoWrite").animate({"margin-top":"485px","margin-left":"578px"}, 1000,function(){
													 	$("#cont_txt4B").animate({"height":"100px"}, 1000,function(){});
														$("#ManoWrite").animate({"margin-top":"485px","margin-left":"758px"}, 1000,function(){

												$("#ManoWrite").animate({"margin-top":"525px","margin-left":"578px"}, 1000,function(){
													 	$("#cont_txt4B").animate({"height":"170px"}, 1000,function(){});
														$("#ManoWrite").animate({"margin-top":"525px","margin-left":"758px"}, 1000,function(){
																
																$("#ManoWrite").animate({"margin-top":"461px","margin-left":"808px"}, 1000,function(){ })
																	
															});
												});	

																	
															});
												});	

															});
												});	
																					 
															});
												});										 
																						 });
																			  });
																		   });
												  				  		});
																		
												});						
												});				  
										   });					  
																  
												});				  
												
										  });
															
												});	
															  
										  });					  
																
																  
														   	});
														   });							
													  });
												  });
											  });
														   });							
													  });
												  });
											  });
										  });
								   });	
								  						
							  });
						  });
					  });
				  });
			  });
		});
	});
});

$("#IconSound4").click(function(){ //boton dialogo
			  var beepThree1 = $("#audio_4")[0];
			  //beepThree.pause();
			  beepThree1.play();
});


$("#btn8").click(function(){ //boton dialogo
	$("#btn8").css('background-image','url(img/principal2/sub33b.png)');
	$("#contPrincipal").animate({
		opacity:0,
	},1000,function(){
		$("#contPrincipal").css('display','none');
		$("#marco4").css('display','block');
		$("#marco4").animate({opacity:1},1000,function(){
			  $("#caja4a2").delay(1000).fadeIn( 1000,function(){
					  $("#caja4a3").delay(1000).fadeIn( 1000,function(){
							  $("#Txta4").delay(1000).fadeIn( 1000,function(){
								  $("#IconSound4").fadeIn( 2000,function(){
									  $("#CuadBig4a1").fadeIn( 1000,function(){
										  $("#Arrow4a1").fadeIn( 1000,function(){
											  $("#Cuad4a1").fadeIn( 1000,function(){
												  $("#ArrowBig4a1").animate({"width":"291px"}, 1000,function(){
									  $("#CuadBig4a2").fadeIn( 1000,function(){
										  $("#Arrow4a2").fadeIn( 1000,function(){
											  $("#Cuad4a2").fadeIn( 1000,function(){
												  $("#ArrowBig4a2").animate({"height":"172px"}, 1000,function(){
									  $("#CuadBig4a4").fadeIn( 1000,function(){
										  $("#Arrow4a3").fadeIn( 1000,function(){
											  $("#Cuad4a4").fadeIn( 1000,function(){
												  $("#ArrowBig4a3").animate({"width":"291px"}, 1000,function(){
									  $("#CuadBig4a3").fadeIn( 1000,function(){
										  $("#Arrow4a4").fadeIn( 1000,function(){
											  $("#Cuad4a3").fadeIn( 1000,function(){
											  });
										   });							
									   });
												  });
											  });
										   });							
									   });
												  });
											  });
										   });							
									   });
												  });
											  });
										   });							
									   });
								  });
							  });
					  });
			  });
		});
		});
})


$("#btn9").click(function(){ //la comunicacion y el lenguaje

	$("#btn9").css('background-image','url(img/principal2/sub55_1b.png)');
	$("#contPrincipal").animate({
		opacity:0,
	},1000,function(){
		$("#contPrincipal").css('display','none');
		$("#marco5a").css('display','block');
		$("#marco5a").animate({opacity:1},1000,function(){
									  $("#caja5a2").fadeIn( 1000,function(){
										  $("#caja5a3").fadeIn( 1000,function(){
											  $("#Cuad5a1").delay(1000).fadeIn( 1000,function(){
												  $("#Cuad5a5").fadeIn( 1000,function(){
									  $("#Arrow5a1").fadeIn( 1000,function(){
										  $("#Cuad5a2").fadeIn( 1000,function(){
											  $("#Arrow5a2").fadeIn( 1000,function(){
									  $("#Arrow5a1").animate({"margin-top":"131px"}, 3000,function(){
										  $("#Cuad5a3").fadeIn( 1000,function(){
											  $("#Arrow5a2").animate({"margin-top":"159px"}, 3000,function(){
									  $("#Arrow5a1").animate({"margin-top":"279px"}, 3000,function(){
										  $("#Cuad5a4").fadeIn( 1000,function(){
											  $("#Arrow5a2").animate({"margin-top":"321px"}, 3000,function(){
											  });
										   });							
									   });
											  });
										   });							
									   });
											  });
										   });							
									   });
												  });
											  });
										   });							
									   });
		  });
	})
	
})
$("#btn10").click(function(){ //el campo lexico
	$("#btn10").css('background-image','url(img/principal2/sub55_2b.png)');
	$("#contPrincipal").animate({
		opacity:0,
	},1000,function(){
		$("#contPrincipal").css('display','none');
		$("#marco5b").css('display','block');
		$("#marco5b").animate({opacity:1},1000,function(){
									  $("#caja5bB").delay(1000).fadeIn( 1000,function(){
										  $("#caja5bC").delay(1000).fadeIn( 1000,function(){
											  $("#Cuad5bB").delay(1000).fadeIn( 1000,function(){
												  $("#Cuad5bC").fadeIn( 1000,function(){
									  $("#Cuad5bD").fadeIn( 1000,function(){
										  $("#Cuad5bE").fadeIn( 1000,function(){
											  $("#Cuad5bF").fadeIn( 1000,function(){
									  $("#Cuad5bG").fadeIn( 1000,function(){
										  $("#Cuad5bH").fadeIn( 1000,function(){
											  $("#Cuad5bI").fadeIn( 1000,function(){
									  $("#Cuad5bJ").fadeIn( 1000,function(){
										  $("#Cuad5bK").fadeIn( 1000,function(){
											  $("#Cuad5bL").fadeIn( 1000,function(){
												  $("#Cuad5bA").fadeIn( 1000,function(){
												  });
											  });
										   });							
									   });
											  });
										   });							
									   });
											  });
										   });							
									   });
												  });
											  });
											  
										   });							
									   });
		 });
		
		});
});


$("#btn11").click(function(){ //las reglas de acentuación grafica
	$("#btn11").css('background-image','url(img/principal2/sub55_3b.png)');
	$("#contPrincipal").animate({
		opacity:0,
	},1000,function(){
		$("#contPrincipal").css('display','none');
		$("#marco5c").css('display','block');
		$("#marco5c").animate({opacity:1},1000,function(){
									  $("#caja5cB").delay(1000).fadeIn( 1000,function(){
										  $("#caja5cC").delay(1000).fadeIn( 1000,function(){
											  $("#Cuad5cM").delay(1000).fadeIn( 1000,function(){
											  $("#Cuad5cM").animate({"margin-top":"-20px","margin-left":"614px"},1000,function(){});
											  $("#Cuad5cA").animate({"width":"240px"},1000,function(){
												  $("#Cuad5cM").animate({"margin-top":"40px","margin-left":"614px"},1000,function(){});

												  $("#Cuad5cB").fadeIn( 1000,function(){
									  $("#Cuad5cC").fadeIn( 1000,function(){
										  $("#Cuad5cD").fadeIn( 1000,function(){
											  $("#Cuad5cE").fadeIn( 1000,function(){
									  $("#Cuad5cH").fadeIn( 1000,function(){
										  $("#Cuad5cF").fadeIn( 1000,function(){
											  $("#Cuad5cG").fadeIn( 1000,function(){
									  $("#Cuad5cI").fadeIn( 1000,function(){
										  $("#Cuad5cL").fadeIn( 1000,function(){
											  $("#Cuad5cJ").fadeIn( 1000,function(){});
											  $("#Cuad5cK").fadeIn( 1000,function(){ });
										   });							
									   });
											  });
										   });							
									   });
											  });
										   });							
									   });
												  });
											  });
											  });
										   });							
									   });
		 });
		
		});
	
})
	
   
	
})//fin ready