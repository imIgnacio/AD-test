// Array is sorted
function squaredArray(array) {
  const squaredArray = array.map(number => number * number);
  squaredArray.sort((a, b) => a - b);

  return squaredArray;
}

// console.log(squaredArray([1, 2, 3, 5, 6, 8, 9]))
// console.log(squaredArray([-10, -5, 0, 5, 10]))

// Non constructible change
function getImpossibleChange(array) {
  array.sort((a, b) => a - b);
  let currentChange = 0;

  for (let i = 0; i < array.length; i++) {
    const coin = array[i];
    if (coin > currentChange + 1) {
      return currentChange + 1;
    }
    currentChange += coin;
  }
  
  return currentChange + 1;
}

// console.log(getImpossibleChange([5, 7, 1, 1, 2, 3, 22]));
// console.log(getImpossibleChange([1, 1, 1, 1, 1]));
// console.log(getImpossibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]));