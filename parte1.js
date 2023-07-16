$(document).ready(function(){
	var select = true; //activa la tecla select
	var up = false;  //activa la flecha arriba
	var rigth = false;  //activa la flecha derecha
	var left = false;  //activa la flecha izquierda
	var x = 0;   //cambio de pantalla
	var y = 0;	//moverse en pantalla
	var ly = 0; //indica el máximo que se puede desplazar el selector en esta pantalla
	var lby=0; //indica el mínimo que se puede desplazar el selector en esta pantalla
	var sp = false; // selecciona opción en pantalla
	var res5 = [0,1,0,0,0];//memoria pantalla resolución #5
	var texper = ""; // memoria nombre del equipo
	var inactivo = false; // deshabilita los botones
	var botonDerech = true;
	var m_teclado = ""; // memoria de los botones númericos presionados
	var m_pais = true;
	var m_trans = true;
	var m_masinfo = false;
	var m_masinfo_sint = false;
	var track = 1;
	var track2 = 1;
	var sint = 1;
	var sint2 = 1;
	var sint3 = 1;
	var sint_med = false;
	var sint_med_arrows = 1;
	var sin_select = false;
	var persona_teclado = false; // activa la nevegación por el teclado alfanumérico
	var mos1000 = document.getElementById("mosaico1000");
	var esperar = document.getElementById("espereunmomento");
	var confiConfMP4 = document.getElementById("confiConfMP4")
	var guideprogramaMP4 = document.getElementById("guideprogramaMP4");
	var medidorMP4 = document.getElementById("medidorMP4")
	var masinfo = document.getElementById("masinfo");
	var masinfosint = document.getElementById("masinfosint");
	var cargasoftware = document.getElementById("cargasoftware");
	localStorage.setItem('regreso', '0');


	$(".pantallas").hide();	
	$('#Super_PLus_off').hide();
	$('.dateFH').hide();
	$('#fecha').hide();
	$('#hora').hide();
	$('#sintonizador').hide();
	$('.pantallasgif').hide();
	$('#sintonizador2').hide();
	$('#sintonizador3').hide();
	$('#led_verde').hide();
	$('#intensidadHD').hide();
	$('#intensidadSD').hide();
	

	


//-------------Arranque-----------//	

	$('#arranque').show();
	$('#espere_un_momento').hide().delay(8000).fadeIn(1);
	$('#un_momento').hide().delay(11000).fadeIn(1);
	$('#idioma').hide().delay(15000).fadeIn(1);


	//console.log($('#idioma').is(':visible'))

	if(x==0){
		setTimeout(function() {
		x = 1;
			if(m_teclado == '02468'){
				cargasoftware.play();
				$('.pantallas').hide();
				$('#cargasoftware').fadeIn(1);	
				setTimeout(function() {
					inactivo=true;
					x = 1;
					$('#arranque').show();
					$('#espere_un_momento').hide().delay(8000).fadeIn(1);
					$('#un_momento').hide().delay(11000).fadeIn(1);
					$('#idioma').hide().delay(15000).fadeIn(1);
					//pantallas_disp();
				},20000);			
			}	
		inactivo = true;
		//pantallas_disp();		
  		}, 15000);	

	}
	
	//----------Boton select--------//
	$("#btnSelect").click(function(){  // desplaza hacia adelante las pantallas
		if(inactivo==true){
			$('.pantallas').hide();
			if(select==true){
				x++;
				if(persona_teclado==false){
					y=0;
				}			
				select=false;
			}else{
				sp = true;
			}		

			pantallas_disp();
		}
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnSelect").hide().delay(100).fadeIn(1);

	});

	$("#btnArrowUp").click(function(){ // cambia selector en pantalla hacia arriba		
		if(y>=ly){
				y=ly;
			}

		if(up==true){
			y=y+.1;
		}
		
		if(m_masinfo == true){
			track--;
			masinfo.currentTime = track;
		}
		if(m_masinfo_sint == true){
			track2--;
			masinfosint.currentTime = track2;
			if(track2<=1){
				track2=1;
			}
		}	
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowUp").hide().delay(100).fadeIn(1);
		pantallas_disp();
	});

	$("#btnArrowDown").click(function(){ // cambia selector en pantalla hacia abajo	
		if(up==true){
			y=y-.1;
		}
		if(y<=lby){
			y=lby;
		}
		if(m_masinfo == true){
			track++;
			masinfo.currentTime = track;
		}
		if(m_masinfo_sint == true){
			track2++;
			masinfosint.currentTime = track2;
			if(track2>=4){
				track2=4;
			}
		}
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowDown").hide().delay(100).fadeIn(1);
		pantallas_disp();

	});

	$("#btnArrowL").click(function(){  // desplaza hacia atras las pantallas
		if (left== true) {
			$('.pantallas').hide();	
			x--;
			left = false;
			
		}
		if(x>=20){
			x=20;
		}
		
		if(m_masinfo == true){
			$('#masinfo').fadeOut();
			masinfo.currentTime = 0;
			m_masinfo = false;
			x=6;
			y=-.1;
		}
		if(m_masinfo_sint == true){
			$('#masinfosint').fadeOut(1);
			masinfosint.currentTime = 0;
			m_masinfo_sint = false;
			x=11;
			y=-.8;
		}
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowL").hide().delay(100).fadeIn(1);
		pantallas_disp();
		
	});
	$("#btnArrowR").click(function(){  // desplaza hacia atras las pantallas "Right"
		if(botonDerech== true){
			$('.pantallas').hide();	
			if (rigth== true) {
				x++;
				if(persona_teclado==false){
					y=0;
				}	
				rigth = false;
			}			
			pantallas_disp();
			$("#led_verde").show().delay(100).fadeOut(1);
			$("#btnArrowR").hide().delay(100).fadeIn(1);
		}
	});
	$("#btnexit").click(function(){  // desplaza hacia atras las pantallas
		$('#info').fadeOut(1);	
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnexit").hide().delay(100).fadeIn(1);
	});
	$("#btn_0").click(function(){  // desplaza hacia atras las pantallas
		m_teclado = m_teclado + '0';
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btn_0").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
	});
	$("#btn_2").click(function(){  // desplaza hacia atras las pantallas
		m_teclado = m_teclado + '2';
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btn_2").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
	});
	$("#btn_4").click(function(){  // desplaza hacia atras las pantallas
		m_teclado = m_teclado + '4';
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btn_4").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
	});
	$("#btn_6").click(function(){  // desplaza hacia atras las pantallas
		m_teclado = m_teclado + '6';
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btn_6").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
	});
	$("#btn_8").click(function(){  // desplaza hacia atras las pantallas
		m_teclado = m_teclado + '8';
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btn_8").hide().delay(100).fadeIn(1);
		console.log(m_teclado);
	});
	function pantallas_disp(){
		var xy= x + y;

		//var prueba = x + "px";
		console.log(xy);
		console.log(x);
		console.log(y);
		//console.log(up);
		//console.log(ly);
		//console.log(lby);
		//console.log(persona_teclado);
		switch (xy){			
			case 1:
				left = false;
				select = true;
				inactivo = true;
				$('#fecha').fadeIn(1);
				$('#hora').fadeIn(1);				
				$('#idioma').fadeIn(1);	
				$('.dateFH').fadeIn(1);						
				break;
			case 2:
				select = true;
				left = true;
				$('#bienvenido').fadeIn(1);					
				break;
			case 3:			
				left = true;	
				$('#revision').fadeIn(1);
				select = true;	
				break;
			case 4:  //   pantalla formato 4:3 o 16:9
				ly=.2; // indica el maximo que se puede desplazar el selector en esta pantalla
				lby = 0;
				select = true;
				up = true;
				left = true;
				botonDerech = true;
				$('#formato_cln').fadeIn(1); //    pantalla formato fondo
				$('#formato_sel_cont').fadeIn(1); //  selector continuar
				$('#formato_continuar').fadeIn(1);	// texto continuar	
				$('#formato_16_9').fadeIn(1);
				$('#formato_sel_16_9').fadeOut(1);										
				break;
			case 4.1:   //pantalla formato 4:3 o 16:9
				ly=.2;
				lby=0;
				select = false;
				up = true;
				left = true;
				rigth = false;
				botonDerech = false;
				$('#formato_cln').fadeIn(1); //Pantalla principal				
				$('#formato_sel_16_9').fadeIn(1);
				$('#formato_continuar').fadeIn(1);
				$('#formato_sel_4_3').fadeOut(1);
				$('#formato_sel_cont').fadeOut(1);
				if(sp==true){				
						$('#formato_16_9').fadeIn(1);				
						$('#formato_4_3').fadeOut(1);
						sp=false
				}
				break;			
			case 4.2:      //pantalla formato 4:3 o 16:9
				ly=.2;
				lby = 0;
				select = false;
				up = true;
				left = true;
				$('#formato_cln').fadeIn(1);  //Pantalla principal
				$('#formato_sel_4_3').fadeIn(1);
				$('#formato_sel_16_9').fadeOut(1);
				$('#formato_16_9').fadeIn(1);
				$('#formato_continuar').fadeIn(1);
				$('#formato_sel_cont').fadeOut(1);				
				if(sp==true){				
						$('#formato_16_9').fadeOut(1);				
						$('#formato_4_3').fadeIn(1);
				}
				sp=false;
				break;
			case 5:  // pantalla resolución 480p
				ly=.1;
				lby = -.3;
				select = false;
				up = true;
				rigth = true;
				left = true;
				$('#resolucion_cln').fadeIn(1);				
				$('#sel_480i').fadeOut(1);
				$('#sel_480p').fadeIn(1);
				$('#sel_720p').fadeOut(1);
				$('#sel_1080i').fadeOut(1);
				$('#sel_1080p').fadeOut(1);								
				$('#res_continuar').fadeIn(1);
				$('#res_masinfo').fadeIn(1);				
				if(sp == true){						
					if(res5[1]==1){
						res5[1]=0;


					}else{
						res5[1]=1;
						$('#resolinfo480i').show().delay(3000).fadeOut(1);
					}
				sp = false;
				}
				resol_select(res5[0],res5[1],res5[2],res5[3],res5[4]);	
				break;
			case 5.1:  // pantalla resolución 480i
				ly=0;
				lby = -.3;
				select = false;
				up = true;
				left = true;
				$('#resolucion_cln').fadeIn(1);				
				$('#sel_480i').fadeIn(1);			//abierto	
				$('#sel_480p').fadeOut(1);
				$('#sel_720p').fadeOut(1);
				$('#sel_1080i').fadeOut(1);
				$('#sel_1080p').fadeOut(1);	
				$('#res_continuar').fadeIn(1);
				$('#res_masinfo').fadeIn(1);				
				if(sp == true){						
					if(res5[0]==1){
						res5[0]=0;
					}else{
						res5[0]=1;
						$('#resolinfo480p').show().delay(3000).fadeOut(1);
					}
				sp = false;
				}
				resol_select(res5[0],res5[1],res5[2],res5[3],res5[4]);	
				break;
			case 4.9:  // pantalla resolución 720p
				ly=.1;
				lby = -.3;
				select = false;
				up = true;
				rigth = true;
				left = true;
				$('#resolucion_cln').fadeIn(1);		//escenario siempre abierto			
				$('#sel_480i').fadeOut(1);				
				$('#sel_480p').fadeOut(1);
				$('#sel_720p').fadeIn(1);   //abierto
				$('#sel_1080i').fadeOut(1);
				$('#sel_1080p').fadeOut(1);	
				$('#res_continuar').fadeIn(1);
				$('#res_masinfo').fadeIn(1);				
				if(sp == true){						
					if(res5[2]==1){
						res5[2]=0;
					}else{
						res5[2]=1;
						$('#resolinfo720p').show().delay(3000).fadeOut(1);
					}
				sp = false;
				}
				resol_select(res5[0],res5[1],res5[2],res5[3],res5[4]);
				break;
			case 4.8:  // pantalla resolución 1080i
				ly=.1;
				lby = -.3;
				select = false;
				up = true;
				rigth = true;
				left = true;
				$('#resolucion_cln').fadeIn(1);				
				$('#sel_480i').fadeOut(1);				
				$('#sel_480p').fadeOut(1);
				$('#sel_720p').fadeOut(1);
				$('#sel_1080i').fadeIn(1);
				$('#sel_1080p').fadeOut(1);	
				$('#res_continuar').fadeIn(1);
				$('#res_masinfo').fadeIn(1);								
				if(sp == true){						
					if(res5[3]==1){
						res5[3]=0;
					}else{
						res5[3]=1;
						$('#resolinfo1080i').show().delay(3000).fadeOut(1);
					}
				sp = false;
				}
				resol_select(res5[0],res5[1],res5[2],res5[3],res5[4]);
				break;
			case 4.7:  // pantalla resolución 1080i
				ly=.1;
				lby = -.3;
				select = false;
				up = true;
				rigth = true;
				left = true;
				$('#resolucion_cln').fadeIn(1);				
				$('#sel_480i').fadeOut(1);				
				$('#sel_480p').fadeOut(1);
				$('#sel_720p').fadeOut(1);
				$('#sel_1080i').fadeOut(1);
				$('#sel_1080p').fadeIn(1);
				$('#res_continuar').fadeIn(1);
				$('#res_masinfo').fadeIn(1);
				if(sp == true){						
					if(res5[4]==1){
						res5[4]=0;
					}else{
						res5[4]=1;
						$('#resolinfo1080p').show().delay(3000).fadeOut(1);
					}
				sp = false;
				}
				resol_select(res5[0],res5[1],res5[2],res5[3],res5[4]);
				break;
			case 6:
				ly=0;
				lby = -.1;
				select = true;
				up = true;
				rigth = false;
				left = true;
				$('#resolucion_cln').fadeIn(1);				
				$('#res_sel_continuar').fadeIn(1);
				$('#res_sel_masinfo').fadeOut(1);
				$('#res_continuar').fadeIn(1);
				$('#res_masinfo').fadeIn(1);
				resol_select(res5[0],res5[1],res5[2],res5[3],res5[4]);	
				break;
			case 5.9: //--------video mas info--------
				ly=0;
				lby = -.1;
				select = false;
				up = true;
				rigth = false;
				left = true;
				$('#resolucion_cln').fadeIn(1);				
				$('#res_sel_masinfo').fadeIn(1);
				$('#res_sel_continuar').fadeOut(1);
				$('#res_continuar').fadeIn(1);
				$('#res_masinfo').fadeIn(1);
				resol_select(res5[0],res5[1],res5[2],res5[3],res5[4]);	
				if(sp == true){						
					$('#masinfo').fadeIn(1);
					//masinfo.play();
					m_masinfo = true;
				sp = false;
				}
				break;
			case 6.2:				
				select = false;
				up = true;
				rigth = true;
				left = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				$('#paises').animate({
					top:"-414px"
				},500);	
				$('#paises').animate({
					top:"-206px"
					
				},1);		
				x = 7;
				y = 0;					
				break;
			case 6.3:				
				select = false;
				up = true;
				rigth = true;
				left = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				$('#paises').animate({
					top:"-387px"
				},500);							
				break;
			case 6.4:				
				select = false;
				up = true;
				rigth = true;
				left = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				$('#paises').animate({
					top:"-361px"
				},500);							
				break;
			case 6.5:				
				select = false;
				up = true;
				rigth = true;
				left = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				$('#paises').animate({
					top:"-335px"
				},500);							
				break;
			case 6.6:				
				select = false;
				up = true;
				rigth = true;
				left = true;
				lby = -.8;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				$('#paises').animate({
					top:"-309px"
				},500);							
				break;
			case 6.7:				
				select = false;
				up = true;
				rigth = true;
				pais_reset = true;
				left = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				$('#paises').animate({
					top:"-283px"
					
				},500);
				break;
			case 6.8:				
				select = true;
				up = true;
				rigth = true;
				left = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();		
					sp = false;												
				}				
				$('#paises').animate({
					top:"-258px"
					
				},500);				
				break;
			case 6.9:				
				select = false;
				up = true;
				rigth = true;
				left = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();		
					sp = false;												
				}				
				$('#paises').animate({
					top:"-232px"
					
				},500);				
				break;
			case 7:				
				select = false;
				up = true;
				rigth = true;
				left = true;
				lby = -.8;
				ly = .8;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);
				$('#paises').animate({
					top:"-206px"
					
				},500);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				sp = false;
				break;
			case 7.1:				
				select = false;
				up = true;
				rigth = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				$('#paises').animate({
					top:"-179px"
					
				},500);
				break;
			case 7.2:				
				select = true;
				up = true;
				rigth = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();													
				}				
				$('#paises').animate({
					top:"-154px"
					
				},500);
				break;
			case 7.3:				
				select = false;
				up = true;
				rigth = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				$('#paises').animate({
					top:"-129px"					
				},500);					
				break;
			case 7.4:				
				select = false;
				up = true;
				rigth = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				$('#paises').animate({
					top:"-102px"					
				},500);	
				break;
			case 7.5:				
				select = false;
				up = true;
				rigth = true;
				ly = .8;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				$('#paises').animate({
					top:"-76px"					
				},500);	
				break;
			case 7.6:				
				select = false;
				up = true;
				rigth = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				$('#paises').animate({
					top:"-50px"					
				},500);	
				break;
			case 7.7:				
				select = false;
				up = true;
				rigth = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				$('#paises').animate({
					top:"-24px"					
				},500);	
				break;
			case 7.8:
				select = false;
				up = true;
				rigth = true;
				$('#pais2').fadeIn(1);
				$('#pais').fadeOut(1);	
				$('#backgroud').fadeIn(1);
				$('#paises').fadeIn(1);
				$('#selector').fadeIn(1);			
				if(sp == true){						
					reg_pais();	
					sp = false;													
				}				
				$('#paises').animate({
					top:"-2px"
				},500);				
				$('#paises').animate({
					top:"-206px"
				},1);
				x=7;
				y=0;
				break;								
			case 8:
				ly=0;
				lby = 0;
				select = true;
				up = false;
				rigth = false;
				m_pais = false;
				$('#pais').fadeIn(1);
				$('#pais2').fadeOut(1);
				$('#backgroud').fadeIn(1);
				$('#region_pais').animate({
					height: "24px"					
				},1);				
				$('#paises').fadeIn(1);
				break;
			case 9:
				var stop = true;
				ly=0;
				lby = 0;
				select = true;
				up = false;
				rigth = false;
				$('#confLNB').hide().delay(3000).fadeIn(1);
				$('#hora').hide().delay(3000).fadeIn(1);
				$('#fecha').hide().delay(3000).fadeIn(1);
				$('.dateFH').hide().delay(3000).fadeIn(1);
				$('#espereunmomento').fadeIn(1);
				esperar.play();	
				break;
			case 10:
				ly=0;
				lby = 0;
				select = true;
				up = false;
				rigth = false;
				$('#antenaSat').fadeIn(1);
				$('#sintonizador').fadeOut(1);
				$('.pantallasgif').fadeOut(1);						
				sint = 1;	

				break;
			case 11:
				ly=0;
				lby = -.4;
				select = false;
				up = true;
				rigth = false;	
				$('#masinfosint').fadeOut(1);	
				$('.pantallasgif').fadeIn(1);			
				$('#intensidadS_cls').fadeIn(1);
				$('#transSD').fadeIn(1);
				$('#mas1').fadeIn(1);
				$('#mas2').fadeOut(1);
				$('#mas3').fadeOut(1);
				$('#medidor').fadeOut(1);
				$('#finalizar').fadeOut(1);
				$('#sintonizador').fadeIn(1);
				$('#sintonizador2').fadeOut(1);
				$('#sintonizador3').fadeOut(1);
				break;
			case 10.9: //cambia de transpondedores SD a HD
				ly=0;
				lby = -.4;
				select = false;
				up = true;
				rigth = false;
				left = true;
				$('#intensidadS_cls').fadeIn(1);				
				$('#mas2').fadeIn(1);								
				if(sp == true){	

					transHD_SD();
					
					sp = false;											
				}
				$('#mas1').fadeOut(1);
				$('#mas3').fadeOut(1);
				$('#medidor').fadeOut(1);
				$('#finalizar').fadeOut(1);
				break;
			case 10.8:		//incrementa transpondedor en uno		
				ly=0;
				lby = -.4;
				select = false;
				up = true;
				rigth = false;
				left = true;
				$('#intensidadS_cls').fadeIn(1);
				//$('#transSD').fadeIn(1);
				$('#mas3').fadeIn(1);
				$('#mas2').fadeOut(1);
				$('#mas1').fadeOut(1);
				$('#medidor').fadeOut(1);
				$('#finalizar').fadeOut(1);
				if(sp == true){						
					$('#sintonizador').text(sint++);
					if (sint > 24){
						sint = 1;
					}
					sp = false;													
				}
				//transHD_SD();
				break;
			case 10.7: //finalizar
				ly=0;
				lby = -.4;
				select = true;  //activa select para sumar a x y continuar
				up = true;
				rigth = false;
				left = true;
				$('#intensidadS_cls').fadeIn(1);
				//$('#transSD').fadeIn(1);
				$('#finalizar').fadeIn(1);
				$('#mas3').fadeOut(1);
				$('#mas2').fadeOut(1);
				$('#mas1').fadeOut(1);
				$('#medidor').fadeOut(1);

				break;
			case 10.6: // activa el video de intensidad de señal
				ly=0;
				lby = -.4;
				select = false;
				up = true;
				rigth = false;
				left = true;

				$('#intensidadS_cls').fadeIn(1);				
				$('#medidor').fadeIn(1);
				$('#mas3').fadeOut(1);
				$('#mas2').fadeOut(1);
				$('#mas1').fadeOut(1);
				$('#finalizar').fadeOut(1);
				if(sp == true){																
					y=-.5;	
					x=11;		
					pantallas_disp();					
					medidorMP4.play();				
						
					$('#sintonizador3').fadeIn(1);
					$('#sintonizador2').fadeIn(1);
					sp = false;
				}			
				break;	
			case 10.5:
					ly=-.6;
					lby = -.9;
					select = false;
					up = true;
					rigth = false;
					left = false;
					$('#sintonizador_cls').fadeIn(1);
					$('#s_mas1').fadeIn(1);
					$('#s_mas2').fadeOut(1);
					$('#s_mas3').fadeOut(1);
					$('#sintonizador_final').fadeOut(1);
					$('#sintonizado_masinf').fadeOut(1);
					$('#medidorMP4').fadeIn(1);		
					break;
			case 10.4:
					ly=-.6;
					lby = -.9;
					select = false;
					up = true;
					rigth = false;
					left = false;
					$('#sintonizador_cls').fadeIn(1);
					$('#s_mas1').fadeOut(1);
					$('#s_mas2').fadeIn(1);
					$('#s_mas3').fadeOut(1);
					$('#sintonizador_final').fadeOut(1);
					$('#sintonizado_masinf').fadeOut(1);
					$('#medidorMP4').fadeIn(1);		
					if(sp == true){						
						$('#sintonizador3').text(sint3++);
						if (sint3 > 24){
							sint3 = 1;
						}
						sp = false;													
					}								
					break;
			case 10.3:
					ly=-.6;
					lby = -.9;
					select = false;
					up = true;
					rigth = false;
					left = false;
					$('#sintonizador_cls').fadeIn(1);
					$('#s_mas1').fadeOut(1);
					$('#s_mas2').fadeOut(1);
					$('#s_mas3').fadeIn(1);
					$('#sintonizador_final').fadeOut(1);
					$('#sintonizado_masinf').fadeOut(1);
					$('#medidorMP4').fadeIn(1);	
					if(sp == true){						
						$('#sintonizador2').text(sint2++);
						if (sint2 > 24){
							sint2 = 1;
						}
						sp = false;													
					}					
					break;
			case 10.2:
					ly=-.6;
					lby = -.9;
					select = false;
					up = true;
					rigth = false;
					left = false;
					$('#masinfosint').fadeOut(1);
					$('#sintonizador_cls').fadeIn(1);
					$('#s_mas1').fadeOut(1);
					$('#s_mas2').fadeOut(1);
					$('#s_mas3').fadeOut(1);
					$('#sintonizador_final').fadeIn(1);
					$('#sintonizado_masinf').fadeOut(1);
					$('#medidorMP4').fadeIn(1);	
					if(sp == true){
						y=0;
						x=11;
						sp==false;
						$('#sintonizador_cls').fadeOut(1);
						$('#s_mas1').fadeOut(1);
						$('#s_mas2').fadeOut(1);
						$('#s_mas3').fadeOut(1);
						$('#sintonizador_final').fadeOut(1);
						$('#sintonizado_masinf').fadeOut(1);
						$('#medidorMP4').fadeOut(1);		
						medidorMP4.pause();
						pantallas_disp();
					}								
					break;
			case 10.1:
					ly=-.6;
					lby = -.9;
					select = false;
					up = true;
					rigth = false;
					left = false;
					$('#sintonizador_cls').fadeIn(1);
					$('#s_mas1').fadeOut(1);
					$('#s_mas2').fadeOut(1);
					$('#s_mas3').fadeOut(1);
					$('#sintonizador_final').fadeOut(1);
					$('#sintonizado_masinf').fadeIn(1);
					$('#medidorMP4').fadeIn(1);
					if(sp == true){						
						$('#masinfosint').fadeIn(1);
						m_masinfo_sint = true;
						medidorMP4.pause();
						sp = false;
					}
					break;		
			case 12:				
				select = true;	
				rigth = true;	
				left = true;
				$('#confiConfMP4').fadeIn(1);
				$('#confiConf').hide().delay(4000).fadeIn(1);
				$('#hora').hide().delay(4000).fadeIn(1);
				$('#fecha').hide().delay(4000).fadeIn(1);
				$('.dateFH').hide().delay(4000).fadeIn(1);
				$('#sintonizador').fadeIn(1);
				$('.pantallasgif').fadeOut(1);
				sint = 1;
				confiConfMP4.play();					
				break;
			case 13:
				select = true;	
				left = true;			
				$('#guideprogramaMP4').fadeIn(1);
				$('#guiadeProg').hide().delay(6000).fadeIn(1);
				$('#hora').hide().delay(6000).fadeIn(1);
				$('#fecha').hide().delay(6000).fadeIn(1);
				$('.dateFH').hide().delay(6000).fadeIn(1);
				guideprogramaMP4.play();	
				guideprogramaMP4.muted = true;
				$('#sintonizador').fadeIn(1);
				$('.pantallasgif').fadeOut(1);
				sint = 1;
				break;
			case 14: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;	
				ly = 0;		
				lby = -.6;	
				persona_teclado = true;
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'220px',	
					top:'81px'				
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 13.9: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'220px',
					top:'101px'					
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 13.8: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'220px',
					top:'120px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 13.7: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'220px',
					top:'139px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 13.6: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;				
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'220px',
					top:'159px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 13.5: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;		

				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'220px',
					top:'179px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				$('#selectorExt').fadeOut(1);
				personPerm();
				break;
			case 13.4: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;				
				rigth = true;
				lby = -.6;				
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'220px',
					top:'199px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				$('#selectorExt').animate({
					left:'220px',
					top:'199px'						
				},1);
				$('#selectorExt').fadeIn(1);
				personPerm();
				break;	
			
			case 15: 
				select = false;
				left = true;
				rigth = true;
				up = true;
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);				
				$('#selectorPer').animate({
					left:'237px',
					top:'81px'						
				},1);					
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 14.9: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'237px',
					top:'101px'					
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 14.8: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'237px',
					top:'120px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 14.7: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;	
				ly = 0;		
				lby = -.6;		
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'237px',
					top:'139px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 14.6: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;				
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'237px',
					top:'159px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 14.5: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;		

				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'237px',
					top:'179px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				$('#selectorExt').fadeOut(1);
				personPerm();
				break;
			case 14.4: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;				
				rigth = true;
				lby = -.6;				
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'237px',
					top:'199px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				$('#selectorExt').animate({
					left:'220px',
					top:'199px'						
				},1);
				$('#selectorExt').fadeIn(1);				
				personPerm();
				break;	
			case 16: 
				select = false;
				left = true;
				rigth = true;
				up = true;
				$('#personalizar').fadeIn(1);	
				$('#teclado').fadeIn(1);			
				$('#selectorPer').animate({
					left:'254px',
					top:'81px'						
				},1);					
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 15.9: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'254px',
					top:'101px'					
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 15.8: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'254px',
					top:'120px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 15.7: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'254px',
					top:'139px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 15.6: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;				
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'254px',
					top:'159px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 15.5: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;		

				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'254px',
					top:'179px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				$('#selectorExt').fadeOut(1);
				personPerm();
				break;
			case 15.4: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;				
				rigth = true;
				lby = -.6;				
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'254px',
					top:'199px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				$('#selectorExt').animate({
					left:'254px',
					top:'199px'						
				},1);
				$('#selectorExt').fadeIn(1);
				personPerm();
				break;	
			case 17: 
				select = false;
				left = true;
				rigth = true;
				up = true;
				$('#personalizar').fadeIn(1);	
				$('#teclado').fadeIn(1);			
				$('#selectorPer').animate({
					left:'272px',
					top:'81px'						
				},1);					
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 16.9: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'272px',
					top:'101px'					
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 16.8: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'272px',
					top:'120px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 16.7: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'272px',
					top:'139px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 16.6: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;				
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'272px',
					top:'159px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 16.5: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;		

				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'272px',
					top:'179px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				$('#selectorExt').fadeOut(1);
				personPerm();
				break;
			case 16.4: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;				
				rigth = true;
				lby = -.6;				
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'272px',
					top:'199px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				$('#selectorExt').animate({
					left:'254px',
					top:'199px'						
				},1);
				$('#selectorExt').fadeIn(1);
				personPerm();
				break;	
			case 18: 
				select = false;
				left = true;
				rigth = true;
				up = true;
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);				
				$('#selectorPer').animate({
					left:'290px',
					top:'81px'						
				},1);					
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 17.9: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'290px',
					top:'101px'					
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 17.8: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'290px',
					top:'120px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 17.7: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'290px',
					top:'139px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 17.6: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;				
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'290px',
					top:'159px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 17.5: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;		

				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'290px',
					top:'179px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				$('#selectorExt').fadeOut(1);
				personPerm();
				break;
			case 17.4: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;				
				rigth = true;
				lby = -.6;				
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'290px',
					top:'199px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				$('#selectorExt').animate({
					left:'290px',
					top:'199px'						
				},1);
				$('#selectorExt').fadeIn(1);
				personPerm();
				break;	
			case 19: 
				select = false;
				left = true;
				rigth = true;
				up = true;
				ly = 0;		
				lby = -.6;
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);				
				$('#selectorPer').animate({
					left:'307px',
					top:'81px'						
				},1);					
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 18.9: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;		
				persona_teclado = false;	
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'307px',
					top:'101px'					
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 18.8: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;	
				persona_teclado = false;		
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'307px',
					top:'120px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 18.7: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;		
				persona_teclado = false;	
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'307px',
					top:'139px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 18.6: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;	
				persona_teclado = false;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'307px',
					top:'159px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				personPerm();
				break;
			case 18.5: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;	
				persona_teclado = false;
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'307px',
					top:'179px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				$('#selectorExt').fadeOut(1);
				personPerm();
				break;
			case 18.4: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;	
				lby = -.6;	
				persona_teclado = false;			
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);
				$('#selectorPer').animate({
					left:'307px',
					top:'199px'						
				},1);				
				$('#selectorPer').fadeIn(1);
				if(sp == true){						
					teclado();
					$('#texto').text(texper);
					sp = false;
				}
				$('#texto').fadeIn(1);
				$('#selectorExt').animate({
					left:'290px',
					top:'199px'						
				},1);
				$('#selectorExt').fadeIn(1);
				personPerm();
				break;
			case 20: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
				select = false;
				left = true;
				rigth = true;	
				up = false;				
				lby = .0;					
				persona_teclado = false;	
				y = 0;		
				$('#personalizar').fadeIn(1);
				$('#teclado').fadeIn(1);								
				$('#selectorPer').fadeOut(1);				
				$('#texto').fadeIn(1);
				$('#personalizar_select').fadeIn(1);
				if(sp == true){						
					if(sp==true){

							localStorage.setItem('texper', texper);
							window.open("imgs/confi_inicial_final.html","_self");							
							sp==false
					}
				}
				personPerm();
				break;
/*			case 21:
				select = true;
				left = true;
				$('#finconfiguracion').fadeIn(1);
				break;
			case 22:
				select = true;
				left = true;
				$('#activarservicio').fadeIn(1);
				$('#mosaico1000').fadeIn(1);
				mos1000.play();
				mos1000.loop = true;
				break;
			case 23:
				ly=0;
				lby=0;
				up = false;
				select=true;
				left = true;
				mos1000.loop = true;
				$('#mosaico1000').fadeIn(1);
				$('#programarcontrol').fadeIn(1);
				$('#programctl_adel').fadeOut(1);
				break;
			case 24:
				up = true;
				ly=0;
				lby=-.1;
				select = false;
				left = true;
				mos1000.loop = true;
				$('#mosaico1000').fadeIn(1);
				$('#programctl_adel').fadeIn(1);
				$('#programarcontrol').fadeOut(1);
				break;
			case 25:
				left = false;	
				ly=0;
				lby=0;	
				mos1000.loop = true;		
				$('#mosaico1000').animate({
				 	position: "absolute",
				    width: '549px',
				    top: '81px',
				    left: '220px',
				    height: '333px'
				});		
				$('#mosaico1000').fadeIn(1);	
				$('#info').fadeIn(1);
				$('#guideprogramaMP4').fadeIn(1);
				$('#guiadeProg').fadeOut(1);
				$('#hora').fadeOut(1);
				$('#fecha').fadeOut(1);
				$('.dateFH').fadeOut(1);
				x=18;
				break;
	
				
*/		}

	}

	function transHD_SD(){
		if(m_trans == true){
			$('#intensidadHD').fadeIn(1);	
			$('#intensidadSD').fadeOut(1);
			$('#transHD').fadeIn(1);
			$('#transSD').fadeOut(1);
			m_trans = false;
		}else{
			$('#intensidadHD').fadeOut(1);	
			$('#intensidadSD').fadeIn(1);
			$('#transHD').fadeOut(1);
			$('#transSD').fadeIn(1);
			m_trans=true;
		}
	}

	function reg_pais(){
		if(m_pais == true){
			ly=.4;
			lby = -.4;
			$('#region_pais').animate({
				height: "93px"					
			},500);
			$('#flechas').fadeIn(1000);
			m_pais=false;
		}else{
			ly=0;
			lby = 0;
			$('#region_pais').animate({
				height: "24px"					
			},500);
			$('#flechas').fadeOut(1000);
			m_pais=true;						
		}
		
	}

	function resol_select(a,b,c,d,e){
		if(a==1){
			$("#480i").fadeIn(1);	
		}else{
			$("#480i").fadeOut(1);	
		}
		if(b==1){
			$("#480p").fadeIn(1);	
		}else{
			$("#480p").fadeOut(1);	
		}
		if(c==1){
			$("#720p").fadeIn(1);	
		}else{
			$("#720p").fadeOut(1);	
		}
		if(d==1){
			$("#1080i").fadeIn(1);	
		}else{
			$("#1080i").fadeOut(1);	
		}
		if(e==1){
			$("#1080p").fadeIn(1);	
		}else{
			$("#1080p").fadeOut(1);	
		}
	}

	$("#btnOff").click(function(){
  		$(".pantallas").hide();
  		$("#Super_PLus_off").show();			
  		$("#led_verde").show().delay(100).fadeOut(1);
  		$("#btnOff").hide().delay(100).fadeIn(1);
	});

	$("#btnOn").click(function(){
		$("#Super_PLus_off").hide();
		$('#fecha').fadeIn(1);
		$('#hora').fadeIn(1);				
		$('#idioma').fadeIn(1);	
		$('.dateFH').fadeIn(1);	
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnOn").hide().delay(100).fadeIn(1);
		pantallas_disp();
	});

	//----------------Fecha y hora----------------

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

	function teclado(){	
				var xy = x+y;
				var n = xy.toFixed(1);
				xy = parseFloat(n);	
				
				switch(xy){
					case 14:
						texper = texper + 'A';
						break;	
					case 15:
						texper = texper + 'B';
						break;
					case 16:
						texper = texper + 'C';
						break;
					case 17:
						texper = texper + 'D';
						break;
					case 18:
						texper = texper + 'E';
						break;
					case 19:
						texper = texper + 'F';
						break;
					case 13.9:
						texper = texper + 'G';
						break;
					case 14.9:
						texper = texper + 'H';
						break;
					case 15.9:
						texper = texper + 'I';
						break;
					case 16.9:
						texper = texper + 'J';
						break;
					case 17.9:
						texper = texper + 'K';
						break;
					case 18.9:
						texper = texper + 'L';
						break;
					case 13.8:
						texper = texper + 'M';
						break;
					case 14.8:
						texper = texper + 'N';
						break;
					case 15.8:
						texper = texper + 'O';
						break;
					case 16.8:
						texper = texper + 'P';
						break;
					case 17.8:
						texper = texper + 'Q';
						break;
					case 18.8:
						texper = texper + 'R';
						break;
					case 13.7:
						texper = texper + 'S';
						break;
					case 14.7:
						texper = texper + 'T';
						break;
					case 15.7:
						texper = texper + 'U';
						break;
					case 16.7:
						texper = texper + 'V';
						break;
					case 17.7:
						texper = texper + 'W';
						break;
					case 18.7:
						texper = texper + 'X';
						break;
					case 13.6:
						texper = texper + 'Y';
						break;
					case 14.6:
						texper = texper + 'Z';
						break;
					case 15.6:
						texper = texper + '1';
						break;				
					case 16.6:
						texper = texper + '2';
						break;				
					case 17.6:
						texper = texper + '3';
						break;				
					case 18.6:
						texper = texper + '4';
						break;				
					case 13.5:
						texper = texper + '5';
						break;				
					case 14.5:
						texper = texper + '6';
						break;				
					case 15.5:
						texper = texper + '7';
						break;				
					case 16.5:
						texper = texper + '8';
						break;				
					case 17.5:
						texper = texper + '9';
						break;				
					case 18.5:
						texper = texper + '0';
						break;
					case 13.4:						
						$('#selectorExt').fadeIn(1);
						texper = '';
						break;
					case 14.4:						
						$('#selectorExt').fadeIn(1);
						texper = '';
						break;
					case 15.4:						
						$('#selectorExt').fadeIn(1);
						texper = texper + ' ';
						break;
					case 16.4:						
						$('#selectorExt').fadeIn(1);
						texper = texper + ' ';
						break;
					case 17.4:						
						$('#selectorExt').fadeIn(1);
						texper = texper.slice(0, texper.length-1);;
						break;
					case 18.4:						
						$('#selectorExt').fadeIn(1);
						texper = texper.slice(0, texper.length-1);;
						break;
				}
				if (texper == '') {
					$('#personalizar_act').fadeIn(1);
				}else{
					$('#personalizar_act').fadeOut(1);
				}
			}

		function lastLine(){
				if(x+y==14.4 || x+y==15.4){
					$('#selectorExt').fadeIn(1);
					$('#selectorExt').animate({
						left: '220px'
					},1);
				}

				if(x+y==16.4 || x+y==17.4){
					$('#selectorExt').fadeIn(1);
					$('#selectorExt').animate({
						left: '254px'
					},1);
				}

				if(x+y==18.4 || x+y==19.4){
					$('#selectorExt').fadeIn(1);
					$('#selectorExt').animate({
						left: '290px'
					},1);
				}

			}

		function personPerm(){
			if (texper == '') {
				$('#personalizar_act').fadeOut(1);
				$('#texto').text('_');
			}else{
				$('#personalizar_act').fadeIn(1);
			}
		}

		function sintoMedidor(sin_select){
			$('#intensidadS_cls').fadeOut(1);				
			$('#medidor').fadeOut(1)	
			console.log(sint_med);				
			switch(sint_med_arrows){
				

			}				
								
		}
	
	
});