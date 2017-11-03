/**************************************
 Object: tasks
/ *************************************/
// 1.Используя синтаксис коротких свойств, создать функцию-стрелку, которая будет принимать два аргумента (имя и возраст), а возвращать объект вида { name:..., age:...}. Имя и возраст по умолчанию - ‘User’, 25:

const getObject = (name= "User", age= 25) => ({ name, age });
getObject(); //  {name: "User", age: 25}
getObject('Vasya', 10); // {name: "Vasya", age: 10}

//2.Реализовать объект со значением некоторой произвольной строки. В объекте должны быть созданы метод “получить длину строки” и метод “получить строку-перевёртыш”. Использовать короткий синтаксис для создания методов.

const obj =  {
  getLength(str) {return str.length},
  getReverseStr(str) {return str.split("").reverse().join("");};
};
obj.getLength("Реализовать объект со значением некоторой произвольной строки");
obj.getReverseStr("Реализовать объект со значением некоторой произвольной строки");

// 3.Создать функцию-стрелку, которая принимает любое количество объектов и возвращает новый объект, которые содержит в себе все свойства из объектов при вызове функции

const getOneObject = (...args) => Object.assign({}, ...args);
getOneObject( {foo: 'boo!'}, {msg: 'fire!'});

/*********************************************
 Classes: tasks
 /******************************************************/
// 1.Реализовать конструктор в ES6
//
class Component {
  constructor(tagName = 'div') {
    this.node = document.createElement(tagName);
  }
}
const comp = new Component('span');

// 2.Реализовать конструктор в ES6

class Component {
  constructor(tagName = 'div') {
    this.node = document.createElement(tagName);
  }
  setText(text) {this.node.textContent = text;}
}

// 3.Реализовать конструктор и наследование в ES6 синтаксисе
class Component {
  constructor(tagName = 'div') {
    this.node = document.createElement(tagName);
  }
  setText(text) {return this.node.textContent = text};
}
class InputComponent extends Component {
  setText(text) {this.node.value = text;}
}
const input = new InputComponent();
input.setText("Enter text");


// 4.Реализовать конструктор и наследование в ES6
class Figure {
  constructor(angles = "1"){
    this.abstract = true;
  };
  getInfo()  {
    return {
    angles: this.angles,
    abstract: this.abstract }
  };
}

class Triangle extends Figure {
  constructor(name = "triangle") {
    super(angles);
    this.abstract = false;
  }
  getInfo() {
    return {
      ...super.getInfo(),
      name: this.name
    };
  }
}

// 5.Реализовать класс Таблица, который при инициализации принимает количество строк и колонок (по умолчанию - 3 * 3).

class Table {
  constructor(row = 3, col = 3) {
    this.row = row;
    this.col = col;
    this.table = this.getTable(row, col);
  }
  getTable(col, row) {
    let table = [];
    for (var i = 0; i < row; i++){
      table[i] = [];
      for (var j = 0; j < col; j++){
        table[i][j] = 0;
      }}
    return table;
  }
  sumCells() {return this.row * this.col};
  textCell(i,j, text) {return this.table[i][j] = text};
  getTextCell(i,j) { return this.table[i][j]};

  getInfoObg() {
      return {
      cells: this.row * this.col,
      rows: this.row,
      cols: this.col
    };
  }
  static getCellsStatic() { return row * col };
}
//6.Реализовать наследника от класса Таблица из 5го задания. При инициализации класс принимает третий аргумент - имя таблицы (по умолчанию - table).
// Метод “получить информацию о таблице” (количество ячеек, количество строк, количество колонок) должен также содержать имя таблицы.//
//   У наследника также должен быть дополнительный метод для изменения имени таблицы, но при изменении имя не может быть пустым.

class childTable extends Table {
  constructor(name="table") {
        super(row, col);
    this.name = name;
}
  getTableInfo() {
    return {
      cells:  this.row * this.col,
      rows: this.row,
      cols: this.row,
      nameTable: this.name
    };
}
  changeTableName(newName="Unknow") {this.name = newName}
};
