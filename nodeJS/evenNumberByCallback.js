const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const evenNumbers = removeOdd(array, (x) => x % 2 == 0);

console.log(evenNumbers);


// Keep only even numbers
function removeOdd(numbers, callback) {
  const evenArray = [];
  for (const x of numbers) {
    if (callback(x)) {
        evenArray.push(x);
    }
  }
  return evenArray;
}