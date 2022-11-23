function validarnombre(evt) {
    var nombre = document.getElementById("nombre").value;
    var expreg = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;

    if (expreg.test(nombre)) {
        if (nombre.length >= 4 && nombre.length <= 255) {
            return true
        } else {
            alert("longitud invalida");
        }
    } else {
        alert("nombre invalido, solo letras");
    }
}
function validardespecho(evt) {
    var despacho = document.getElementById("despacho").value;
    var expreg = /^[A-Z]+[0-9]+$/;

    if (expreg.test(despacho)) {
        if (despacho.length === 4) {
            return true
        } else {
            alert("La longitud debe ser de 4 letras");
        }

    } else {
        alert("despacho invalido, solo la primera letra pude ser A o B y los demás numeros.");
    }
}

function puesto() {
    var puesto = document.getElementById("Puesto").value;
    console.log(puesto);

    switch (puesto) {
        case "JEFE_AREA":
            return true;
            break;
        case "DIRECTOR_COMERCIAL":
            return true;
            break;
        case "JEFE_PROYECTO":
            return true;
            break;
        case "ANALISTA":
            return true;
            break;
        case "PROGRAMADOR":
            return true;
            break;
        default:
            alert("Ya valio madres");
    }
}

function validadedad(evt) {
    var edad = document.getElementById("Edad").value;
    var expreg = /^[0-9]+$/;

    if (expreg.test(edad)) {
        if (edad >= 18 && edad <= 67) {
            return true
        } else {
            alert("Edad erronea. Rando de 18 a 67");
        }

    } else {
        alert("Edad invalida. Solo numeros porfavor.");
    }
}
function valsueldo(evt) {
    var sueldo = document.getElementById("Sueldo").value;
    var expreg = /^[0-9]+$/;

    if (expreg.test(sueldo)) {
        if (sueldo >= 1000 && sueldo <= 6000) {
            return true
        } else {
            alert("Sueldo erroneo. Vas a cometer fraude fiscal :p");
        }

    } else {
        alert("Sueldo erroneo, unicamente de 1000 a 6000.");
    }
}
function retencion(evt) {
    var sueldo= document.getElementById("Sueldoo").value;
    var sueldo2=parseInt(sueldo);

    alert(sueldo2);

    if(sueldo2>=1000 && sueldo2<2000){
        sueldo2=sueldo2+sueldo2*0.08;
        alert(sueldo2);
    }else{
        if(sueldo2>=2000  && sueldo2<3000){
            sueldo2=sueldo2+sueldo2*0.095;
            alert(sueldo2);
        }else{
            if(sueldo2>=3000 && sueldo2<4000){
                sueldo2=sueldo2+sueldo2*0.11
                alert(sueldo2);
            }else{
                if(sueldo2>=4000 && sueldo<5000){
                    sueldo2=sueldo2+sueldo2*0.125
                    alert(sueldo2);
                }else{
                    if(sueldo2>=5000 && sueldo2<6000){
                        sueldo2=sueldo2+sueldo2*0.14
                        alert(sueldo2);
                    }else{
                        alert("Wtf como llegaste aqui")
                    }
                }
            }
        }
    }
    switch (puesto) {
        case "JEFE_AREA":
            sueldo2=sueldo2+sueldo2*0.035;
            break;
        case "DIRECTOR_COMERCIAL":
            sueldo2=sueldo2+sueldo2*0.03;
            break;
        case "JEFE_PROYECTO":
            sueldo2=sueldo2+sueldo2*0.025;
            break;
        case "ANALISTA":
            sueldo2=sueldo2+sueldo2*0.02;
            break;
        case "PROGRAMADOR":
            sueldo2=sueldo2+sueldo2*0.015;
            break;
        default:
            alert("Ya valio madres");
    }
    alert("La retencion es de "+sueldo2)
}


