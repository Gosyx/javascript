// alert("Bienvenidos coderhouse");
/*lets*/
// let emotes;
// let insignia;
// let paneles;
// let banners;
// // Asignacion
// emotes = 8;
// insignia = 5;
// paneles = 8;
// banners = 10;
// // Operaciones
// suma = emotes + insignia + paneles + banners;
// // Console.log
// console.log(emotes);
// console.log(insignia);
// console.log(paneles);
// console.log(banners);
// console.log(suma);

// //if else if else
// let precio = 160;

// if (precio <= 150) {
//   console.log("Es menor o igual a 150");
// } else if (precio <= 160) {
//   console.log("Es menor o igual a 160");
// } else if (precio <= 170) {
//   console.log("Es menor o igual a 170");
// } else {
//   console.log("Es mayor");
// }

/*Probando pass*/
// let nombreingreso = prompt("ingresa tu nombre");
// let passingreso = prompt("ingresa tu password");

// let pass = "123";
// let nom = "Hanasita";

// if (nombreingreso === nom && passingreso === pass) {
//   console.log("bienvenid@" + nombreingreso);
// } else {
//   console.log("Error de ingreso");
// }
/*CICLOS IMPLEMENTADOS CON FOR */
// for (let i = 1; i <= 4; i++) {
//   console.log(`interaccion ${i}`);
// }
// console.log("Fin del ciclo");

/*CICLOS AL REVES*/

// for (let i = 1; i <= 4; i++) {
//   console.log(`Empieza interaccion ${i}`);
//   for (let j = 0; j < 4; j++) {
//     console.log(j);
//   }
// }
// console.log("Fin del ciclo");

/*Prueba de carrito*/

const items = [
  { nombre: "emotes", precio: 8 },
  { nombre: "insignia", precio: 5 },
  { nombre: "paneles", precio: 8 },
  { nombre: "banner u overlay", precio: 10 },
];
let carrito = [];

let seleccion = prompt("Hola desea agregar algun item si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("Por favor ingresa si o no");
  seleccion = prompt("Hola desea comprar un item si o no");
}

if (seleccion == "si") {
  alert("A continuacion la lista de items");
  let todoslositems = items.map((items) => items.nombre + " " + items.precio + "$");
  alert(todoslositems.join(" - "));
} else if (seleccion == "no") {
  alert("Gracias por venir, hasta pronto!");
}
