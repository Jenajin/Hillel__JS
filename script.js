// ЗАВДАННЯ 1. Дано масив з елементами різних типів. Створити функцію яка вираховує 
// середнє арифметичне лише числових елементів даного масиву.

let arrFull = [1, 3, 4, 'місяць', 'день', true, false, 0, 7, , , 96, undefined];

function arithmeticMean(array) {
  let arrNev = [];
  array.forEach(el => {
    if (typeof el === 'number') {
      arrNev.push(el)
    }

  });
  let arrSum = arrNev.reduce((acummulator, item) => acummulator + item)
  return arrSum / arrNev.length;
}

const result = arithmeticMean(arrFull)
console.log(result)


// ЗАВДАННЯ 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, 
// вказаної в змінній znak. Обидва числа і знак виходять від користувача.

function askOne(questionNum) {
  const x = prompt(questionNum);
  if(isNaN(x)) {
    return askOne(`Це не число. Попробуйте ще раз.`)
  } 
  return x
}
const x = askOne(('Введіть перше число'));
console.log(x)

function action(question) {
  let znak = prompt(question);
  let result = (znak === '+' || znak === '-' || znak === '*' || znak === '/'
    || znak === '%' || znak === '^') ? znak : action(`Вибрана недопустима дія. Попробуйте ще раз.`);
  return result;
}
const znak = action(('Виберіть дію'));
console.log(znak)

function askTwo(questionNum) {
  const y = prompt(questionNum);
  if(isNaN(y)) {
    return askTwo(`Це не число. Попробуйте ще раз.`)
  } 
  return y
}
const y = askTwo(('Введіть друге число'));
console.log(y)

function doMath(x, znak, y) {
  if (znak === '+') {
    return Number(x) + Number(y)
  } else if (znak === '-') {
    return Number(x) - Number(y)
  } else if (znak === '*') {
    return Number(x) * Number(y)
  } else if (znak === '/') {
    return Number(x) / Number(y)
  } else if (znak === '^') {
    return Number(x) ** Number(y)
  } else if (znak === '%') {
    return Number(x) % Number(y)
  } else if (typeof x === 'string') {
    doMath(x, znak, y)
  }
}

let resultCalc = doMath(x, znak, y)
prompt(`Результат:`, resultCalc)


/// ЗАВДАННЯ 3. Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. 
// Значення всіх елементів всіх масивів задає користувач.

function filling(question) {
  let questionBaseLength = prompt(question)
  if (isNaN(questionBaseLength)) {
    return filling('Будь ласка, введіть число')
  }
  const arrBase = new Array(Number(questionBaseLength))

  let arTime = [];
  function sum(questionTwo) {
    let questionOneFill = prompt(questionTwo)
    arTime.push(questionOneFill)

    if (arTime.length === arrBase.length) {
      return arTime
    } else {
      sum(questionTwo)
    }
  }
  sum('Введіть значення для головного масиву')
  for (i = 0; i < arrBase.length; i++) {
    arrBase[i] = arTime[i]
  }

  function nestedArrOne(questionOne) {
    let questionOneLength = prompt(questionOne)
    if (isNaN(questionOneLength)) {
      return nestedArrOne('Будь ласка, введіть число')
    }
    let questionOneFill = prompt('Введіть одне значення для першого вложеного масиву')
    const arrOne = new Array(Number(questionOneLength))
    return arrOne.fill(questionOneFill)
  }
  let resultNestedArrOne = nestedArrOne('Введіть довжину першого вложеного масиву')
  arrBase.push(resultNestedArrOne)

  function nestedArrTwo(questionTwo) {
    let questionTwoLength = prompt(questionTwo)
    if (isNaN(questionTwoLength)) {
      return nestedArrTwo('Будь ласка, введіть число')
    }
    let questionTwoFill = prompt('Введіть одне значення для другого вложеного масиву')
    const arrTwo = new Array(Number(questionTwoLength))
    return arrTwo.fill(questionTwoFill)
  }
  let resultNestedArrTwo = nestedArrTwo('Введіть довжину другого вложеного масиву')
  arrBase.push(resultNestedArrTwo)

  return arrBase
}

let resultFill = filling('Введіть довжину для головного масиву')
console.log(resultFill)


// ЗАВДАННЯ 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function deleteLetters() {
  let str = prompt('Введіть речення', 'hello world');
  let sym = prompt('Введіть букви для видалення', '   l,    d   ');

  function deleteEl(str, sym) {
    let nevArrStr = [];
    for (i = 0; i < str.length; i++) {
      nevArrStr.push(str[i])
    }

    let nevArrSym = [];
    for (i = 0; i < sym.length; i++) {
      nevArrSym.push(sym[i].trim())
    }

    let result = nevArrStr.filter((el) => !nevArrSym.includes(el))
    return alert(result.join(''))
  }

  return deleteEl(str, sym)
}

deleteLetters()

