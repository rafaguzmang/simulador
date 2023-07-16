$(document).ready(function(){
	var up = true;
	var down = 0;
	var sp = false;
	var x = 0;
	var y = 0;
	var lys = 0;
	var lyi = 0;
	var lxi = 0;
	var lxs = 0;
	var reproducir = true;
	var select = true;
	var info = false;
	var menu = false;
	var inicio = true;
	var cursor_show = false;
	var guide_pantalla = false;
	var xx = 0;
	var mensajes = true;
	var m_pantalla = 0;
	var m_teclado = "";
	var canal = 1000;
	var mosaico1000 = document.getElementById('mosaico1000');
	var skyone = document.getElementById('skyone');
	var c1102 = document.getElementById('estrellas');
	var c1101 = document.getElementById('azteca');
	var c1316 = document.getElementById('cartoon');
	var c1322 = document.getElementById('nick');
	var c1547 = document.getElementById('tudn');
	var c1549 = document.getElementById('foxsports');
	var c1419 = document.getElementById('tnt');
	var c1429 = document.getElementById('space');
	var interactivos = document.getElementById('interactivos');
	var pantalla_inicio = localStorage.getItem('regreso');
	var play = false;
	var track = 0;
	var control = 0;
	var rew = setInterval(regrezar, 1000);
	var progRec = "";
	var sel_mosaico = false;
	rec_accion = false;
	//var rew = setInterval(function(){control++;console.log(control);}, 1000);
	clearInterval(rew);
	$('.vcr_img').hide();
	$('.grabados_rec').hide();
	cursor_move();
				

	if(pantalla_inicio!=''){
		x = parseInt(pantalla_inicio);		
		mosaico1000.muted = true;
		mosaico1000.play();
		mosaico1000.loop = true;
		skyone.loop = true;
		skyone.muted = true;
		skyone.play();
		c1101.loop = true;
		c1101.muted = true;
		c1101.play();
		c1102.loop = true;
		c1102.muted = true;
		c1102.play();
		c1316.loop = true;
		c1316.muted = true;
		c1316.play();
		c1322.loop = true;
		c1322.muted = true;
		c1322.play();		
		c1419.loop = true;
		c1419.muted = true;
		c1419.play();
		c1429.loop = true;
		c1429.muted = true;
		c1429.play();
		c1547.loop = true;
		c1547.muted = true;
		c1547.play();
		c1549.loop = true;
		c1549.muted = true;
		c1549.play();
		
	}
	$('.pantallas').hide();
	$('.info_menus').hide();
	$('#Super_PLus_off').hide();
	$('#led_verde').hide();
	$('#fecha').show();
	$('#hora').show();
	sec_pantallas();
	
	//----------Boton select--------//
	$("#btnSelect").click(function(){  // desplaza hacia adelante las pantallas
		if(select==true){
			x++;
			if(x>=4){
				x = 4;
			}	
		}else{
			sp=true;			
		}		

		if(menu==true){
				menuSky();
		}
		if(cursor_show==true){
			cursor_move();
		}
		if(inicio == true){
			sec_pantallas();
		}
		if(guide_pantalla == true){
			 sp = true;
			guia_mov();
		}
		
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnSelect").hide().delay(100).fadeIn(1);

	});

	$("#btnArrowUp").click(function(){ // cambia selector en pantalla hacia arriba	
		if(up==true){
			y= y-.1;	
		}	

		if(menu == true){
			 y=y-.1;
			 if(y<=lys){
			 	y=lys;
			 }
			 menuSky();
		}
		if(guide_pantalla == true){
			 y=y-.1;
			 if(y<=lys){
			 	y=lys;
			 }
			guia_mov();
		}

		if(inicio == true){
			sec_pantallas();
		}				
		
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowUp").hide().delay(100).fadeIn(1);
	});

	$("#btnArrowDown").click(function(){ // cambia selector en pantalla hacia abajo	
		if(up==true){
			y= y+.1;
		}
		if(menu == true){
			 y=y+.1;
			 if(y>=lyi){
			 	y=lyi;
			 }
			 menuSky();
		}
		if(inicio == true){
			sec_pantallas();
		}			

		if(cursor_show == true){
			 y=y+.1;
			 if(y>=lyi){
			 	y=lyi;
			 }
		 	if(sel_mosaico==true){
				xx++;
			}
			 cursor_move();
		}
		if(guide_pantalla == true){
			 y=y+.1;
			 if(y>=lyi){
			 	y=lyi;
			 }
			guia_mov();
		}	

		
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowDown").hide().delay(100).fadeIn(1);

	});

	$("#btnArrowL").click(function(){  // desplaza hacia atras las pantallas
		if(info == true){
				$('.info_menus').hide();
				x--;
				if(x<=-3){
					x=-3;
				}
				infomenu();
			}	
		if(menu == true){
			 x--;
			 if(x<=0){
			 	x=0;
			 }
			 menuSky();
		}	

		if(guide_pantalla == true){
			 x--;
			 if(x<=lxi){
			 	x=lxi;
			 }
			guia_mov();
		}				
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowL").hide().delay(100).fadeIn(1);
		
	});
	$("#btnArrowR").click(function(){  // desplaza hacia atras las pantallas "Right"	
			if(info == true){
				$('.info_menus').hide();
				x++;
				if(x>=4){
					x=4;
				}
				infomenu();
			}	
			if(menu == true){
				 x++;
				 if(x>=lxi){
				 	x=lxi;
				 }
				 menuSky();
			}	
			if(cursor_show == true){
				 x++;
				 if(x>=lxi){
				 	x=lxi;
				 }
			 	if(sel_mosaico==true){
					xx++;
				}
				 cursor_move();
			}

			if(guide_pantalla == true){
				 x++;
				 if(x>=lxs){
				 	x=lxs;
				 }
				guia_mov();
			}	
				
			$("#led_verde").show().delay(100).fadeOut(1);
			$("#btnArrowR").hide().delay(100).fadeIn(1);
		
	});
	$("#btnexit").click(function(){  // desplaza hacia atras las pantallas
		info = false;
		menu = false;
		cursor_show = true;
		sel_mosaico= false;
		guide_pantalla = false;
		x=0;
		y=0;
		up=false;
		$('#programa_rec1').hide();
		$('#programa_rec2').hide();
		$('#programa_rec3').hide();
		$('#programa_rec4').hide();
		$('#programa_rec5').hide();			
		if(menu==true){
			x = m_pantalla;
			menu = false;
			//sec_pantallas();
		}
		$('.pantallas').hide();
		$('.info_menus').hide();	
		$('.vcr_img').hide();			
		$('#info_info').delay(1).fadeOut(1);
		$('#info_cls').animate({						
			height: '0'				
		},200);	
		$('#info_cls').fadeOut(1);	

		canal_maxi();	
		canal_activo();

		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnexit").hide().delay(100).fadeIn(1);
	});
	$("#btninfo").click(function(){  // boton info
		x=0;
		info= true;
		menu = false;
		cursor_show = false;
		if(info == true){
			$('#info_cls').fadeIn(200);										
			$('#info_cls').animate({						
				height: '333px'				
			},200);	
			$('#info_info').delay(400).fadeIn(1);
			$('#hora').fadeIn(1200);	
			$('#fecha').fadeIn(1200);
			$('#nocanal').fadeIn(1200);
			$('#descanal').fadeIn(1200);
			$('#nocanal').text(canal);		
		}
	/*	setTimeout(function(){
			info = false;
			$('.info_menus').hide();				
			$('#info_info').delay(1).fadeOut(1);
			$('#info_cls').animate({						
				height: '0'				
			},200);	
			$('#info_cls').fadeOut(1);			

		}, 10000);*/
		
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btninfo").hide().delay(100).fadeIn(1);
	});
	$("#btnmenu").click(function(){  // boton menú
		m_pantalla = x;
		menu = true;
		info = false;
		cursor_show = false;
		x = 0;
		y = 0;
		menuSky();		
		$('#mosaico1000').animate({
		    width: '99.5px',
		    top: '-21px',
		    left: '297px',
		    height: '314px'
		},1);
		$('#mosaico_cls').fadeIn(1);
		$('#skyone').animate({
		    width: '137px',
		    top: '184px',
		    left: '404px',
		    height: '309px'
		},1);
		$('#skyone').animate({
		    width: '99.5px',
		    top: '-21px',
		    left: '297px',
		    height: '314px'
		},1);
		$('#estrellas').animate({
		    width: '99.5px',
		    top: '-21px',
		    left: '297px',
		    height: '314px'
		},1);
		$('#azteca').animate({
		    width: '99.5px',
		    top: '-21px',
		    left: '297px',
		    height: '314px'
		},1);
		$('#nick').animate({
		    width: '99.5px',
		    top: '-21px',
		    left: '297px',
		    height: '314px'
		},1);
		$('#cartoon').animate({
		    width: '99.5px',
		    top: '-21px',
		    left: '297px',
		    height: '314px'
		},1);
		$('#tnt').animate({
		    width: '99.5px',
		    top: '-21px',
		    left: '297px',
		    height: '314px'
		},1);
		$('#space').animate({
		    width: '99.5px',
		    top: '-21px',
		    left: '297px',
		    height: '314px'
		},1);
		$('#tudn').animate({
		    width: '99.5px',
		    top: '-21px',
		    left: '297px',
		    height: '314px'
		},1);
		$('#foxsports').animate({
		    width: '99.5px',
		    top: '-21px',
		    left: '297px',
		    height: '314px'
		},1);
		$('#hora').animate({						
			top: '96px',
			left: '666px'				
		},1);	
		$('#fecha').animate({						
			top: '111px',
			left: '666px'				
		},1);	
		canal_activo();
		$('#nocanal').fadeOut(200);
		$('#descanal').fadeOut(200);
		
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnmenu").hide().delay(100).fadeIn(1);
	});
	$("#btn_0").click(function(){  // boton 0
		m_teclado = m_teclado + '0';
		cambio_canal();
		$("#btn_0").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
		$("#led_verde").show().delay(100).fadeOut(1);
	});
	$("#btn_1").click(function(){  // boton 1
		
		m_teclado = m_teclado + '1';
		cambio_canal();
		$("#btn_1").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
		$("#led_verde").show().delay(100).fadeOut(1);
	});
	$("#btn_2").click(function(){  // boton 2
		m_teclado = m_teclado + '2';
		cambio_canal();
		$("#btn_2").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
		$("#led_verde").show().delay(100).fadeOut(1);
	});
	$("#btn_3").click(function(){  // boton 3
		m_teclado = m_teclado + '3';
		cambio_canal();
		$("#btn_3").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
		$("#led_verde").show().delay(100).fadeOut(1);
	});
	$("#btn_4").click(function(){  // boton 4
		m_teclado = m_teclado + '4';
		cambio_canal();
		$("#btn_4").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
		$("#led_verde").show().delay(100).fadeOut(1);
	});
	$("#btn_5").click(function(){  // boton 5
		m_teclado = m_teclado + '5';
		cambio_canal();
		$("#btn_5").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
		$("#led_verde").show().delay(100).fadeOut(1);
	});
	$("#btn_6").click(function(){  // boton 6
		m_teclado = m_teclado + '6';
		cambio_canal();
		$("#btn_6").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
		$("#led_verde").show().delay(100).fadeOut(1);
	});
	$("#btn_7").click(function(){  // boton 7
		m_teclado = m_teclado + '7';
		cambio_canal();
		$("#btn_7").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
		$("#led_verde").show().delay(100).fadeOut(1);
	});
	$("#btn_8").click(function(){  // boton 8
		m_teclado = m_teclado + '8';
		cambio_canal();
		$("#btn_8").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
		$("#led_verde").show().delay(100).fadeOut(1);
	});
	$("#btn_9").click(function(){  // boton 9
		m_teclado = m_teclado + '9';
		cambio_canal();
		$("#btn_9").hide().delay(100).fadeIn(1);
		console.log(m_teclado);	
		$("#led_verde").show().delay(100).fadeOut(1);
	});

	$('#6seg').mousedown(function(){
		track=video.currentTime;						
		track= track-6;	
		video.currentTime = track;	
		$("#led_verde").show().delay(100).fadeOut(1);
	});
	$('#30seg').mousedown(function(){				
		track=video.currentTime;						
		track=track+15;	
		video.currentTime = track;	
		$("#led_verde").show().delay(100).fadeOut(1);
	});


	$("#btnplay").click(function(){  // boton play
		canales_play(canal);	
		setTimeout(function(){
			$('.vcr_img').hide();
		},3000)
		$("#btnplay").hide().delay(100).fadeIn(1);
		$("#led_verde").show().delay(100).fadeOut(1);
	});


	$("#btnrew").click(function(){  // boton 9
		canales_rew(canal);
		$("#btnrew").hide().delay(100).fadeIn(1);
		$("#led_verde").show().delay(100).fadeOut(1);
	});

	$("#btnfwr").click(function(){  // boton 9
		canales_fwr(canal);
		$("#btnfwr").hide().delay(100).fadeIn(1);
		$("#led_verde").show().delay(100).fadeOut(1);
	});

	$("#btn6seg").click(function(){  // boton 9
		var numero_canal = parseInt(canal);
		console.log(canal);			
		switch(numero_canal){
			case 1000:
				track=mosaico1000.currentTime;						
				track= track-6;	
				mosaico1000.currentTime = track;
			break;
			case 1001:
				track=skyone.currentTime;						
				track= track-6;	
				skyone.currentTime = track;
			break;
			case 1101:
				track=c1101.currentTime;						
				track= track-6;	
				c1101.currentTime = track;
			break;
			case 1102:
				track=c1102.currentTime;						
				track= track-6;	
				c1102.currentTime = track;
			break;
			case 1316:
				track=c1316.currentTime;						
				track= track-6;	
				c1316.currentTime = track;
			break;
			case 1322:
				track=c1322.currentTime;						
				track= track-6;	
				c1322.currentTime = track;
			break;
			case 1419:
				track=c1419.currentTime;						
				track= track-6;	
				c1419.currentTime = track;
			break;
			case 1429:
				track=c1429.currentTime;						
				track= track-6;	
				c1429.currentTime = track;
			break;
			case 1547:
				track=c1547.currentTime;						
				track= track-6;	
				c1547.currentTime = track;
			break;
			case 1549:
				track=c1549.currentTime;						
				track= track-6;	
				c1549.currentTime = track;
			break;
		}
		$("#btn6seg").hide().delay(100).fadeIn(1);
		$("#led_verde").show().delay(100).fadeOut(1);
	});

	$("#btnguide").click(function(){  // boton guide
		guide_pantalla = true;
		select = false;
		info = false;
		menu = false;
		cursor_show = false;
		sel_mosaico= false;
		up = false;

		$('.pantallas').hide();
		$('#guiaprog_cls').show();
		$('#contenido').show();
		$('#guia_back').show();
		$('#selector').show();
		$('#contenido').show();		
		$("#btnguide").hide().delay(100).fadeIn(1);
		$("#led_verde").show().delay(100).fadeOut(1);
		guia_mov();


		$('.info_menus').hide();	
		$('.vcr_img').hide();			
		$('#info_info').delay(1).fadeOut(1);
		$('#info_cls').animate({						
			height: '0'				
		},200);	
		$('#info_cls').fadeOut(1);	
	});

	$("#btnlist").click(function(){  // boton guide
		guide_pantalla = true;
		select = false;
		info = false;
		menu = false;
		cursor_show = false;
		sel_mosaico= false;
		up = false;

		x=1;
		y=.1;
		menuSky();

		
		$('.info_menus').hide();	
		$('.vcr_img').hide();			
		$('#info_info').delay(1).fadeOut(1);
		$('#info_cls').animate({						
			height: '0'				
		},200);	
		$('#info_cls').fadeOut(1);

		$("#btnlist").hide().delay(100).fadeIn(1);
		$("#led_verde").show().delay(100).fadeOut(1);	
	});

	$("#btn30seg").click(function(){  // boton 30seg
		var numero_canal = parseInt(canal);
		console.log(canal);			
		switch(numero_canal){
			case 1000:
				track=mosaico1000.currentTime;						
				track=track+15;		
				mosaico1000.currentTime = track;
			break;
			case 1001:
				track=skyone.currentTime;						
				track=track+15;		
				skyone.currentTime = track;
			break;
			case 1101:
				track=c1101.currentTime;						
				track=track+15;		
				c1101.currentTime = track;
			break;
			case 1102:
				track=c1102.currentTime;						
				track=track+15;		
				c1102.currentTime = track;
			break;
			case 1316:
				track=c1316.currentTime;						
				track=track+15;		
				c1316.currentTime = track;
			break;
			case 1322:
				track=c1322.currentTime;						
				track=track+15;		
				c1322.currentTime = track;
			break;
			case 1419:
				track=c1419.currentTime;						
				track=track+15;		
				c1419.currentTime = track;
			break;
			case 1429:
				track=c1429.currentTime;						
				track=track+15;		
				c1429.currentTime = track;
			break;
			case 1547:
				track=c1547.currentTime;						
				track=track+15;		
				c1547.currentTime = track;
			break;
			case 1549:
				track=c1549.currentTime;						
				track=track+15;		
				c1549.currentTime = track;
			break;
		}
		$("#btn30seg").hide().delay(100).fadeIn(1);
		$("#led_verde").show().delay(100).fadeOut(1);
	});

	function guia_mov(){
		lyi = .8;
		lys = 0;
		lxi = 0;
		lxs = 1;
		select= false;
		var xy = x+y;
		xy = xy.toFixed(1);
		xy = parseFloat(xy);	
		console.log(xy);
		switch(xy){
			case 0:
				$('#selector').animate({
					top: '0px',
					left: '99px',
					width: '169px'
				},1);				
				if(sp == true){
					sp = false
					m_teclado='1001';
					cambio_canal();
				}
			break;
			case 1:
				$('#selector').animate({
					top: '0px',
					left: '268px',
					width: '196px'
				},1);
			break;
			case .1:
				$('#selector').animate({
					top: '18px',
					left: '99px',
					width: '192px'
				},1);
				if(sp == true){
					sp = false
					m_teclado='1101';
					cambio_canal();
				}
			break;
			case 1.1:
				$('#selector').animate({
					top: '18px',
				    left: '289px',
				    width: '174px'
				},1);
			break;
			case .2:
				$('#selector').animate({
					top: '36px',
					left: '99px',
					width: '192px'
				},1);
				if(sp == true){
					sp = false
					m_teclado='1102';
					cambio_canal();
				}
			break;
			case 1.2:
				$('#selector').animate({
					top: '36px',
				    left: '289px',
				    width: '174px'
				},1);
			break;
			case .3:
				$('#selector').animate({
					top: '54px',
					left: '99px',
					width: '212px'
				},1);
				if(sp == true){
					sp = false
					m_teclado='1316';
					cambio_canal();
				}
			break;
			case 1.3:
				$('#selector').animate({
					top: '54px',
					left: '310px',
					width: '152px'
				},1);
				
			break;
			case .4:
				$('#selector').animate({
					top: '72px',
					left: '99px',
					width: '161px'
				},1);
				if(sp == true){
					sp = false
					m_teclado='1322';
					cambio_canal();
				}
			break;
			case 1.4:
				$('#selector').animate({
					top: '72px',
					left: '259px',
					width: '203px'
				},1);
			break;
			case .5:
				$('#selector').animate({
					top: '89px',
					left: '99px',
					width: '161px'
				},1);
				if(sp == true){
					sp = false
					m_teclado='1419';
					cambio_canal();
				}
				
			break;
			case 1.5:
				$('#selector').animate({
					top: '89px',
					left: '259px',
					width: '203px'
				},1);
				
			break;
			case .6:
				$('#selector').animate({
					top: '107px',
					left: '99px',
					width: '161px'
				},1);
				if(sp == true){
					sp = false
					m_teclado='1429';
					cambio_canal();
				}
				$('#guia_back').animate({
					top: '-77px'
				},100);
				$('#contenido').animate({
					top: '-77px'
				},100);
			break;
			case 1.6:
				
				$('#selector').animate({
					top: '107px',
					left: '259px',
					width: '203px'
				},1);	
				$('#guia_back').animate({
					top: '-96px'
				},100);
				$('#contenido').animate({
					top: '-96px'
				},100);			
			break;

			case .7:
				$('#selector').animate({
					top: '107px',
					left: '99px',
					width: '212px'
				},1);
				if(sp == true){
					sp = false
					m_teclado='1547';
					cambio_canal();
				}
				$('#guia_back').animate({
					top: '-96px'
				},100);
				$('#contenido').animate({
					top: '-96px'
				},100);
				
			break;
			case 1.7:
				$('#selector').animate({
					top: '107px',
					left: '310px',
					width: '151px'
				},1);

				$('#guia_back').animate({
					top: '-96px'
				},100);
				$('#contenido').animate({
					top: '-96px'
				},100);
				
			break;
			case .8:
				$('#selector').animate({
					top: '107px',
					left: '99px',
					width: '154px'
				},1);
				if(sp == true){
					sp = false
					m_teclado='1549';
					cambio_canal();
				}
				$('#guia_back').animate({
					top: '-114px'
				},100);
				$('#contenido').animate({
					top: '-114px'
				},100);
				
			break;
			case 1.8:
				$('#selector').animate({
					top: '107px',
					left: '253px',
					width: '209px'
				},1);

				$('#guia_back').animate({
					top: '-114px'
				},100);
				$('#contenido').animate({
					top: '-114px'
				},100);
				
			break;
			
		}
	}

	function cursor_move (){
		var xy = x+y;
		lxi = 2;
		xy = xy.toFixed(1);
		xy = parseFloat(xy);
		console.log(xy);
		switch(xy){
			case 0:
				lyi = 2;
				$("#cursor").animate({
					left: '274px',
					top: '143px'
				},1);
			break;
			case 0.1:
				$("#cursor").animate({
					left: '274px',
					top: '316px'
				},1);
			break;
			case 1:
				$("#cursor").animate({
					left: '456px',
					top: '143px'
				},1);
			break;
			case 1.1:
				$("#cursor").animate({
					left: '456px',
					top: '316px'
				},1);
				if(sp==true){
					sp=false;
					m_teclado='1001';
					cambio_canal();				
				}

			break;
			case 2:
				if(sel_mosaico == false){
						$("#cursor").animate({
						left: '627',
						top: '96px'	
					},1);
					if(sp == true){
						sp = false;
						sel_mosaico = true;
						$(".pantallas").fadeOut(100);
						$('#nacional').fadeIn(100);
						$('#cursor').animate({
							left: '345px',
							top: '214px'		
						},1);
						$('#cursor').fadeIn(1);
					}	
				}else{

					if(xx==0){
						$('#cursor').animate({
							left: '345px',
							top: '214px'	
						},1);
						$('#cursor').fadeIn(10);
						if(sp==true){
							sp=false;
							m_teclado='1102';
							cambio_canal();
						}
					}else{
						$('#cursor').animate({
							left: '605px',
							top: '214px'	
						},1);
						$('#cursor').fadeIn(10);
						if(sp==true){
							sp=false;
							m_teclado='1101';
							cambio_canal();
						}
					}
				}
			break;
			case 2.1:				
				lyi=.3;
				if(sel_mosaico == false){
						$("#cursor").animate({
						left: '627px',
						top: '178px'	
					},1);
					if(sp == true){
						sp = false;
						sel_mosaico = true;
						$(".pantallas").fadeOut(100);
						$('#ninos').fadeIn(100);
						$('#cursor').animate({
							left: '345px',
							top: '214px'	
						},1);
						$('#cursor').fadeIn(1);
					}	
				}else{

					if(xx==0){
						$('#cursor').animate({
							left: '515px',
							top: '374px'	
						},1);
						$('#cursor').fadeIn(10);
						if(sp==true){
							sp=false;
							m_teclado='1322';
							cambio_canal();					
						}
					}else{
						$('#cursor').animate({
							left: '605px',
							top: '214px'	
						},1);
						$('#cursor').fadeIn(10);
						if(sp==true){
							sp=false;
							m_teclado='1316';
							cambio_canal();							
						}
					}
				}	
			break;
			case 2.2:
				if(sel_mosaico == false){
						$("#cursor").animate({
						left: '627px',
						top: '257px'	
					},1);
					if(sp == true){
						sp = false;
						sel_mosaico = true;
						$(".pantallas").fadeOut(100);
						$('#deportes').fadeIn(100);
						$('#cursor').animate({
							left: '345px',
							top: '214px'	
						},1);
						$('#cursor').fadeIn(1);
					}	
				}else{

					if(xx==0){
						$('#cursor').animate({
							left: '515px',
							top: '374px'	
						},1);
						$('#cursor').fadeIn(10);
						if(sp==true){
							sp=false;
							m_teclado='1549';
							cambio_canal();					
						}
					}else{
						$('#cursor').animate({
							left: '605px',
							top: '214px'	
						},1);
						$('#cursor').fadeIn(10);
						if(sp==true){
							sp=false;
							m_teclado='1547';
							cambio_canal();	
						}
					}

				}
			break;
			case 2.3:
				
				if(sel_mosaico == false){
						$("#cursor").animate({
						left: '627px',
						top: '336px'	
					},1);
					if(sp == true){
						sp = false;
						sel_mosaico = true;
						$(".pantallas").fadeOut(100);
						$('#cinema').fadeIn(100);
						$('#cursor').animate({
							left: '345px',
							top: '214px'	
						},1);
						$('#cursor').fadeIn(1);
					}	
				}else{

					if(xx==0){
						$('#cursor').animate({
							left: '515px',
							top: '374px'
						},1);
						$('#cursor').fadeIn(10);
						if(sp==true){
							sp=false;
							m_teclado='1429';
							cambio_canal();	
						}
					}else{
						$('#cursor').animate({
							left: '605px',
							top: '214px'	
						},1);
						$('#cursor').fadeIn(10);
						if(sp==true){
							sp=false;
							m_teclado='1419';
							cambio_canal();							
						}
					}
				}
			break;
		}
	}
	function canales_rew(canales){		
		play = true
		console.log(control);
		if(control == 0){
			rew = setInterval(regrezar, 700);	
			$('.vcr_img').fadeOut(1);
			$('#back_vcr').fadeIn(1);
			$('#rew1_img').fadeIn(1);	
			control++;
		}else if(control == 1){
			clearInterval(rew);
			rew = setInterval(regrezar,500);
			$('.vcr_img').fadeOut(1);
			$('#back_vcr').fadeIn(1);
			$('#rew2_img').fadeIn(1);	
			control++;
		}else if(control == 2){
			clearInterval(rew);
			rew = setInterval(regrezar,300);
			$('.vcr_img').fadeOut(1);
			$('#back_vcr').fadeIn(1);
			$('#rew3_img').fadeIn(1);	
			control++;
		}else if(control == 3){
			clearInterval(rew);
			rew = setInterval(regrezar,100);
			$('.vcr_img').fadeOut(1);
			$('#back_vcr').fadeIn(1);
			$('#rew4_img').fadeIn(1);	
			control++;
		}
	}

	$("#btnrec").click(function(){  // boton rec
		progRec = nomprograma(canal);
		console.log(canal);
		rec_accion = true;
		$('#back_vcr').fadeIn(1);
		$('#play_img').fadeIn(1);
		$('#redbar').fadeIn(1);

		if($('#programa_rec1').text()==''){
			$('#programa_rec1').text(progRec);
		}else if($('#programa_rec2').text()==''){
			$('#programa_rec2').text(progRec);
		}else if($('#programa_rec3').text()==''){
			$('#programa_rec3').text(progRec);
		}
		else if($('#programa_rec4').text()==''){
			$('#programa_rec4').text(progRec);
		}
		else if($('#programa_rec5').text()==''){
			$('#programa_rec5').text(progRec);
		}
		$("#btnrec").hide().delay(100).fadeIn(1);
		$("#led_verde").show().delay(100).fadeOut(1);
		//setTimeout(function(){
		//	$('.vcr_img').hide();
		//},3000)
	});

	function canales_fwr(canales){		
		play = true
		console.log(control);
		if(control == 0){
			rew = setInterval(adelantar, 700);	
			$('.vcr_img').fadeOut(1);
			$('#back_vcr').fadeIn(1);
			$('#fwr1_img').fadeIn(1);	
			control++;
		}else if(control == 1){
			clearInterval(rew);
			rew = setInterval(adelantar,500);
			$('.vcr_img').fadeOut(1);
			$('#back_vcr').fadeIn(1);
			$('#fwr2_img').fadeIn(1);	
			control++;
		}else if(control == 2){
			clearInterval(rew);
			rew = setInterval(adelantar,300);
			$('.vcr_img').fadeOut(1);
			$('#back_vcr').fadeIn(1);
			$('#fwr3_img').fadeIn(1);	
			control++;
		}else if(control == 3){
			clearInterval(rew);
			rew = setInterval(adelantar,100);
			$('.vcr_img').fadeOut(1);
			$('#back_vcr').fadeIn(1);
			$('#fwr4_img').fadeIn(1);	
			control++;
		}
	}


	function regrezar(){	
		var numero_canal = parseInt(canal);
		console.log(canal);			
		switch(numero_canal){
			case 1000:
				track=mosaico1000.currentTime;						
				track--;	
				mosaico1000.currentTime = track;
				if(mosaico1000.currentTime == 0){
					mosaico1000.pause();
				}	
			break;
			case 1001:
				track=skyone.currentTime;						
				track--;	
				skyone.currentTime = track;	
				if(skyone.currentTime == 0){
					skyone.pause();
				}	
			break;
			case 1101:
				track=c1101.currentTime;						
				track--;	
				c1101.currentTime = track;	
				if(c1101.currentTime == 0){
					c1101.pause();
				}	
			break;
			case 1102:
				track=c1102.currentTime;						
				track--;	
				c1102.currentTime = track;	
				if(c1102.currentTime == 0){
					c1102.pause();
				}	
			break;
			case 1316:
				track=c1316.currentTime;						
				track--;	
				c1316.currentTime = track;	
				if(c1316.currentTime == 0){
					c1316.pause();
				}	
			break;
			case 1322:
				track=c1322.currentTime;						
				track--;	
				c1322.currentTime = track;	
				if(c1322.currentTime == 0){
					c1322.pause();
				}	
			break;
			case 1419:
				track=c1419.currentTime;						
				track--;	
				c1419.currentTime = track;	
				if(c1419.currentTime == 0){
					c1419.pause();
				}	
			break;
			case 1429:
				track=c1429.currentTime;						
				track--;	
				c1429.currentTime = track;	
				if(c1429.currentTime == 0){
					c1429.pause();
				}	
			break;
			case 1547:
				track=c1547.currentTime;						
				track--;	
				c1547.currentTime = track;	
				if(c1547.currentTime == 0){
					c1547.pause();
				}	
			break;
			case 1549:
				track=c1549.currentTime;						
				track--;	
				c1549.currentTime = track;	
				if(c1549.currentTime == 0){
					c1549.pause();
				}	
			break;
		}
					
	}

	function adelantar(){				
		var numero_canal = parseInt(canal);
		console.log(canal);			
		switch(numero_canal){
			case 1000:
				track=mosaico1000.currentTime;						
				track++;	
				mosaico1000.currentTime = track;
					
			break;
			case 1001:
				track=skyone.currentTime;						
				track++;	
				skyone.currentTime = track;	
					
			break;
			case 1101:
				track=c1101.currentTime;						
				track++;	
				c1101.currentTime = track;	
				
			break;
			case 1102:
				track=c1102.currentTime;						
				track++;	
				c1102.currentTime = track;	
				
			break;
			case 1316:
				track=c1316.currentTime;						
				track++;	
				c1316.currentTime = track;	
				
			break;
			case 1322:
				track=c1322.currentTime;						
				track++;	
				c1322.currentTime = track;	
				
			break;
			case 1419:
				track=c1419.currentTime;						
				track++;	
				c1419.currentTime = track;					
			break;
			case 1429:
				track=c1429.currentTime;						
				track++;	
				c1429.currentTime = track;	
				
			break;
			case 1547:
				track=c1547.currentTime;						
				track++;	
				c1547.currentTime = track;	
				
			break;
			case 1549:
				track=c1549.currentTime;						
				track++;	
				c1549.currentTime = track;	
				
			break;
		}				
	}

	

	function canales_play(canales){
		var numero_canal = parseInt(canales);
		console.log(numero_canal);
		switch(numero_canal){			
			case 1000:
				clearInterval(rew);
				control = 0;
				if (play == true){
					mosaico1000.play();					
					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#play_img').fadeIn(1);
					if(rec_accion==false){
						$('#greenbar').fadeIn(1);
						$('#redbar').fadeOut(1);
					}else{
						$('#redbar').fadeIn(1);
						$('#greenbar').fadeOut(1);
					}
					
					play = false;
				}else{

					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#pause_img').fadeIn(1);			
					$('#greenbar').fadeIn(1);
					mosaico1000.pause();	
					play = true;
				}

			break;			
			case 1001:
				clearInterval(rew);
				control = 0;
				if (play == true){
					skyone.play();					
					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#play_img').fadeIn(1);
					$('#greenbar').fadeIn(1);
					play = false;
				}else{

					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#pause_img').fadeIn(1);			
					$('#greenbar').fadeIn(1);
					skyone.pause();	
					play = true;
				}
			break;
			case 1102:
				clearInterval(rew);
				control = 0;
				if (play == true){
					c1102.play();					
					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#play_img').fadeIn(1);
					$('#greenbar').fadeIn(1);
					play = false;
				}else{

					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#pause_img').fadeIn(1);			
					$('#greenbar').fadeIn(1);
					c1102.pause();	
					play = true;
				}
			break;
			case 1101:
				clearInterval(rew);
				control = 0;
				if (play == true){
					c1101.play();					
					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#play_img').fadeIn(1);
					$('#greenbar').fadeIn(1);
					play = false;
				}else{

					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#pause_img').fadeIn(1);			
					$('#greenbar').fadeIn(1);
					c1101.pause();	
					play = true;
				}
			break;
			case 1316:
				clearInterval(rew);
				control = 0;
				if (play == true){
					c1316.play();					
					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#play_img').fadeIn(1);
					$('#greenbar').fadeIn(1);
					play = false;
				}else{

					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#pause_img').fadeIn(1);			
					$('#greenbar').fadeIn(1);
					c1316.pause();	
					play = true;
				}
			break;
			case 1322:
				clearInterval(rew);
				control = 0;
				if (play == true){
					c1322.play();					
					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#play_img').fadeIn(1);
					$('#greenbar').fadeIn(1);
					play = false;
				}else{

					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#pause_img').fadeIn(1);			
					$('#greenbar').fadeIn(1);
					c1322.pause();	
					play = true;
				}
			break;
			case 1419:
				clearInterval(rew);
				control = 0;
				if (play == true){
					c1419.play();					
					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#play_img').fadeIn(1);
					$('#greenbar').fadeIn(1);
					play = false;
				}else{

					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#pause_img').fadeIn(1);			
					$('#greenbar').fadeIn(1);
					c1419.pause();	
					play = true;
				}
			break;
			case 1429:
				clearInterval(rew);
				control = 0;
				if (play == true){
					c1429.play();					
					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#play_img').fadeIn(1);
					$('#greenbar').fadeIn(1);
					play = false;
				}else{

					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#pause_img').fadeIn(1);			
					$('#greenbar').fadeIn(1);
					c1429.pause();	
					play = true;
				}
			break;
			case 1547:
				clearInterval(rew);
				control = 0;
				if (play == true){
					c1547.play();					
					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#play_img').fadeIn(1);
					$('#greenbar').fadeIn(1);
					play = false;
				}else{

					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#pause_img').fadeIn(1);			
					$('#greenbar').fadeIn(1);
					c1547.pause();	
					play = true;
				}
			break;
			case 1549:
				clearInterval(rew);
				control = 0;
				if (play == true){
					c1549.play();					
					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#play_img').fadeIn(1);
					$('#greenbar').fadeIn(1);
					play = false;
				}else{

					$('.vcr_img').fadeOut(1);
					$('#back_vcr').fadeIn(1);
					$('#pause_img').fadeIn(1);			
					$('#greenbar').fadeIn(1);
					c1549.pause();	
					play = true;
				}
			break;
		}
	}

	function canales(canales){
		canales_mute();
		$('.pantallas').hide();
		var numero_canal = parseInt(canales);
		console.log(numero_canal);
		switch(numero_canal){
			case 0:
				mosaico1000.muted=false;
				$('#mosaico1000').show();
				$('#mosaico_cls').fadeIn(1);
				$('#skyone').fadeIn(1);
				$('#skyone').animate({
				    width: '137px',
				    top: '184px',
				    left: '404px',
				    height: '309px'
				},1);
				$('#descanal').text('Mosaico SKY View');
			break;
			case 1000:
				mosaico1000.muted=false;
				$('#mosaico1000').show();
				$('#mosaico_cls').fadeIn(1);
				$('#skyone').fadeIn(1);
				$('#skyone').animate({
				    width: '137px',
				    top: '184px',
				    left: '404px',
				    height: '309px'
				},1);
				$('#descanal').text
			break;
			case 1:
				$('#skyone').show();
				skyone.muted=false;
				$('#skyone').animate({
			     	width: '463px',
				    top: '81px',
				    left: '259px',
				    height: '333px'
				},1);
				$('#descanal').text('MTV Hits');
			break;
			case 1001:
				$('#skyone').show();
				skyone.muted=false;
				$('#skyone').animate({
			     	width: '463px',
				    top: '81px',
				    left: '259px',
				    height: '333px'
				},1);
				$('#descanal').text('MTV Hits');
			break;
			case 2:
				$('#azteca').fadeIn(1);
				c1101.muted=false;				
				$('#descanal').text('Venga la alegria');
			break;
			case 1101:
				$('#c1102').fadeIn(1);
				$('#azteca').show();
				c1101.muted=false;

				$('#descanal').text('Venga la alegria');
			break;
			case 3:
				$('#estrellas').fadeIn(1);
				c1316.muted=false;				
				$('#descanal').text('Cuentamelo ya!');
			break;
			case 1102:
				$('#estrellas').fadeIn(1);
				c1102.muted=false;				
				$('#descanal').text('Cuentamelo ya!');
			break;
			case 4:
				$('#cartoon').fadeIn(1);
				c1316.muted=false;				
				$('#descanal').text('El show de Gumball');
			break;
			case 1316:
				$('#cartoon').fadeIn(1);
				c1316.muted=false;				
				$('#descanal').text('El show de Gumball');
			break;
			case 5:
				$('#nick').fadeIn(1);
				c1316.muted=false;				
				$('#descanal').text('Blaze and the monster machine');
			break;
			case 1322:
				$('#nick').fadeIn(1);
				c1322.muted=false;				
				$('#descanal').text('Blaze and the monster machine');
			break;
			case 6:
				$('#tnt').fadeIn(1);
				c1419.muted=false;				
				$('#descanal').text('Cars 2');
			break;
			case 1419:
				$('#tnt').fadeIn(1);
				c1419.muted=false;				
				$('#descanal').text('Cars 2');
			break;
			case 7:
				$('#space').fadeIn(1);
				c1429.muted=false;				
				$('#descanal').text('Mad Max: Mas alla de la cupula del trueno');
			break;
			case 1429:
				$('#space').fadeIn(1);
				c1429.muted=false;				
				$('#descanal').text('Mad Max: Mas alla de la cupula del trueno');
			break;
			case 8:
				$('#tudn').fadeIn(1);
				c1547.muted=false;				
				$('#descanal').text('Comentando el futbol');
			break;
			case 1547:
				$('#tudn').fadeIn(1);
				c1547.muted=false;				
				$('#descanal').text('Comentando el futbol');
			break;
			case 9:
				$('#foxsports').fadeIn(1);
				c1549.muted=false;				
				$('#descanal').text('Central Fox');
			break;
			case 1549:
				$('#foxsports').fadeIn(1);
				c1549.muted=false;				
				$('#descanal').text('Central Fox');
			break;
		}
	}

	function cambio_canal(){
		$("#nocanal").text(m_teclado);
		if(m_teclado.length==4){
			canal_maxi();
			canal = m_teclado;
			canales(canal);
			m_teclado = "";
		}

		setTimeout(function(){
			$("#nocanal").text(canal);
		},5000);
		
		info_animate();
		$("#led_verde").show().delay(100).fadeOut(1);
		
	}

	function info_animate(){
		x=0;
		info= true;
		menu = false;
		if(info == true){
			$('#info_cls').fadeIn(200);										
			$('#info_cls').animate({						
				height: '333px'				
			},200);	
			$('#info_info').delay(400).fadeIn(1);
			$('#hora').fadeIn(1200);	
			$('#fecha').fadeIn(1200);
			$('#nocanal').fadeIn(1200);
			$('#descanal').fadeIn(1200);		
		}
	/*	setTimeout(function(){
			info = false;
			$('.info_menus').hide();				
			$('#info_info').delay(1).fadeOut(1);
			$('#info_cls').animate({						
				height: '0'				
			},200);	
			$('#info_cls').fadeOut(1);
		}, 10000);*/
		
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btninfo").hide().delay(100).fadeIn(1);

	}

	function canal_activo(){
		if(canal == 1000){
			$('#mosaico1000').show();
			$('#mosaico_cls').fadeIn(1);
			$('#skyone').fadeIn(1);
			$('#cursor').show();
			$('#skyone').animate({
			    width: '137px',
			    top: '184px',
			    left: '404px',
			    height: '309px'
			},1);
			mosaico1000.muted=false;
		}
		if(canal == 1001){			
			$('#skyone').show();
		}
		if(canal == 1101){			
			$('#azteca').show();
		}
		if(canal == 1102){			
			$('#estrellas').fadeIn(1);
		}
		if(canal == 1316){			
			$('#cartoon').show();
		}
		if(canal == 1322){			
			$('#nick').show();
		}
		if(canal == 1149){			
			$('#tnt').show();
		}
		if(canal == 1429){
			$('#space').show();
		}
		if(canal == 1547){			
			$('#tudn').show();
		}
		if(canal == 1549){			
			$('#foxsports').show();
		}

	}

	function menuSky(){
				var total = x + y;
				var n = total.toFixed(1);
				total = parseFloat(n);
				console.log(x);
				console.log(y);
				console.log(total);
				switch(total){
					case -.1:
						$('.pantallas').hide();
						$('#menu_cls').show();
						$('#menu_mosaico').show();
						$('#menu_mosaico_ops').show();
						$('#mosaico1000').show();
						window.open('confi_inicial_final.html','_self');
							localStorage.setItem('regreso', '4');
						sp=	false
					break;
					case 0:
						lys = -.1;
						lyi = .3;
						lxi = 2;
						select = true;
						up = false;
						$('.pantallas').hide();
						$('.grabados_rec').hide();
						$('#menu_cls').show();
						$('#menu_grabacion').show();
						$('#menu_grabacion_ops').show();
						canal_activo();
					break;	
					case 1:
						select = false;
						$('.pantallas').hide();
						$('#menu_cls').show();						
						$('#menu_grabacion_ops').show();
						$('#menu_grabacion_grabados').show();
						canal_activo();
						if(sp==true){
							y=.1;
							sp=false;
							menuSky();
						}

					break;

					case 1.1:
						select = false;
						$('.pantallas').hide();
						$('#programas_grabados').show();
						$('#programas_grabados_select').show();					
						$('#programa_rec1').show();
						$('#programa_rec2').show();
						$('#programa_rec3').show();
						$('#programa_rec4').show();
						$('#programa_rec5').show();
						canal_activo();
					break;
					case 2:		
						select = false;				
						$('.pantallas').hide();
						$('#menu_cls').show();						
						$('#menu_grabacion_ops').show();
						$('#menu_grabacion_organizar').show();
						canal_activo();
					break;					
					case .1:						
						lxi = 0;
						select = false;
						$('.grabados_rec').hide();
						$('.pantallas').hide();
						$('#menu_cls').show();
						$('#menu_edocuenta').show();
						$('#menu_edocuenta_ops').show();
						canal_activo();
					break;					

					break;
					case .2:						
						lxi = 3;
						select = true;
						$('.pantallas').hide();
						$('#menu_cls').show();
						$('#menu_buscar').show();
						$('#menu_buscar_ops').show();
						canal_activo();
					break;
					case 1.2:
						select = false;
						$('.pantallas').hide();
						$('#menu_cls').show();
						$('#menu_buscar').show();
						$('#menu_buscar_ops').show();
						$('#menu_buscar_busqueda').show();
						$('#fecha').show();
						$('#hora').show();
						canal_activo();
					break;
					case 2.2:
						select = false;
						$('.pantallas').hide();
						$('#menu_cls').show();
						$('#menu_buscar').show();
						$('#menu_buscar_ops').show();
						$('#menu_buscar_portal').show();
						canal_activo();
						if(sp == true){
							sp = false;
							$('#interactivos').show();
							interactivos.play();
							$('#mosaico1000').hide();
							$('#fecha').hide();
							$('#hora').hide();
						}
						
					break;
					case 3.2:
						select = false;
						$('.pantallas').hide();
						$('#menu_cls').show();
						$('#menu_buscar').show();
						$('#menu_buscar_ops').show();
						$('#menu_buscar_mensajes').show();
						$('#fecha').show();
						$('#hora').show();
						canal_activo();
						if(sp==true){
							sp= false;
							if(mensajes==true){
								$('#mensajes').show();	
								mensajes=false;
							}else{
								$('#mensajes').hide();	
								mensajes = true;
							}
							
						}
						

						break;
					case .3:						
						lxi = 3;
						menu = true;
						select = false;
						$('.pantallas').hide();
						$('#menu_cls').show();
						$('#menu_config').show();
						$('#menu_config_ops').show();
						canal_activo();
						if(sp==true){
							sp=false
							x++;
							menuSky();							
							
						}
					break;

					case 1.3:
						select = false;
						lyi = .4;
						$('.pantallas').hide();
						$('#menu_cls').show();
						$('#menu_config').show();
						$('#menu_config_ops').show();
						$('#menu_config_configuraciones').show();
						canal_activo();
						if(sp==true){
							sp=false
							window.open("SPpantallas2/menu_conf_conf.html","_self");							
							
						}
					break;

					case 2.3:
						select = false;
						$('.pantallas').hide();
						$('#menu_cls').show();
						$('#menu_config').show();
						$('#menu_config_ops').show();
						$('#menu_config_familiar').show();
						canal_activo();
					break;

					case 3.3:
						select = false;
						$('.pantallas').hide();
						$('#menu_cls').show();
						$('#menu_config').show();
						$('#menu_config_ops').show();
						$('#menu_config_canales').show();
						canal_activo();
					break;

					case 1.4:
						select = false;
						lys = 0;
						lyi = 0;
						lxi = 0;
						$('.pantallas').hide();
						$('#menu_cls').show();
						$('#menu_config').show();
						$('#menu_config_ops').show();
						$('#menu_config_ayuda').show();
						canal_activo();
					break;
				}
				
			}

	function infomenu(){
				info = true;
				console.log(x);
				switch(x){					
					case -3:
						$('.pantalla').hide();
						$('#info_cls').show();
						$('#info_favoritos').show();
						$('#hora').fadeIn(1);	
						$('#fecha').fadeIn(1);
						$('#nocanal').fadeIn(1);
						$('#descanal').fadeIn(1);
					break;
					case -2:
						$('.pantalla').hide();
						$('#info_cls').show();
						$('#info_ultimos4').show();
						$('#hora').fadeIn(1);	
						$('#fecha').fadeIn(1);
						$('#nocanal').fadeIn(1);
						$('#descanal').fadeIn(1);
					break;
					case -1:
						$('.pantalla').hide();
						$('#info_cls').show();
						$('#info_mensajes').show();
						$('#hora').fadeIn(1);	
						$('#fecha').fadeIn(1);
						$('#nocanal').fadeIn(1);
						$('#descanal').fadeIn(1);
					break;
					case 0:
						$('.pantalla').hide();
						$('#info_cls').show();
						$('#info_info').show();
						$('#hora').fadeIn(1);	
						$('#fecha').fadeIn(1);
						$('#nocanal').fadeIn(1);
						$('#descanal').fadeIn(1);
					break;
					case 1:
						$('.pantalla').hide();
						$('#info_cls').show();
						$('#info_videoaudio').show();
						$('#hora').fadeIn(1);	
						$('#fecha').fadeIn(1);
						$('#nocanal').fadeIn(1);
						$('#descanal').fadeIn(1);
					break;
					case 2:
						$('.pantalla').hide();
						$('#info_cls').show();
						$('#info_subtitulos').show();
						$('#hora').fadeIn(1);	
						$('#fecha').fadeIn(1);
						$('#nocanal').fadeIn(1);
						$('#descanal').fadeIn(1);
					break;
					case 3:
						$('.pantalla').hide();
						$('#info_cls').show();
						$('#info_familiar').show();
						$('#hora').fadeIn(1);	
						$('#fecha').fadeIn(1);
						$('#nocanal').fadeIn(1);
						$('#descanal').fadeIn(1);
					break;
					case 4:
						$('.pantalla').hide();
						$('#info_cls').show();
						$('#info_pip').show();
						$('#hora').fadeIn(1);	
						$('#fecha').fadeIn(1);
						$('#nocanal').fadeIn(1);
						$('#descanal').fadeIn(1);					
					break;
				}
				
			}


	function sec_pantallas(){
		var xy = x + y;
		console.log(xy);
		switch(xy){
			case 0:
				$('.pantallas').hide();
				$('#finconfiguracion').show();
				up = false;

				//$('.pantallas').hide();
			break;
			case 1:
				$('.pantallas').hide();
				$('#activarservicio').show();
				$('#mosaico1000').show();
				$('#mosaico_cls').show();
				$('#skyone').show();
				mosaico1000.play();
				mosaico1000.loop = true;
				skyone.play();
				skyone.loop = true;
				c1102.play();
				c1102.loop = true;
				mosaico1000.muted = false;
				skyone.muted = true;
				c1102.muted = true;
				up = false;
				//$('.pantallas').hide();
			break;			
			case 2:
				$('.pantallas').hide();
				$('#mosaico1000').show();
				$('#mosaico_cls').show();
				$('#skyone').show();
				$('#programarcontrol').fadeIn(1);
				select = true;
				up = false;
				break;
			case 2.1:				
				$('.pantallas').hide();
				$('#mosaico1000').show();
				$('#mosaico_cls').show();
				$('#skyone').show();
				$('#programctl_adel').fadeIn(1);
				select = false;
				up = false;				
				break;
			case 3:				
				select = true;
				up = false;
				$('.pantallas').hide();
				$('#mosaico1000').show();
				$('#mosaico_cls').show();
				$('#skyone').show();
				$('#verSKY').fadeIn(1);
				break;
			case 4:		
				$('.pantallas').hide();
				$('#mosaico1000').show();
				$('#mosaico_cls').show();
				$('#skyone').show();
				$('#cursor').show();
				cursor_show = true;				
				$('#info_cls').fadeIn(200);										
				$('#info_cls').animate({						
					height: '333px'				
				},200);	
				$('#info_info').delay(400).fadeIn(1);
				$('#mosaico1000').animate({
				    width: '293px',
				    top: '8px',
				    left: '245px',
				    height: '337px'
				},1);
				$('#mosaico_cls').animate({
				   	width: '549px',
				    top: '81px',
				    left: '220px',
				    height: '333px'
				},1);
				$('#skyone').animate({
			   	 	width: '137px',
				    top: '184px',
				    left: '404px',
				    height: '309px'
				},1);
				$('#hora').animate({						
					top: '110px',
    				left: '692px'				
				},1);	
				$('#fecha').animate({						
					top: '124px',
    				left: '693px'				
				},1);	
				$('#nocanal').fadeIn(200);
				$('#descanal').fadeIn(200);
				
				
				select = false;
				info = true;
				menu = false;
				inicio = false;
				x=4;
				break;
		}
		
	}

	setInterval(function() {
			var date = new Date();	
			var dia = date.getDate();
			var diaNombre = 'dom';
			var mes = date.getMonth();
			var hora = date.getHours();
			var minuto = date.getMinutes();


			switch(date.getUTCDay()){
				case 1:
					diaNombre = 'lun'
					break;
				case 2:
					diaNombre = 'mar'
					break;
				case 3:
					diaNombre = 'mié'
					break;
				case 4:
					diaNombre = 'jué'
					break;	
				case 5:
					diaNombre = 'vié'
					break;
				case 6:
					diaNombre = 'sab'
					break;
			}			

			$('#fecha').text(diaNombre+' '+dia+'/'+mes++);
			$('#hora').text(hora+':'+minuto);
  		}, 1000);
	
	function canales_mute(){
		mosaico1000.muted = true;
		skyone.muted = true;
		c1101.muted = true;
		c1102.muted = true;
		c1316.muted = true;
		c1322.muted = true;
		c1419.muted = true;
		c1429.muted = true;
		c1547.muted = true;
		c1549.muted = true;
	}

	function nomprograma(prog){	
		console.log(prog);		
		switch(prog){
			case '1001':
				return 'MTV Hits';
			break;
			case '1101':
				return 'Venga la alreia';
			break;
			case '1102':
				return 'Cuentamelo Ya!';
			break;
			case '1316':
				return 'El show de Gumball';
			break;
			case '1322':
				return 'Blaze and the Monster Machine';
			break;
			case '1419':
				return 'Cars 2';
			break;
			case '1429':
				return 'Mad Mad:Mas alla  de la Cupula del Trueno';
			break;
			
			case '1547':
				return 'Comentando el futbol';
			break;
			case '1549':
				return 'Central Fox';
			break;
		}
	}

	function canal_maxi(){
		$('#mosaico1000').animate({
		    width: '293px',
		    top: '8px',
		    left: '245px',
		    height: '337px'
		},1);		
		$('#skyone').animate({
		    width: '549px',
    		top: '81px',
    		left: '220px',
    		height: '333px'
		},1);
		$('#estrellas').animate({
		    width: '549px',
    		top: '81px',
    		left: '220px',
    		height: '333px'
		},1);
		$('#azteca').animate({
		    width: '549px',
    		top: '81px',
    		left: '220px',
    		height: '333px'
		},1);
		$('#nick').animate({
		    width: '549px',
    		top: '81px',
    		left: '220px',
    		height: '333px'
		},1);
		$('#cartoon').animate({
		    width: '549px',
    		top: '81px',
    		left: '220px',
    		height: '333px'
		},1);
		$('#tnt').animate({
		    width: '549px',
    		top: '81px',
    		left: '220px',
    		height: '333px'
		},1);
		$('#space').animate({
		    width: '549px',
    		top: '81px',
    		left: '220px',
    		height: '333px'
		},1);
		$('#tudn').animate({
		    width: '549px',
    		top: '81px',
    		left: '220px',
    		height: '333px'
		},1);
		$('#foxsports').animate({
		    width: '549px',
    		top: '81px',
    		left: '220px',
    		height: '333px'
		},1);
		$('#fecha').animate({						
			top: '124px',
			left: '693px'				
		},1);	
		$('#hora').animate({						
			top: '110px',
			left: '692px'				
		},1);	
	}
	
	
});