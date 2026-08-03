// ### 🧠 **Questions List**

// 1. **Find the Maximum of Three Numbers**

//    * Input: `10 20 5`
//    * Output: `20`
//    * ✨ *Teaches nested or chained conditional logic and comparative reasoning.*
// function highestOfThree(a, b, c) {
//   const array = [a, b, c];
//   let highest = a;
//   for (const value of array) {
//     if (value > highest) highest = value;
//   }
//   return highest;
// }
function highestOfThree(a, b, c) {
  if (a >= b && a >= c) return a;
  else if (b >= c) return b;
  return c;
}
console.log(highestOfThree(4, 4, 2));
// ---

// 2. **Check if a Number is Positive, Negative, or Zero**

//    * Input: `-9`
//    * Output: `Negative`
//    * ✨ *Practices multi-branch conditions and comparison operators.*

console.log(numberState(-9));

function numberState(num = 0) {
  if (num > 0) return "Postive";
  if (num < 0) return "Negative";
  //   --
  if (Object.is(num, 0)) return "Zero";
  else return "Negative Zero:exist on in C.S bro"; //this is the extra part that i have done.
}

function optimizedNumberState(num = 0) {
  //actually this one handles less, but it is optimized implementation of solution, because thep problem itself did not mention wheather you need to handle -0 as well or not. 
  if (num > 0) return "Postive";
  if (num < 0) return "Negative";
  return "Zero";
}

// ---

// 3. **Calculate Electricity Bill**

// * Input: `Units = 230`
// * Output: `Total Bill = ₹1500`
// * ✨ *Applies multiple ranges using chained `else if` and cumulative logic.*
// * Example Logic:

//   * 0–100 units → ₹5 per unit
//   * 101–200 units → ₹7 per unit
//   * 201–300 units → ₹10 per unit
//   * Above 300 units → ₹12 per unit
// * 🔍 *Teaches:* cumulative calculation + condition chaining.
// console.log(getElectricBillCalculated(230));
function getElectricBillCalculated(units) {
  if (units <= 0) return "enter a valid unit";
  let totalBill = 0;
  let remainingUnits = units;
  const billConfig = [
    { metric: true, perUnitPrice: 5, upperLimit: 100 },
    { metric: 101 <= units, perUnitPrice: 7, upperLimit: 200 },
    { metric: 201 <= units, perUnitPrice: 10, upperLimit: 300 },
    { metric: 301 <= units, perUnitPrice: 12, upperLimit: NaN },
  ];

  for (const { metric, perUnitPrice, upperLimit } of billConfig) {
    if (metric) {
      if (units > upperLimit) {
        totalBill += 100 * perUnitPrice;
        remainingUnits -= 100;
      } else totalBill += remainingUnits * perUnitPrice;
    }
  }

  /*  
  let perUnitPrice = 5;
   if (units > 100) {
    value = 100 * perUnitPrice;
    totalBill += value;
  } else {
    value = units * perUnitPrice;
    totalBill += value;
  }

  if (units > 100) {
    perUnitPrice = 7;
    if (units >= 200) {
      value = 100 * perUnitPrice;
      totalBill += value;
    } else {
      value = (units - 100) * perUnitPrice;
      totalBill += value;
    }
  }
  if (units > 200) {
    perUnitPrice = 10;
    if (units >= 300) {
      value = 100 * perUnitPrice;
      totalBill += value;
    } else {
      value = (units - 200) * perUnitPrice;
      totalBill += value;
    }
  }
  if (units > 300) {
    console.log("entered");
    perUnitPrice = 12;
    value = (units - 300) * perUnitPrice;
    totalBill += value;
    //if it is more than 300 this block will run
  } */
  return `TotalBill : $${totalBill}`;
}

// ---

// 4. **Check if a Character is a Vowel or Consonant**

//    * Input: `e`
//    * Output: `Vowel`
//    * ✨ *Combines logical OR (`||`) operator and string comparisons.*

// ---

// charCheck("e");

function charCheck(value) {
  const valueLowerCase = value.toLowerCase();
  const valueCode = valueLowerCase.charCodeAt(0);
  const isAlphabet = valueCode >= 97 && valueCode <= 122;
  if (!isAlphabet) return "we only deals with alphabets.";

  const vowels = ["a", "e", "i", "o", "u"];
  const result = vowels.find((vowel) => vowel === valueLowerCase);
  if (result !== undefined) return "vowel";
  else return "consonant";
}

/* for (const tester of ["a", "e", "i", "o", "u"]) {
  if (tester === input) console.log("vowel");
  else console.log("consonant");
}//looks simple but runs more to derive teh same value
 */
/* 
function printResult(status) {
  if (status) console.log("vowel");
  else console.log("consonant");
}

switch (input.toLowerCase()) {
  case "a":
    printResult(true);
    break;
  case "e":
    printResult(true);
    break;
  case "i":
    printResult(true);
    break;
  case "o":
    printResult(true);
    break;
  case "u":
    printResult(true);
    break;
  default:
    printResult(false);
    break;
}
 */
// 5. **Check if a Year is a Leap Year**

//    * Input: `2024`
//    * Output: `Leap Year`
//    * ✨ *Builds compound condition logic using multiple `if` statements (`%4`, `%100`, `%400`).*

//    A year is a **leap year** if it satisfies these conditions:

//    1. It is **divisible by 4**,
//       ➜ `year % 4 === 0`
//   ( 2. **But not divisible by 100**,
//       ➜ `year % 100 !== 0`
//    3. **Unless** it is also **divisible by 400**,
//       ➜ `year % 400 === 0`) actually this is one condition.

//    🧩 **In Simple Words**(this are not simple words this are tricky words.)
//    - If a year is divisible by **4**, it’s a leap year.
//    - **Except** if it’s also divisible by **100**, then it’s **not** a leap year.
//    - **But** if it’s divisible by **400**, it **is** a leap year again.
// simple words
//a year is a leap year when 2 conditions meet.
//1. it is divisible by 4
// 2.it is not divisible by 100 or it is divisible by 400{this 2nd condition has sub-conditions and that is what causes confusion.}
// ---

isLeapYear(2024);
function isLeapYear(year) {
  const isDivisibleBy4 = year % 4 === 0;
  const isNotDivisibleBy100 = year % 100 !== 0;
  const isDivisibleBy400 = year % 400 === 0;

  return isDivisibleBy4 && (isNotDivisibleBy100 || isDivisibleBy400);
}
/* A year is a leap year when:

It must be divisible by 4
Then one of these must be true:
A: not divisible by 100
B: divisible by 400 */

// ### 🏠 **Homework / Practice Challenge**

// 1. **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**

//    * Input: `A`
//    * Output: `Uppercase Letter`
//    * ✨ *Teaches use of character code ranges (`charCodeAt`) and compound logical conditions.*
//    * 🔍 *Concepts:* ASCII range checks, compound `&&` and `||` operators.

// ---

const input = "3";
// console.log(advanceCharCheck(input));
function advanceCharCheck(value) {
  if (typeof value !== "string" || value === "") return "enter a string";
  const code = value.charCodeAt(0);

  /* 
 they both are doing the same work but this one is complex to uderstand and the logic is simple so its better to not use it. 
 const config = [
    { test: code >= 65 && code <= 90, message: "UpperCase" },
    { test: code >= 97 && code <= 122, message: "LowerCase" },
    { test: code >= 48 && code <= 57, message: "Digit" },
    { test: true, message: "specialCharacter" },
  ];
  const { message } = config.find(({ test }) => test);
  return message; */

  const isLowerCaseAlphabet = code >= 97 && code <= 122;
  const isUpperCaseAlphabet = code >= 65 && code <= 90;
  const isDigit = code >= 48 && code <= 57;
  //i know i am causing extra processing by storing the test result ex-isDigit, but see it improves readabilty alot so lets keep it but for more effeciency this is not the best way.
  if (isLowerCaseAlphabet) return "LowerCase.";
  if (isUpperCaseAlphabet) return "UpperCase";
  if (isDigit) return "digit";
  return "specialCharacter"; //i could have done just return as well but else makes code very obvious it is very simple and easy to read so let keep it like that.
}
/* 48–57     digits
65–90     uppercase
97–122    lowercase */

// 2. **Check Triangle Type Using Sides and Angles**

// * **Input:** `Sides = 3, 4, 5`
// * **Output:** `Right-Angled Triangle`
// * ✨ *Combines geometric reasoning + Pythagoras theorem check.*
// * Example Logic:

//   * If `a² + b² = c²` → Right-angled
//   * Else if all sides equal → Equilateral
//   * Else if any two equal → Isosceles
//   * Else → Scalene

// ---
// console.log(triangleType([3, 5, 4]));
function triangleType(numArr) {
  if (numArr.length !== 3) {
    return "sir a triangle can only have 3 sides please check.";
  }
  const [a, b, c] = numArr;
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "we deals with number only";
  }
  //still it lack the logic to check wheather or not c is hypotenuse or not -- i can write it but its too much extra logic then the question ask.
  const isRightAngle = (a, b, c) => {
    const [side1, side2, hypo] = [a, b, c].sort((a, b) => a - b);
    if (side1 ** 2 + side2 ** 2 === hypo ** 2) {
      //below iam checking possible combination, here i am arrangin an checking wheather the biggest one can be a hypo or not.
      console.log(`${hypo}:is the hypotenuse`);
      return true;
    } //this is more readable, here with sort we arrange in accending order then checking the last value is a hypo or not. it looks simple but sort does more work then the code below but it is redable and is used mosly then going for brute force combinatin with early return but here it is the not best choice.

    /*  const possibleSequences = [
      [a, b, c], //this is at top because i expect mostly user will send in this.
      [b, c, a],
      [a, c, b],
    ];
    for (const [side1, side2, hypo] of possibleSequences) {
      if (side1 ** 2 + side2 ** 2 === hypo ** 2) {
        console.log(`${hypo}:is the hypotenuse`);
        return true;
      }
    } */
    return false;
  };

  const isEquilateral = a === b && a === c; //i can make it into callback funtion to make it more effecint, but then the code looks complex which is not good.
  const isIsosceles = a === b || a === c || b === c;
  // ---
  if (isRightAngle(a, b, c)) return "Right-angled";
  if (isEquilateral) return "Equilateral";
  if (isIsosceles) return "Isosceles";
  return "Scalene";
}

// 3. **Calculate Income Tax Based on Slabs**

// * **Input:** `Income = ₹7,50,000`
// * **Output:** `Tax = ₹62,500`
// * ✨ *Applies progressive slab logic similar to electricity bill but with financial context.*
// * Example Logic (example slabs):

//   * Up to ₹2,50,000 → No tax
//   * ₹2,50,001 – ₹5,00,000 → 5%
//   * ₹5,00,001 – ₹10,00,000 → 20%
//   * Above ₹10,00,000 → 30%
// * 🔍 *Requires cumulative calculation using nested `if–else` or multiple slab loops.*
console.log(calculateTaxes("$7,50,000"));

function calculateTaxes(input) {
  let income = correctInput(input);
  function correctInput(value) {
    let result = [];
    for (const char of value) {
      if (char === "," || char === "$" || char === "₹") continue;
      result.push(char);
    }
    return Number(result.join(""));
  }
  console.log(income);
  // const income = Number(input.replaceAll(/,/gi, ""));
  // The "g" flag is mandatory; "i" makes it case-insensitive
  let remainingIncome = income;
  let taxAmount = 0;

  const taxSlabs = [
    { metric: true, taxPercentage: 0, upperLimit: 250000 },
    {
      metric: 250001 <= income,
      taxPercentage: 5 / 100,
      upperLimit: 500000,
    },
    {
      metric: 500001 <= income,
      taxPercentage: 20 / 100,
      upperLimit: 1000000,
    },
    {
      metric: 1000001 <= income,
      taxPercentage: 30 / 100,
      upperLimit: Infinity,
    },
  ];
  let previousUpperLimit = 0;
  for (const { metric, taxPercentage, upperLimit } of taxSlabs) {
    if (metric) {
      if (income > upperLimit) {
        const range = upperLimit - previousUpperLimit;
        taxAmount += range * taxPercentage;
        remainingIncome -= range;
        previousUpperLimit = upperLimit;
      } else taxAmount += remainingIncome * taxPercentage;
    }
  }

  /*   if (0 <= income) {
    if (income >= 250000) taxAmount = 250000 * 0;
    else taxAmount = income * 0;
    remainingIncome -= 250000;
  }
  if (250001 <= income) {
    if (income >= 500000) taxAmount = 250000 * 0.05;
    else taxAmount = remainingIncome * 0.05;
    remainingIncome -= 250000;
  }
  if (500001 <= income) {
    if (income >= 1000000) taxAmount += 500000 * 0.2;
    else taxAmount += remainingIncome * 0.2;
  }
  if (1000001 <= income) {
    taxAmount += remainingIncome * 0.3;
  }
 */
  return `totalTax : ${taxAmount}`;
}

/* function getElectricBillCalculated(units) {
  if (units <= 0) return "enter a valid unit";
  let totalBill = 0;
  let remainingUnits = units;
  const billConfig = [
    { metric: true, perUnitPrice: 5, upperLimit: 100 },
    { metric: 101 <= units, perUnitPrice: 7, upperLimit: 200 },
    { metric: 201 <= units, perUnitPrice: 10, upperLimit: 300 },
    { metric: 301 <= units, perUnitPrice: 12, upperLimit: NaN },
  ];

  for (const { metric, perUnitPrice, upperLimit } of billConfig) {
    if (metric) {
      if (units > upperLimit) {
        totalBill += 100 * perUnitPrice;
        remainingUnits -= 100;
      } else totalBill += remainingUnits * perUnitPrice;
    }
  }

  return `TotalBill : $${totalBill}`;
}
 */
