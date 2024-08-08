//Comentarios      
console.log('Hola consola');

let nombre ="Kim";
const pi= 3.14;

//objetos, json
//persona: nombre, apellido. edad

let persona= {nombre : 'kim', apellido : 'alt', edad : 20};

console.log(persona);

// arrays coleccion
let personas= [{nombre : 'kim', apellido : 'alt', edad : 20}, 
{nombre : 'kim', apellido : 'alt', edad : 20}, 
{nombre : 'kim', apellido : 'alt', edad : 20}];

console.log(personas[0]);

//funcion, listado de instrucciones
function suma(params){
    return 2+2;
}

let resultado= suma();
console-log(resultado);


// Operadores aritmeticos
let datoA = 10;
let datoB = 5;

// suma
let suma = datoA + datoB;
// resta
let resta = datoA - datoB;
// multiplicación 
let multip = datoA * datoB;
// división
let div = datoA / datoB;
// Modulo o residuo
let residuo = datoA % datoB;
// incremento
let incremento = datoA;
incremento++;
// decremento 
let decremento = datoA;
decremento --;
// *******************************
// operadores relacionales
// mayor que >
let mayorQue = datoA > datoB;
// menor que <
let menorQue = datoB < datoB;
// mayor o igual >=
let menorIgual = datoB <= datoB;
// igual que == 
let igual = datoA == datoB;
// diferente de !=
let diferenteDe = datoA != datoB;
// *********************************
// Operadores lógicos
// y &&
let and = (datoA < 10 && datoB > 10);
// or ||
let or = (datoA > 10 || datoB > 10);
// not !
let not= !(datoA < 10);
// ////////////////////////////////////
// Operadores de asignacion
// Asignación simple =
let dato1 = 60;
// summar y asignar +=
let masigual = 10;
masigual += datoA;
// Menos igual -=
let menosIgual= 10;
menosIgual -= datoB;
