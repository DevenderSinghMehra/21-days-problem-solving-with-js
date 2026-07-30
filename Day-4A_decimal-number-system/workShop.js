const digitsList1 = [2, 4, 6, 5];

function pureMathNumArrReverse(input) {
  //till 10 number it is working fine, by 10 i mean number not array length if array hold 11, it will not work.
  let finalNum = 0;
  // --
  for (let i = 0; i < input.length; i++) {
    const digit = input[i];
    let multiplier = 1;
    for (let n = 1; n <= i; n++) multiplier *= 10;
    finalNum += digit * multiplier;
  }
  // --
  console.log(finalNum);
  return finalNum;
}
// pureMathNumArrReverse(digitsList1);

function pureMathNumArrReverseV2(input) {
  //till 10 number it is working fine, by 10 i mean number not array length if array hold 11, it will not work.
  let finalNum = 0;
  // --
  for (let i = 0; i < input.length; i++) {
    //by multiplies a digit from a number to its nth place we can reverse order of digits.
    const digit = input[i];
    let multiplier = 10 ** i;
    finalNum += digit * multiplier;
  }
  // --
  console.log(finalNum);
  return finalNum;
}

pureMathNumArrReverseV2(digitsList1);

//?which is faster Math.pow(10,0) or 10**0

/* x+y = 10,
xy when swapped to yx  
what will the value of yx
considering the difference between xy and yx is [36]. */

function message(x, y, digitSum, swapDiff, { callerMessage }) {
  return `X is ${x}, Y is ${y} and X+Y = ${digitSum}. ${callerMessage} difference is ${swapDiff}`;
}

function findSingleDigitNumPair(digitSum, swapDiff) {
  if (digitSum > 10)
    throw new Error("digitsum must be <= 10, above 1 and must be positive");
  // --
  const possibleCombos = digitSum / 2;
  for (let x = 1, y = digitSum - 1; x <= possibleCombos; x++, y--) {
    const xy = x * 10 + y;
    const yx = y * 10 + x;
    // --
    if (xy - yx === swapDiff) {
      return message(x, y, digitSum, swapDiff, {
        callerMessage: `XY(${xy}) and the YX(${yx})`,
      });
    } else if (yx - xy === swapDiff) {
      return message(x, y, digitSum, swapDiff, {
        callerMessage: `YX(${yx}) and the XY(${xy})`,
      });
    }
  }
  // --
  return "not found";
}
// console.log(findSingleDigitNumPair(4, 36));

function findNumPair(digitSum, swapDiff) {
  const possibleCombos = digitSum / 2;

  for (let x = 1, y = digitSum - 1; x <= possibleCombos; x++, y--) {
    // --
    const xy = x * 10 ** String(y).length + y;
    const yx = y * 10 ** String(x).length + x;
    // // --
    if (xy - yx === swapDiff) {
      return message(x, y, digitSum, swapDiff, {
        callerMessage: `XY(${xy}) and the YX(${yx})`,
      });
    } else if (yx - xy === swapDiff) {
      return message(x, y, digitSum, swapDiff, {
        callerMessage: `YX(${yx}) and the XY(${xy})`,
      });
    }
  }
  // --
  return "not found";
}
// console.log(findNumPair(-10, -36));

/* //gpt pressure test
console.log(findNumPair(10, 36)); // x = 7, y = 3
console.log(findNumPair(10, -36)); // x = 3, y = 7
console.log(findNumPair(10, 54)); // x = 8, y = 2

console.log(findNumPair(10, -54)); // x = 2, y = 8

console.log(findNumPair(10, 18)); // x = 6, y = 4
console.log(findNumPair(10, -18)); // x = 4, y = 6

console.log(findNumPair(12, 54)); // x = 9, y = 3
console.log(findNumPair(12, -54)); // x = 3, y = 9

console.log(findNumPair(8, 18)); // x = 5, y = 3
console.log(findNumPair(8, -18)); // x = 3, y = 5

console.log(findNumPair(14, 18)); // x = 8, y = 6
console.log(findNumPair(14, -18)); // x = 6, y = 8

// Invalid / No integer solution
// console.log(findNumPair(10, 20)); // null / invalid
// console.log(findNumPair(11, 36)); // null / invalid
// console.log(findNumPair(5, 54)); // null / invalid
// console.log(findNumPair(18, 18)); // null / invalid (would require x = 10)
 */

// ---------
/* Split Number into Digits

Input: N = 12345
Output: [1, 2, 3, 4, 5]
✨ Extract each digit mathematically using, and return them in an array. Do not use string operations. */

function floorNum(num) {
  let n = num;
  let decimalCount = 0;
  while (n % 1 !== 0) {
    n *= 10;
    decimalCount++;
  }
  const scale = 10 ** decimalCount;
  const afterDecimalDigit = n % scale;
  const fraction = afterDecimalDigit / scale;
  return num - fraction;
}
// floorNum(12.44);
function splitNumIntoDigit(num) {
  const arr = [];
  let n = num;
  while (n > 0) {
    const lastDigit = n % 10;
    arr.push(lastDigit);
    // --
    const numNoLastDigit = floorNum(n / 10); //Math.floor(n / 10);better to use it but ---contrainsts---
    n = numNoLastDigit;
  }

  return arr.reverse();
}
// console.log(splitNumIntoDigit(12345));

/* Remove the Decimal Point Mathematically

Input: N = 12.34
Output: 1234
✨ Do not use string operations. */

function getNumWithoutDecimal(num) {
  let n = num;
  //n%1 = 0, when the n is an integer
  while (n % 1 !== 0) n *= 10;
  // --
  return n;
}
// getNumWithoutDecimal(12.34);

function getNumWithoutDecimalV2(num) {
  let n = num;
  while (Number.isInteger(n) === false) n = n * 10;
  // --
  return n;
}
// getNumWithoutDecimalV2(12.34);

function getNumWithoutDecimalV3(num) {
  if (Number.isInteger(num)) throw new Error("no decimals found!");
  // --
  let n = num;
  while (!Number.isInteger(n)) n *= 10;

  // --
  return n;
}
// getNumWithoutDecimalV2(12.34);

/* Separate Whole and Fractional Parts of a Number

Input: N = 5.75
Output: Whole = 5, Fraction = 0.75
✨ Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use Math.trunc() method. */

function getSeperateWholeAndFractionOfNum(num) {
  const n = num;
  const fraction = n % 1;
  const whole = n - fraction;
  return { whole, fraction };
}
// console.log(getSeperateWholeAndFractionOfNum(5.77));

function getSeperateWholeAndFractionOfNumV2(num) {
  let n = num;
  let decimalPlaces = 0;
  //n%1=0, when n is a integer
  while (n % 1 !== 0) {
    n *= 10; //remove decimal
    decimalPlaces++; //counts num of digits after decimal
  }
  // --
  const scale = 10 ** decimalPlaces;
  const afterDecimalDigit = n % scale; //extract after deci. digits
  const fraction = afterDecimalDigit / scale; //put a decimal before digits

  const whole = num - fraction;
  return { whole, fraction };
}
// console.log(getSeperateWholeAndFractionOfNumV2(5.78));

/* 

Count Whole and Fractional Digits Separately

Input: N = 12.345
Output: Whole Count = 2, Fraction Count = 3
✨ Separate the number into whole and fractional parts, then count digits in each part using pure math. Don't use Math.trunc() method. */

function getDigitCount(num) {
  let n = num;
  let decimalCount = 0;
  //n%1=0, when n is a integer
  while (n % 1 !== 0) {
    n *= 10; //remove decimal
    decimalCount++; //counts num of digits after decimal
  }
  const scale = 10 ** decimalCount;
  const afterDeciDigit = n % scale; //extract after deci. digits
  const fraction = afterDeciDigit / scale; //put a decimal before digits

  const whole = num - fraction;
  let wholeCount = whole === 0 ? 1 : 0;

  while (whole !== 0) {
    const lastDigit = whole % 10;
    whole /= 10;
    whole = whole - lastDigit / 10;
    wholeCount++;
  }
  return { wholeCount, fractionCount: decimalCount };
}
// console.log(getDigitCount(-2.345));

function numInfo(num) {
  let n = num;
  let decimalCount = 0;
  //n%1=0, when n is a integer
  while (n % 1 !== 0) {
    n *= 10; //remove decimal
    decimalCount++; //counts num of digits after decimal
  }
  const scale = 10 ** decimalCount;
  const afterDeciDigit = n % scale; //extract after deci. digits
  const fraction = afterDeciDigit / scale; //put a decimal before digits
  const whole = num - fraction;
  //we can also share fraction with it.
  return { whole, decimalCount };
}

function getDigitCountV2(num) {
  let { whole, decimalCount } = numInfo(num);
  let wholeCount = whole === 0 ? 1 : 0;

  while (whole !== 0) {
    const lastDigit = whole % 10;
    whole /= 10;
    whole = whole - lastDigit / 10;
    wholeCount++;
  }
  return { wholeCount, fractionCount: decimalCount };
}
console.log(getDigitCountV2(-1.345));

/* 
function getDigitCountV2(num) {
//!though it is fine but i have used methods in it, which make it ineligible for a valid solution
  const isPositive = num > 0;
  let n = num;
  let fractionCount = 0;
  //n%1=0, when n is a integer
  while (n % 1 !== 0) {
    n *= 10; //remove decimal
    fractionCount++; //counts num of digits after decimal
  }

  let whole = Math.round(num);
  let wholeCount = whole === 0 ? 1 : 0;

  while (whole !== 0) {
    const deci = whole / 10;
    whole = isPositive ? Math.floor(deci) : Math.ceil(deci);
    wholeCount++;
  }

  return { wholeCount, fractionCount };
}

console.log(getDigitCountV2(10.345));
 */
// ---------------------------
/* Generate a Decimal Number from Whole and Fractional Digits

Input: Whole = [1, 2], Fraction = [3, 4]
Output: 12.34
✨ Form the number mathematically by combining the digits from both arrays using powers of 10. */

function joinDigit(arr) {
  let num = 0;
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    const placeValue = 10 ** count;
    const n = arr[i] * placeValue;
    num += n;
    count++;
  }
  return { num, digitCount: count };
}

function combineNum({ whole, fraction }) {
  const { num: finalWhole } = joinDigit(whole);
  const { num: frac, digitCount: fracDC } = joinDigit(fraction);
  const finalFrac = frac / 10 ** fracDC;
  // --
  const finalNum = finalWhole + finalFrac;
  return finalNum;
}
console.log(combineNum({ whole: [1, 2, 3, 3, 3], fraction: [3, 4] }));
