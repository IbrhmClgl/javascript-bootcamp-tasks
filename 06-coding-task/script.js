// 6.1 coding task
let result = "";

function oddNumbers(num1, num2) {
  if ((num1, num2 > 0)) {
    for (let index = num1 + 1; index < num2; index++) {
      result += index + ",";
    }
    console.log(result);
  }
}
oddNumbers(1, 7);

// 6.2 coding task
function charCount(word, char) {
  let countChar = 0;
  for (let index = 0; index < word.length; index++) {
    if (word.toUpperCase().charAt(index) === char.toUpperCase()) {
      countChar += 1;
    }
    // another solution:
    // console.log(word.split(char).length - 1);
  }
  return countChar;
}

console.log(charCount("Coding Bootcamps OHO xD", "o"));
