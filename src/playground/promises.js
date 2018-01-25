const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Ewan',
            age: 48

        });
        reject('something went wrong');
   }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return 'data';
}).then((str) => {
  console.log('Does this run? ', str);
}).catch((error) => {
    console.log('error: ' + error)
});

console.log('after');

