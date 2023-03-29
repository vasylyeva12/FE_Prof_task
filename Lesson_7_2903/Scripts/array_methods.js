// .sort() - сортирует элементы массива (как числа, так и строки), мутирует исходный массив (!)

const numbers = [33, 1, 7, 3, 56];

numbers.sort(); // [1, 3, 33, 56, 7]
numbers.sort((a, b) => a - b); // [1, 3, 7, 33, 56]
numbers.sort((a, b) => b - a); // [56, 33, 7, 3, 1]

const names = ['Anna', 'Ivan', 'Anton', 'Pavel'];

names.sort((a, b) => a.localeCompare(b)); // ['Anna', 'Anton', 'Ivan', 'Pavel']
names.sort((a, b) => b.localeCompare(a)); //  ['Pavel', 'Ivan', 'Anton', 'Anna']

// Создать новый массив
const nums = [5, 32, 334, 25, 58, 85];

const nums_map = nums.map(el =>el).sort((a,b) => a-b) 
const nums_slice = nums.slice().sort((a,b) => a - b)
const nums_spread = [...nums].sort((a,b) => a - b) 


console.log(nums);
console.log(nums_map);
console.log(nums_slice);
console.log(nums_spread);

// .reduce() - возвращает аккумулирующее значение.

const sum = nums.reduce((acc, el) => acc + el, 0) //0 - указываем значение, с какого начинается отсчет. На примере с циклом, асс - это место, где аккумулируется сумма (let sum = 0, el - это как [i], перебирает все числа в массиве)

console.log(sum);

// spread оператор - раскладывает массив на элементы

console.log(...nums); //5 32 334 25 58 85
