// 2. Дан массив с товарами. Для каждого товара создать карточку. Стилизовать карточку (title, price). Если товар есть на складе, то цвет заднего фона сделать зеленым. А если нет - то серым
const products = [
  {
    id: 1,
    title: 'Apple',
    price: 100,
    in_stock: true,
    photo: 'https://www.pngplay.com/wp-content/uploads/4/Apple-PNG-Pic-Background.png'
  },
  {
    id: 2,
    title: 'Orange',
    price: 200,
    in_stock: false,
    photo: 'https://www.boeschbodenspies.com/wp-content/uploads/2017/08/orange.png'
  },
  {
    id: 3,
    title: 'Kiwi',
    price: 150,
    in_stock: true,
    photo: 'https://static.vecteezy.com/system/resources/previews/008/532/603/original/kiwi-fruit-cutout-file-png.png'
  },
  {
    id: 4,
    title: 'Banana',
    price: 300,
    in_stock: false,
    photo: 'https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png'
  },
  {
    id: 5,
    title: 'Pineapple',
    price: 400,
    in_stock: false,
    photo: 'https://static.vecteezy.com/system/resources/previews/008/848/362/non_2x/fresh-pineapple-free-png.png'
  }
]

  const cards_container = document.querySelector('.cards_container');
  products.forEach(({photo, title, price, in_stock}) => {  //реструктуризация
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
    const photoElem = document.createElement('img');

    titleElem.innerText = `Title: ${title}`; // обращаемся сразу к элементу массива после реструктуризации
    priceElem.innerText = `Price: ${price}`;

    // cardElem.style.border = '1px, solid, black';
    // cardElem.style.padding = '10px';
    // cardElem.style.borderRadius = '10px';
    // cardElem.style.textAlign = 'center';
    // cardElem.style.fontSize = '24px';

    cardElem.classList.add('cardElem');
    cardElem.style.backgroundColor = in_stock ? 'lightgreen' : 'lightgray';

    photoElem.setAttribute('src', photo)
    photoElem.setAttribute('alt', title)



    cardElem.append(photoElem,titleElem, priceElem);
    cards_container.append(cardElem)
  })