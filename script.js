const minus = '-';
const plus = '+';
const mnozhennya = '*';
const dilennya = '/';

let nameAction = prompt('Що ви хочете зробити?', 'dev, sub, mult, div');

let number1 = prompt('Введіть перше число');
let number2 = prompt('Введіть дрге число число');

if (nameAction == 'dev') {
    alert(Number(number1) - Number(number2));
} else if (nameAction == minus) {
    alert(Number(number1) - Number(number2));
} else

if (nameAction == 'sub') {
    alert(Number(number1) + Number(number2));
} else if (nameAction == plus) {
    alert(Number(number1) + Number(number2));
} else

if (nameAction == 'mult') {
    alert(Number(number1) * Number(number2));
} else if (nameAction == mnozhennya) {
    alert(Number(number1) * Number(number2));
} else

if (nameAction == 'div' | '/') {
    alert(Number(number1) / Number(number2));
} else if (nameAction == dilennya) {
    alert(Number(number1) / Number(number2));
}  
