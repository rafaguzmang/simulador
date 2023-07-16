$(document).ready(function(){
	var up = true;
	var sp = false;
	var x = 0;
	var y = 0;
	var lys = -1;
	var lyi = -1;
	var lxi = 0;
	var select = true;	
	var m_teclado = '';

	$('.pantallas').hide();
	$('#Super_PLus_off').hide();
	$('#led_verde').hide();
	$('#fecha').show();
	$('#hora').show();
	$('#descanal').hide();
	$('#dash').hide();
	$('#pruebasistema').show();
	
	
	
	/*
	carga.muted = true;
	carga.play();
	carga.loop = true;
	*/
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
	$("#btn_dash").click(function(){  // boton 4		
		$('#dash').show();
		setTimeout(function(){
			y=0;
			configuracion();
		}, 300);
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
						select = false;
						lys = 0;		
						lyi = .1;
						$('.pantallas').hide();
						$('#pruebasistema').show();
						$('#dash').show();						
						$('#conflicto').show();	
						if(sp == true){
							sp = false;
							x=1;
							y=0;
							configuracion();
							
						}				
					break;
					case 1:
						select = false;
						lys = 0;		
						lyi = .1;
						$('.pantallas').hide();
						$('#infoyprueba').show();	
						if(sp == true){
							sp = false;
							window.open('../../menu_conf_conf.html','_self');
							
						}				
					break;
					case 1.1:
						select = false;
						lys = 0;		
						lyi = .1;
						$('.pantallas').hide();
						$('#infoyprueba').show();
						$('#probarotravez').show();	
						if(sp == true){							
							sp = false;

						}				
					break;
					
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
	
	}
});