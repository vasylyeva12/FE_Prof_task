// let a = 10;
// a = 100;
// console.log(a);


// const b = 12;
// // b = 120; //так делать нельзя
// console.log(b);
// //Если массив переназначен через push, то можно измеить содержимое объекта

// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6);
// console.log(numbers);

// задана переменная number. Если значение number больше или равно 10, то ввести в 
//консоль hello, а если меньше, то вывести hi

// let number = 15;
// number = 1;

// if (number >= 10) {
//     console.log('hello');
    
// }else{
//     console.log('hi');
// }

//===========ТЕРНАРНЫЙ ОПЕРАТОР=====================================

// number >=10 ? console.log('hello') : console.log('hi');

//=============ЦИКЛЫ==============================

// for (let index = 0; index <= 20; index++) { //index = index + 1 короткая запись index++
//     //возможна такая запись, если шаг равен 1, если больше, то +=n, где n - это размер шага
//     console.log(index);    
// }

// i = i + 1
// i += 1
// i++

// i = i - 1
// i -= 1
// i--

//==================Задача=========================
// 2. Вывести в консоль каждое третье число от 15 до 96

// for (let index = 15; index <= 96; index+=3) {
//     console.log(index);     
// }

// 3. Вывести в консоль каждое третье число от 96 до 15

// for (let index = 96; index >= 15; index-=3) {
//     console.log(index);     
// }

// 4. Вывести в консоль каждое число от 100 до 57

// for (let index = 100; index >=57; index--) {
//     console.log(index);   
    
// }

const numbers = [6, 7, 1, -10, 78, 18, -5, -38, 9];
// 1. Сформировать новый массив, в который попадут все положительные числа из массива 
//numbers

// const positiv_number = []
// for (let index = 0; index < numbers.length; index++) {
//     if (numbers [index] > 0) { // обращаемся к массиву по индексу
//         positiv_number.push(numbers[index])  // пушим элемент по индексу 
        
//     }      
// }
// console.log(positiv_number);

//=====Через тернарный оператор=============

// for (let index = 0; index < numbers.length; index++) {
//     numbers[index]>0 ? positiv_number.push(numbers[index]) : '';       
//     }   

//2. Сформировать новый массив, в который попадут все числа numbers умноженные на 2
// const multiply_number = []
// for (let index = 0; index < numbers.length; index++) {
//     multiply_number.push(numbers[index] * 2)    
// }
// console.log(multiply_number);

// 3. Сформировать новый массив, в который попадут все положительные числа numbers 
//деленные на 2

// const div = []

// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] > 0) {
//         div.push(numbers[index] / 2)        
//     }   
// }
// console.log(div);