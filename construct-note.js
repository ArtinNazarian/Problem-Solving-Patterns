// add whatever parameters you deem necessary
function constructNote(str1, str2) {
  let strFreq1 = createObject(str1);
  let strFreq2 = createObject(str2);

  function createObject(str) {
    let strObj = {};
    for (let ltr of str) {
      strObj[ltr] = strObj[ltr] + 1 || 1;
    }
    return strObj;
  }

  for (let key in strFreq1) {
    if (!strFreq2[key]) return false;
    if (strFreq1[key] > strFreq2[key]) return false;
  }
  return true;
}

module.exports = constructNote;
