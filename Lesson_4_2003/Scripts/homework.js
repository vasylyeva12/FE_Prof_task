const getMaxNun = (a, b) => Math.max(a, b);
// Напишите функцию, которая принимает число и возвращает его квадрат.
const powNum = a => a**2;
const powNum1 = a => Math.pow(a,2)
// Напишите функцию, которая принимает строку и возвращает ее длину.
const getStrLenght = str => str.lenght
// Напишите функцию, которая принимает два числа и возвращает их сумму.
const getSum = (a, b) => a + b;

const creatNewArray = arr => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2)
        
    }
    return result
}
// console.log(creatNewArray ([2,3,4,5]));

//Напишите функцию, которая принимает строку и возвращает новую строку, в которой все гласные заменены 
//на символ '*'

const changeLetters = str => {
    let new_str = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i].tolowerCase() === 'a' || str[i].tolowerCase() === 'e' || str[i].tolowerCase() === 'i' ||
            str[i].tolowerCase() === 'o' || str[i].tolowerCase() === ' u' || str[i].tolowerCase() === 'y') {
            new_str +='*'   
        }else{
            new_str+= str[i]
        }
        
        
    }
    return new_str
}
console.log(changeLetters('hello'));
console.log(changeLetters('GOOD morgin'));

// Напишите функцию, которая принимает строку и возвращает новую строку, в которой все буквы заглавные

const upLetters = str => {
    const new_str1 = '';
    for (let i = 0; i < str.length; i++) {
       new_str1 += str[i].toUpperCase()
        
    }
    return new_str1
}

const upLetters1 = str => str.toUpperCase()

//Напишите функцию, которая принимает массив чисел и возвращает среднее значение

const getAvgNum = arr => {
    let sum1 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i]
        
    }
    return sum1 / arr.lenght
}
console.log(getAvgNum ([3, 5]));
console.log(getAvgNum ([3, 5, 6, 8]));

