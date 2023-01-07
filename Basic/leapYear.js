/* write a leap year program in javascript */
function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return 'This is a leap year';
    } else {
        return 'This is not a leap year';
    }
}
console.log(leapYear(2016));
console.log(leapYear(2017));
console.log(leapYear(2018));
console.log(leapYear(2019));
console.log(leapYear(2020));
console.log(leapYear(2021));
console.log(leapYear(2022));
console.log(leapYear(2023));
console.log(leapYear(2024));