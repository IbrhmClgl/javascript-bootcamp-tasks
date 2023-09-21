// 1) Welcome function
function welcomeMsg(name) {
  return "Welcome " + name + " !";
}

console.log(welcomeMsg("Ibrahim"));

// 2) Gross price function
// please add the tax percent in decimal by dividing with 100!
function calcGrossPrice(net, tax) {
  return net * tax + net;
}
console.log(calcGrossPrice(40, 0.16));

// Add Positive Function
// Please use only numbers as parameters
function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}

console.log(addPositive(-6, 3));
