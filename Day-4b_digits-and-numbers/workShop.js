function reverseNum(num) {
  //create a reverseNum
  let n = num;
  let reversedNum = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    const lift = reversedNum * 10; //create space for a new digit by adding a zero in the end.
    reversedNum = lift + lastDigit;
    // --
    const numNoLastDigit = Math.floor(n / 10);
    n = numNoLastDigit;
  }
  return reversedNum;
}

/* 
Q6 Check if a Number is a Palindrome

Input: N = 121
Output: Palindrome
✨ Compares original and reversed numbers to detect symmetry.
 */

function isPalindrome(num) {
  //split num into array of digit
  const arr = [];
  let n = num;
  while (n > 0) {
    const lastDigit = n % 10;
    arr.push(lastDigit);
    // --
    const numNoLastDigit = Math.floor(n / 10);
    n = numNoLastDigit;
  }
  //   --
  let isPalindrome;
  for (let i = 0, z = arr.length - 1; i < arr.length; i++, z--) {
    if (arr[i] === arr[z]) isPalindrome = true;
    else {
      isPalindrome = false;
      break; //quit the loop
    }
  }

  return isPalindrome;
}
// isPalindrome(121);

function isPalindromeV2(num) {
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
// isPalindromeV2(143434341);
function isPalindromeV2(num) {
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
// isPalindromeV2(143434341);

function isPalindromeV3(num) {
  //split num into array of digit
  const arr = [];
  let n = num;
  while (n > 0) {
    const lastDigit = n % 10;
    arr.push(lastDigit);
    // --
    const numNoLastDigit = Math.floor(n / 10);
    n = numNoLastDigit;
  }
  //create a reverseNum
  const reversedNum = Number(arr.join(""));
  // --
  return num === reversedNum;
}
// isPalindromeV3(123456);

/*Q7 Check if a Number is an Armstrong Number (also called a Narcissistic Number)

Input: N = 153
Output: Armstrong Number
✨ Armstrong Number: 1³ + 5³ + 3³ = 153, 1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634. */

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

// 🏠 Homework / Practice Challenge
/* 

Q1
Find the Sum of Digits

Input: N = 987
Output: 24
✨ Builds understanding of digit extraction and accumulation. */

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

function getDigitSumV2(temp) {
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

// console.log(getDigitSumV2(1234));

/* 
*  2. **Find the Average of Digits**

   * Input: `N = 4567`
   * Output: `Average = 5.5`
   * ✨ *Combines digit sum and count for average computation.*

---
 */

function getDigitAverage(num) {
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

  const average = Number((sum / totalDigits).toFixed(2));
  return average;
}
// getDigitAverage(13);

function getDigitAverageV2(num) {
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
// getDigitAverageV2(13);

/*  3.
   * Find the Largest and Smallest Digit in a Number**
   * Input: `N = 9483`
   * Output: `Largest = 9, Smallest = 3`
   * ✨ *Enhances comparison logic using loops.*
   
--- */

function getLargestAndSmallestDigit(num) {
  const arr = [];
  let temp = num;
  while (temp > 0) {
    const lastDigit = temp % 10;
    arr.push(lastDigit);
    // --remove temp last digit
    const tempNoLastDigit = Math.floor(temp / 10);
    temp = tempNoLastDigit;
  }
  //--sort array in accending order
  arr.sort((a, b) => a - b); //mutates the real arr
  const smallest = arr[0];
  const largest = arr[arr.length - 1];
  // --
  return { smallest, largest };
}
// console.log(getLargestAndSmallestDigit(9483));

function getLargestAndSmallestDigitV2(num) {
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
// console.log(getLargestAndSmallestDigitV2(432583));

/* 4.
   *Check if a Number is a Strong Number**

   * Input: `N = 145`
   * Output: `Strong Number`
   * ✨ *Applies factorial of each digit and sums them: `1! + 4! + 5! = 145`.*

--- */

function getFactorial(num) {
  // --validate num
  if (num === 0 || num === 1) return 1;
  else if (num === undefined) return "pass something";
  // --calculate factorial
  let temp = num;
  let factorial = 1;
  while (temp > 1) {
    factorial *= temp;
    temp--;
  }
  return factorial;

  /* why factorial of 0 = 1, see it is an axiom a forced defination, even if it is flawed it is kept becaue it keeps the system alive math is a patterns language created by humans, so it has its flaws but sometime we have to go for axiom to keep the system alive as alot more concepts would break, if this axioms are not made. even 4**0 is 1 same logic axiom */
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

/* 
5. **Check if a Number is an Automorphic Number**

   * Input: `N = 25`
   * Output: `Automorphic Number` *(since 25² = 625 ends with 25)*
   * ✨ *Practices modulus-based pattern matching.*

--- */
// An Automorphic Number is an integer whose square ends with the `same digits` as the number itself.
function isAutomorphicNum(num) {
  if (num === undefined) return "pass something";
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
// console.log(isAutomorphicNum(6));

function testFn(callbackFn, iterationCount) {
  //?build it for fun testing
  const result = [];
  for (let i = 0; i < iterationCount; i++) {
    const res = callbackFn(i);
    if (res) result.push(res);
  }
  return result;
}
function testFnBoolean(callbackFn, iterationCount) {
  //?build it for fun testing
  const result = [];
  for (let i = 0; i < iterationCount; i++) {
    const res = callbackFn(i);
    if (res) result.push(i);
  }
  return result;
}

// console.log(testFn(isArmstrong, 1000000));

/* 6. **Find the Frequency of Each Digit**

   * Input: `N = 112233`
   * Output: `1 → 2, 2 → 2, 3 → 2`
   * ✨ *Combines loops and conditionals for counting repetitions.*

--- */

function getDigitFrequency(num) {
  if (num === 0) return { 0: 1 };
  const frequency = {};

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

// console.log(testFn(getDigitFrequency, 1000));

/* 
7. **Check if a Number is a Harshad Number**

   * Input: `N = 18`
   * Output: `Harshad Number` *(since 18 is divisible by 1 + 8 = 9)*
   * ✨ *Applies divisibility and digit-sum logic together.*
 */

//quotient == an integer
//remainder == 0, for a number to be qualified as harshad number
//when it is divides by the same of its digits.

function isHarshadNum(num) {
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
  // checking is harshard
  const quotient = num / sumOfDigits;
  const remainder = num % sumOfDigits;
  return Number.isInteger(quotient) && remainder === 0 ? true : false;
  // return quotient % 1 === 0 && remainder === 0 ? true : false;
}
console.log(isHarshadNum(18));
console.log(testFnBoolean(isHarshadNum, 1000));
