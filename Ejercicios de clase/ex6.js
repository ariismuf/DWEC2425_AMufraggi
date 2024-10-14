let dias = prompt("Indique el dia de la semana con la inicial\n (L,M,X,J,V,S,D)");

switch(dias) {
    case "L":
        alert("Horario del Lunes: \n 9:00 -- 21:00");
        break;
    case "M":
        alert("Horario del Martes: \n 10:00 -- 21:00");
        break;
    case "X":
        alert("Horario del Miercoles: \n 10:00 -- 17:00");
        break;
    case "J":
        alert("Horario del Jueves: \n CERRADO");
        break;
    case "V":
        alert("Horario del Viernes: \n 13:00 -- 21:00");
        break;
    case "S":
        alert("Horario del Sabado: \n 8:00 -- 14:00");
        break;
    case "D":
        alert("Horario del Domingo: \n CERRADO");
        break;
    default:
        alert("ERROR");
}