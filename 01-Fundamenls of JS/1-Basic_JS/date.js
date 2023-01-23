/* Date  Objects*/

const date = new Date();

// console.log(date);
// console.log(date.toString());   /// Long Format
// console.log(date.toDateString()); // Short Format
// console.log(date.toTimeString()); // Time Short Format
// console.log(date.toUTCString());   // UTC
// console.log(date.toISOString());   //ISO


let y = date.getFullYear();
let m = date.getMonth();       /// 0 (JAN) - 11 (DEC)
let d = date.getDate();
let day = date.getDay();      // 0(SUN), 1(MON), 2(TUE), 3(WED), 4(THU), 5(FRI) , 6(SAT)


let H = date.getHours();   // 0 - 23
let M = date.getMinutes();
let S = date.getSeconds();

console.log(y,m,d,day, H, M, S);