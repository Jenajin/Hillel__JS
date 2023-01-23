let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// ЗАВДАННЯ 1. Знайти суму та кількість позитивних елементів.
let positiveEl = arr.filter((el) => {
  if (el > 0) {
    return el;
  }
})

let sumPositiveEl = positiveEl.reduce((acummulator, item) => acummulator + item);
console.log(`Сума позитивних елементів = ${sumPositiveEl}, кількість позитивних елементів = ${positiveEl.length}`);


// ЗАВДАННЯ 2. Знайти мінімальний елемент масиву та його порядковий номер.
let minNumb = arr[0];
let i = 0;
while (i < arr.length) {
  if (minNumb > arr[i]) {
    minNumb = arr[i]
  }
  i++;
}
console.log(`Мінімальний елемент масиву = ${minNumb}, його порядковий номер = ${arr.indexOf(minNumb) + 1}`);


// ЗАВДАННЯ 3. Знайти максимальний елемент масиву та його порядковий номер.
let maxNumb = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (maxNumb < arr[i]) {
    maxNumb = arr[i]
  }
}
console.log(`Максимальний елемент масиву = ${maxNumb}, його порядковий номер ${arr.indexOf(maxNumb) + 1}`);


// ЗАВДАННЯ 4. Визначити кількість негативних елементів.
let negativeEl = arr.filter((el) => {
  if (el < 0) {
    return el;
  }
})
console.log(`Кількість негативних елементів = ${negativeEl.length}`);


// ЗАВДАННЯ 5. Знайти кількість непарних позитивних елементів.

// знаходимо числа які повторюються
let twinEl = arr.filter((el, index, selfArr) => {
  return selfArr.indexOf(el) !== index;
})

// відфільтровуємо з первинного масиву елементи які вкючає в себе масив twinEl (повторювані числа)
let oddEl = arr.filter((el) => !twinEl.includes(el)
)

// відфільтровуємо позитивні елементи із уже унікальних
let oddPositiveEl = oddEl.filter((el) => {
  if (el > 0) {
    return el;
  }
})
console.log(`Кількість непарних позитивних елементів = ${oddPositiveEl.length}`)


// ЗАВДАННЯ 6. Знайти кількість парних позитивних елементів.
let twinPositiveEl = twinEl.filter((el) => {
  if (el > 2) {
    return el;
  }
})
console.log(`Кількість парних позитивних елементів = ${twinPositiveEl.length}`);


// ЗАВДАННЯ 7. Знайти суму парних позитивних елементів.
let sumTwinPositiveEl = twinPositiveEl.reduce((acummulator, item) => acummulator + item);
console.log(`Cума парних позитивних елементів = ${sumTwinPositiveEl}`);


// ЗАВДАННЯ 8. Знайти суму непарних позитивних елементів.
let sumOddPositiveElEl = oddPositiveEl.reduce((acummulator, item) => acummulator + item);
console.log(`Cума непарних позитивних елементів = ${sumOddPositiveElEl}`);


// ЗАВДАННЯ 9. Знайти добуток позитивних елементів.

// перший спосіб вирішення
let product = positiveEl.reduce((acummulator, item) => acummulator * item);
console.log(product);

// другий спосіб вирішення
let productCycle = 1;
for (let i = 0; i < positiveEl.length; i++) {
  productCycle = productCycle * positiveEl[i]; // або  productCycle *= positiveEl[i];
}
console.log(productCycle);


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



