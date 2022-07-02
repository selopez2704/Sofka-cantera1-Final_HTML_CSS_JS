const main = () => {
    console.log("hola")
}

const validar = () => {
    let element1=document.getElementById("nombre");
    let element2=document.getElementById("correo");
    let element3=document.getElementById("asunto");
    let element4=document.getElementById("mensaje");
    if(element1.value!="" & element2.value!="" & element3.value!="" & element4.value!=""){
        imprimir(element1,element2,element3,element4);
    }else{
        alert("Por favor ingrese todos los datos antes de enviar el formulario")
    }
}
const imprimir = (element1,element2,element3,element4) => {
    console.log("El nombre ingresado es: "+element1.value);
    console.log("El correo ingresado es: "+element2.value);
    console.log("El asunto ingresado es: "+element3.value);
    console.log("El mensaje ingresado es: "+element4.value);
}
const limpiar = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("asunto").value = "";
    document.getElementById("mensaje").value = "";
}
const cambiarTema1 = () => {
    let element = document.getElementById("listaFrutas");
    let i;
    for (i=0;i<element.childElementCount;i++){
        if((i+1)%2==0){
            if(element.children[i].classList[0]=="tema-dos"){
                element.children[i].className = "";
                element.children[i].classList.add("tema-default")
            }else{
                element.children[i].className = "";
                element.children[i].classList.add("tema-dos")
            }
        }
    }
}
const cambiarTema2 = () => {
    let element = document.getElementById("listaFrutas");
    let i;
    for (i=0;i<element.childElementCount;i++){
        if((i+1)%2!=0){
            if(element.children[i].classList[0]=="tema-uno"){
                element.children[i].className = "";
                element.children[i].classList.add("tema-default")
            }else{
                element.children[i].className = "";
                element.children[i].classList.add("tema-uno")
            }
        }
    }
}
   
