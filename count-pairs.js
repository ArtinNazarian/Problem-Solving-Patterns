// add whatever parameters you deem necessary
function countPairs(numsArray, target) {
  numsArray.sort((a, b) => a - b);
  console.log(numsArray);
  let left = 0;
  let right = numsArray.length - 1;
  let count = 0;

  while (left < right) {
    if (numsArray[left] + numsArray[right] === target) {
      count++;
      left++;
      right--;
    } else if (numsArray[left] + numsArray[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  return count;
}

module.exports = countPairs;
