// 1.Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен.

function promiseCreator(time, value) {
  return new Promise(function(resolve) {
  setTimeout(() => { console.log(value);}, time);
})}
const prom = promiseCreator(500, 'Ok!');

// 2. Создать класс, который производит экземпляр со следующими свойствами:
//   - promise - промис, который создается во время запуска конструктора;
// - reject - метод, при выполнении которого promise реджектится;
// class Promi {
constructor() {
  this.promise = new Promise(function(resolve, reject) {
    this.resolve =resolve;
    this.reject =reject;
  })
}
reject(error) {
  this.promise
    .then(
      error => {
        alert("Rejected: " + error); // error - аргумент reject
      })
}
resolve(result) {
  this.promise
    .then(
      result => {
        alert("Fulfilled: " + result); // result - аргумент resolve
      })
}
}
const Inst = new Promi();
Inst.promise.then(resolve => console.log("Ура!"));
Inst.resolve('test');
// - resolve - метод, при выполнении которого promise резолвится.

class Promi {
  constructor() {
    this.promise = new Promise((res, rej)=> {
      this.resolve =res;
      this.reject =rej;
    })
  }
  resolve(result) {
    this.promise
      .then(
        result => {
          alert("Fulfilled: " + result); // result - аргумент resolve
        })
  }
}
const Inst = new Promi();
Inst.promise.then(resolve => console.log("Ура!"));
Inst.resolve('test');



