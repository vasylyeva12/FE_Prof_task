// .forEach() - выполняет указанную функцию один раз для каждого элемента массива, ничего не возвращает

// .map() - выполняет указанную функцию один раз для каждого элемента массива, возвращает новый массив
// .filter() - возвращает новый массив, в который попадают те элементы, которые прошли указанную проверку


// 1. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, возведенные в 3 степень

const numbers = [4, 6, 7, 15, 65, 43, 87, 5];
const numbers_pow = [];
numbers.forEach(el => numbers_pow.push(el ** 3));

const numbers_pow2 = numbers.map(el => el **3)

// console.log(numbers_pow2);

// 2. Сформировать новый массив, в который попадут все последние цифры => [4, 6, 1, 7, 9, 5, 7, 3, 7]

// .forEach()

// .map()

const numbers1 = [4, 6, 1, 17, 9, 15, 27, 43, 7];
const new_numbers = [];

numbers1.forEach(el => new_numbers.push(el % 10))

const new_numbers1 = numbers1.map(el => el % 10)
// console.log(new_numbers1);

// 3. Сформировать новый массив, в который попадут все элементы из исходного массива. Если длина элемента меньше 6 (<), то добавить к этой строке 1 => ['hello1', 'apple1', 'orange', 'good morning', 'danke1', 'duck1', 'dinosaure']


// .forEach()
const strings = ['hello', 'apple', 'orange', 'Good morgin', 'danke', 'duck', 'dinosaure'];

const strings_6 = [];
// strings.forEach(el => el.length < 6 ? strings_6.push(el + 1) : strings_6.push(el));
strings.forEach(el => strings_6.push(el.length < 6 ? el + 1 : el));

// console.log(strings_6);

// .map()
const strings_2 = strings.map(el => el.length < 6 ? el + 1 : el);

// console.log(strings_2);

// 4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива. Если число четное, то поделить его на 2, а если нечетное - умножить на 2

const numbers2 = [4, 6, 1, 17, 9, 15, 27, 43, 7];

const multDiv =[];

numbers2.forEach(el => el % 2 === 0 ? multDiv.push(el / 2) : multDiv.push(el * 2));

// console.log(multDiv);

const multDiv2 = numbers2.map(el => el % 2 === 0 ? (el / 2) : (el * 2));

// console.log(multDiv2);

// 5. Дан массив с разными типами данных. Сформировать новый массив - если элемент является числом, то заменить его на строку 'number' => ['number', 'hello', true, 'hi', 'number', 'number', false]

const arr = [3, 'hello', true, 'hi', 7, 10, false];

const new_arr = arr.map(el => typeof el === 'number' ? 'number' : el)

// console.log(new_arr);

// 6. Дан массив с числами. Сформировать новый массив - если число меньше 0, то вернуть в массив 'negative'. А если больше 0 - 'positive' => ['positive', 'negative', 'positive', 'negative', 'negative', 'positive']

const nums = [3, -9, 100, -7, -4, 33];

const nums_negativ = nums.map(el => el < 0 ? 'negative' : 'positive')

// console.log(nums_negativ);

// 7. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, которые начинаются на букву D или d

const strings1 = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];

const d_strings = [];
strings1.forEach(el => el[0].toLowerCase() === 'd' ? d_strings.push(el) : '');

const filtered_strings = strings1.filter(el => el[0].toLowerCase() === 'd');

// 8. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, длина которых больше 7 символов

const strings2 = ['hello', 'apple', 'orange', 'Good morgin', 'danke', 'duck', 'dinosaure'];


const strings_filters = strings2.filter(el => el.length > 7);

// console.log(strings_filters);

// 9. Дан массив строк. Используйте метод map для преобразования каждой строки в новую строку, которая будет содержать ту же строку в верхнем регистре

const strings_Up = strings2.map(el => el = el.toUpperCase());

// console.log(strings_Up);

// 10. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, в котором каждое число возведено в квадрат.

// const powNums = arr => arr.map (el => el **2);

// console.log(powNums([1,5,16,25]));
// console.log(powNums([2,4,8,10,15,46]));



