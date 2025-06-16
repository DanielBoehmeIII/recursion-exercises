#!/usr/bin/env node
function sumRange(n, total = 1) {
  if (n == 1) {
    return total;
  } else {
    return sumRange(n - 1, total + n);
  }
}

//console.log(sumRange(3));
// O(n)

function pow(n, e) {
  if (e == 0) {
    return 1;
  } else {
    return n * pow(n, e - 1);
  }
}
// 2 * 2, 3
// 4 * 2, 2
// 8 * 2, 1
// 16
// O(n)

// let result = pow(2, 4);

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// O(n)

// let result = factorial(5);

var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

function all(array, callback) {
  var copy = copy || array.slice();

  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  } else {
    return false;
  }
}

// let result = allAreLessThanSeven;
// console.log(result);

function productOfArray(array) {
  var copy = copy || array.slice();

  if (copy.length === 1) return copy;

  copy[1] = copy[0] * copy[1];
  copy.shift();
  return productOfArray(copy);
}

// OR
//
function anotherProductOfArray(array) {
  if (array.length === 0) return 1;
  return array.shift() * productOfArray(array);
}
// 1 * [2, 3]
// 2 * [3]
// 6 * 1
// 6
// O(n)

// let result = anotherProductOfArray([1, 2, 3]);

function nextProductOfArray(array) {
  var copy = copy || array.slice();
  return copy.reduce((accum, cur) => accum * cur, 0);
}

// let result = anotherProductOfArray([1, 2, 3]);

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};
let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

function contains(obj, val) {
  for (var key in obj) {
    if (typeof obj[key] === "object" || object[key] === null) {
      return contains(obj[key], val);
    }

    if (obj[key] === val) return true;
  }
  return false;
}

function anotherContains(obj, val) {
  if (typeof obj[key] === "object" || object[key] === null) {
    return obj === val;
  }
  for (var key of obj.values(obj)) {
    if (contains(key, val)) {
      return true;
    }
  }
  return false;
}

// let result = hasIt;
// let secondResult = doesntHaveIt;

var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
function totalIntegers(array) {
  if (array.length === 0) return 0;
  let total = 0;
  var first = array.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(array);
}

// let result = seven;

var l = [1, 2, 3];
// console.log(sumSquares(l));
l = [[1, 2], 3];
// console.log(sumSquares(l));
l = [[[[[[[[[l]]]]]]]]];
// console.log(sumSquares(l));
l = [10, [[10], 10], [10]];
// console.log(sumSquares(l));
function sumSquares(array) {
  if (array.length === 0) return 0;
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += sumSquares(array[i]);
    } else {
      total += array[i] * array[i];
    }
  }
  return total;
}

console.log(replicate(3, 5));
console.log(replicate(1, 69));
console.log(replicate(-2, 6));

function replicate(reps, value) {
  if (reps <= 0) return [];
  return [value].concat(replicate(reps - 1, value));
}
