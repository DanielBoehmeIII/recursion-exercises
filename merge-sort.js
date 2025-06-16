#!/usr/bin/env node

// let array = [1, 1, 4, 5];
// var sortedArray = mergeSort(array, function (array, lesser) {
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i + 1] < array[i]) {
//     lesser.push(array[i + 1]);
//       array = array.slice(0, i + 1);
//     }
//   }
//   return;
// });
// function mergeSort(array) {
//   var copy = array.slice();
//   const lesser = [];
//   const sorted = [];
//   var unsorted = false;
//   for (let i = 0; i < copy.length - 2; i++) {
//     if (copy[i + 1] < copy[i]) {
//       unsorted = true;
//     lesser.push(copy[i + 1]);
//       copy = copy.slice(0, i + 1);
//     }
//   }
//   if (unsorted !== true) {
//     return copy;
//   }
//   for (let i = 0; i < lesser.length - 1; i++) {
//     for (let j = 0; j < copy.length - 1; i++) {
//       if (lesser[i] > copy[j]) {
//       sorted.push(lesser);
//           sorted.push(copy[j]);
//       } else {
//           sorted.push(copy[j]);
//       }
//   }
//     lesser = mergeSort(lesser);
//     sorted = mergeSort(sorted);
//     return sorted;
// }
// array[4, 5, 1, 3]
// lesser[1]
// greater[4, 5, 3]*
// lesser[3]
// sorted[3, 4, 5]
// sorted[1, 3, 4, 5]

function mergeSort(array) {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  let i = 0;
  let j = 0;
  let result = [];
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  return result.concat(left.slice(i).concat(right.slice(j)));
}

console.log(mergeSort([5, 4, 6, 7]));
