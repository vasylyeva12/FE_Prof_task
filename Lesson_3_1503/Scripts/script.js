// Напишите цикл, который выводит в консоль все простые числа от 2 до 100


for (let index = 2; index <= 100; index++) {
    let isPrime = true //создаем переменную и присваиваем ей  true
    
    // Проверка, является ли число простым
for (let j = 2; j < index; j++) {
    if (index % j ===0) {
     isPrime = false
     break   
    }
   }
// Если число простое, выводим его в консоль

if (isPrime) {
    console.log(index);    
}  
   
}

// Напишите цикл, который находит среднее арифметическое всех чисел в массиве

const numbers = [1, 2, 3, 4, 5]
let sum = 0;

for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];    
}
let avg = sum / numbers.length
// console.log(sum);

// Напишите цикл, который выводит в консоль таблицу умножения на 5.

for (let index = 0; index <= 10; index++) {
   let result = index * 5;
//    console.log(`${index} *5 = ${result}`);
    
}
// напишите цикл, который переворачивает порядок элементов в массиве
const array = ['hello', 5, 'hi', 65, false];
const array_reverse = [];

for (let index = array.length - 1; index >= 0; index--) {
  array_reverse.push(array[index])  
    
}
// console.log(array_reverse);
// Напишите цикл , который находит сумму элементов массива, кратных 3 или 5

const nums = [2, 5, 9, 12, 17, 25, 28, 32, 56, 55, 93]
let sum_nums = 0;
for (let index = 0; index < nums.length; index++) {
    if (nums[index] % 3 ===0 || nums[index] % 5 === 0) {
      sum_nums +=  nums[index]
    }  
    
}
// console.log(sum_nums);

