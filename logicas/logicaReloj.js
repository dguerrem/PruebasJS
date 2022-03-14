var tfSegundos = document.getElementById("segundos"),
    tfMinutos = document.getElementById("minutos"),
    tfHoras = document.getElementById("horas"),
    tfFranja = document.getElementById("ampm"),
    tfDiaSemana = document.getElementById("diaSemana"),
    tfDia = document.getElementById("dia"),
    tfMes = document.getElementById("mes"),
    tfAnyo = document.getElementById("year"),

    fechaGlobal = new Date(),
    hh = fechaGlobal.getHours(),
    mm = fechaGlobal.getMinutes(),
    ss = fechaGlobal.getSeconds(),
    ds = fechaGlobal.getDay(),
    dd = fechaGlobal.getDate(),
    MM = fechaGlobal.getMonth(),
    yy = fechaGlobal.getFullYear();

setDatosIniciales();
setInterval(actualizaHora, 1000);
setInterval(actualizaFranjaHoraria, 60000);

function setDatosIniciales() {
    tfSegundos.textContent = ss;
    tfMinutos.textContent = mm;
    tfHoras.textContent = hh;

    tfDiaSemana.textContent = getNombreDia();
    tfDia.textContent = dd;
    tfMes.textContent = getNombreMes();
    tfAnyo.textContent = yy;
}

function actualizaHora() {
    fechaGlobal = new Date();
    hh = fechaGlobal.getHours();
    mm = fechaGlobal.getMinutes();
    ss = fechaGlobal.getSeconds();

    tfSegundos.textContent = ss;
    tfMinutos.textContent = mm;
    tfHoras.textContent = hh;
}

function actualizaFranjaHoraria() {
    hh = fechaGlobal.getHours();
    if (hh >= 12) {
        tfFranja.textContent = "PM";
        return;
    }

    tfFranja.textContent = "AM";
}

function getNombreMes() {
    switch (MM) {
        case 0:
            return "Enero"
        case 1:
            return "Febrero"
        case 2:
            return "Marzo"
        case 3:
            return "Abril"
        case 4:
            return "Mayo"
        case 5:
            return "Junio"
        case 6:
            return "Julio"
        case 7:
            return "Agosto"
        case 8:
            return "Septiembre"
        case 9:
            return "Octubre"
        case 10:
            return "Noviembre"
        case 11:
            return "Diciembre";
    }
}

function getNombreDia() {
    switch (ds) {
        case 0:
            return "Domingo, "
        case 1:
            return "Lunes, "
        case 2:
            return "Martes, "
        case 3:
            return "Miércoles, "
        case 4:
            return "Jueves, "
        case 5:
            return "Viernes, "
        case 6:
            return "Sábado, "
        case 7:
            return "Domingo, "
    }
}