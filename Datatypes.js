//number data type....
var n1 = 10;
var n2 = -10;
var n3 = 8765432213;
var n4 = 10.5;
// string data type.....
var s1 = 'hello';
console.log(typeof s1);
var s2 = "hello";
var s3 = "hello";
// boolean data type.....
var b1 = true;
var b2 = false;
// we can also declared like this....
var value;
value = 10;
// same as string and boolean 
// sample code for using all data types...
var num1 = 10;
var num2 = 20;
var isTrue = true;
var message = "Result is :";
function addMethod(number1, number2, checkIsTrue, msg) {
    var result = number1 + number2;
    if (checkIsTrue) {
        console.log(msg + result);
    }
    else {
        return number1 + number2;
    }
}
addMethod(num1, num2, isTrue, message);