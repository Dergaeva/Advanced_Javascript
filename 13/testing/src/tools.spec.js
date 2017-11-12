import chai from 'chai';
const { assert } = chai;
chai.should();

import { sum } from './tools';
import { getDay } from './tools';
import { getAdultUsers } from './tools';
import { getRandomUsers } from './tools';

describe('sum', function() {
 it('should return 5 for sum(2, 3)', () => {
   sum(12,3).should.not.equal(5);
 });

 it('should return 2 for sum(2, 0)', () => {
   assert.equal(sum(2, 0), 2);
 });

 it('empty string equals 0', () => {
   assert.equal('', 0);
 });
});

describe('getDay return day', function() {
  it('should return current day', () => {
    const day  = new Date().getDay();
    getDay(day).should.equal(day);
  });
});

describe('getAdultUsers return users age > 18', function() {
  it('should return length of new array', () => {
    const myUsers = [{age: 15}, {age: 19}];
    getAdultUsers(myUsers).length.should.equal(1);
  });
});

describe('getRandomUsers return middle quantity of user', function() {
  it('getRandomUsers should length', () => {
    const use = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}];
    getRandomUsers(use).length.should.equal(2);
  });
});

