var op1, op2, op3, op4, op5, op6, op7, op8, op9;

op1 = 10 == 10;
op2 = 10 === 10;
op3 = 10 === 10.0;
op4 = "Laura" == "laura";
op5 = "Laura" > "laura";
op6 = "Laura" < "laura";
op7 = "123" == 123;
op8 = "123" === 123;
op9 = parseInt("123") === 123;

window.alert("la operación 10 == 10 es " + op1);
window.alert("la operación 10 === 10 es " + op2);
window.alert("la operación 10 === 10.0 es " + op3);
window.alert("la operación \"Laura\" == \"laura\" es " + op4);
window.alert("la operación \"Laura\" > \"laura\" es " + op5);
window.alert("la operación \"Laura\" < \"laura\" es " + op6);
window.alert("la operación \"123\" == 123 es " + op7);
window.alert("la operación \"123\" === 123 es " + op8);
window.alert("la operación es parseInt(\"123\") === 123 es " + op9);