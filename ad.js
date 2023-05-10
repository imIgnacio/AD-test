// Array is sorted
function squaredArray(array) {
  const squaredArray = array.map(number => number * number);
  squaredArray.sort((a, b) => a - b);

  return squaredArray;
}

console.log(squaredArray([1, 2, 3, 5, 6, 8, 9]))
console.log(squaredArray([-10, -5, 0, 5, 10]))

// Non constructible change
function getImpossibleChange(array) {
  array.sort((a, b) => a - b);
  const arrayCopy = [...array];
  const maxNumber = array[array.length -1];
  let changeAmount = 1;

  for (let i = 0; i < maxNumber; i++) {
    if (number > changeAmount) {
      return changeAmount;
    }
    changeAmount++;
  }

  return changeAmount;
}

console.log(getImpossibleChange([5, 7, 1, 1, 2, 3, 22]));