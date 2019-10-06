//Create a function named talkingCalendar that takes in a date string with 
//the format YYYY/MM/DD, and returns a new human readable date that looks l
//ike December 2nd, 2017.

let talkingCalendar = function (date) {
  
  let arrDate = date.split("/", 3);

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const days = ["1st, ", "2nd, ", "3rd, ", "4th, ", "5th, ", "6th, ", "7th, ", "8th, ", "9th, ", "10th, ",
    "11th, ", "12th, ", "13th, ", "14th, ", "15th, ", "16th, ", "17th, ", "18th, ", "19th, ", "20th, ",
    "21st, ", "22nd, ", "23rd, ", "24th, ", "25th, ", "26th, ", "27th, ", "28th, ", "29th, ", "30th, ", "31st, "]
  
    return months[Number(arrDate[1]) - 1] + " " + days[Number(arrDate[2]) - 1] + arrDate[0];
};

console.log(talkingCalendar("1995/09/12"));
//console.log(talkingCalendar("2007/11/11"));
//console.log(talkingCalendar("1987/08/27"));

//December 2nd, 2017
//November 11th, 2007
//August 24th, 1987