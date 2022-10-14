var botonEncriptar = document.querySelector("#boton-encriptar");
var botonDesencriptar = document.querySelector("#boton-desencriptar");

var botonCopiar = document.querySelector(".copiar")

botonEncriptar.onclick = encriptarTexto;
botonDesencriptar.onclick = desencriptarTexto;
botonCopiar.onclick = copiarTexto;

function conseguirTexto(){
    var texto = document.querySelector(".area-texto").value.toLowerCase();

        return texto

    
}

function ocultarObjetos(){
    var dibujo = document.querySelector(".munheco");
    var parrafo = document.querySelector(".parrafo");

    dibujo.classList.add("esconder")
    parrafo.classList.add("esconder")
}

function mostrarObjetos(){
    var areaFinal = document.querySelector(".area-texto-final");

    areaFinal.classList.add("mostrar");
}



function encriptarTexto(){
  
    
    ocultarObjetos();
    mostrarObjetos()
    texto = conseguirTexto();
    


    var bloqueo = bloquearCaracteres(texto)
   

    if(bloqueo){
        alert("No se permiten acentos")
        return;
    }
    

   


    textoCifrado = texto.replace(/e/ig,"enter");
    textoCifrado = textoCifrado.replace(/o/ig,"ober");
    textoCifrado = textoCifrado.replace(/i/ig,"imes");
    textoCifrado = textoCifrado.replace(/a/ig,"ai");
    textoCifrado = textoCifrado.replace(/u/ig,"ufat");
    
 

    var resultado = document.querySelector(".area-texto-final")

    resultado.innerHTML = textoCifrado;

    
}



function desencriptarTexto(){

    ocultarObjetos();
    mostrarObjetos()
    texto = conseguirTexto();
   
    var bloqueo = bloquearCaracteres(texto)

    if(bloqueo){
        alert("No se permiten acentos")
        return;
    }
    
    

    textoCifrado = texto.replace(/enter/ig,"e");
    textoCifrado = textoCifrado.replace(/ober/ig,"o");
    textoCifrado = textoCifrado.replace(/imes/ig,"i");
    textoCifrado = textoCifrado.replace(/ai/ig,"a");
    textoCifrado = textoCifrado.replace(/ufat/ig,"u");




    var resultado = document.querySelector(".area-texto-final")

    resultado.innerHTML = textoCifrado;
}


function  copiarTexto(){
    
    var contenido = document.querySelector(".area-texto-final").textContent;
    
    
    var entrada = document.createElement("input");

    entrada.value = contenido;

    document.body.appendChild(entrada);

    entrada.select();
    document.execCommand("copy");
    document.body.removeChild(entrada);
    swal("Texto copiado","","success")
 
 }

 function bloquearCaracteres(cadena){
    var textoProhibido = /[àáâåäêëèéïîìíôöòóûùú]/ig;
    var textoRecuperado = cadena
  
    if (textoProhibido.test(textoRecuperado)){
        return true;
        
    }



 }



