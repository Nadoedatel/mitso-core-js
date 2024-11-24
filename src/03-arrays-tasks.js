/* ********************************************************************************************
 *                                                                                            *
 * Implementing various array manipulation tasks using standard Array methods only.           *
 *                                                                                            *
 ******************************************************************************************** */

/**
 * Returns an index of the specified element in array or -1 if element is not found
 */
function findElement(arr, value) {
  return arr.indexOf(value);
}

/**
 * Generates an array of odd numbers of the specified length
 */
function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => 2 * i + 1);
}

/**
 * Returns the doubled array - elements of the specified array repeated twice
 */
function doubleArray(arr) {
  return arr.concat(arr);
}
/**
 * Returns an array of positive numbers from the specified array
 */
function getArrayOfPositives(arr) {
  return arr.filter((num) => num > 0);
}

/**
 * Returns the array with strings only from the specified array
 */
function getArrayOfStrings(arr) {
  return arr.filter((item) => typeof item === 'string');
}

/**
 * Removes falsy values from the specified array
 */
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

/**
 * Returns the array of uppercase strings from the specified array
 */
function getUpperCaseStrings(arr) {
  return arr.map((str) => str.toUpperCase());
}

/**
 * Returns the array of string lengths from the specified string array
 */
function getStringsLength(arr) {
  return arr.map((str) => str.length);
}

/**
 * Inserts the item into specified array at specified index
 */
function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

/**
 * Returns the n first items of the specified array
 */
function getHead(arr, n) {
  return arr.slice(0, n);
}

/**
 * Returns the n last items of the specified array
 */
function getTail(arr, n) {
  return arr.slice(-n);
}

/**
 * Returns CSV representation of two-dimensional numeric array
 */
function toCsvText(arr) {
  return arr.map((row) => row.join(',')).join('\n');
}

/**
 * Transforms the numeric array into the array of squares
 */
function toArrayOfSquares(arr) {
  return arr.map((num) => num * num);
}

/**
 * Transforms the numeric array to the moving sum array
 */
function getMovingSum(arr) {
  return arr.reduce((acc, curr, i) => {
    acc.push((acc[i - 1] || 0) + curr);
    return acc;
  }, []);
}

/**
 * Returns every second item from the specified array
 */
function getSecondItems(arr) {
  return arr.filter((_, i) => i % 2 === 1);
}

/**
 * Propagates every item in sequence its position times
 */
function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}

/**
 * Returns the 3 largest numbers from the specified array
 */
function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3);
}

/**
 * Returns the number of positive numbers from specified array
 */
function getPositivesCount(arr) {
  return arr.filter((num) => typeof num === 'number' && num > 0).length;
}

/**
 * Sorts digit names by their numeric order
 */
function sortDigitNamesByNumericOrder(arr) {
  const digitOrder = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return arr.sort((a, b) => digitOrder.indexOf(a) - digitOrder.indexOf(b));
}

/**
 * Returns the sum of all items in the specified array
 */
function getItemsSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

/**
 * Returns the number of all falsy values in the specified array
 */
function getFalsyValuesCount(arr) {
  return arr.filter((item) => !item).length;
}

/**
 * Returns the number of all occurrences of the specified item in an array
 */
function findAllOccurrences(arr, item) {
  return arr.filter((el) => el === item).length;
}

/**
 * Concatenates all elements from specified array into a single string with ',' delimiter
 */
function toStringList(arr) {
  return arr.join(',');
}

/**
 * Sorts the specified array by country name first, and city name (if countries are equal)
 */
function sortCitiesArray(arr) {
  return arr.sort((a, b) => a.country.localeCompare(b.country) || a.city.localeCompare(b.city));
}

/**
 * Creates an identity matrix of the specified size
 */
function getIdentityMatrix(n) {
  return [...Array(n)].map((_, i) => [...Array(n)].map((__, j) => (i === j ? 1 : 0)));
}

/**
 * Creates an array of integers from the specified start to end (inclusive)
 */
function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

/**
 * Returns array containing only unique values from the specified array
 */
function distinct(arr) {
  return Array.from(new Set(arr));
}

/**
 * Groups elements of the specified array by key
 */
function group(array, keySelector, valueSelector) {
  return array.reduce((map, item) => {
    const key = keySelector(item);
    const value = valueSelector(item);
    if (map.has(key)) {
      map.get(key).push(value);
    } else {
      map.set(key, [value]);
    }
    return map;
  }, new Map());
}

/**
 * Projects each element of the specified array to a sequence and flattens the result
 */
function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

/**
 * Returns an element from the multidimensional array by the specified indexes
 */
function getElementByIndexes(arr, indexes) {
  return indexes.reduce((acc, index) => acc[index], arr);
}

/**
 * Swaps the head and tail of the specified array
 */
function swapHeadAndTail(arr) {
  const tail = arr.slice(Math.round(arr.length / 2), arr.length);
  const head = arr.slice(0, Math.floor(arr.length / 2));
  const cEl = arr.slice(arr.length / 2, arr.length / 2 + 1);
  return arr.length % 2 ? tail.concat(cEl).concat(head) : tail.concat(head);
}

module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  toStringList,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
