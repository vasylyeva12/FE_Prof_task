const button = document.querySelector('button');
const body = document.querySelector('body');
// const button = document.getElementsByTagName('button');
 // 2-вариант

button.addEventListener('click', () => {
    console.log(body) 


// 1. Change class
// 2. Change style

const body1 = document.createElement('body');
body1.className = 'yellow';

const isYellow = document.body.classList.contains ('yellow');
if (isYellow) {
    document.body.classList.add('blue')
    document.body.classList.remove('yellow');
        
}  else  {
    document.body.classList.add('blueviolet')
    document.body.classList.remove('blue');   
  
}
})


