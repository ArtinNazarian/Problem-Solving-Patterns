// add whatever parameters you deem necessary
function twoArrayObject(ltrArray, numArray) {
  let result = {};
  for (let key in ltrArray) {
    let letter = ltrArray[key];
    let number = numArray[key];
    result[letter] = number || null;
  }
  return result;
}

module.exports = twoArrayObject;
