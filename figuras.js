//CODIGO DEL CUADRADO
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}

function calcularPerimetroCuadrado(){
    const value = document.getElementById("inputCuadrado").value;
    mostarResultadoCuadrado(value)
}
function calcularAreaCuadrado(){
    const value = document.getElementById("inputCuadrado").value;
    mostarResultadoCuadrado(value)

}
function mostarResultadoCuadrado(value){
   const resutado = document.getElementById("resultCuadrado")
   resutado.innerText = value;
}
console.groupEnd();


//CODIGO DEL TRIANGULO
console.group("Triangulo");

function perimetroTriangulo(lado1,lado2, base){
    return lado1+lado2+base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

function calcularPerimetroTriangulo(){
    const lado1 = parseInt(document.getElementById("inputLado1Triangulo").value);
    const lado2 = parseInt(document.getElementById("inputLado2Triangulo").value);
    const base = parseInt(document.getElementById("inputBaseTriangulo").value);
    mostarResultadoTriangulo(perimetroTriangulo(lado1,lado2,base))

}

function calcularAreaTriangulo(){
    const base = document.getElementById("inputBaseTriangulo").value;
    const altura = document.getElementById("inputAlturaTriangulo").value;
    mostarResultadoTriangulo(areaTriangulo(base,altura));
}
function mostarResultadoTriangulo(value){
    const resutado = document.getElementById("resultTriangulo")
    resutado.innerText = value;
 }
console.groupEnd();

//CODIGO DEL CIRCULO
console.group("Circulo");

const PI = Math.PI;
function diametroCirculo(radio){
    return radio*2;
}
function perimetroCirculo(radio){
    return diametroCirculo(radio)*PI;
}
function areaCirculo(radio){
    return PI*(radio*radio);
}

function calcularDiametroCirculo(){
    const value = document.getElementById("inputCirculo").value;
    mostarResultadoCirculo(diametroCirculo(value));
}
function calcularPerimetroCirculo(){
    const value = document.getElementById("inputCirculo").value;
    mostarResultadoCirculo(perimetroCirculo(value));
}
function calcularAreaCirculo(){
    const value = document.getElementById("inputCirculo").value;
    mostarResultadoCirculo(areaCirculo(value));
}
function mostarResultadoCirculo(value){
    const resutado = document.getElementById("resultCirculo")
    resutado.innerText = value;
 }
console.groupEnd
