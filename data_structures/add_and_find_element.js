let array = [2, 3, 4, 5, 6, 7]
console.log(array);

let toAddFirst = 1;
let toAddLast = 8;
let newArray = [toAddFirst, ...array, toAddLast];
console.log(newArray);
let findElement = 5;

console.log(newArray.includes(findElement));