// 7.1 coding task
//
function removeItem(arr, num) {
  let tempArr = structuredClone(arr);
  tempArr.splice(num - 1, 1);

  return tempArr;
}

const arr = ["BMW", "VW", "Audi", "Mercedes"];
console.log(removeItem(arr, 2));
console.log(arr);

//7.2 coding task
//
let cars = ["BMW", "VW", 55, "Audi", 3, "Mercedes", "Lambo", 56, true, "obi"];
const onlyStrings = [];

function sumOfCharacters(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      onlyStrings.push(arr[i]);
    }
  }
  let result = onlyStrings.join("").length;
  return result;
}

console.log(sumOfCharacters(cars));
