//1 answer
function highestOfThree(a, b, c) {
  if (a >= b && a >= c) return a;
  else if (b >= c) return b;
  return c;
}

//2 answer
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

//3 answer
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
}
//4 answer
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


//5 answer
isLeapYear(2024);
function isLeapYear(year) {
  const isDivisibleBy4 = year % 4 === 0;
  const isNotDivisibleBy100 = year % 100 !== 0;
  const isDivisibleBy400 = year % 400 === 0;

  return isDivisibleBy4 && (isNotDivisibleBy100 || isDivisibleBy400);
}

//6 answer
function advanceCharCheck(value) {
  if (typeof value !== "string" || value === "") return "enter a string";
  const code = value.charCodeAt(0);
  const isLowerCaseAlphabet = code >= 97 && code <= 122;
  const isUpperCaseAlphabet = code >= 65 && code <= 90;
  const isDigit = code >= 48 && code <= 57;
  //i know i am causing extra processing by storing the test result ex-isDigit, but see it improves readabilty alot so lets keep it but for more effeciency this is not the best way.
  if (isLowerCaseAlphabet) return "LowerCase.";
  if (isUpperCaseAlphabet) return "UpperCase";
  if (isDigit) return "digit";
  return "specialCharacter"; //i could have done just return as well but else makes code very obvious it is very simple and easy to read so let keep it like that.
}


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
    } 
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


//7 answer
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
}