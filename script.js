let fruit = prompt("Які фрукти купити?", "apple");

let bag = {
  [fruit]: 5, // назву властивості взято зі змінної fruit
};

alert( bag.apple ); // 5 якщо fruit="apple"