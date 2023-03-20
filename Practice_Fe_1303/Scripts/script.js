//Задание 1: 

//Написать функцию стрелочную - которая ничего не далает и назвать ее

// const num = (num) => num 
// console.log(num());

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// const min = (a, b) =>  {
//     if (a > b) {
//         return b
//     } else {
//         return a
        
//     }
// }

// console.log(min(10, 11));

// const min1 = (a, b) => a > b ? b : a

// console.log(min1(15, 16));

// Задание номер 3:

// Написать функцию - которая вернет слово большее по количеству букв. Стрелочная. Принимать в качестве аргументов она должна 2 слова

// const word = (str1, str2) => {
    
//     (str1.length > str2.length) ? str1 : str2
// }
// console.log(word("Long", "Longer"));

// Задание 4:

//Написать функцию. Стрелочную. Принимает аргементом строку - пароль. Возвращает true если пароль длинее или равен 7 символам. Иначе возвращает false

// let checkPassword = (str) => {
// if (str.length >= 7) {
//     return true    
// } else {
//     return false
// }
// }

// console.log(checkPassword("1234568"));


const checkPass = pass => pass.length >=7
console.log(checkPass("qwertyugfd"));