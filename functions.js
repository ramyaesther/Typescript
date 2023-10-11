//in function based on the return type the value will be given 
function addName(firstName, secondName) {
    return firstName + secondName;
}
console.log(addName("virat", "kohli"));
function addGame(game) {
    console.log(addGame("cricket"));
    return;
}
// function as a type 
function addMethod(num1, num2) {
    return num1 + num2;
}
function addColor(color) {
    return "The color is " + color;
}
var result;
result = addMethod;
console.log(addMethod(10, 20));
//result=addColor; - it will show error we can't declare like this...
// function call back....
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
// type any
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured!", 500);
