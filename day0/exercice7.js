/*Basic Calculator */
let number1 = 11;
let number2 = 4;
let operator = "+";
switch (operator) {
case ("+"):
console.log (number1 + number2);
break;

case ("-"):
console.log (number1 - number2);
break;

case ("/"):
if (number2 === 0) {
    console.log("divise not allowed");
} else {
    console.log(number1 / number2);
}   
break;
default:
console.log("Entrer an operator");
break;
}

