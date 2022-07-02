let num1 = Number(prompt("Please enter the first number"));
let num2 = Number(prompt("Please enter the second number"));

function sum(num1,num2){
    return num1 + num2;
}
console.log(`Result: ${num1} + ${num2}  = ${sum(num1,num2)}`);

function subtract(num1,num2){
    return num1 - num2;
}
console.log(`Result: ${num1} - ${num2}  = ${subtract(num1,num2)}`);

function multiply(num1,num2){
    return num1 * num2;
}
console.log(`Result: ${num1} * ${num2}  = ${multiply(num1,num2)}`);

function divide(num1,num2){
    return num1 / num2;
}
console.log(`Result: ${num1} : ${num2}  = ${divide(num1,num2)}`);


