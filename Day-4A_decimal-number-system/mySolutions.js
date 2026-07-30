// the remainder operator %

//*Q1
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

function splitNumIntoDigit(num) {
  const arr = [];
  let n = num;
  while (n > 0) {
    const lastDigit = n % 10;
    arr.push(lastDigit); //arr.unshift(lastDigit);this can be done but it is slow as unshift have to shift all the elements to the next index then it places the passed value doing it in a loop is slow, there for push which just adds in the last faster, then a loop with reverse is better then adding + looping to shift digit to the next index.
    // --
    const numNoLastDigit = floorNum(n / 10); //Math.floor(n / 10);better to use it but ---contrainsts---
    n = numNoLastDigit;
  }

  return arr.reverse();
}
console.log(splitNumIntoDigit(12345));

//*Q2
function getNumWithoutDecimal(num) {
  if (n % 1 !== 0) throw new Error("no decimals found!");
  let n = num;
  //n%1 = 0, when the n is an integer
  while (n % 1 !== 0) n *= 10;
  // --
  return n;
}
// console.log(getNumWithoutDecimal(12.34));

//*Q3
function getSeperateWholeAndFractionOfNum(num) {
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
console.log(getSeperateWholeAndFractionOfNum(5.7834390439403));

//*Q4
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

function getDigitCount(num) {
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
// console.log(getDigitCount(-1.345));

//*Q5
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
// console.log(combineNum({ whole: [1, 2, 3, 3, 3], fraction: [3, 4] }));

//--------------------considering i am allowed to use Math method except for the Math.trunc method
// *Q1
function splitNumIntoDigitV2(num) {
  const arr = [];
  let n = num;
  while (n > 0) {
    const lastDigit = n % 10;
    arr.push(lastDigit);
    // --
    const numNoLastDigit = Math.floor(n / 10);
    n = numNoLastDigit;
  }
  return arr.reverse();
}
// console.log(splitNumIntoDigitV2(12345));

// *Q2
function getNumWithoutDecimalV2(num) {
  if (!Number.isInteger(n)) throw new Error("no decimals found!");
  let n = num;
  while (!Number.isInteger(n)) n *= 10;
  // --
  return n;
}
// console.log(getNumWithoutDecimalV2(12.34));

//for rest i can implement methods but it will cause precision loss (float point error)~what to do js number system.

// before state it complete do the revese digit problem as well.
