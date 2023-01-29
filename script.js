// ЗАВДАННЯ. Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.


// функція видаляє елемент із масиву знаходячи цей елемент по індексу
let array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, indexItem) {
    if (indexItem <= array.length - 1) {     // якщо немає елемента з таким індекс повертає false
        return array.splice(indexItem, 1);
    }
}

if (removeElement(array, 6)) {
    console.log(array)
} else (
    console.log('не має')
)



// функція видаляє елемент із масиву знаходячи цей елемент по назві за умови що він є у масиві 
let array2 = [1, 2, 3, 4, 5, 6, 7, 'JS'];
function removeElement2(array, nameItem) {
    if (array.includes(nameItem)) {
        let nevArr = [];
        for (i = 0; i <= array.length - 1; i++) {
            if (array[i] !== nameItem) {
                nevArr.push(array[i])
            }
        }
        return nevArr;
    }
    else {
        return 'такого елемента не має в масиві'
    }
}
console.log(removeElement2(array2, 'др'));