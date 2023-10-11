//in function based on the return type the value will be given 
function addName( firstName : string ,secondName: string):string{  // string is a return type
    return firstName+secondName;
}
console.log(addName("ramya","janvi"));


function addGame( game : string):void{
    console.log(addGame("badminton"));
    return;
}

// function as a type 

function addMethod( num1: number, num2: number){
    return num1+num2;
}
function addColor(color: string){
    return "The color is "+color;
}

let result :(a: number,b:number)=>number;

result=addMethod;

console.log(addMethod(10,20));

//result=addColor; - it will show error we can't declare like this...


// function call back....

function addAndHandle(n1: number, n2: number, cb:(num: number)=>void){
    const result = n1+n2;
    cb(result);
}

addAndHandle(10,20, (result)=>{
    console.log(result);
});

// type any

function generateError(message: string, code: number): never{
    throw{message: message, errorCode: code};
}
generateError("An error occured!",500);