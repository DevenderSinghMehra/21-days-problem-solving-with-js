// const input = parseInt(prompt("enter a number boss!"));
// const btn = document.getElementById("print-btn");
// btn.addEventListener("click", () => {
// print();//will give error.
// });

// MY SOLUTIONS
/* 1. **Print Numbers from 1 to N**

   * Input: `5`
   * Output: `1 2 3 4 5`
   * ✨ *Teaches basic loop construction.* */
// const input = 5;
// for (let index = 1; index <= input; index++) {
//   console.log(index);
// }

/* 2. **Print Numbers from N to 1 without changing the loop condition of above question**

   * Input: `5`
   * Output: `5 4 3 2 1`
   * ✨ *Thinking creatively and manipulating logic within the loop*
 */
// const input = 5;
// for (let index = 1; index <= input; index++) {
//   const increasedInput = input + 1;
//   console.log(increasedInput - index);
// }

/* Print All Even Numbers from 1 to N

Input: 10
Output: 2 4 6 8 10
✨ Introduces conditional checks inside loops.
*/
// const input = 10;
// for (let index = 1; index <= input; index++) {
//   const isEven = !(index % 2);
//   if (isEven) console.log(index);
// }

/* Sum of First N Natural Numbers

Input: 5
Output: 15
✨ Encourages cumulative addition and variable usage. */

// const input = 10;
// let sumOfInput = 0;

// for (let index = 1; index <= input; index++) {
//   sumOfInput += index;
//   if (index === input) console.log(sumOfInput);
// }

// while (!sumOfInput) {
//   const numenator = input * input + input;
//   sumOfInput = numenator / 2;
//   console.log(sumOfInput);
// }
/* Product (Factorial) of N

Input: 5
Output: 120
✨ Reinforces loop control with multiplication logic. */
// const input = 10;
// let factorialOfInput = 1;

// for (let index = 0; index <= input; index++) {
//   if (index !== 0) {
//     factorialOfInput *= index;
//     if (index === input) console.log(factorialOfInput);
//     debugger;
//     continue;
//   }
//   // ---
//   if (input === 0) console.log(1);
//   else if (input < 0) console.log("its factorial is 'undefined'.");
// }
/* Sum of All Even Numbers up to N

Input: 10
Output: 30 (2+4+6+8+10)
✨ Combines loops + condition + accumulation. */
//bruteforce solution time complexity O(n) linearTime as the input grow the time will as well.
const input = 10n; //n appended to a number = BigInt(it deal with number more precisely.)
let sum = 0n;

// for (let index = 1n; index <= input; index++) {
//   const isEven = !(index % 2n);
//   if (isEven) {
//     console.log(index);
//     sum += index;
//   }
// }
console.log(typeof sum);

while (sum === 0n) {
  const numenator = input * (input + 2n);
  sum = numenator / 4n;
  console.log(sum);
}

/* Print Squares of Numbers from 1 to N

Input: 5
Output: 1 4 9 16 25
✨ Introduces arithmetic pattern generation. */

// const input = 6;
// for (let index = 1; index <= input; index++) {
//   const square = index * index;
//   console.log(square);
// }

// 🏠 Homework / Practice Challenge
/* 
 Print all numbers divisible by 3 and 5 up to N
Input: 30
Output: 15 30
✨ Reinforces conditional checks inside loops.
 */

// const input = 30;
// for (let index = 1; index <= input; index++) {
//   const isMultipleOf3 = !(index % 3);
//   const isMultipleOf5 = !(index % 5);
//   if (isMultipleOf3 && isMultipleOf5) console.log(index, "this is him");
// }

/*
Find the sum of all odd numbers up to N    
Input: 10
Output: 25 (1 + 3 + 5 + 7 + 9)
✨ Combines looping with conditional accumulation.
 */

// const input = 10;
// let sumOfOdd = 0;
// for (let index = 1; index <= input; index++) {
//   const isOdd = index % 2;
//   if (isOdd) sumOfOdd += index;
// }
// console.log(sumOfOdd);

/* Print the cubes of numbers from 1 to N  
Input: 5
Output: 1 8 27 64 125
✨ Extends arithmetic pattern logic beyond squares.
*/

// const input = 5;
// for (let index = 1; index <= input; index++) {
//   console.log(index ** 3);
// }

/* 
Print only the numbers that are both even and perfect squares
Input: 1 to 20
Output: 4 16
✨ Encourages combining two conditions within one loop. 
*/
// for (let index = 1; index <= input; index++) {
//   const isEven = index % 2 === 0;
//   if (!isEven) continue;
//   // --
//   const afterRoot = Math.sqrt(index);
//   const isPerfectSquare = afterRoot % 1 === 0;
//   if (isPerfectSquare) console.log(index);
// }
