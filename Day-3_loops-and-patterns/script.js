/* // Print Right-Angled Star Triangle

// Input: Rows = 5

// Output:

// *
// **
// ***
// ****
// *****
// ✨ Teaches nested loops and increasing sequence printing.
console.time("buteforce");
printRightAngle1(15000);
console.timeEnd("buteforce");

console.time();
printRightAngle2(15000);
console.timeEnd();
//*when tested at 15000 data size as the bruteforce is on^2
//* buteforce: 2378.760986328125 ms
//* default: 6.681884765625 ms

function printRightAngle1(num) {
  for (let index = 1; index <= num; index++) {
    let arr = [];
    for (let subIndex = 1; subIndex <= index; subIndex++) {
      arr.push("*");
    }
    arr.join("");
  }
}

function printRightAngle2(num) {
  for (let index = 1; index <= num; index++) {
    "*".repeat(index);
  }
} */

/* //   2. **Print Inverted Right-Angled Triangle**

//     Input: `Rows = 5`
//     Output:

//      ```
//      *****
//      ****
//      ***
//      **
//      *
//      ```
//    * ✨ *Reinforces decreasing nested loop structure.*

printInvertedRightAngleTriangle(10);

function printInvertedRightAngleTriangle(num) {
  for (let index = num; index >= 1; index--) {
    console.log("*".repeat(index));
  }
}
 */

/* // Print Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    ***
//   *****
//  *******
// *********
// ✨ Teaches alignment using spaces and nested loops.
printPyramid(7);
function printPyramid(row) {
  //*start count will always be an odd number.
  let starCount = 1;
  for (let currentRow = 1; currentRow <= row; currentRow++) {
    const space = " ".repeat(row - currentRow);
    const star = "*".repeat(starCount);
    starCount += 2;
    console.log(space + star);
  }
}
 */

/* // Print Inverted Pyramid Pattern

// Input: Rows = 5

// Output:

// *********
//  *******
//   *****
//    ***
//     *
// ✨ Teaches reverse space-star pattern alignment.
printInvertedPyramid(15);
function printInvertedPyramid(row) {
  //*start count will always be an odd number.
  let highestStarCount = 2 * row - 1;
  for (let currentRow = row; currentRow >= 1; currentRow--) {
    const space = " ".repeat(row - currentRow);
    const star = "*".repeat(highestStarCount);
    highestStarCount -= 2;
    console.log(space + star);
  }
}
*/
/* 
// Print Hollow Square Pattern

// Input: Rows = 5

// Output:

// *****
// *   *
// *   *
// *   *
// *****
// ✨ Practices conditional printing within nested loops.
printHollowSquare(10);
function printHollowSquare(row) {
  if (row < 3) {
    console.log("not possible boss");
    return;
  }
  let endStar = "*".repeat(row);
  let middleStar = `*${" ".repeat(row - 2)}*`;
  for (let currentRow = 1; currentRow <= row; currentRow++) {
    const isEnds = currentRow === 1 || currentRow === row;
    const star = isEnds ? endStar : middleStar;
    console.log(star);
  }
}
//optimized version
function printHollowSquare(row) {
  if (!Number.isInteger(row) || row < 3) {
    return console.error("value needs to be more then 2");
  }
  //?Number.isInteger helps to deduct any value that is nto num and is not an interger so cases like 5.6, null.'4', 'foo', false are gettign handled well.

  let endStar = "*".repeat(row);
  let middleStar = `*${" ".repeat(row - 2)}*`;
  for (let currentRow = 1; currentRow <= row; currentRow++) {
    if (currentRow === 1 || currentRow === row) console.log(endStar);
    else console.log(middleStar);
  }
}
// character = 5 always
// end-start: 5stars,
// 2stars in between
*/
function printHollowSquareTeacherOPtimizedV(totalRows) {
  for (let currentRow = 1; currentRow <= totalRows; currentRow++) {
    let str = [];

    for (let col = 1; col <= totalRows; col++) {
      if (
        currentRow === 1 ||
        currentRow === totalRows ||
        col === 1 ||
        col === totalRows
      ) {
        str.push("*");
      } else {
        str.push(" ");
      }
    }
    console.log(str.join(" "));
  }
}

// printHollowSquareTeacherOPtimizedV(5);

/* // Print Hollow Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    * *
//   *   *
//  *     *
// *********
// ✨ Combines conditionals and symmetrical logic in loops.

function printHollowPyramid(row) {
     if (!Number.isInteger(row) || row < 3) {
    return console.error("value needs to be more then 2");
  }
  //*start count will always be an odd number.
  let starCount = 1;
  for (let currentRow = 1; currentRow <= row; currentRow++) {
    const sideSpace = " ".repeat(row - currentRow);
    let star;
    if (currentRow === 1 || currentRow === row) star = "*".repeat(starCount);
    else star = `*${" ".repeat(starCount - 2)}*`;
    starCount += 2;

    console.log(sideSpace + star);
  }
}
printHollowPyramid(2); */
//*solving printHollowPyramid without repeat.
function printHollowPyramidV1(totalRows) {
  if (!Number.isInteger(totalRows) || totalRows < 3) {
    return console.error("value needs to be more then 2");
  }
  // 2n-1 use to find odd number at nth place.

  for (let currentRow = 1; currentRow <= totalRows; currentRow++) {
    const star = [];
    const space = [];
    const totalCol = 2 * currentRow - 1;
    const lastRow = currentRow === totalRows;

    if (lastRow) {
      for (let col = 1; col <= totalRows - currentRow; col++) {
        space.push(" ");
      }
    }

    for (let col = 1; col <= totalCol; col++) {
      if (col === 1 || col === totalCol || currentRow === totalRows) {
        star.push("*");
      } else star.push(" ");
    }
    // ------
    console.log(space.join("") + star.join(""));
  }
}

function printHollowPyramidV2(totalRows) {
  if (!Number.isInteger(totalRows) || totalRows < 3) {
    return console.error("value needs to be more then 2");
  }
  // 2n-1 use to find odd number at nth place.

  for (let currentRow = 1; currentRow <= totalRows; currentRow++) {
    const lastRow = currentRow === totalRows;
    const totalCol = 2 * currentRow - 1;
    const star = [];
    for (let col = 1; col <= totalCol; col++) {
      if (col === 1 || col === totalCol || lastRow) {
        star.push("*");
      } else star.push(" ");
    }

    if (!lastRow) {
      const spaceStr = new Array(totalRows - currentRow).fill(" ").join("");
      console.log(spaceStr + star.join(""));
    } else console.log(star.join(""));

    // ------
  }
}
// printHollowPyramidV2(5);
// Print Alternating Binary Triangle

// Input: Rows = 5

// Output:

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// ✨ Combines parity logic with nested loops.

// function printBinaryTriangle(rows) {
//   for (let currentRow = 1; currentRow <= rows; currentRow++) {
//     const isEven = currentRow % 2 === 0;
//     let initial = isEven ? 0 : 1;
//     const strArray = [];
//     for (let i = 1; i <= currentRow; i++) {
//       strArray.push(initial);
//       initial = initial === 0 ? 1 : 0;
//     }
//     console.log(strArray.join(""));
//   }
// }

//optimized
function printBinaryTriangle(rows) {
  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    //num & 1 (bitwiseAnd) gives 0 when num is even 1 otherwise
    let currentBit = currentRow & 1;
    //? what this & operator do is, it check the last digit of any number binary form, and see wheather it has a one or not. if it have a one then it is odd else even if it founds a one it return 1 else 0, so for odd case 1 for even 0, exactly what was needed.thought it fails to detect 0 by stating it even but mathematically 0 is not even, anyway here it is not a problem we will anyway not let 0 in.
    const strArray = [];
    for (let col = 1; col <= currentRow; col++) {
      strArray.push(currentBit);
      currentBit = currentBit === 0 ? 1 : 0;
    }
    console.log(strArray.join(""));
  }
}
// printBinaryTriangle(5);

// ------------------------------------
// 🏠 Homework / Practice Challenge

// Print Butterfly Pattern

// Input: Rows = 5

// Output:

// *       *
// **     **
// ***   ***
// **** ****
// *********
// **** ****
// ***   ***
// **     **
// *       *
// ✨ Combines multiple sections with symmetry logic.

function printButterfly(midRow) {
  const totalRows = 2 * midRow - 1;
  const middleRowStar = "*".repeat(totalRows);
  const sectionSize = totalRows - midRow;
  const printStarSection = (currentRow) => {
    const space = " ".repeat(totalRows - currentRow * 2);
    const star = "*".repeat(currentRow);
    console.log(star + space + star);
  };

  for (let currentRow = 1; currentRow <= sectionSize; currentRow++) {
    printStarSection(currentRow);
  }

  console.log(middleRowStar);

  for (let currentRow = sectionSize; currentRow >= 1; currentRow--) {
    printStarSection(currentRow);
  }
}
// printButterfly(5);

function printButterflyOptimized(midRow) {
  const totalRows = 2 * midRow - 1;
  const middleRowStar = "*".repeat(totalRows);
  const printStarSection = (currentRow) => {
    const space = " ".repeat(totalRows - currentRow * 2);
    const star = "*".repeat(currentRow);
    console.log(star + space + star);
  };

  for (let currentRow = 1, col = 1; currentRow <= totalRows; currentRow++) {
    if (currentRow < midRow) {
      printStarSection(col);
      ++col;
    } else if (currentRow > midRow) {
      printStarSection(--col);
    } else console.log(middleRowStar);
  }
}
// printButterflyOptimized(5);

function printButterflyOptimizedV2(midRow) {
  const totalRows = 2 * midRow - 1;
  const middleRowStar = "*".repeat(totalRows);
  const rightAngleTriangle = [];

  for (let row = 1; row < midRow; row++) {
    const rowStr = "*".repeat(row);
    rightAngleTriangle.push(rowStr);
  }

  for (let currentRow = 1, col = 0; currentRow <= totalRows; currentRow++) {
    if (currentRow === midRow) {
      console.log(middleRowStar);
      continue;
    }

    let star;
    if (currentRow < midRow) {
      // just see i want to use col as index value it will get clear
      star = rightAngleTriangle[col];
      col++;
    } else {
      col--;
      star = rightAngleTriangle[col];
    }

    //totalRows = total col in this pattern
    const space = " ".repeat(totalRows - star.length * 2);

    console.log(star + space + star);
  }
}
// printButterflyOptimizedV2(5);

function printButterflyOptimizedV3(midRow) {
  const totalRows = 2 * midRow - 1;
  const middleRowStar = "*".repeat(totalRows);
  const halfBody = [];

  for (let row = 1; row < midRow; row++) {
    const star = "*".repeat(row);
    const space = " ".repeat(totalRows - star.length * 2);
    const rowStr = star + space + star;
    halfBody.push(rowStr);
  }

  for (let currentRow = 1, col = 0; currentRow <= totalRows; currentRow++) {
    if (currentRow === midRow) {
      console.log(middleRowStar);
      continue;
    }

    let line;
    if (currentRow < midRow) line = halfBody[col++];
    else line = halfBody[--col];

    console.log(line);
  }
}
// printButterflyOptimizedV3(5);

function printButterflyOptimizedV3Clean(midRow) {
  const totalRows = 2 * midRow - 1;
  const middleRowStar = "*".repeat(totalRows);
  const topHalf = [];

  //print from row-1 to midrow - 1 and store it in an array,
  for (let row = 1; row < midRow; row++) {
    const star = "*".repeat(row);
    const space = " ".repeat(totalRows - star.length * 2);
    const line = star + space + star;
    topHalf.push(line);
    console.log(line);
  }

  console.log(middleRowStar);
  //do not compute use the stored array and print
  for (let i = topHalf.length - 1; i >= 0; i--) {
    console.log(topHalf[i]);
  }
}
// printButterflyOptimizedV3Clean(40);

function printButterflyOptimizedV5(midRow) {
  const result = [];
  const totalRows = 2 * midRow - 1;
  const middleRowStar = "*".repeat(totalRows);
  const topHalf = [];

  //print from row-1 to midrow - 1 and store it in an array,
  for (let row = 1; row < midRow; row++) {
    const star = "*".repeat(row);
    const space = " ".repeat(totalRows - star.length * 2);
    const line = star + space + star;
    topHalf.push(line);
    // console.log(line);
  }
  result.push(...topHalf);

  result.push(middleRowStar);
  //do not compute use the stored array and print
  for (let i = topHalf.length - 1; i >= 0; i--) {
    result.push(topHalf[i]);
  }
  return result;
}
// console.log(printButterflyOptimizedV5(50));

// Print Hollow Inverted Pyramid
// Input: Rows = 5

// Output:

// *********
//  *     *
//   *   *
//    * *
//     *
// ✨ Focuses on conditionally printing edges and spaces.

function printHollowInvertedPyramid(totalRows) {
  let maxStar = 2 * totalRows - 1;
  for (
    let currentRow = 1, currentStar = maxStar, space = 0;
    currentRow <= totalRows;
    currentRow++, currentStar -= 2, space++
  ) {
    const spaceStr = " ".repeat(space);

    if (currentRow === 1 || currentRow === totalRows) {
      const star = "*".repeat(currentStar);
      console.log(spaceStr + star);

      continue;
    }
    const star = `*${" ".repeat(currentStar - 2)}*`;
    console.log(spaceStr + star);
  }
}
// printHollowInvertedPyramid(5);

function printHollowInvertedPyramidV2(totalRows) {
  let maxStar = 2 * totalRows - 1;
  for (
    let currentRow = 1, currentStar = maxStar, space = 0;
    currentRow <= totalRows;
    currentRow++, currentStar -= 2, space++
  ) {
    const sideSpace = " ".repeat(space);
    let star;
    if (currentRow === 1 || currentRow === totalRows) {
      star = "*".repeat(currentStar);
    } else star = `*${" ".repeat(currentStar - 2)}*`;

    console.log(sideSpace + star);
  }
}
// printHollowInvertedPyramidV2(5);

function printHollowInvertedPyramidV3(totalRows) {
  //*start count will always be an odd number.
  let maxStarCount = 2 * totalRows - 1;
  for (let currentRow = totalRows; currentRow >= 1; currentRow--) {
    const sideSpace = " ".repeat(totalRows - currentRow);
    let star;
    if (currentRow === 1 || currentRow === totalRows) {
      star = "*".repeat(maxStarCount);
    } else star = `*${" ".repeat(maxStarCount - 2)}*`;
    maxStarCount -= 2;

    console.log(sideSpace + star);
  }
}
// printHollowInvertedPyramidV3(5);
// Print Diamond Pattern

// Input: Rows = 3

// Output:

//     *
//    ***
//   *****
//    ***
//     *
// ✨ Combines upper and lower pyramid logic for symmetry.

function printDiamondPattern(midRow) {
  const middleStar = "*".repeat(2 * midRow - 1);
  const topHalf = [];
  for (let currentRow = 1; currentRow < midRow; currentRow++) {
    const sideSpace = " ".repeat(midRow - currentRow);
    const star = "*".repeat(2 * currentRow - 1);
    const line = sideSpace + star;
    topHalf.push(line);
    console.log(line);
  }
  console.log(middleStar);

  for (let i = topHalf.length - 1; i >= 0; i--) {
    console.log(topHalf[i]);
  }
}
// printDiamondPattern(30);

function printDiamondPatternV2(midRow) {
  // the reason i did not finalize this one is because though it was an optimiziatin for the odd num calculation for current row-- becuase it added extra mental over head there 2 two varible not one litle but verbosity logic is pretty straight but still, except for the formula calcution i would not have createad thsi version but the new line of code it bring for the little change that we get i don't think this should be teh finall version just even begineer can understant thsi one as there are no formulas, but i think formulas are fine when they causes less code, fast reading adn you are familiar with them i am though and anybody you do this start patter or read its code need to be, so a potential reader is likely to find that one clikc in 1s then this.
  const middleStar = "*".repeat(2 * midRow - 1);
  const topHalf = [];
  for (
    let currentRow = 1, starCount = 1;
    currentRow < midRow;
    currentRow++, starCount += 2
  ) {
    const sideSpace = " ".repeat(midRow - currentRow);
    const star = "*".repeat(starCount);
    const line = sideSpace + star;
    topHalf.push(line);
    console.log(line);
  }
  console.log(middleStar);

  for (let i = topHalf.length - 1; i >= 0; i--) {
    console.log(topHalf[i]);
  }
}
// printDiamondPatternV2(3);

// Print Hourglass Pattern
// Input: Rows = 5

// Output:

// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********
// ✨ Practices combining inverse loops and symmetrical shapes.
function getHourGlassPattern(midRow) {
  let firstRowStar = "*".repeat(2 * midRow - 1);
  let maxSideSpace = " ".repeat(midRow - 1);
  const topHalf = [];
  const result = [];
  //print triangle from 1st row to midrow-1 and save it in an array
  for (
    let currentRow = 1, star = firstRowStar;
    currentRow < midRow;
    currentRow++
  ) {
    const sideSpace = maxSideSpace.slice(0, currentRow - 1);
    const line = sideSpace + star;
    topHalf.push(line);
    star = star.slice(0, -2);
    result.push(line);
  }
  //print middle star
  result.push(maxSideSpace + "*");

  //loop over the topHalf backwards and jsut print from stored value.
  for (let i = topHalf.length - 1; i >= 0; i--) {
    result.push(topHalf[i]);
  }
  return result;
}
/* const startMine = performance.now();
getHourGlassPattern(5000);
const endMine = performance.now();
console.log(endMine - startMine); */

function getHourGlassPatternTraditional(midRow) {
  //!GPT WROTE THIS ONE I JUST MODIFIED TO BENCHMARK
  const topHalf = [];
  const result = [];
  // Top half
  for (let currentRow = 1; currentRow < midRow; currentRow++) {
    const spaces = " ".repeat(currentRow - 1);
    const stars = "*".repeat(2 * (midRow - currentRow) + 1);
    result.push(spaces + stars);
    topHalf.push(spaces + stars);
  }

  // Middle
  result.push(" ".repeat(midRow - 1) + "*");
  // Bottom half
  for (let i = topHalf.length - 1; i >= 0; i--) result.push(topHalf[i]);

  return result;
}

/* const startTradi = performance.now();
getHourGlassPatternTraditional(5000);
const endTradi = performance.now();
console.log(endTradi - startTradi);
 */
function printHourGlassPattern(midRow) {
  let firstRowStar = "*".repeat(2 * midRow - 1);
  let maxSideSpace = " ".repeat(midRow - 1);
  const topHalf = [];

  //print triangle from 1st row to midrow-1 and save it in an array
  for (
    let currentRow = 1, star = firstRowStar;
    currentRow < midRow;
    currentRow++
  ) {
    const sideSpace = maxSideSpace.slice(0, currentRow - 1);
    const line = sideSpace + star;
    topHalf.push(line);
    star = star.slice(0, -2);
    console.log(line);
  }
  //print middle star
  console.log(maxSideSpace + "*");

  //loop over the topHalf backwards and jsut print from stored value.
  for (let i = topHalf.length - 1; i >= 0; i--) {
    console.log(topHalf[i]);
  }
}

// Print Hollow Diamond Pattern

// Input: Rows = 3

// Output:

//     *
//    * *
//   *   *
//    * *
//     *
// ✨ Teaches combining upward and downward hollow pyramids.

function printHollowDiamondPattern(midRow) {
  const maxStarCount = 2 * midRow - 1;
  const middleStar = `*${" ".repeat(maxStarCount - 2)}*`;
  const topHalf = [];
  //print top half and store it
  for (
    let currentRow = 1, starCount = 1;
    currentRow < midRow;
    currentRow++, starCount += 2
  ) {
    const sideSpace = " ".repeat(midRow - currentRow);
    // --
    let star;
    if (currentRow > 1) {
      const midSpace = " ".repeat(starCount - 2);
      star = `*${midSpace}*`;
    } else star = "*";

    const line = sideSpace + star;
    topHalf.push(line);
    console.log(line);
  }

  console.log(middleStar);

  //print top half backwards = bottom half
  for (let i = topHalf.length - 1; i >= 0; i--) console.log(topHalf[i]);
}

// printHollowDiamondPattern(5);

// Print Rhombus Pattern

// Input: Rows = 5

// Output:

//     *****
//    *****
//   *****
//  *****
// *****
// ✨ Practices offset alignment for uniform patterns.
function getRhombusPattern(totalRows) {
  const fixedStar = "*".repeat(totalRows);
  const result = [];
  for (let currentRow = 1; currentRow <= totalRows; currentRow++) {
    const sideSpace = " ".repeat(totalRows - currentRow);
    result.push(sideSpace + fixedStar);
  }
  return result;
}
// console.time("check1");
// getRhombusPattern(100);
// console.timeEnd("check1");

function getRhombusPatternV2(totalRows) {
  const fixedStar = "*".repeat(totalRows);
  const maxSideSpace = " ".repeat(totalRows - 1);
  const result = [];
  for (
    let currentRow = 1, spaceSliceCount = 0;
    currentRow <= totalRows;
    currentRow++, spaceSliceCount++
  ) {
    const sideSpace = maxSideSpace.slice(spaceSliceCount);
    result.push(sideSpace + fixedStar);
  }
  return result;
}
// console.time("check2");
// getRhombusPatternV2(100);
// console.timeEnd("check2");

function printRhombusPattern(totalRows) {
  const fixedStar = "*".repeat(totalRows);
  for (let currentRow = 1; currentRow <= totalRows; currentRow++) {
    const sideSpace = " ".repeat(totalRows - currentRow);
    console.log(sideSpace + fixedStar);
  }
}

// Print Multiplication Table (Single and Upto N)

// Input 1: Number = 5

// Output:

// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50
// Input 2: Upto = 3

// Output:

// Table of 1
// 1 x 1 = 1
// ...
// Table of 3
// 3 x 10 = 30
// ✨ Practices simple and nested loops for repetitive operations

function getTable(input) {
  if (!Number.isInteger(input)) {
    console.error("checkYourValues it is not an interger");
    return;
  }
  //isInterger even catching '5', so chill
  const result = [];
  for (let num = 1; num <= 10; num++) {
    const multiplicationResult = input * num;
    const line = `${input} x ${num} = ${multiplicationResult}`;
    result.push({ input, num, multiplicationResult });
  }
  return result;
}

function getMultiplicationTable(input) {
  const table = [];
  for (let i = 1; i <= input; i++) table.push(getTable(i));
  return table;
}
// getMultiplicationTable(500);

const root = document.getElementById("root");

getMultiplicationTable(10).forEach((table) => {
  const div = document.createElement("div");
  div.style.fontSize = "24px";
  for (const { input, num, multiplicationResult } of table) {
    const p = document.createElement("p");
    p.innerHTML = `<b>${input}</b> x <b>${num}</b> = <b><i>${multiplicationResult}</i></b>`;
    div.appendChild(p);
  }

  root.appendChild(div);
});

//final ones.

function printTable(input) {
  if (!Number.isInteger(input)) {
    console.error("checkYourValues it is not an interger");
    return;
  }
  //isInterger even catching '5', so chill
  for (let num = 1; num <= 10; num++) {
    const multiplicationResult = input * num;
    const line = `${input} x ${num} = ${multiplicationResult}`;
    console.log(line);
  }
}

function printTableOf5(input) {
  if (input !== 5) {
    console.error("only 5 is allowed");
    return;
  }
  printTable(input);
}
// printTableOf5(5);
function printMultiplicationTable(input) {
  // tables will be printed from 1 to input or 1, each table will only extend to 10 times only
  for (let i = 1; i <= input; i++) printTable(i);
}
// printMultiplicationTable(5);
