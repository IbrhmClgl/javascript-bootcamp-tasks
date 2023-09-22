//5.1
const size = 25;
let result;

if (size > 10 && size < 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// 5.2
const oddEven = function (num) {
  if (num % 2 == 0) {
    console.log("Number is even.");
  } else {
    console.log("Number is odd.");
  }
};

oddEven(3);

// 5.3
const oldYoung = function (num) {
  if (num < 16 && num > 0) {
    console.log("Children");
  } else if (num < 50 && num > 16) {
    console.log("Young person");
  } else if (num > 50) {
    console.log("Elder person");
  } else if ((num = isNaN || num < 0)) {
    console.log("Invalid parameter");
  }
};

oldYoung(78);
