// Перша частина домашньої роботи

let age = prompt('Вкажіть Ваш рік народження');
let city = prompt('В якому місті ви живете?');
let sport = prompt('Який Ваш улюблений вид спорту?');

let capital = ['Київ', 'Лондон', 'Париж']

if (city === capital[0] || city === capital[1] || city === capital[2]) {
    alert(`${age}. Ти живеш у столиці ${city}`);
} else {
    alert(`${age}. Ти живеш у місті ${city}`);
}


// Друга частина домашньої роботи

let ageTwo = prompt('Вкажіть Ваш рік народження');
if (ageTwo === null) {
    alert('Шкода що Ви не ввели свій рік народження');
}

let userTwo = prompt('Як вас звати?');
if (userTwo === null) {
    alert('Шкода що Ви не ввели своє ім`я');
}

let sportTwo = prompt('Який Ваш улюблений вид спорту?');
if (sportTwo === null) {
    alert('Шкода що Ви не ввели свій улюблений вид спорту');
}

switch (userTwo) {
    case 'Андрій':
    case 'Артур':
    case 'Вітя':
        if (sportTwo === 'бокс' || sportTwo === 'футбол' || sportTwo === 'хокей') {
            alert(`Круто! Хочеш стати чемпіоном ${userTwo}?`)
        };
        break;
    default:
        alert('Маємо надію, що найближчим часом ви станете чемпіоном!');
}



