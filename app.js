function stringReverse(str) {
  var charList = str.split("");
  var reversedList = charList.reverse();
  reversedList.join("");
  return reversedList;
}

console.log(stringReverse("hello"));
