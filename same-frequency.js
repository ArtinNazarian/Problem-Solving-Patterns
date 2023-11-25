// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  let frequency1 = {};
  let frequency2 = {};

  for (let n of str1) {
    frequency1[n] = frequency1[n] + 1 || 1;
  }

  for (let n of str2) {
    frequency2[n] = frequency2[n] + 1 || 1;
  }

  for (let key in frequency1) {
    if (frequency2[key] !== frequency1[key]) return false;
  }
  return true;
}

module.exports = sameFrequency;
