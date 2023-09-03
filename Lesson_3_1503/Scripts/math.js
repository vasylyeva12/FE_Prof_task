// const a = Math.max(6, 3, -10, 73)
// const b = Math.min (6, 3, -10, 73)

// const c = Math.abs(4); // 4
// const d = Math.abs (-4); // 4

 const e = Math.ceil(4.73); // 5 всегда округляет вверх
 const f = Math.floor(4.73);//4 всегда вниз
 const g = Math.round (4.73); // 5 по правилам математики

 const h = Math.pow(6, 2); // возводим в степень, первое число основание, второе - степень
 const i = Math.sqrt(36); // 6 находит квадратный корень
 const j = Math.random(); // возвращает случайное дробное число от 0 до 1 (не включая единицу)

 

// console.log(a);
// console.log(b);

//Сформировать новый массив из чисел, заканчивющихся на 5

 const numbers = [15, 6, 5, -6, -5, 25, 12, -14, 8, 35, 10]
//  const end_numbers_5 = []

//  for (let index = 0; index < numbers.length; index++) {
//     if(Math.abs(numbers[index] % 10) ===5){
//         end_numbers_5.push(numbers[index])
//     }       
//  }
//  console.log(end_numbers_5);

//Сформировать новый массив, состоящий их последних цифр чисел (без -)

 const last_numbers2 = []

 for (let i = 0; i < numbers.length; i++) {
    
        last_numbers2.push(Math.abs(numbers[i]% 10))
        
    
        // last_numbers2.push(numbers[i] < 0 ? numbers[i] * -1 % 10 : numbers[i] % 10)
 }
//  console.log(last_numbers2);

// Написать функцию, которая принимает 3 числа и возвращает наибольшее из них

const getMaxNun = (num1, num2, num3) =>  Math.max (num1, num2, num3);

const getMaxNun1 = (num1, num2, num3) =>  {
    return Math.max (num1, num2, num3);
} 


// console.log(getMaxNun (4, 1, 88)); 
// console.log(getMaxNun (65, 103, 8)); 

// Написать функцию, которая принимает два числа - основание степени и показатель степени и возвращает результат возведения числа в степень

const getPowNun = (base, exp) =>  Math.pow (base, exp);
// console.log(getPowNun (4, 4)); 

// Сгенерировать случайное число от 0 до 10

const getRandomNum = Math.floor(Math.random()*11);
const getRandomNum2 = Math.round(Math.random()*10);

// console.log(getRandomNum2);  

// Сгенерировать случайное число от 0 до 30 и вывести его в консоль

const random_30 = Math.round(Math.random() *30);
// console.log(random_30);

// Сгенерировать случайное число от 10 до 20

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const random_40 = Math.round(Math.random() *10 + 10);
// console.log(random_40);
// console.log(getRandom(10, 20));

// сгенерировать случайное число от 15 до 30

const random_15 = Math.round(Math.random()* 15 + 15);
// console.log(random_15);

// Написать функцию, которая принимает массив со строками. И формирует массив со строками, чья длина превышает 5 символов

const greetings = ['hello', 'hi', 'good morning', 'good afternoon', 'hey'];

const getLongWords = arr => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) {
            result.push(arr[i]) 
        }       
      }
      return result
}

// console.log(getLongWords(greetings));

const numbers1 = [1, 5, -7, -88, 9, 44, 15, 35, -5, 10];
const num_last = [];

for (let i = 0; i < numbers1.length; i++) {
    
        num_last.push(Math.abs(numbers1[i] % 10))
    }
  // console.log(num_last);