const user  = {
    name: 'Lidia', 
    age: 18,
    friend: {
        nick: '1234'
    }
};

const grandma  = {
    surname: 'Melnik', 
    age: 20,
    friend: {
        nick: '12345'
    }
};

function getFullName ({name}, {surname}) {
   return `${name} ${surname}`
}
//  console.log(getFullName(user, grandma));  

// const { friend: {nick} } = user;
// console.log(nick);


// const {nick} = user.friend
// console.log(nick);

const products = [
    {
      id: 1,
      name: "Cherry",
    },
    {
      id: 2,
      name: "Mango",
    },
  ];
  
  const cherry = products.find(
    ({name}) => name === "Cherry"
  );
//   console.log(cherry);

const users = {
    name: 'Sergey',
    friends: [
        {
            id: 1,
            nick: 'Anton',
        },
        {
            id: 2,
            nick: 'Mari',
        },
        {
            id: 3,
            nick: 'Anatoliy',
            family: {
                count: 10,
                surname: 'Kovalev'
            }
        }
    ]
}

// const {friends} = user;
// friends.forEach(({family}) => {
//     if (family) {
//         const {count, surname} = family;
//         console.log(count, surname);
//     }
    
// });
const { friends } = user;

friends.forEach(({ family }) => {
  if (family) {
    const { count, surname } = family;
    console.log(count, surname);
  }
});

// Задача найти друга со свойством family и вывести его в консоль
// деструктурировать все что можно

