var Calculadora = {
	/* Declaracion de variable*/
	pantalla: document.getElementById("display").innerHTML,
	decimal: 0,
	signo: 0,
	digitos: 8,
	stop: 0,
	numero1: 0,
	opcion: 0,
	auxnum: 0,
	auxestado: 0,
	auxresultado: 0,
	inicio: (
		function(){
			this.EventosClick();
		}
	),
	/* Se asignan teclas */
	EventosClick: function(){
		document.getElementById("0").addEventListener("click",function(){Calculadora.mostrarnumero("0")});
		document.getElementById("1").addEventListener("click",function(){Calculadora.mostrarnumero("1")});
		document.getElementById("2").addEventListener("click",function(){Calculadora.mostrarnumero("2")});
		document.getElementById("3").addEventListener("click",function(){Calculadora.mostrarnumero("3")});
		document.getElementById("4").addEventListener("click",function(){Calculadora.mostrarnumero("4")});
		document.getElementById("5").addEventListener("click",function(){Calculadora.mostrarnumero("5")});
		document.getElementById("6").addEventListener("click",function(){Calculadora.mostrarnumero("6")});
		document.getElementById("7").addEventListener("click",function(){Calculadora.mostrarnumero("7")});
		document.getElementById("8").addEventListener("click",function(){Calculadora.mostrarnumero("8")});
		document.getElementById("9").addEventListener("click",function(){Calculadora.mostrarnumero("9")});
		document.getElementById("on").addEventListener("click",function(){Calculadora.on("")});
		document.getElementById("sign").addEventListener("click",function(){Calculadora.sign()});
		document.getElementById("dividido").addEventListener("click",function(){Calculadora.dividido()});
		document.getElementById("menos").addEventListener("click",function(){Calculadora.menos()});
		document.getElementById("punto").addEventListener("click",function(){Calculadora.punto()});
		document.getElementById("igual").addEventListener("click",function(){Calculadora.igual()});
		document.getElementById("mas").addEventListener("click",function(){Calculadora.mas()});
		document.getElementById("por").addEventListener("click",function(){Calculadora.por()});
	},
	/*animacion botones*/
	animaciontecla: function(tecla){
		document.getElementById(tecla).style.transform="scale(0.9)";
		setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
	},
	/*funcion restar*/
		menos: function(){
		    this.animaciontecla("menos");
			this.numero1 = Number(this.pantalla);
			this.pantalla = "",
			this.opcion = 2,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnumero = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.verpantalla();
	},
	/*funcion multiplica*/
		por: function(){
		    this.animaciontecla("por");
			this.numero1 = Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 3,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnumero = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.verpantalla();
	},
	/*funcion dividir*/
		dividido: function(){
		    this.animaciontecla("dividido");
			this.numero1 = Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 4,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnumero = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.verpantalla();
	},
	/*funcion sumar*/
	mas: function(){
		    this.animaciontecla("mas");
			this.numero1 += Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 1,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnumero = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.verpantalla();
	},
	/*funcion igual*/
	igual: function(){
		this.animaciontecla("igual");
		switch(this.opcion){
			case 1:
					if(this.auxestado == 0){
						this.auxnumero = Number(this.pantalla),
						this.pantalla = this.numero1 + Number(this.pantalla),
						this.auxestado = 1,
						this.numero1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)+this.auxnumero;
					}
				break;
			case 2:
					if(this.auxestado == 0){
						this.auxnumero = Number(this.pantalla),
						this.pantalla = this.numero1 - Number(this.pantalla),
						this.auxestado = 1,
						this.numero1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)-this.auxnumero;
					}
				break;
			case 3:
					if(this.auxestado == 0){
						this.auxnumero = Number(this.pantalla),
						this.pantalla = this.numero1 * Number(this.pantalla),
						this.auxestado = 1,
						this.numero1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)*this.auxnumero;
					}
				break;
			case 4:
					if(this.auxestado == 0){
						this.auxnumero = Number(this.pantalla),
						this.pantalla = this.numero1 / Number(this.pantalla),
						this.auxestado = 1,
						this.numero1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)/this.auxnumero;
					}
				break;
			default:
				break;
		}
		this.verpantalla();
	},

	/* funcion mostrar numero en pantalla*/
	mostrarnumero: function(valor){
		this.animaciontecla(valor);
		if(this.signo == 1 && this.stop == 0){
			this.digitos += 1,
			this.stop = 1;
		}
		if(this.decimal == 1  && this.stop == 0){
			this.digitos += 1,
			this.stop = 1;
		}
		if(this.pantalla.length < this.digitos){
			if(this.pantalla != "0"){
				this.pantalla += valor;
			}else if(valor != 0){
				this.pantalla = "",
				this.pantalla += valor;
			}
			this.verpantalla();
		}
	},
	/* funcion limpieza*/
	on: function(){
		this.animaciontecla("on");
		this.pantalla = "0",
		this.decimal = 0,
		this.signo = 0,
		this.stop = 0,
		this.digitos = 8
		this.numero1 = 0,
		this.auxestado = 0,
		this.auxnumero = 0,
		this.opcion = 0,
		this.auxresultado = 0,
		this.verpantalla();
	},
	/* funcion estado negativo o positivo*/
	sign: function(){
		this.animaciontecla("sign");
		if(this.pantalla != 0){
			if(this.signo == 0){
				this.pantalla = "-" + this.pantalla,
				this.signo = 1;
			}else{
				this.pantalla = this.pantalla.slice(1);
				this.signo = 0;
			}
		}
		this.verpantalla();
	},
	/*funcion decimal*/
	punto: function(){
		this.animaciontecla("punto");
		if(this.decimal == 0){
			this.pantalla += ".";
		}
		this.decimal = 1,
		this.verpantalla();
	},
	/*imprime en pantalla*/
	verpantalla: function(){
		if(this.pantalla.toString().length > this.digitos){
			this.pantalla = this.pantalla.toString().substring(0,8);
		}
		document.getElementById("display").innerHTML = this.pantalla;
	}
}
Calculadora.inicio();
