const wrapper = document.createElement('div')
const logoImage = document.createElement('img');
const input = document.createElement('input')


logoImage.setAttribute('src', 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png')
logoImage.setAttribute('alt', 'Logo of google')
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Поиск по имени меня');

const articles = [
    'sdfghjkldfghjk',
    'sdfghjkldfghjk',
    'sdfghjkldfghjk',
    'sdfghjkldfghjk',
    'sdfghjkldfghjk',
    'sdfghjkldfghjk',
    'sdfghjkldfghjk',

]



wrapper.append(logoImage)
wrapper.append(input)

document.body.append(wrapper)

wrapper.classList.add('main');
input.classList.add('input_main')

input.addEventListener('click', () => {
    const div = document.createElement('div')
    div.setAttribute('class', 'search_items')
    wrapper.append('div');
});

//Задание 5:

// Среагировать на клик по инпуту
// Задание 6: по клику на инпут синзу нарисовать div в котором очень много p абзацев

// Задание 7: 

// Поймать событие change у инпута (это событие срабатывает когда в инпут вводится что-то)
// Задание 8: когда что-то вводится в инпут надо
// - очищать весь нижний блок от абзацев
// - все абзацы фильтровать на наличие поисковой фразы из инпута
// - рисовать абзацы с отфильтрованными фразами