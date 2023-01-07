/* Fibonacci series */
// 0,1,1,2,3,5,8,13,21,...

function fibonacci(n) {
  var fibo = [0, 1];
  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

//console.log(fibonacci(6));

// Recursive way
function fibonacciSeries(num) {
  if(num == 0) {
    return 0;
  }else if (num == 1) {
    return [0,1];
    
  }else {
    var fibo = fibonacciSeries(num - 1);
    var nextElement = fibo[num - 1] + fibo[num - 2];
    fibo.push(nextElement);
    return fibo;
  }
}

console.log(fibonacciSeries(9));

