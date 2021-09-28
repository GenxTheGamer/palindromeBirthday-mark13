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

function dateFormats(date) {
  var dateString = dateFromNumberToString(date);
  let ddmmyyyy = dateString.day + dateString.month + dateString.year;
  let mmddyyyy = dateString.month + dateString.day + dateString.year;
  let yyyymmdd = dateString.year + dateString.month + dateString.day;
  let ddmmyy = dateString.day + dateString.month + dateString.year.slice(2, 4);
  let mmddyy = dateString.month + dateString.day + dateString.year.slice(2, 4);
  let yymmdd = dateString.year.slice(2, 4) + dateString.month + dateString.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

var date = {
  day: 10,
  month: 02,
  year: 2021,
};

console.log(dateFormats(date));
