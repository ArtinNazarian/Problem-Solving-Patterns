// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let len = str1.length;
  let count = 0;

  let ptr1 = 0;
  let ptr2 = 0;

  while (ptr2 < str2.length) {
    if (str1[ptr1] === str2[ptr2]) {
      ptr1++;
      ptr2++;
      count++;
    } else {
      ptr2++;
    }
  }
  return count === len;
}

module.exports = isSubsequence;
