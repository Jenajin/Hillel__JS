// функція видаляє елемент із масиву знаходячи цей елемент по індексу
let array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, indexItem) {
    array.splice(indexItem, 1);
}
removeElement(array, 4);
console.log(array);


// функція видаляє елемент із масиву знаходячи цей елемент по назві
let array2 = [1, 2, 3, 4, 5, 6, 7, 'дракон'];
function removeElement2(array, nameItem) {
    let nevArr = [];
    for (i = 0; i <= array.length - 1; i++) {
        if (array[i] !== nameItem) {
            nevArr.push(array[i])
        }
    }
    return nevArr;
}
console.log(removeElement2(array2, 'дракон'));