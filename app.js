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

// console.log(isPalindrome("lool"));

function dateFromNumberToString(date) {
  var dateStr = { day: "", month: "", year: "" };

  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }

  dateStr.year = date.year.toString();

  return dateStr;
}

var date = {
  day: 10,
  month: 2,
  year: 2020,
};
console.log(dateFromNumberToString(date));
