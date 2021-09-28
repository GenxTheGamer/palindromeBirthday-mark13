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
  var dateStr = {
    day: "",
    month: "",
    year: "",
  };

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

// console.log(dateFormats(date));

function checkPalindromeForDateFormats(date) {
  var listOfDates = dateFormats(date);
  flag = false;

  for (let i = 0; i < listOfDates.length; i++) {
    if (isPalindrome(listOfDates[i])) {
      flag = true;
      break;
    }
  }
  return flag;
}

function checkLeapYear(year) {
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  if (year % 400 === 0) {
    return true;
  }
  return false;
}

function getNextDate(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  const monthDaysArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    //Month is febuary
    if (checkLeapYear(year)) {
      //Checking leapyear using above checkLeapYear()
      if (day > 29) {
        //If Day is greater than 29 then make day = one and go to next month;
        day = 1;
        month++;
      }
    } else {
      if (day > 28) {
        //If day is greater than 28 then and not leap year then day = 1 of next month;
        day = 1;
        month++;
      }
    }
  } else {
    if (day > monthDaysArray[month - 1]) {
      //If day is greater than the days given in the monthDayArray then day = 1 of next month;
      day = 1;
      month++;
    }
  }

  if (month > 12) {
    //If month is greater than 12 (suppose its 31th dec) then month is 1st which is january and year is incremented.
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
}

function checkNextPalindromeDate(date) {
  let dayCount = 0;
  var nextDate = getNextDate(date);

  while (1) {
    dayCount++;
    var isPalindrome = checkPalindromeForDateFormats(nextDate);
    if (isPalindrome) {
      break;
    }
    nextDate = getNextDate(nextDate);
  }

  return [dayCount, nextDate];
}

// var date = {
//   day: 8,
//   month: 8,
//   year: 2021,
// };

// console.log(checkNextPalindromeDate(date));

const inputBirthday = document.querySelector("#input-birthday");
const buttonResult = document.querySelector("#button-check");
const output = document.querySelector("#output");

function clickHandler() {
  var bdayString = inputBirthday.value;
  if (bdayString !== "") {
    var listOfDate = bdayString.split("-");
    var date = {
      day: Number(listOfDate[2]),
      month: Number(listOfDate[1]),
      year: Number(listOfDate[0]),
    };

    var isPalindrome = checkPalindromeForDateFormats(date);
    if (isPalindrome) {
      output.innerText = "WOOO HOOO !!!! Your Birthday is Palindrome 🎉🎉🎉🎉";
    } else {
      var [dayCount, nextDate] = checkNextPalindromeDate(date);
      output.innerText = `Your Birthday was not palindrome 😔 .The Next Palindrome Date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${dayCount} days`;
    }
  }
}

buttonResult.addEventListener("click", clickHandler);
