/* Odd Value of a Number in Array */
function oddValue(arr) {
    var odd = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            odd.push(arr[i]);
        }
    }
    return odd;
}
console.log(oddValue([1,2,3,4,5,6,7,8,9,10]));
