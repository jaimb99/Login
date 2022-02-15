function validarFormulario(){
	var verificar=true;
	var expRegNombres =/^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
	
	var expRegTel1=/[0-9]{3}[\s][0-9]{3}[\s][0-9]{3}/;	
	var expRegTel2=/[0-9]{3}[\s][0-9]{2}[\s][0-9]{2}[\s][0-9]{2}/;
	var expRegDni=/[0-9]{8}[A-Z]{1}/;
	var expRegIban=/[A-Z]{2}[0-9]{22}/;
	var formulario = document.getElementById("formulario");
	var nombre = document.getElementById("nombre");
	var email = document.getElementById("mail");
	var telefono = document.getElementById("telf");
	var dni = document.getElementById("dni");
	var iban= document.getElementById("iban");
	var usuario = document.getElementById("nUser");	
	var fecnac = document.getElementById("fecNac");	
	 
	if(!nombre.value){
	alert("Escriba su nombre por favor.");
	nombres.focus();
	verificar=false;
	return false;
	}
	
	else if(!expRegNombres.exec(nombres.value)){
	alert("Este campo admite letras de la a-zA-Z, ÁáÉéÍíÓóÚúÜüÑñ y no admite espacios en blanco al final.");
	nombres.focus();
	verificar=false;
	return false;
	}
	else if(!email.value){
	alert("Escriba su email por favor");
	email.focus();
	verificar=false;
	return false;
	}
	else if(!dni.value){
		alert("Escriba un numero de telefono");
		email.focus();
		verificar=false;
		return false;
		}
	else if(!expRegDni.exec(dni.value)){
	alert("Escriba 8 numeros y una letra para el dni.   12345678A")
	dni.focus();
	verificar=false;
	return false;
	}
	else if(!iban.value){
		alert("Escriba un iban");
		email.focus();
		verificar=false;
		return false;
		}
	else if(!expRegIban.exec(iban.value)){
	alert("Escriba iban correcto. 2 letras y 22 digitos sin espacios");
	iban.focus();
	verificar=false;
	return false;
	}
	else if(!telefono.value){
		alert("Escriba un telefono");
		email.focus();
		verificar=false;
		return false;
		}
	//!expRegTel1.exec(telefono.value)||
	else if(!expRegTel1.exec(telefono.value)&&!expRegTel2.exec(telefono.value)){
	alert("Formato invalido de telefono .Formato 1: 666 666 666 Formato 2: 666 66 66 66");
	telefono.focus();
	verificar=false;
	return false;
	}
	
	else if(!comentario.value){
	alert("el campo comentarios es requerido");
	comentario.focus();
	verificar=false;
	return false;
	}
	else if(comentario.value.length > 1000){
	alert("El campo comentarios no puede tener mas de 1000 caracteres.");
	comentario.focus();
	verificar=false;
	return false;
	}
	
	if(verificar==true){
	document.formulario.submit();
	alert("Se ha registrado correctamente");
	}
}
function limpiarFormulario(){
	document.getElementById("formulario").reset();
}
function calcular(){
	var contadorChar= document.getElementById("contador-char").innerHTML=1000 -document.formulario.comentario.value.length;
}
window.onload=function(){
	var botonLimpiar=document.getElementById("limpiar");
	botonLimpiar.onclick=limpiarFormulario;
	var botonEnviar=document.getElementById("enviar");
	botonEnviar.onclick=validarFormulario;
}
