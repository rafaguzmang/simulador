$(document).ready(function(){
	var up = true;
	var sp = false;
	var x = 0;
	var y = 0;
	var lys = 0;
	var lyi = 0;
	var lxi = 0;
	var select = true;
	var persona_teclado=true;
	var sumext = false;
	var texper = "";
	var carga = document.getElementById('carga');
	var nomequi = localStorage.getItem('texper');	
	texper = nomequi;
	
	$('#texto').text(texper);

	$('.pantallas').hide();
	$('#Super_PLus_off').hide();
	$('#led_verde').hide();
	$('#fecha').show();
	$('#hora').show();
	$('#descanal').hide();
	
	
	
	
	configuracion();
	carga.muted = true;
	carga.play();
	carga.loop = true;
	
	//----------Boton select--------//
	$("#btnSelect").click(function(){  // desplaza hacia adelante las pantallas
		
		if(select==true){
			x++;	
		}else{
			sp = true;
		}	
		configuracion();	
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnSelect").hide().delay(100).fadeIn(1);

	});

	$("#btnArrowUp").click(function(){ // cambia selector en pantalla hacia arriba	
		y=y-.1;
		if(y<=lys){
			y=lys;
		}
		configuracion();
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowUp").hide().delay(100).fadeIn(1);
	});

	$("#btnArrowDown").click(function(){ // cambia selector en pantalla hacia abajo			
		y=y+.1;
		if(y>=lyi){
			y=lyi;
		}
		configuracion();
		
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowDown").hide().delay(100).fadeIn(1);

	});

	$("#btnArrowL").click(function(){  // desplaza hacia atras las pantallas
		x--;
		if(x<0){
			window.open('../../menu_conf_conf.html','_self');
		}
		configuracion();
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowL").hide().delay(100).fadeIn(1);
		
	});
	$("#btnArrowR").click(function(){  // desplaza hacia atras las pantallas "Right"	
		x++;
		if(persona_teclado==false){
			y=0;
		}	
		console.log(persona_teclado);
		configuracion();			
		$("#led_verde").show().delay(100).fadeOut(1);
		$("#btnArrowR").hide().delay(100).fadeIn(1);
		
	});
	$("#btnexit").click(function(){  // desplaza hacia atras las pantallas
				
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
				//var n = total.toFixed(1);
				//total = parseFloat(n);
				console.log(total);
				//console.log(select);
				switch(total){
					
					case 0:
						select = true;
						lys = 0;		
						lyi = .2;
						$('.pantallas').hide();						
						$('#carga').show();
						$('#backgraund').show();
						$('#nombrarsitio').show();
						$('#textopantalla').show();						
					break;
					case 1:	// --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						persona_teclado = true;
						sumext = false;
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'298px',	
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
					case 1.1: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						if(sumext==true){
							select=false;
							$('.pantallas').hide();
							$('#carga').show();
							$('#backgraund2').show();						
							$('#sumaext2').show();
							$('#sumaext_select').show();
							if(sp==true){
								x=0;
								y=.1;
								sp=false;
								configuracion();
						}

						}else{
							select = false;	lys = 0;		
							lyi = .6;	
							$('.pantallas').hide();	
							$('#carga').show();					
							$('#nombrarsitio2').show();
							$('#nombrarmult').fadeIn(1);
							$('#teclado').fadeIn(1);
							$('#selectorPer').animate({
								left:'298px',
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
						}
						break;
					case 1.2: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;	lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'298px',
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
					case 1.3: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();
						$('#carga').show();						
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'298px',
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
					case 1.4: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'298px',
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
					case 1.5: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'298px',
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
					case 1.6: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'298px',
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
							left:'298px',
							top:'199px'						
						},1);
						$('#selectorExt').fadeIn(1);
						personPerm();
						break;	
			
					case 2: 
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);				
						$('#selectorPer').animate({
							left:'315px',
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
					case 2.1: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'315px',
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
					case 2.2: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);;
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'315px',
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
					case 2.3: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'315px',
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
					case 2.4: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'315px',
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
					case 2.5: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'315px',
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
					case 2.6: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'315px',
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
							left:'298px',
							top:'199px'						
						},1);
						$('#selectorExt').fadeIn(1);				
						personPerm();
						break;	
					case 3: 
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);	
						$('#teclado').fadeIn(1);			
						$('#selectorPer').animate({
							left:'333px',
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
					case 3.1: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();
						$('#carga').show();						
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'333px',
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
					case 3.2: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'333px',
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
					case 3.3: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'333px',
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
					case 3.4: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'333px',
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
					case 3.5: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'333px',
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
					case 3.6: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();		
						$('#carga').show();				
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'333px',
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
							left:'333px',
							top:'199px'						
						},1);
						$('#selectorExt').fadeIn(1);
						personPerm();
						break;	
					case 4: 
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);			
						$('#selectorPer').animate({
							left:'350px',
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
					case 4.1: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'350px',
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
					case 4.2: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'350px',
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
					case 4.3: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'350px',
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
					case 4.4: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();		
						$('#carga').show();				
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'350px',
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
					case 4.5: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'350px',
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
					case 4.6: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();		
						$('#carga').show();				
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'350px',
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
							left:'333px',
							top:'199px'						
						},1);
						$('#selectorExt').fadeIn(1);
						personPerm();
						break;	
					case 5: 
						select = false;
						lys = 0;		
						lyi = .6;	
						persona_teclado = true;
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);;
						$('#teclado').fadeIn(1);				
						$('#selectorPer').animate({
							left:'368px',
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
					case 5.1: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						persona_teclado = true;
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'368px',
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
					case 5.2: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'368px',
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
					case 5.3: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'368px',
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
					case 5.4: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'368px',
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
					case 5.5: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'368px',
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
					case 5.6: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	

						$('.pantallas').hide();		
						$('#carga').show();				
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'368px',
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
							left:'368px',
							top:'199px'						
						},1);
						$('#selectorExt').fadeIn(1);
						personPerm();
						break;	
					case 6: 
						select = false;
						lys = 0;		
						lyi = .6;	
						persona_teclado=false;
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);				
						$('#selectorPer').animate({
							left:'386px',
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
					case 6.1: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						persona_teclado=false;
						$('.pantallas').hide();		
						$('#carga').show();				
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'386px',
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
					case 6.2: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						persona_teclado=false;
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'386px',
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
					case 6.3: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						persona_teclado=false;
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'386px',
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
					case 6.4: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						persona_teclado=false;
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);				
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'386px',
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
					case 6.5: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						persona_teclado=false;
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'386px',
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
					case 6.6: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .6;	
						persona_teclado=false;
						$('.pantallas').hide();	
						$('#carga').show();					
						$('#nombrarsitio2').show();
						$('#nombrarmult').fadeIn(1);
						$('#teclado').fadeIn(1);
						$('#selectorPer').animate({
							left:'386px',
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
							left:'368px',
							top:'199px'						
						},1);
						$('#selectorExt').fadeIn(1);
						personPerm();
						break;	
					case 7: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .1;
						y = 0;
						$('#carga').show();
						$('#actualizar_select').fadeIn(1);	
						$('#noactualizar_select').fadeOut(1);
						$('#selectorPer').fadeOut(1);					
						if(sp == true){						
							
							localStorage.setItem('texper',texper);
							sp = false;
						}
						personPerm();
						break;	
					case 7.1: // --------------------------------------pantalla de personalizar donde pondremos nombre al equipo
						select = false;
						lys = 0;		
						lyi = .1;
						$('#carga').show();
						$('#noactualizar').fadeIn(1);
						$('#noactualizar_select').fadeIn(1);	
						$('#actualizar_select').fadeOut(1);					
						if(sp == true){						
							
							$('#texto').text(nomequi);
							sp = false;
						}
						personPerm();
						break;						
					case .1:
						select=true;
						sumext = true;
						$('.pantallas').hide();
						$('#carga').show();
						$('#backgraund').show();
						$('#sumaext').show();
						$('#textopantalla').show();
					break;
					case 1.1:
						select=false;
						$('.pantallas').hide();
						$('#carga').show();
						$('#backgraund2').show();						
						$('#sumaext2').show();
						$('#sumaext_select').show();
						if(sp==true){
							x=0;
							y=.1;
							sp=false;
							configuracion();
						}
					break;
					case .2:
						sumext = false;
						select = false;
						$('.pantallas').hide();
						$('#carga').show();
						$('#backgraund').show();
						$('#dispexterno').show();
						$('#textopantalla').show();
					break;
				}
			}
		function teclado(){	
				var xy = x+y;
				var n = xy.toFixed(1);
				xy = parseFloat(n);	
				
				switch(xy){
					case 1:
						texper = texper + 'A';
						break;	
					case 2:
						texper = texper + 'B';
						break;
					case 3:
						texper = texper + 'C';
						break;
					case 4:
						texper = texper + 'D';
						break;
					case 5:
						texper = texper + 'E';
						break;
					case 6:
						texper = texper + 'F';
						break;
					case 1.1:
						texper = texper + 'G';
						break;
					case 2.1:
						texper = texper + 'H';
						break;
					case 3.1:
						texper = texper + 'I';
						break;
					case 4.1:
						texper = texper + 'J';
						break;
					case 5.1:
						texper = texper + 'K';
						break;
					case 6.1:
						texper = texper + 'L';
						break;
					case 1.2:
						texper = texper + 'M';
						break;
					case 2.2:
						texper = texper + 'N';
						break;
					case 3.2:
						texper = texper + 'O';
						break;
					case 4.2:
						texper = texper + 'P';
						break;
					case 5.2:
						texper = texper + 'Q';
						break;
					case 6.2:
						texper = texper + 'R';
						break;
					case 1.3:
						texper = texper + 'S';
						break;
					case 2.3:
						texper = texper + 'T';
						break;
					case 3.3:
						texper = texper + 'U';
						break;
					case 4.3:
						texper = texper + 'V';
						break;
					case 5.3:
						texper = texper + 'W';
						break;
					case 6.3:
						texper = texper + 'X';
						break;
					case 1.4:
						texper = texper + 'Y';
						break;
					case 2.4:
						texper = texper + 'Z';
						break;
					case 3.4:
						texper = texper + '1';
						break;				
					case 4.4:
						texper = texper + '2';
						break;				
					case 5.4:
						texper = texper + '3';
						break;				
					case 6.4:
						texper = texper + '4';
						break;				
					case 1.5:
						texper = texper + '5';
						break;				
					case 2.5:
						texper = texper + '6';
						break;				
					case 3.5:
						texper = texper + '7';
						break;				
					case 4.5:
						texper = texper + '8';
						break;				
					case 5.5:
						texper = texper + '9';
						break;				
					case 6.5:
						texper = texper + '0';
						break;
					case 1.6:						
						$('#selectorExt').fadeIn(1);
						texper = '';
						break;
					case 2.6:						
						$('#selectorExt').fadeIn(1);
						texper = '';
						break;
					case 3.6:						
						$('#selectorExt').fadeIn(1);
						texper = texper + ' ';
						break;
					case 4.6:						
						$('#selectorExt').fadeIn(1);
						texper = texper + ' ';
						break;
					case 5.6:						
						$('#selectorExt').fadeIn(1);
						texper = texper.slice(0, texper.length-1);;
						break;
					case 6.6:						
						$('#selectorExt').fadeIn(1);
						texper = texper.slice(0, texper.length-1);;
						break;
				}
				if (texper == '') {
					$('#actualizar').fadeIn(1);
				}else{
					$('#actualizar').fadeOut(1);
				}
			}
		function personPerm(){
			if (texper == '') {
				$('#actualizar').fadeOut(1);
				$('#texto').text('_');
			}else{
				$('#actualizar').fadeIn(1);
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