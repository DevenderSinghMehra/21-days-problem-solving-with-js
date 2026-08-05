//till 5 i have done in 4a
//*answer 6
function isPalindrome(num) {
  //create a reverseNum
  let n = num;
  let reversedNum = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    const lift = reversedNum * 10; //adding a zero in the end to create space for a new single digit so that when its added it get the last position
    reversedNum = lift + lastDigit;
    // --
    const numNoLastDigit = Math.floor(n / 10);
    n = numNoLastDigit;
  }
  // --
  return num === reversedNum;
}
// isPalindrome(123456);

//*answer 7
function isArmstrong(num) {
  //only intergers are armstrong number --not adding validation but not decimal num are allowed
  const arr = [];
  let temp = num;
  while (temp > 0) {
    const lastDigit = temp % 10;
    arr.push(lastDigit);
    // --
    const tempNoLastDigit = Math.floor(temp / 10);
    temp = tempNoLastDigit;
  }
  // --
  let totalSum = 0;
  const totalDigit = arr.length;
  for (let i = 0; i < arr.length; i++) totalSum += arr[i] ** totalDigit;
  //   --
  return num === totalSum;
}

// isArmstrong(153);

/* HOME WORK SOLUTIONS */
// answer-1
function getDigitSum(num) {
  let temp = num;
  let sum = 0;
  while (temp > 0) {
    const lastDigit = temp % 10;
    sum += lastDigit; //adding last digit

    // -- remove temp last digit
    const tempNoLastDigit = Math.floor(temp / 10);
    temp = tempNoLastDigit;
  }
  return sum;
}

// console.log(getDigitSum(1234));

// answer-2
function getDigitAverage(num) {
  if (num === 0) {
    console.error("we do not accept zero");
    return;
  }
  let temp = num;
  let sum = 0;
  let totalDigits = 0;
  while (temp > 0) {
    const lastDigit = temp % 10;
    sum += lastDigit; //adding last digit
    // -- remove temp last digit
    const tempNoLastDigit = Math.floor(temp / 10);
    temp = tempNoLastDigit;
    //--count digits
    totalDigits++;
  }
  if (totalDigits === 1) {
    console.error("you need to pass more than 1 digit to count digit average");
    return;
  }

  const average = Number((sum / totalDigits).toFixed(2));
  return average;
}
// console.log(getDigitAverage(13));

//answer-3
function getLargestAndSmallestDigit(num) {
  if (num === 0) return { largest: 0, smallest: 0 };
  let largest = 0;
  let smallest = 10; //last digit will always be a single digit a single digit cannot be more then 10,
  // --
  let temp = num;
  while (temp > 0) {
    const lastDigit = temp % 10;
    if (lastDigit > largest) largest = lastDigit;
    if (lastDigit < smallest) smallest = lastDigit;
    // --remove temp last digit
    const tempNoLastDigit = Math.floor(temp / 10);
    temp = tempNoLastDigit;
  }
  return { largest, smallest };
}
// console.log(getLargestAndSmallestDigit(432583));
//*answer-4

function getFactorial(num) {
  // --validate num
  if (num === 0 || num === 1) return 1;
  // --calculate factorial
  let temp = num;
  let factorial = 1;
  while (temp > 1) {
    factorial *= temp;
    temp--;
  }
  return factorial;

  /*factorial of 0 = 1, it is an math axiom:read in details in workshop.js*/
}

function isStrongNum(num) {
  // --
  let temp = num;
  let factorialSum = 0;
  while (temp > 0) {
    const lastDigit = temp % 10;
    factorialSum += getFactorial(lastDigit);
    // --remove last digit from temp
    const tempNoLastDigit = Math.floor(temp / 10);
    temp = tempNoLastDigit;
  }
  return num === factorialSum;
}

/* actually there on only 4 strong num in base-10 mathematics. so we can even implement a simple form */

function isStrongNumV2(num) {
  if (num === 1 || num === 2 || num === 145 || num === 40585) return true;
  else return false;
} //don't even need to check `pragmatic solution`

//*Q5 answer

function isAutomorphicNum(num) {
  //counting digits of num
  let temp = num;
  let digitCount = 0;
  while (temp > 0) {
    digitCount++;
    // --remove last digit from temp
    const tempNoLastDigit = Math.floor(temp / 10);
    temp = tempNoLastDigit;
  }
  // --checking automorphic
  const square = num ** 2;
  const squareRequiredEndDigits = square % 10 ** digitCount; //extracting same number of digits as the num from the end of square

  return num === squareRequiredEndDigits;
}

function isAutomorphicNumV2(num) {
  //got you covered till 1000
  if (
    num === 0 ||
    num === 1 ||
    num === 5 ||
    num === 6 ||
    num === 25 ||
    num === 76 ||
    num === 376 ||
    num === 625
  ) {
    return true;
  } else return false;
} //don't even need to check `pragmatic solution`
// console.log(isAutomorphicNumV2(6));

//*Q6 answer

function getDigitFrequency(num) {
  if (num === 0) return { 0: 1 };
  const frequency = {};
  // --
  let temp = num;
  while (temp > 0) {
    const lastDigit = temp % 10;
    // --count digit repetition, if present increase if not then assign with 1
    frequency[lastDigit] ? frequency[lastDigit]++ : (frequency[lastDigit] = 1);
    //removing last digit from temp
    const tempNoLastDigit = Math.floor(temp / 10);
    temp = tempNoLastDigit;
  }
  return frequency;
}
// console.log(getDigitFrequency(0));

//*Q7 answer

function isHarshadNumV(num) {
  if (num < 0) return "only an positive integer is acceptable";
  let temp = num;
  //sum of digits
  let sumOfDigits = 0;
  while (temp > 0) {
    const lastDigit = temp % 10;
    sumOfDigits += lastDigit;
    // removing last digit from temp
    const tempNoLastDigit = Math.floor(temp / 10);
    temp = tempNoLastDigit;
  }
  /*for integers, if a is divisible by b then their remainder will always be zero and the quotient will always be an integer */
  return num % sumOfDigits === 0;
}
console.log(isHarshadNumV(18));
