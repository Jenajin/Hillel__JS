let array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    item--;
    array.splice(item, 1);
}

removeElement(array, 5);
console.log(array);