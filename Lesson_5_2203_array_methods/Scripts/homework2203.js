// ДЗ через map  и filter
// 1. Напишите функцию, которая принимает массив строк и возвращает новый массив строк, в котором все первые буквы каждого слова написаны заглавными буквами.

const string = arr => arr.map (el => el.charAt(0).toUpperCase() + el.slice(1))

console.log(string(['hello', 'apple', 'orange', 'good morgin', 'danke', 'duck', 'dinosaure']));

// 2. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только положительные числа.

const nums = [12, 65, -3, 9, -87, 4, -26, 81, 36]

const nums_positive = nums.filter(el => el > 0)
console.log(nums_positive);

// 3. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только нечетные числа.
const nums_negative = nums.filter(el => el < 0)
console.log(nums_negative);

// 4. Создайте новый массив, содержащий только элементы исходного массива, которые делятся на три без остатка.

const nums_three = nums.filter(el => el % 3 === 0)

console.log(nums_three);

// 5. Создайте новый массив, содержащий только те элементы исходного массива, которые больше чем 10 и меньше чем 20.

const nums_more_ten = nums.filter(el => el > 10 && el < 20)
console.log(nums_more_ten);

// 6. Создайте новый массив, содержащий только те элементы исходного массива, которые не являются строками.

const different = ['morning', 12, 'elefant', 'monkey', 45, 74, 'ball', true]

const only_no_str = different.filter(el => typeof el !== 'string')
console.log(only_no_str);

// *7. Макет: https://www.figma.com/file/RbKedig5BcfNRyZ64Tdfow/Lamp?t=WJWTgZs8pWAWRVRE-0

