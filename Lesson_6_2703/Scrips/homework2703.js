// ДЗ (массив users)

const users = [
    {
      id: 1,
      firstname: 'Anton',
      age: 28,
      active: true
    },
    {
      id: 2,
      firstname: 'Irina',
      age: 18,
      active: true
    },
    {
      id: 3,
      firstname: 'Olga',
      age: 32,
      active: false
    },
    {
      id: 4,
      firstname: 'Danila',
      age: 14,
      active: true
    },
    {
      id: 5,
      firstname: 'Ivan',
      age: 54,
      active: false
    }
  ]
// 1. Сформировать новый массив, в который попадут только возраст пользователей => [28, 18, 32, 14, 54]
const users_age = users.map (el => el.age);

// console.log(users_age);

// 2. Сформировать новый массив, в который попадет информация о каждом пользователе в формате 'Name: <firstname>, Age: <age>'

const {firstname, age} = users
const firstNameAndAge = users.map(el =>  `Name: ${el.firstname}, Age: ${el.age}` )
// console.log(firstNameAndAge);

// 3. Сформировать новый массив, в который попадут только те пользователи, чье имя начинается на I

const nameBeginnI = users.filter(el => el.firstname[0] ==='I')
// console.log(nameBeginnI);


// ***
// 1. Сформировать новый массив, в который попадет информация о каждом совершеннолетнем пользователе в формате 'Name: <firstname>, Age: <age>'

const adultUser = users
.filter(users => users.age >= 18)
.map(users =>  `Name: ${users.firstname}, Age: ${users.age}`)
// console.log(adultUser);

// 2. Сформировать новый массив, в который попадут только активные и совершеннолетние пользователи

const activAdultUser = users.filter(users => users.age >= 18 && users.active)

// console.log(activAdultUser);
// 3. Сформировать новый массив без пользователей, чье имя начинается на букву O

const newUsersO = users.filter(users => users.firstname[0] === 'O')
// console.log(newUsersO);

// 4. Сформировать новый массив, в который попадут только имена активных и совершеннолетних пользователей в нижнем регистре

const adultActivUsers = users
.filter(users => users.active && users.age >= 18)
.map(users => users.firstname.toLowerCase())

// console.log(adultActivUsers);

// ****
// 1. Сформировать новый массив, где пользователи будут отсортированы по возрасту (.sort())

const usersAge = users.map(users => users).sort((a,b) => a.age - b.age)
const usersAge1 = [...users].sort((a,b) => a.age - b.age)


// console.log(usersAge);

// 2. Найти сумму возрастов всех пользователей (.reduce())

const sum = users.reduce((acc, el) => acc + el.age, 0)

console.log(sum);

const sum_age1 = users.reduce((acc, { age }) => acc + age, 0);


// 1. Сформировать новый массив, где пользователи будут отсортированы по возрасту (.sort())

const sorted_users = users.slice().sort((a, b) => a.age - b.age);
const sorted_users1 = users.map(el => el).sort((a, b) => a.age - b.age);
const sorted_users2 = [...users].sort((a, b) => a.age - b.age);

const users_copy = [...users];

console.log(users);
console.log(users_copy);