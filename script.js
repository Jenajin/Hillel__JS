// ЗАВДАННЯ. Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).

function degreeСomp(num, degree) {
    if (degree == 1) {
        return num;
    } else {
        return num * degreeСomp(num, degree - 1);
    }
}
console.log(degreeСomp(5, 2))