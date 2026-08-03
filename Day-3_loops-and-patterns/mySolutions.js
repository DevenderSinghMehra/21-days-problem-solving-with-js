//*answer-1
function printRightAngle2(row) {
  for (let index = 1; index <= row; index++) {
    console.log("*".repeat(index));
  }
}
// printRightAngle2(8);

//*answer-2
function printInvertedRightAngleTriangle(row) {
  for (let index = row; index >= 1; index--) {
    console.log("*".repeat(index));
  }
}

//*answer-3
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
function printPyramidAssignment(row) {
  //*start count will always be an odd number.
  let starCount = 1;
  for (let currentRow = 1; currentRow <= row; currentRow++) {
    const pipe = "|".repeat(row - currentRow);
    const star = "*".repeat(starCount);
    starCount += 2;
    console.log(pipe + star + pipe);
  }
}
// printPyramidAssignment(7);

//*answer-4
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

//*answer-5
function printHollowSquare(row) {
  if (!Number.isInteger(row) || row < 3) {
    console.error("value needs to be more then 2");
    return;
  }
  //?Number.isInteger helps to detect any value that is not a num or interger so cases like 5.6, null.'4', 'foo', false are gettign handled well.

  let endStar = "*".repeat(row);
  let middleStar = `*${" ".repeat(row - 2)}*`;
  for (let currentRow = 1; currentRow <= row; currentRow++) {
    if (currentRow === 1 || currentRow === row) console.log(endStar);
    else console.log(middleStar);
  }
}

/*
my teacher code, he prefers clean to look code and i prefer self explanatory code as readable. 
it is a subjective thing but my one requires less mental processing to understand how thing are working therefore i am sticking with my one. 
const row = 6;

for(let i = 1; i <=row; i++) {
  let str = ''

    for(let j = 1; j <= row; j++) {
        if(i === 1 || i === row || j === 1 || j === row) {
            str = str + '*'
        } else {
            str = str + ' '
        }
    }
    console.log(str);
  }
  // console.log(str);
 */
function printHollowSquareTeacherOPtimizedV(totalRows) {
  //i optimzed my teacher version
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
// printHollowSquareTeacherOPtimizedV(5)
//*answer-6
function printHollowPyramid(rows) {
  if (!Number.isInteger(rows) || rows < 3) {
    console.error("value needs to be more then 2");
    return;
  }
  //*start count will always be an odd number.
  let starCount = 1;
  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    const sideSpace = " ".repeat(rows - currentRow);
    let star;
    if (currentRow === 1 || currentRow === rows) star = "*".repeat(starCount);
    else star = `*${" ".repeat(starCount - 2)}*`;
    starCount += 2;

    console.log(sideSpace + star);
  }
}
// printHollowPyramid(20);
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
      const sideSpace = new Array(totalRows - currentRow).fill(" ").join("");
      console.log(sideSpace + star.join(""));
    } else console.log(star.join(""));

    // ------
  }
}
// printHollowPyramidV2(6)
/*   const D = {
  1: ["*******"],
  1: ["********"],
  2: ["**     **"],
  3: ["**     ***"],
  4: ["**     ***"],
  5: ["**     ***"],
  6: ["**     **"],
  7: ["********"],
  7: ["*******"],
}; */
//*answer-7
function printBinaryRightTriangle(rows) {
  if (!Number.isInteger(rows) || rows < 2) {
    console.error("value needs to be more then 1");
    return;
  }

  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    //num & 1 (Bitwise AND operator) gives 0 when num is even 1 otherwise
    let currentBit = currentRow & 1;
    const strArray = [];
    for (let col = 1; col <= currentRow; col++) {
      strArray.push(currentBit);
      currentBit = currentBit === 0 ? 1 : 0;
    }
    console.log(strArray.join(""));
  }
}
// printBinaryTriangle(6)
// printInvertedPyramid(6)
function printBinaryTriangle(rows) {
  if (!Number.isInteger(rows) || rows < 2) {
    console.error("value needs to be more then 1");
    return;
  }

  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    const sideSpace = " ".repeat(rows - currentRow);
    //num & 1 (Bitwise AND operator) gives 0 when num is even 1 otherwise
    let currentBit = currentRow & 1;
    const strArray = [];
    for (let col = 1; col <= 2 * currentRow - 1; col++) {
      strArray.push(currentBit);
      currentBit = currentBit === 0 ? 1 : 0;
    }
    console.log(sideSpace + strArray.join(""));
  }
}
printBinaryTriangle(6);
// * answer 2 -home work
function printButterflyFast(midRow) {
  //originalName: printButterflyOptimizedV3Clean
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
// printButterflyFast(40);

function getButterflySuperFast(midRow) {
  //console.log makes things slow so in thsi one i ditched it.
  // originalName: printButterflyOptimizedV5
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
// console.log(getButterflySuperFast(50));

// * answer 1 -home work
function printInvertedHollowPyramid(totalRows) {
  //originalName:printHollowInvertedPyramidV2
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
// printInvertedHollowPyramid(5);

// * answer 3 -home work

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

// * answer 4 -home work

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
// printHourGlassPattern(7);

//* answer 5 -home work
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

//* answer -6 --homework
function printRhombusPattern(totalRows) {
  const fixedStar = "*".repeat(totalRows);
  for (let currentRow = 1; currentRow <= totalRows; currentRow++) {
    const sideSpace = " ".repeat(totalRows - currentRow);
    console.log(sideSpace + fixedStar);
  }
}

//*-answer --7 homework

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
