//number data type....
const  n1 = 10;
const  n2 =  -10;
const  n3 = 8765432213;
const  n4 = 10.5;


// string data type.....

const s1 = 'hello';
console.log(typeof s1);
const s2 = "hello";
const s3 = `hello`;

// boolean data type.....
 
const b1 = true;
const b2 = false;
// we can also declared like this....
let value : number;
value = 10;
// same as string and boolean 

// sample code for using all data types...
const num1 = 10;
const num2 = 20;
const isTrue = true;
const message = "Result is :"

function addMethod( number1: number, number2: number, checkIsTrue: boolean, msg:string ){
    const result = number1 + number2;
    if(checkIsTrue){
        console.log(msg+result);
    }else{
        return number1+number2;
    }
}
addMethod(num1,num2,isTrue,message);