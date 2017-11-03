// 1.Создать генератор, который принимает любое число (SN). Генератор создаёт итератор, каждый вызов которого возвращает результат умножения числа  SN на предыдущий результат (SN*SN, SN*SN*SN...). Если число получилось больше миллиарда, итератор должен сгенерировать ошибку:

function* getValue(number) {
  // var num1= number;
  var num2 = 1;
  while(true) {
    var current = number * num2;
    num2 = current;

    if (current > 100) {
      throw new Error('Value is too big!');
    }
    yield current;
  }
}
const valuer = getValue(5);
valuer.next().value;

//2.Создать бесконечный генератор, который должен показывать текущее количество секунд (использовать Date), округленное вниз до десяти:


function* createSeconds() {
      while (true)  {
            var d = new Date();
            var s = d.getSeconds();
            console.log(s);
            var res = Math.floor(s/10) * 10;
            yield res;
      }
}
const getSec = createSeconds();

getSec.next().value;


//3.Используя пример отсюда, подключить библиотеку jQuery и использовать библиотечный метод get() вместо fetch. Результат работы кода должен быть точно таким же, как и в оригинале.  Прислать на проверку ссылку на свой готовый codepen.

// Решение - https://codepen.io/dergaeva/pen/JrawRQ

