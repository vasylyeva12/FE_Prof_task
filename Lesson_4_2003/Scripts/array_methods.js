//МЕТОДЫ МАССИВОВ

const numbers = [1, 2, 3 , 4 , 5];

numbers.push(6);   // [1,2,3,4,5,6] добавляет элемен в конец массива
numbers.unshift(0) // добавляет элемент в начало массива
numbers.pop()     // удаляет элемент из конца массива
numbers.shift()   //удаляет элемент из начала массива
// методы всегда вызываются со скобками.
// console.log(numbers);

// .forEach() - ничего не возращает (undefined), выполняет указанную функцию один раз для каждого элемента массива
// Дан массив с числами. Сщздать новый массив, в который войдут все числа исходного массива,умноженные на 10

// const nums = [4, 1, 15, - 77, 33, -10, 55, 2];
// const multNums = [];

// for (let i = 0; i < nums.length; i++) {
//     multNums.push(nums[i] * 10)
    
// }

// const multNums_forEach = [];
// nums.forEach(el => multNums_forEach.push(el * 10))

// console.log(multNums);
// console.log(multNums_forEach);

// 2. Сформировать массив, в который войдут все положительные числа из исходного массива
const nums = [4, 1, 15, - 77, 33, -10, 55, 2];
const positivNum = []
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        positivNum.push(nums[i])
    }
}
console.log(positivNum);

const positiv_forEach = [];
nums.forEach(el => { if (el > 0){
    positiv_forEach.push(el)
}
})

// forEach ternar

nums.forEach(el => el > 0 ? positiv_forEach.push(el) : '') 
// 
// console.log(multNums);
console.log(positiv_forEach);

//.map()

//.filter()

// .find ()

// .sort()

// .reduce()


//Homework (for and forEach)

// 1. Дан массив с числами. Вычислить сумму элементов массива
// 2. Дан массив  со строками. Сформировать новый массив, в который попадут все строки из исходного массива, длина которых больше 7 символов.

// 3. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, которые начинаются на букву D или d
// 4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, возведенные в 3 степень
// 5. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, заканчивающиеся на 7
