/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let bigNum = numbers[0];
    for(var i=0;i<numbers.length;i++){
        bigNum=Math.max(bigNum,numbers[i]);
    }
    return bigNum;
}

module.exports = findLargestElement;