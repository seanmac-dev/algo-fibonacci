function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;

  for (let i = 0; i < num; i++) {
    let sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num1;
}
console.log(fibonacci(3))
module.exports = fibonacci;
