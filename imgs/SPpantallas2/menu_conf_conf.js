$(document).ready(function(){
	var up = true;
	var down = 0;
	var sp = false;
	var x = 0;
	var y = 0;
	var lys = 0;
	var lyi = 0;
	var lxi = 0;
	var select = true;
	var info = false;
	var menu = false;
	var control = false;
	var satelite = false;
	var reiniciar = false;
	var ahorro = false;
	var multicajainfo = false;
	var selsino = true;
	var select_sino = true;
	var m_pantalla = 0;
	var track = 0;
	var infoplay = false;
	var cargar = document.getElementById('cargar');
	var infosistema = document.getElementById('infosistema');


	$('.pantallas').hide();
	$('#Super_PLus_off').hide();
	$('#led_verde').hide();
	$('#fecha').show();
	$('#hora').show();
	$('#descanal').hide();
	 configuracion();
	
	//----------Boton select--------//
	$("#btnSelect").click(function(){  // desplaza hacia adelante las pantallas
		if(select == true){
			x++;
			configuracion();
		}else{
			sp = true;
			configuracion();	
		}		
				
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnSelect").hide().delay(100).fadeIn(1);

	});

	$("#btnArrowUp").click(function(){ // cambia selector en pantalla hacia arriba	
		if(reiniciar == true){
			y=y+.1;
			if(y>=lyi){
				y=lyi;
			}
		}if(infoplay == true){
			track--;
			infosistema.currentTime = track;
		}else{
			y=y-.1;
			if(y<=lyi){
				y=lyi;
			}
		}
		console.log(lyi);
		configuracion();
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowUp").hide().delay(100).fadeIn(1);
	});

	$("#btnArrowDown").click(function(){ // cambia selector en pantalla hacia abajo			
		
		if(reiniciar == true){
			y=y-.1;
			if(y<=lys){
				y=lys;
			}
		}if(ahorro == true){
			if(select_sino==true){
				select_sino = false;
			}else{
				select_sino = true;
			}
			
		}if(infoplay == true){
			track++;
			infosistema.currentTime = track;
		}else{
			y=y+.1;
			if(y>=lys){
				y=lys;
			}
		}

		
		
		
		configuracion();
		
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowDown").hide().delay(100).fadeIn(1);

	});

	$("#btnArrowL").click(function(){  // desplaza hacia atras las pantallas
		x--;
		if(x<0){
			window.open('../confi_inicial_final.html','_self');
		}	
		configuracion();	
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowL").hide().delay(100).fadeIn(1);
		
	});
	$("#btnArrowR").click(function(){  // desplaza hacia atras las pantallas "Right"
		x++;	
		configuracion();	
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowR").hide().delay(100).fadeIn(1);
		
	});
	$("#btnexit").click(function(){  // desplaza hacia atras las pantallas
		window.open('../confi_inicial_final.html','_self');
		localStorage.setItem('regreso', '4');		
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnexit").hide().delay(100).fadeIn(1);
	});
	$("#btninfo").click(function(){  // boton info		
		
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btninfo").hide().delay(100).fadeIn(1);
	});
	$("#btnmenu").click(function(){  // boton menú
				
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnmenu").hide().delay(100).fadeIn(1);
	});
	$("#btn_0").click(function(){  // boton 0
		m_teclado = m_teclado + '0';
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btn_0").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
	});
	$("#btn_2").click(function(){  // boton 1
		m_teclado = m_teclado + '2';
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btn_2").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
	});
	$("#btn_4").click(function(){  // boton 2
		m_teclado = m_teclado + '4';
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btn_4").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
	});
	$("#btn_6").click(function(){  // boton 3
		m_teclado = m_teclado + '6';
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btn_6").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
	});
	$("#btn_8").click(function(){  // boton 4
		m_teclado = m_teclado + '8';
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btn_8").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
	});

	function configuracion(){
				var total = x + y;
				var n = total.toFixed(1);
				total = parseFloat(n);
				console.log(total);
				switch(total){
					
					case 0://---------info y prueba
						lys = .9;
						lyi = 0;
						select = true;
						infoplay = false;
						$('.pantallas').hide();
						$('#configuraciones_cls').show();
						$('#textoPantallas').show();
						$('#info_prueba').show();						
						
					break;
					case 1:
						select = false;
						lys = .2;
						lyi = 0;
						$('.pantallas').hide();
						$('#background').show();
						if(sp==true){															
							sp=false
							window.open('menu/configuracion/prueba_del_sistema.html','_self');
						}						
						
					break;
					case 1.1:
						$('#background').show();	
						$('#masinfo').show();							
						if(sp == true){
							sp = false;
							$('#infosistema').show();
							infoplay = true;
						}										
					break;
					case 2.1:
						$('#background').show();	
						$('#masinfo').show();
						$('#aceptar_info').show();							
						if(sp == true){
							sp = false;
							x = 0;
							y = 0;
							configuracion();
						}										
					break;
					case 1.2:
						select=false;
						$('.pantallas').hide();
						$('#background').show();	
						$('#multicaja').show();		
						if(sp == true){
							sp = false;
							$('#infomulticaja').show();	
							if(multicajainfo==true){
								x=0;
								y=0;
								configuracion();
								multicajainfo = false;
							}
							multicajainfo = true;		
						}			
						
					break;
					case .1: //-----------pantalla
						select = false;
						$('.pantallas').hide();
						$('#configuraciones_cls').show();
						$('#textoPantallas').show();
						$('#pantalla').show();
					break;
					case .2:  //-----------audio
						select = false;
						$('.pantallas').hide();
						$('#configuraciones_cls').show();
						$('#textoPantallas').show();
						$('#audio').show();
					break;
					case .3:   //-----------config de red
						select = false;
						$('.pantallas').hide();
						$('#configuraciones_cls').show();
						$('#textoPantallas').show();
						$('#confi_red').show();
					break;
					case .4:  //-------------control remoto
						select = true;
						control = false;
						lys = .7;
						lyi = .4;
						$('.pantallas').hide();
						$('#configuraciones_cls').show();
						$('#textoPantallas').show();
						$('#control').show();
					break;
					case 1.4:  //-------------control remoto
						select = false;
						control = true
						lys = .6;
						lyi = .4;
						$('.pantallas').hide();
						$('#configuraciones_cls').show();
						$('#control').show();						
						$('#configurar_control_cls').show();
					break;

					case .5: //--------------ahorro energia
						select = true;
						satelite = false;
						lys = .9;
						lyi = 0;
						ahorro = false;
						control = false;
						$('.pantallas').hide();
						$('#configuraciones_cls').show();
						$('#textoPantallas').show();
						$('#ahorro').show();
					break;
					case 1.5: //--------------ahorro energia
						if(control==true){
							select = false;
							control = true
							
							$('.pantallas').hide();
							$('#configuraciones_cls').show();
							$('#control').show();						
							$('#copiar').show();

						}else{
							select = false;	
							lys = .5;
							lyi = .5;
							ahorro = true;										
							$('.pantallas').hide();
							$('#ahorroenergia_cls').show();
							$('#seleccion').show();
							$('#sino').fadeIn(200);
							if(sp==true){						
								
								if(selsino == true){
									$('#caja_sino').animate({						
									height: '47px'			
									},200);	
									selsino = false;
								}else{
									$('#caja_sino').animate({						
									height: '24px'			
									},200);	
									selsino = true;
								}											
								sp=false
							}
							if(select_sino == true){
								$('#sino').animate({						
									top: '-203px'			
								},200);


							}else{
								$('#sino').animate({						
									top: '-227px'			
								},200);
								$('#sino').animate({						
									top: '-180px'			
								},1);
							}		
						}
					break;
					
					case .6:  //-------------satelite	
						lys = .9;
						lyi = 0;
						select = true;	
						satelite = true;				
						$('.pantallas').hide();
						$('#configuraciones_cls').show();
						$('#textoPantallas').show();
						$('#satelite').show();
					break;
					
					
					case .7: //------------------ multi-room
						satelite = false;
						select = false;
						$('.pantallas').hide();
						$('#configuraciones_cls').show();
						$('#textoPantallas').show();
						$('#multiroom').show();
						if(sp==true){
							window.open('menu/configuracion/multiroom.html','_self');
							sp=false
						}
					break;
					case .8:  //----------------reiniciar
						lys = .9;
						lyi = 0;
						$('.pantallas').hide();
						$('#configuraciones_cls').show();
						$('#textoPantallas').show();
						$('#reiniciar').show();	
						reiniciar = false;					
					break;
					case 1.8:
						select = false;
						lys = .6;
						lyi = .8;	
						reiniciar = true;					
						$('.pantallas').hide();
						$('#reiniciar_cls').show();
						$('#reiniciar_select').show();
						$('#reiniciar').show();
						$('#cargar').show();
						cargar.play();
						cargar.loop = true;
						if(sp==true){
							window.open('../confi_inicial_final.html','_self');
							localStorage.setItem('regreso', '4');
							sp=false
						}
					break;
					case 1.7:			
						if(satelite == true){
							lys = .7;
							lyi = .6;		
							select = false;			
							$('.pantallas').hide();
							$('#ver_intensidad').show();
							$('#repetir_confi').show();
							if(sp==true){
							
								sp=false						
							}	
						}else{
							$('.pantallas').hide();
							$('#reiniciar_config').show();
							$('#reiniciar_cls').show();
							$('#reiniciar').show();
							$('#cargar').show();
							if(sp==true){
								window.open('../confi_inicial_final.html','_self');
								localStorage.setItem('regreso', '0');
								sp=false
							}
						}
					break;
					case 1.6:
						
						if(satelite == true){								
							select = false;			
							$('.pantallas').hide();
							$('#ver_intensidad').show();
							if(sp==true){
							
								sp=false						
							}	
						}else if(control==true){
							select = false;
							control = true
							$('.pantallas').hide();
							$('#configuraciones_cls').show();
							$('#control').show();						
							$('#IR_RF').show();

						}else{
							$('.pantallas').hide();
							$('#reiniciar_todo').show();
							$('#reiniciar_cls').show();
							$('#reiniciar').show();
							$('#cargar').show();
							if(sp==true){
								window.open('../../parte1.html','_self');
								sp=false						
							}
						}
					break;
					
					case .9: //------------finalizar
						select = false;
						$('.pantallas').hide();
						$('#configuraciones_cls').show();
						$('#textoPantallas').show();
						$('#finalizar').show();
						if(sp==true){
							window.open('../confi_inicial_final.html','_self');
							localStorage.setItem('regreso', '4');
							sp=	false
						}
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
	
	
});