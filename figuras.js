//CODIGO DEL CUADRADO
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: "+ladoCuadrado+ "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: "+perimetroCuadrado+ "cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado es: "+areaCuadrado+ "cm2");

console.groupEnd();


//CODIGO DEL TRIANGULO
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo= 5.5;

console.log(
    "los lados del triangulo miden: "
    +ladoTriangulo1+"cm, "
    +ladoTriangulo2+"cm, "
    +baseTriangulo+"cm"
);
console.log("La altura del triangulo es: "+ alturaTriangulo+"cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del triangulo es: "+ perimetroTriangulo+ "cm")

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El area del triangulo es: "+ areaTriangulo+"cm2");

console.groupEnd();

//CODIGO DEL CIRCULO
console.group("Circulo");

//radio
const radioCirculo = 4;
console.log("El radio del circulo es: "+ radioCirculo+"cm");
//diametro
const diametroCirculo = radioCirculo*2;
console.log("El diametro del circulo es: "+ diametroCirculo+"cm");
//pi
const PI = Math.PI;
console.log("PI: "+PI);
//circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: "+ perimetroCirculo+"cm");
//area
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El area del circulo es: "+ areaCirculo+"cm2");

console.groupEnd