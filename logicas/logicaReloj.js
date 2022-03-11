/*var tfSegundos = document.getElementById("segundos");
var tfMinutos = document.getElementById("minutos");
var fechaGlobal = new Date();
var contSegundos = 59;*/

//setInterval(contadorSegundos,1000);

// Creo intervalo que actualiza segundos
/*function contadorSegundos() {
    if (contSegundos == 60) {
        contSegundos = 0;
        tfSegundos.textContent=document.createTextNode("00").textContent;
        sumaMinuto();
    }
    tfSegundos.textContent=document.createTextNode(contSegundos).textContent;
    contSegundos++;
}

function sumaMinuto() {
    var nuevoMinuto = tfMinutos.textContent+1;
    tfMinutos.textContent+=1; 
}*/


(function () {
    function actualizaHora() {
        console.log("Hola");
        actualizaHora();
    }
}())

