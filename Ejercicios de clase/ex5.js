let nombre, edad, franja;
nombre = prompt("indique su nombre: ");
edad = prompt("indique su edad: ");
if (edad <=12){
franja  = "niño";
}else if(edad >=13 && edad <=17){
    franja = "adolescente";
} else if (edad >=18 && edad <=64){
    franja = "trabajador";
}else{
    franja = "jubilado";
}
alert(nombre + " tiene " + edad + " años y esta echo todo un " + franja );