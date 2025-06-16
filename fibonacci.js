#!/usr/bin/env node

function fibs(length) {
  if (length === 1) {
    return [0];
  }
  let array = [0, 1];
  for (let i = 0; i < length - 2; i++) {
    array[i + 2] = array[i] + array[i + 1];
  }
  return array;
}
// console.log(fibs(8));

function fibsRec(n) {
  if (n <= 1) return [0];
  if (n === 2) return [0, 1];
  const prev = fibsRec(n - 1);
  const next = prev[prev.length - 1] + prev[prev.length - 2];
  return [...prev, next];
}
// spread operator === let newArray = prev.slice(); // copy the array
// newArray.push(next);
// return newArray;

// 4
// (3)
// (3)* (2)
// (3)* [0, 1]
// [0, 1, 1]
// [0, 1, 1, 2]

console.log(fibsRec(8));
// 3
// 0, 1, 1
// 0, 1, 0 + 1
// 0, 1, array[0] + array[1]
// 0, 1, 1 + 0

// 4
// 0, 1, 1, 2
// 0, 1, 0 + 1, 1 + 1
// 0, 1, array[0] + array[1], array[1] + array[2]
// 0, 1, 0 + 1, 1 + 1
// (3) + 1
// 0, 1, 1, 2

// function fibs(length) {
//   if (length <= 0) return [];
// [[].length   + 1] = [[].length ([].length - 1)] + [[].length ([].length - 2)];
//
//   return [0, 1].concat(fibs(length - 1));
// }
