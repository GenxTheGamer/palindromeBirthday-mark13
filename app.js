function stringReverse(str) {
  var charList = str.split("");
  var reversedList = charList.reverse();
  var joinList = reversedList.join("");
  return joinList;
}

function isPalindrome(str) {
  var reverseList = stringReverse(str);
  return str === reverseList;
}

console.log(isPalindrome("lool"));
