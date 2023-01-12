let nameAction = prompt('Що ви хочете зробити?', 'dev, sub, mult, div');
let number1 = prompt('Введіть перше число');
let number2 = prompt('Введіть дрге число число');

if (nameAction == 'dev' || nameAction == '-') {
    alert(Number(number1) - Number(number2));
} else if (nameAction == 'sub' || nameAction == '+') {
    alert(Number(number1) + Number(number2));
} if (nameAction == 'mult' || nameAction == '*') {
    alert(Number(number1) * Number(number2));
} else if (nameAction == 'div' || nameAction == '/') {
    alert(Number(number1) / Number(number2));
} 
