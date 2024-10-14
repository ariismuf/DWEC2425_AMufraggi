var flag = true;
var numero;
var dni = [];
const letras = "TRWAGMYFPDXBNJZSQVHLCKE"
while (flag != false) {
     numero = prompt("Introduce el numero de tu deni");
    if (numero.length != 8 && numero != -1) {
        alert("El numero es incorrecto.");
    } else if (numero == -1) {
        flag = false
        for (let i = 0; i < dni.length; i++) {
            var pos = dni[i] % 23 ;
            console.log(dni[i] + letras.charAt(pos));
        }
        alert("hay un total de " + dni.length + " DNI")
    }else{
        dni.push(numero);
    }


}