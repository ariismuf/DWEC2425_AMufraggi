var letraCorrecta = "s";
var intento = prompt("Inenta adivinar la letra: ");
var oportunidades = 10
while (intento !=letraCorrecta && oportunidades != 0) {
    console.log("HAS FALLADO CON LA LETRA " + intento);
    intento = prompt("Intenta adivinar la letra: ");
    oportunidades --;
    console.log("te quedan " + oportunidades + " oportunidades");

}
if (oportunidades > 0) {
    console.log("HAS ACERTADO CON LA LETRA " + intento);
}else {
    console.log("No te quedan oportunidades")
}