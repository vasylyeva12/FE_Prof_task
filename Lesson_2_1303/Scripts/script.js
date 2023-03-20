// 1. Напишите цикл, который считает сумму чисел от 20 до 35

// let sum = 0;
// for (let index = 20; index <= 35; index++) {
//     sum+=index    
    
// }
// console.log(sum);

// 2. Напишите цикл, который выводит произведение всех чисел от 10 до 15

// let mult = 1;
// for (let index = 10; index <= 15; index++) {
//     mult *=index   
    
// }

// console.log(mult);

// const numbers = [12, 6, 56, -6, -5, 25, 12, -14, 8]
// const positive_numbers = [] 

//     for (let index = 0; index < numbers.length; index++) {
//         if(numbers[index]>0){
//             positive_numbers.push = numbers[index]
//         }        
//     }

// console.log(positive_numbers);

// numbers - массив с числами
// i - индекс элемента массива (0-8)
// numbers[i] - элемент массива по индексу

// 4. Сформировать новый массив из четных чисел

// const even = []
// for (let index = 0; index < numbers.length; index++) {
//    if (numbers[index] % 2 ===0) {
//     even.push(numbers[index])
//        }
   
// }
// console.log(even);
// // решение через тернарный оператор
// for (let index = 0; index < numbers.length; index++) {
//     numbers[index] % 2 ===0 ?  even.push(numbers[index]) : ''
//         }

        // Условие  ? true : false - тернарный оператор
    
 // 5. Сформировать новый массив из четных отрицательных чисел => [-88]

//  const numbers = [12, 6, 56, -6, -5, 25, 12, -14, 8]
//  const even_negative = []

//  for (let index = 0; index < numbers.length; index++) {
//     numbers[index] % 2 ===0 && numbers[index] < 0 ?  even_negative.push(numbers[index]) : ''
    
//  }

//  console.log(even_negative);

// 6. Сформировать новый массив из чисел, заканчивющихся на 5

//  const numbers = [15, 6, 5, -6, -5, 25, 12, -14, 8, 35, 10]
//  const end_numbers_5 = []

//  for (let index = 0; index < numbers.length; index++) {
//     numbers[index] % 5 ===0 && numbers[index] !== 10 ?  end_numbers_5.push(numbers[index]) : ''
       
//  }

//  for (let index = 0; index < numbers.length; index++) {
//     numbers[index] % 10 === 5 || numbers[index] % 10 === -5 ?  end_numbers_5.push(numbers[index]) : ''
       
//  }
//  console.log(end_numbers_5);

 // 73 % 10 ===3; так находим остаток от деления
 // 58 % 10 === 8;
 // 35 % 10 === 5;

 //  || - амперсант или


 // 7. Сформировать новый массив, состоящий их последних цифр чисел
 const numbers = [15, 6, 5, -6, -5, 25, 12, -14, 8, 35, 10]
//  const last_numbers = []

//  for (let index = 0; index < numbers.length; index++) {
//         last_numbers.push(numbers[index] % 10)
//  }
//  console.log(last_numbers);

// 8. Сформировать новый массив, состоящий их последних цифр чисел (без -)

 const last_numbers2 = []

 for (let i = 0; i < numbers.length; i++) {
        last_numbers2.push(numbers[i] < 0 ? numbers[i] * -1 % 10 : numbers[i] % 10)
 }
 console.log(last_numbers2);
