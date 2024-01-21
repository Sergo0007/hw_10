// Удвоение элементов массива:

// Условие: Создайте массив чисел и используйте метод map, чтобы удвоить каждый элемент.

const numbers = [1,2,3,4,5,6,7,8];
 let multeply = numbers.map(x => x * 2);
 
console.log(multeply);

// Преобразование строк в верхний регистр:

// Условие: Создайте массив строк и используйте метод map, чтобы преобразовать все строки в верхний регистр

 const string = ["guten tag" , "damen und herren"];
 let toUpperCase = string.map(s => s.toUpperCase());
 console.log(toUpperCase);

//  Вычисление суммы элементов:

// Условие: Создайте массив чисел и используйте метод forEach, чтобы вычислить сумму всех элементов.
 const num = [3,5,8,4,6,7,9];
 let sum = 0;
 num.forEach(n => sum += n);
 console.log(sum);

//  Удаление отрицательных чисел:

// Условие: Создайте массив чисел и используйте метод filter, чтобы удалить все отрицательные числа.

const n = [-3,4,-2,5,-6];
let positive = n.filter(n => n > 0);
console.log(positive);
//
console.log("------------")
const numb = [-1 , -2, 3,4,8,-9];
let sume = 0;
numb.filter(n => n > 0).forEach(n => sume += n);
console.log(sume);

 
 