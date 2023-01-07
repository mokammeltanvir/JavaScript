/* Prime number is a number that is divisible only by 1 and itself. */
// 1 is not a prime number
// 2 is a prime number
function primeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(primeNumber(7)); // true