/**
 * Parses a rfc2822 string date representation into date value
 * For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {Date}
 */
function parseDataFromRfc2822(value) {
  return new Date(value);
}

/**
 * Parses an ISO 8601 string date representation into date value
 * For ISO 8601 date specification refer to : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {Date}
 */
function parseDataFromIso8601(value) {
  return new Date(value);
}

/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {Date} date
 * @return {boolean}
 */
function isLeapYear(date) {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Returns the string representation of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 */
function timeSpanToString(startDate, endDate) {
  const diff = endDate - startDate;
  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  const milliseconds = String(diff % 1000).padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

/**
 * Returns the angle (in radians) between the hands of an analog clock
 * for the specified Greenwich time.
 *
 * @param {Date} date
 * @return {number}
 */
function angleBetweenClockHands(date) {
  const hours = date.getUTCHours() % 12;
  const minutes = date.getUTCMinutes();
  const hourAngle = 0.5 * (60 * hours + minutes);
  const minuteAngle = 6 * minutes;
  let angle = Math.abs(hourAngle - minuteAngle);
  if (angle > 180) angle = 360 - angle;
  return (angle * Math.PI) / 180;
}

/**
 * Returns the date as a string "Month, day" given the day of the year and whether it's a leap year
 *
 * @param {number} day
 * @param {boolean} isLeap
 * @return {string}
 */
function getDay(day, isLeap) {
  // Array with days per month depending on whether it's a leap year
  const monthLengths = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let remainingDay = day;
  let monthIndex = 0;

  // Loop to determine the correct month and remaining day
  while (remainingDay > monthLengths[monthIndex]) {
    remainingDay -= monthLengths[monthIndex];
    monthIndex += 1;
  }

  // Return the formatted string with the month and the day
  return `${monthNames[monthIndex]}, ${remainingDay}`;
}

module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
  getDay,
};
