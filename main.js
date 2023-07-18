//ejercicio 1
console.log("---------------Punto 1");
const numero = (num1) =>{
    if (num1%2 == 0) {
        console.log("El numero " + num1 + " es numero par");
    }else {
        console.log("el numero " + num1 + " es numero impar");
    }
}
numero (4);

//ejercicio 2
console.log("---------------Punto 2");
const mayoromenor = (num1 , num2) =>{
if (num1>num2) {
    console.log(num1 + " es mayor que " + num2);
}else if (num2>num1) {
    console.log(num2 + " es mayor que " + num1);
} else {
    console.log("Los numeros son iguales");
}
}
mayoromenor (20,50);

//ejercicio 3
console.log("---------------Punto 3");
const numero1 = (num1) =>{
    if (num1%5 == 0) {
        console.log("El numero " + num1 + " es multiplo de 5");
    }else {
        console.log("el numero " + num1 + " no es multiplo de 5");
    }
}
numero1 (17);

//ejercicio 4
console.log("---------------Punto 4");
const tabla = (num1) => {
    for (let i = 0; i <= num1 ; i++){
        console.log("Los numeros antes de " + num1 + " son los siguientes: " + i);
    }
}
tabla(8);

//ejercicio 5
console.log("---------------Punto 5");
const tabla1 = (num1, palabra) => {
    for (let i = 0; i <= num1 ; i++){
        console.log(palabra);
    }
}
tabla1(8, "elias");

//ejercicio 6
console.log("---------------Punto 6");
const vector = (array=[1,2,3,4,5]) =>{
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
        
    }
}
vector();

//ejercicio 7
console.log("---------------Punto 7");
const vector1 = (array=[1,2,3,4,11,6,7,8,9,10]) =>{
    for (let index = 0; index < array.length; index++) {
        if (index==5){
            continue;
        }
        const element = array[index];
        console.log(element);
    }
}
vector1();

//ejercicio 8
console.log("---------------Punto 8");
const vector2 = (num1,array=[1,2,3,4,5]) =>{
    for (let i=0 ; i<array.length; i ++){
    console.log("El numero del array es el numero " + array[i] + " y multiplicado por " + num1 + " es igual a " + array[i]*num1);
    }
    }
    vector2(6);