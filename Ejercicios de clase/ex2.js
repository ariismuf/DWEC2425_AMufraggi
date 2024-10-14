let nombreUsuario = prompt("Indique el nombre de usuario: ");
let abandonar = confirm("quieres abandonar el programa, " + nombreUsuario + "?");
if (abandonar) {
    alert("has abandonado el programa");
} else {
    alert("Sigues en el programa");
}
console.log("%cFin del programa", "font-weight: bold; text-decoration: underline; color: blue;");