// add whatever parameters you deem necessary
function separatePositive(numsArray) {
  let left = 0;
  let right = numsArray.length - 1;

  while (left < right) {
    if (numsArray[left] < 0 && numsArray[right] > 0) {
      let temp = numsArray[left];
      numsArray[left] = numsArray[right];
      numsArray[right] = temp;
    } else if (numsArray[left] > 0) {
      left++;
    } else if (numsArray[right] < 0) {
      right--;
    }
  }

  return numsArray;
}

module.exports = separatePositive;
