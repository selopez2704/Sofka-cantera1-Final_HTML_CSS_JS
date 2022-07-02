

const main = () => {
    inicio();
    accordion();
    
}

const inicio = () => {
    temaActual = leerLocalstorage();
    console.log(temaActual);
    if (temaActual != "vacio") {
        cambiarTema2(temaActual);
    } else {
        guardarLocalstorage("1");
    }
}

const guardarLocalstorage = (value) => {
    console.log(value)
    localStorage.setItem("tema", value);
    console.log(localStorage.getItem("tema"));
}
const leerLocalstorage = () => {
    let result;
    if (localStorage.getItem("tema")) {
        result = localStorage.getItem("tema");
        console.log("inicio" + result);
    } else {
        console.log("localstorage vacio");
        result = "vacio";
    }
    return result;
}

const cambiarTema1 = () => {
    var tema = document.getElementById("temaSelect");
    var element = document.querySelector("#body");
    element.className = "";
    switch (tema.value) {
        case "1":
            element.classList.add("tema-blueberry");
            guardarLocalstorage(tema.value);
            break;
        case "2":
            element.classList.add("tema-strawberry");
            guardarLocalstorage(tema.value);
            break;
        case "3":
            element.classList.add("tema-mint");
            guardarLocalstorage(tema.value);
            break;
        case "4":
            element.classList.add("tema-mono");
            guardarLocalstorage(tema.value);
            break;
        default:
            console.log("f1")
    }
}

const cambiarTema2 = (tema) => {
    console.log("cambiarTEma2" + tema)
    var element = document.querySelector("#body");
    element.className = "";
    switch (tema) {
        case "1":
            element.classList.add("tema-blueberry");
            guardarLocalstorage(tema);
            break;
        case "2":
            element.classList.add("tema-strawberry");
            guardarLocalstorage(tema);
            break;
        case "3":
            element.classList.add("tema-mint");
            guardarLocalstorage(tema);
            break;
        case "4":
            element.classList.add("tema-mono");
            guardarLocalstorage(tema);
            break;
        default:
            console.log("f2")
    }
}

const accordion = () => {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}
const volverPortafolio = () => {
    var URLactual = window.location;
    let myArray = URLactual.href.split("/");
    myArray.pop();
    myArray.pop();
    string=myArray.toString();
    string=string.replaceAll(",","/")
    string=string.concat("/portafolio_taller1.html")
    console.log(string);
    window.location.replace(string);
}