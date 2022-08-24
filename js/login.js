const mostrar = document.getElementById("Mostrarmensaje1");
const mail = document.getElementById("Vmail");
const password = document.getElementById("Vpassword");
const mostrar2 = document.getElementById("Mostrarmensaje2")

document.querySelector("#btningreso").addEventListener("click",validacionmail)//evento click
document.querySelector("#btningreso").addEventListener("click",validacionpassword)


    
    function validacionmail(){
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; //expresion regular para validar email//
    var mensaje = "Ingresa tu e-mail";
    if( validEmail.test(mail.value)){
		return true;
 }else 
	   mostrar.innerHTML +=  mensaje ; // para mostrar el mensaje en html //
       mostrar.style.color="red"; 
    return false;
        
    } 
	
    function validacionpassword(){
    var Validpassword= /^.{1,12}$/ ; //expresion regular para validar contraseñas de 1 a 12 caracteres//
    var mensaje2= "Ingrese contraseña"
    if(Validpassword.test(password.value)){
        return true;
    }else
        mostrar2.innerHTML += mensaje2;
        mostrar2.style.color="red"
        return false;

 }

 

