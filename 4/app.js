// 1.Превратить объект в итерируемую коллекцию:
// Для этого в объект добавить свойство length (вручную количество ключей не считать) и Symbol.iterator.

const  names = { 0: 'Vasya', 1: 'Petya', 2: 'Kolya'};

 names[Symbol.iterator] = function () {
   const length =  Object.keys(this).length;
   let index = 0;
  return {
     next: () => {
      return {
        value: this[index++],
        done: index > length
      };
    }
  }
};
for (let val of names) { console.log(val); }

// 2.Дан объект const obj = { zone: true, word: 'test', skill: 'JS', name: 'John' }.
//   Вывести значения ключей в алфавитном порядке (сортировка по ключам): name, skill, word, zone. Сортировка должна выполняться автоматически.

const obj = { zone: true, word: 'test', skill: 'JS', name: 'John'}
obj[Symbol.iterator] = function () {
    var keys = Object.keys(this).sort();
    var index = 0;

    return {
      next: function () {
        return {
          value: keys[index],
          done: index++ >= keys.length
        };
      }
    }
  };
for (var key of obj) {
  console.log(obj[key]);
}

// 3.Создать такой итерируемый объект, который выводит в цикле все составные текущей даты (год, месяц, день, число, часы, минуты, секунды). Никаких посторонних свойств, кроме итератора, в объекте быть не должно.

const date = {
  [Symbol.iterator]: function () {
    const now = new Date();
    const values = ['FullYear', 'Month', 'Day', 'Hours', 'Minutes', 'Seconds'];
    let index = 0;

    return {
      next() {
        const value = values[index++];
        const method = now[`get${value}`];
        return method ? { value: `${value} is ${method.call(now)}`} : {done: true};
      }
    };
  }
};