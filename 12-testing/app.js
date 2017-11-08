//функция возвращает конкретное значание
const test = (input, result) => {
  if (input === result) console.log('Success');
  else console.error(`${input} not equals to ${result}` );
};

//Иногда бывает нужно протестировать, возвращает ли функция не конкретное значение, а вообще любое значение - определённое (defined).
const testDefined = (input) => {
  if (input !== undefined) console.log('Success');
  else console.error(`${input} is not defined` );
};

//Чтобы не создавать много функций-тестов для каждого случая, можно создать один объект со множеством методов:
  const test = {
    equal(input, result) {
      if (input === result) console.log('Success');
      else console.error(`${input} not equals to ${result}` );
    },
    defined(input) {
      if (input !== undefined) console.log('Success');
      else console.error(`${input} is not defined` );
    }
  };