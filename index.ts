// string type array it is similar to other types
let programs : string[];

programs = ['javascript','typescript'];

for(const pgms of programs){
    console.log(pgms);
}
// this any type array we can add the element in any type 
let employee : any[];

employee = [1,"Ramya",24,"bangalore",9999999999];

for(const emp of employee){
    console.log(emp);
}