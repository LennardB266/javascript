//scope global
var nombre="jairo"

function saludo(){
    console.log(`dentro de la funcion ${nombre}`);
    var apellido="gomez"
    return 0;
}
console.log(saludo());
console.log(`fuera de la funcion ${nombre}`);

//scope local
var nombre1="miguel"

function saludo(){
    var apellido1="gomez"
    console.log(`dentro de la funcion ${apellido1}`);
    return 0;

}
console.log(saludo());
console.log(`fuera de la funcion ${apellido1}`);