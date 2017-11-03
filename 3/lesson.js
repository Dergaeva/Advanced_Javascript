var prom = new Promise(function (res, rej) {
  setTimeout(() => rej('test'), 500);
});
prom
  .then(function (val) { console.log('one', val); })
  .then(function (val) { console.log('two', val); })
  .catch(function (error) { console.log('Error', error); })
  .catch(function (error) { console.info(new Error(error)); });

function Promise(callback) {
  // this = {}
  /*
   callback = function (res, rej) {
   console.log(res, rej);
   }
   */
  this.callbacks = [];
  this.errorCallbacks = []

  this.then = function (func) {
    this.callbacks.push(func);
    return this;
  };

  this.catch = function (func) {
    this.errorCallbacks.push(func);
    return this;
  }

  var resolve = (val) => {
    this.callbacks.forEach(func => func(val));

  };

  var reject = (err) => {
    this.errorCallbacks.forEach(func => func(err));
  };

  callback(resolve, reject);

  /*
   function (res, rej) {
   console.log(resolve, reject);
   }
   */
}
const prom = Promise.all([
  fetch('https://jsonplaceholder.typicode.com/users'),
  fetch('https://jsonplaceholder.typicode.com/posts')
]);


prom
  .then(response => Promise.all(response.map(item => item.json() )) )
  .then(console.log)
****
fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(users => {
    const userOne = users[0];
    return fetch('https://jsonplaceholder.typicode.com/posts/' + userOne.id)
  })
  .then(resp => resp.json())
  .then(console.log)