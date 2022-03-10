(function () {
    // Declaro las variables necesarias
    var lista = document.getElementById("lista");
    var tfAgregar = document.getElementById("tareaInput");
    var btAgregar = document.getElementById("btn-agregar");

    btAgregar.addEventListener("click", anyadeElemento);
    tfAgregar.addEventListener("focus", cambiaFormato)
    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", borraElemento);
    }

    function anyadeElemento() {
        if (tfAgregar.value == 0) {
            tfAgregar.setAttribute("placeholder", "Agrega una nueva tarea válida");
            tfAgregar.className = "error";
        } else {
            var textoElemento = document.createTextNode(tfAgregar.value);
            var listaElemento = document.createElement("li");
            var enlaceElemento = document.createElement("a");

            enlaceElemento.appendChild(textoElemento);
            enlaceElemento.setAttribute("href", "#");

            listaElemento.appendChild(enlaceElemento);
            lista.appendChild(listaElemento);

            for (var i = 0; i <= lista.children.length - 1; i++) {
                lista.children[i].addEventListener("click", borraElemento);
            }
        }
    }

    function cambiaFormato() {
        tfAgregar.className = "";
    }

    function borraElemento() {
        this.parentNode.removeChild(this);
    }


}());