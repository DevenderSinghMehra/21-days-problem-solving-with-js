// ### 🧠 **Questions List**

// 1. **Find the Maximum of Three Numbers**

//    * Input: `10 20 5`
//    * Output: `20`
//    * ✨ *Teaches nested or chained conditional logic and comparative reasoning.*
/* const array = [10, 20, 5];
let highest = 0;

if (array.length === 3) {
  for (const value of array) {
    if (value > highest) highest = value;
  }
} else highest = "bro you need pass only three numbers";

console.log(highest); */

// ---

// 2. **Check if a Number is Positive, Negative, or Zero**

//    * Input: `-9`
//    * Output: `Negative`
//    * ✨ *Practices multi-branch conditions and comparison operators.*

/* const input = -9;
console.log(numberState(input));

function numberState(num) {
  if (num > 0) return "Postive";
  if (num < 0) return "Negative";
  //   --
  if (Object.is(num, 0)) return "Zero";
  else return "Negative Zero:exist on in C.S bro"; //this is the extra part that i have done.
}
 */
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
console.log(getElectricBillCalculated(230));
function getElectricBillCalculated(units) {
  if (units < 0) return "enter a valid unit";
  let perUnitPrice;
  let totalBill;
  debugger
  if (units <= 100) {
    perUnitPrice = 5;
    totalBill = units * perUnitPrice;
  } else if (units <= 200) {
    perUnitPrice = 7;
    totalBill = units * perUnitPrice;
  } else if (units <= 300) {
    perUnitPrice = 10;
    totalBill = units * perUnitPrice;
  } else {
    console.log('entered')
    perUnitPrice = 12;
    totalBill = units * perUnitPrice;
    //if it is more than 300 this block will run
  }
  return `TotalBill : $${totalBill}`;
}

// ---

// 4. **Check if a Character is a Vowel or Consonant**

//    * Input: `e`
//    * Output: `Vowel`
//    * ✨ *Combines logical OR (`||`) operator and string comparisons.*

// ---

// 5. **Check if a Year is a Leap Year**

//    * Input: `2024`
//    * Output: `Leap Year`
//    * ✨ *Builds compound condition logic using multiple `if` statements (`%4`, `%100`, `%400`).*

//    A year is a **leap year** if it satisfies these conditions:

//    1. It is **divisible by 4**,
//       ➜ `year % 4 === 0`
//    2. **But not divisible by 100**,
//       ➜ `year % 100 !== 0`
//    3. **Unless** it is also **divisible by 400**,
//       ➜ `year % 400 === 0`

//    🧩 **In Simple Words**
//    - If a year is divisible by **4**, it’s a leap year.
//    - **Except** if it’s also divisible by **100**, then it’s **not** a leap year.
//    - **But** if it’s divisible by **400**, it **is** a leap year again.

// ---
