
// Object destructuring

// const person = {
//     name: 'Ewan',
//     age: 48,
//     location: {
//         city: 'Liverpool',
//         temp: 56
//     }
// };
//
//
// // const name = person.name;
// // const age = person.age;
//
// const { name: firstName = 'Anonymous', age } = person;
//
// console.log(`${firstName} is ${age}`);
//
// const { city, temp: temperature } = person.location;
//
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.` );
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);

// Array Destructuring

const address = ['1299 S Juniper St','Philadelphia','Pennsylvania','19147'];
const [, , state = 'New York'] = address;
console.log(`You are in ${state}`);

const item = ['coffee (hot)','$2.00','$2.51','$2.75'];
const[drink, , costMedium] = item;
console.log(`A ${drink} costs ${costMedium}`);

