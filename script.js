let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// ЗАВДАННЯ 1. Знайти суму та кількість позитивних елементів.
let positiveElements = arr.filter((el) => {
  if (el > 0) {
    return el;
  }
})
let sumPositiveElements = positiveElements.reduce((acummulator, item) => acummulator + item);
console.log(`Сума позитивних елементів =`, sumPositiveElements, 'кількість позитивних елементів =', positiveElements.length);


// ЗАВДАННЯ 2. Знайти мінімальний елемент масиву та його порядковий номер.
let minElementArr = arr[0];
let i = 0;
while (i < arr.length) {
  if (minElementArr > arr[i]) {
    minElementArr = arr[i]
  }
  i++;
}
console.log(`Мінімальний елемент масиву =`, minElementArr, `його порядковий номер =`, arr.indexOf(minElementArr++) + 1);


// ЗАВДАННЯ 3. Знайти максимальний елемент масиву та його порядковий номер.
// знаходимо максимальний елемент масиву
let maxElementArr = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (maxElementArr < arr[i]) {
    maxElementArr = arr[i]
  }
}
// знаходимо його порядковий номер // звернути увагу що числа у масиві повторюються 
let numb = arr.findIndex((el, index) => {
  if (maxElementArr === el) {
    console.log(`Максимальний елемент масиву =`, maxElementArr, `його порядковий номер =`, ++index,);
  }
})


// ЗАВДАННЯ 4. Визначити кількість негативних елементів.
let negativeElementArr = arr.filter((el) => {
  if (el < 0) {
    return el;
  }
})
console.log(`Кількість негативних елементів`, negativeElementArr.length);


// ЗАВДАННЯ 5. Знайти кількість повторюваних позитивних елементів.
let repeatPositiveElement = arr.filter((el, index, selfArr) => {
  if(el > 0) {
    return selfArr.indexOf(el) !== index;
  }
})
console.log(`Кількість повторюваних позитивних елементів`, repeatPositiveElement.length)


// ЗАВДАННЯ 6. Знайти кількість унікальних позитивних елементів.
let uniquePositiveElement = arr.filter((el, index) => {
  if (el > 0) {
    return arr.indexOf(el) === index
  }
})
console.log(`Кількість унікальних позитивних елементів`, uniquePositiveElement.length)

// ЗАВДАННЯ 7. Знайти суму повторюваних позитивних елементів.
let sumRepeatPositiveElement = repeatPositiveElement.reduce((acummulator, item) => acummulator + item);
console.log(`Cума повторюваних позитивних елементів =`, sumRepeatPositiveElement);


// ЗАВДАННЯ 8. Знайти суму унікальних позитивних елементів.
let sumUniquePositiveElement = uniquePositiveElement.reduce((acummulator, item) => acummulator + item);
console.log(`Cума унікальних позитивних елементів =`, sumUniquePositiveElement);


// ЗАВДАННЯ 9. Знайти добуток позитивних елементів.
// перший спосіб вирішення
let productPositiveElement = positiveElements.reduce((acummulator, item) => acummulator * item);
console.log(`Добуток позитивних елементів`, productPositiveElement);

// другий спосіб вирішення
let productCycle = 1;
for (let i = 0; i < positiveElements.length; i++) {
  productCycle = productCycle * positiveElements[i]; // або  productCycle *= positiveEl[i];
}
console.log(`Добуток позитивних елементів`, productCycle);


// ЗАВДАННЯ 10. Знайти найбільший серед елементів масиву, остальні обнулити.
// знаходимо найбільший елемент серед масиву
let maxNumberArr = arr[0];
arr.forEach((el) => {
  if (maxNumberArr < el) {
    maxNumberArr = el
  }
})

// обнуляємо елементи окрім найбільшого
let arrNev = arr.map((el) => {
  if (arr.indexOf(el) === 18) { // 18 індекс найбільшого числа
    return maxNumberArr;
  } else {
    return 0;
  }
})
console.log(arrNev)

// або

let arrNull = [];
arr.forEach((el) => {
  if (arr.indexOf(el) !== 18) { // 18 індекс найбільшого числа
    arrNull.push(0)
  } else {
    arrNull.push(maxNumberArr)
  }
})
console.log(arrNull)

// або

let arrTr = arr.splice(0, 18) && arr.splice(1, 6); // можна через splice добавити нулі замість вирізаних;
arr.unshift(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,);
arr.push(0, 0, 0, 0, 0,);
console.log(arr);



