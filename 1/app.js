/************************************************
//Оператор spread/rest: tasks
 *************************************************/
//1
const numbers = [0, 3, -2, 4, -3, 5, 20, 50, -100 ];
console.log(Math.max(...numbers));
//2
const a = [1, 2, 3]; const b = [4, 5, 6];
const c = [...a,...b];
console.log(c);
//3
function writeString(...str){
  console.log([...str]);
}
writeString('Строк','может','быть сколько', 'угодно');
/****************************************************************
//Destructuring assignment: tasks
 *********************************************************/
//1.Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

function xxx (value, ...other) {
   console.log(`first: ${value} + other:${[...other]}`)
}
xxx('a','q','w','e','r','t');

//2.Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: ..., partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива employees:
//   const organisation = {
//     name: 'Google',
//     info: { employees: 1536, partners: ['Microsoft', 'Facebook', 'Xing']   }
//   };
// getInfo(organisation); →
// Name: Google
// Partners: Microsoft Facebook

const organisation = {
  name: 'Google',
  info: { employees: 1536, partners: ['Microsoft', 'Facebook', 'Xing']   }
};
const getInfo = (args) =>  {
  const {name="Unknown", info:{partners:[part1, part2]}} = args;
  console.log('Name: ' + name);
  console.log('Partners: ' + part1, part2);
};
getInfo(organisation);

/**************************************************************
//Arrow functions: задачи
*************************************************/
// 1.Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

const sum = (...arguments) => {
  if (!arguments.length) return 0;
  return arguments.reduce((prev, next) =>  prev + next);
};
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum()); // 0

//2.Исправить функцию так, чтобы вместо undefined в массиве выводилось значение поля prefix

const utils = {
  numbers: [1,2,3,4],
  prefix: 'number',
  getOdd() {
    return this.numbers.map(number=> this.prefix + ' - ' + number)
  }
};
console.log(utils.getOdd());

//3.Переделать функции в стрелочные функции, использовать, где возможно, короткий синтаксис:

const getDate = () => new Date();
const getDay = () => {
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[new Date().getDay()];
};
const getListCopy = list => [...list];