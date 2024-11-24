/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

/**
 * Returns the factorial of the specified integer n.
 */
function getFactorial(n) {
  return n === 0 ? 1 : n * getFactorial(n - 1);
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c.
 */
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 */
function doRectanglesOverlap(rect1, rect2) {
  return (
    rect1.left < rect2.left + rect2.width && rect1.left + rect1.width > rect2.left
    && rect1.top < rect2.top + rect2.height
    && rect1.top + rect1.height > rect2.top
  );
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 */
function isInsideCircle(circle, point) {
  const distance = Math.sqrt((point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2);
  return distance < circle.radius;
}

/**
 * Returns the first non repeated char in the specified string otherwise returns null.
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

/**
 * Returns the string representation of math interval.
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = isStartIncluded ? '[' : '(';
  const end = isEndIncluded ? ']' : ')';
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return `${start}${min}, ${max}${end}`;
}

/**
 * Reverse the specified string.
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number.
 */
function reverseInteger(num) {
  return parseInt(num.toString().split('').reverse().join(''), 10);
}

/**
 * Validates the CCN (credit card number).
 */
function isCreditCardNumber(ccn) {
  const digits = ccn.toString().split('').reverse().map(Number);
  return (
    digits.reduce((sum, digit, idx) => {
      let modifiedDigit = digit;
      if (idx % 2 === 1) {
        modifiedDigit *= 2;
        if (modifiedDigit > 9) modifiedDigit -= 9;
      }
      return sum + modifiedDigit;
    }, 0) % 10 === 0
  );
}

/**
 * Returns the digital root of integer.
 */
function getDigitalRoot(num) {
  return ((num - 1) % 9) + 1;
}

/**
 * Returns true if the specified string has the balanced brackets.
 */
function isBracketsBalanced(str) {
  const stack = [];
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '[',
    '>': '<',
  };
  let balanced = true; // Инициализируем переменную для отслеживания состояния баланса
  str.split('').forEach((char) => {
    if ('({[<'.includes(char)) {
      stack.push(char);
    } else if (')}]>'.includes(char)) {
      if (stack.pop() !== brackets[char]) {
        balanced = false; // Если скобка не совпала, изменяем состояние
      }
    }
  });
  // Если стек пуст в конце и состояние balance не изменилось, значит всё правильно
  return balanced && stack.length === 0;
}

/**
 * Returns the string with n-ary (binary, ternary, etc) representation of specified number.
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for specified array of full filenames.
 */
function getCommonDirectoryPath(pathes) {
  const splitPathes = pathes.map((path) => path.split('/'));
  const minLength = Math.min(...splitPathes.map((p) => p.length));
  let commonPath = '';
  for (let i = 0; i < minLength; i += 1) {
    const segment = splitPathes[0][i];
    if (splitPathes.every((path) => path[i] === segment)) {
      commonPath += `${segment}/`;
    } else {
      break;
    }
  }
  return commonPath;
}

/**
 * Returns the product of two specified matrixes.
 */
function getMatrixProduct(m1, m2) {
  const rowsA = m1.length;
  const colsA = m1[0].length;
  const colsB = m2[0].length;
  const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));
  for (let i = 0; i < rowsA; i += 1) {
    for (let j = 0; j < colsB; j += 1) {
      for (let k = 0; k < colsA; k += 1) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return result;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 */
function evaluateTicTacToePosition(position) {
  const lines = [
    [position[0][0], position[0][1], position[0][2]],
    [position[1][0], position[1][1], position[1][2]],
    [position[2][0], position[2][1], position[2][2]],
    [position[0][0], position[1][0], position[2][0]],
    [position[0][1], position[1][1], position[2][1]],
    [position[0][2], position[1][2], position[2][2]],
    [position[0][0], position[1][1], position[2][2]],
    [position[0][2], position[1][1], position[2][0]],
  ];

  let result;
  lines.forEach((line) => {
    if (line.every((cell) => cell === 'X')) result = 'X';
    if (line.every((cell) => cell === '0')) result = '0';
  });

  return result;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
