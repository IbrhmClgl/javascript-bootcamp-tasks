let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  return name.length;
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

// isString function
let isString = function isString(value) {
  if (typeof value == Boolean) {
    return true;
  } else {
    return false;
  }
};

console.log(isString(2));
