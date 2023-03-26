// ДЗ (for и forEach)
// 1. Дан массив с числами. Вычислить сумму элементов массива

const numbers = [4, 6, 7, 15, 65, 43, 87, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
   
}

let sum2 = 0;
numbers.forEach(el => sum2 += el);

console.log(sum2);

// 2. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, длина которых больше 7 символов

const strings = ['hello', 'apple', 'orange', 'Good morgin', 'danke', 'duck', 'dinosaure'];

const long_strings = [];
strings.forEach(el => el.length > 7 ? long_strings.push(el) : '');

console.log(long_strings);

// 3. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, которые начинаются на букву D или d

const d_strings = [];
d_strings.forEach(el =>[0].toLowerCase() === 'd' ? d_strings.push(el): "");

console.log(d_strings);

// 4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, возведенные в 3 степень

const numbers_pow = [];
numbers.forEach(el => numbers_pow.push(el ** 3));

console.log(numbers_pow);

// 5. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, заканчивающиеся на 7

const numbers_7 = [];
numbers.forEach(el => el % 10 === 7 ? numbers_7.push(el) : '');

console.log(numbers_7);