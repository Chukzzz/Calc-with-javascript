var operation = window.prompt('Which operation would you like to carry out\n+, -, *, / : ')

// let num1 = windo.prompt('Input first number: ')

// let num2 = window.prompt('Input second number: ')

// let Num1 = parseFloat(num1)
// let Num2 = parseFloat(num2)

var num1 = window.prompt("Input first number: ");
var num2 = window.prompt("Input second number: ");

num1 = parseInt(num1);
num2 = parseInt(num2);


if (operation == '+') {
    alert('Sum = ' + (num1 + num2))
}
else if (operation == '-') {
    alert('Subtraction = ' + (num1 - num2))
}
else if (operation == '*') {
    alert('Multiplication = ' + (num1 * num2))
}
else if (operation == '/') {
    alert('Division = ' + (num1 / num2))
}
else {
    alert('Invalid input, pls retry...')
}