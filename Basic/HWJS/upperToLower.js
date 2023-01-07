/* Uppercase conversion to lowercase conversion JavaScript program using ASCII*/
var str = "HELLO WORLD";
var str1 = "";
for (var i = 0; i < str.length; i++) {
    var ch = str.charCodeAt(i);
    if (ch >= 65 && ch <= 90) {
        ch = ch + 32;
    }
    str1 = str1 + String.fromCharCode(ch);
}
console.log(str1);

