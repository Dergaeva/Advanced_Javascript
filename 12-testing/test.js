//Main function testing

const users = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}, {age: 68}, {age: 38}, {age: 22}, {age: 14}];
const getRandomUsers = (users) => {
  const numb = Math.random();

  if (!users) {
    return false;
  }

  const length = users.length;
  const middleUser = Math.round(length / 2);

  if (numb > 0.5) {
    return users.slice(0, middleUser);
  }

  return users.slice(middleUser, length);
};

//task - 1

const getDay = () => {
  return new Date().getDay();
};
//test
const day  = new Date().getDay();
test(getDay()).equal(day);
test(getDay()).defined();


//task - 2

const users = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}, {age: 68}, {age: 38}, {age: 22}, {age: 14}];
const getAdultUsers = (users = []) => users.filter(user => user.age > 18);
//test
const myUsers = [{age: 15}, {age: 19}];
test(getAdultUsers(myUsers).length).equal(1);
test(getAdultUsers(myUsers)).defined();

//task - 3

const users = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}, {age: 68}, {age: 38}, {age: 22}, {age: 14}];
const getRandomUsers = (users) => {
  const numb = Math.random();

  if (!users) {
    return false;
  }

  const length = users.length;
  const middleUser = Math.round(length / 2);

  if (numb > 0.5) {
    return users.slice(0, middleUser);
  }

  return users.slice(middleUser, length);
};
//test
const use = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}];
test(getRandomUsers(use).length).equal(2);
test(getRandomUsers(use)).defined();









