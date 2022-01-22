const {operate, add, subtract, multiply, divide } = require('./calculator');

describe('Add numbers', function() {
  test('add 0 and 0', function() {
    expect(operate("0 + 0")).toEqual(0);
  });
  test('add 1 and 0', function() {
    expect(operate("1 + 0")).toEqual(1);
  });
  test('add -9 and 4', function() {
    expect(operate("-9 + 4")).toEqual(-5);
  });
  test('add 340 and NaN', function() {
    expect(operate("340 + 7g50")).toEqual(NaN);
  });
  test('add 1, 4 and 7', function() {
    expect(operate("1 + 4 + 7")).toEqual(12);
  });
});
describe('Subtract numbers', function() {
  test('add 0 and 0', function() {
    expect(operate("0 - 0")).toEqual(0);
  });
  test('subtract 1 and 0', function() {
    expect(operate("1 - 0")).toEqual(1);
  });
  test('subtract -90 and 4', function() {
    expect(operate("-90 - 4")).toEqual(-94);
  });
  test('subtract340 and NaN', function() {
    expect(operate("340 - 7g50")).toEqual(NaN);
  });
  test('subtract 1, 4 and 7', function() {
    expect(operate("1 - 4 - 7")).toEqual(-10);
  });
});

describe('multiply numbers', function() {
  test('add 0 and 0', function() {
    expect(operate("0 * 0")).toEqual(0);
  });
  test('multiply 1 and 0', function() {
    expect(operate("1 * 0")).toEqual(0);
  });
  test('multiply -9 and 4', function() {
    expect(operate("-9 * 4")).toEqual(-36);
  });
  test('multiply 0 and 0', function() {
    expect(operate("340 * 7g50")).toEqual(NaN);
  });
  test('multiply 10, 4 and 7', function() {
    expect(operate("10 * 4 * 7")).toEqual(280);
  });
});
describe('divide numbers', function() {
  test('divide 0 and 0', function() {
    expect(operate("0 / 0")).toEqual(NaN);
  });
  test('divide 1 and 0', function() {
    expect(operate("4 / 1")).toEqual(4);
  });
  test('divide -36 and 4', function() {
    expect(operate("-36 / 4")).toEqual(-9);
  });
  test('divide 340 and NaN', function() {
    expect(operate("340 + 7g50")).toEqual(NaN);
  });
  test('divide 1000, 5 and 10', function() {
    expect(operate("1000 / 5 / 10")).toEqual(20);
  });
});
