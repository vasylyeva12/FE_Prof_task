//DOM - document object model - модель, которая рассматривает елементы внутри HTML документа как объект, к которому можно получить доступ из js

// const greeting = document.querySelector('.greeting');
// const container = document.querySelector('.container');

// greeting.style.color = '#6c5ce7';
// greeting.style.fontSize = '60px';
// greeting.style.backgroundColor = '#dfe6e9';
// greeting.style.fontWeight = 'bold';

// const par = document.createElement('p');
// const par2 = document.createElement('p');

// par.innerText = 'Happy Birthday';
// par2.innerText = 'To you'
// par.style.color = '#fab1a0';
// par.style.fontSize = '50px';
// par.style.backgroundColor = '#2d3436';

// par2.style.color = '#00b894';
// par2.style.fontSize = '40px';
// par2.style.backgroundColor = '#fdcb6e';
// par2.style.fontWeight = 'bold'

// container.append(par, par2);


// 1. Внутри container создать карточку товара (div). Внутри карточки товара есть два параграфа - Название и цена товара. Данные произвольные. Добавить карточке рамку, ширина карточки должна быть равна 200px, padding 10px

// const container = document.querySelector('.container');

// const cardElem = document.createElement('div')
// const parText = document.createElement('p');
// parText.innerText = 'Title: Laptop'
// const parPreis = document.createElement('p');
// parPreis.innerText = 'Price: $1500'

// cardElem.style.width = '200px';
// cardElem.style.padding = '10px';
// cardElem.style.border = '1px solid black';
// cardElem.style.textAlign = 'center'

// cardElem.append(parText, parPreis);
// container.append(cardElem)


const container = document.querySelector('.container');

const cardElem = document.createElement('div');
const titleElem = document.createElement('p');
const priceElem = document.createElement('p');

titleElem.innerText = 'Title: iPhone 14 Pro';
priceElem.innerText = 'Price: 1200$';

cardElem.style.border = '1px solid black';
cardElem.style.padding = '10px';
cardElem.style.width = '200px';
cardElem.style.textAlign = 'center';
cardElem.style.borderRadius = '20px';

cardElem.append(titleElem, priceElem);
container.append(cardElem);