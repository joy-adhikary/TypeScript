
/*
// many ways to define a function in js 

function joy() {
}
let ex=new joy();

let joy2 = function(){
}
joy2();

let hello =(a,b):void=>{     // function er nam = (perameter):return_type=>{ function er main kaj }
}
let hlw = () => {
    // no perameter , no return type 
}
hello(55,55);

*/


function joy(): void {
    console.log("void type does not return anythings");
}
joy();

function joy1() {
    console.log("this one is explicit return type ")
}
joy1();

function joy3(a: string, b: string): string {
    return a.concat(b);
}
console.log(joy3("joy", "+ adhikary"));

function joy4(a: string, b: number): unknown {
    return a + b;
}
console.log(joy4("id", 62));


function add(a: number, b: number, c?: number): number {
    return a + b + (c || 0);
}
console.log(add(4, 5, 6));


function add_string(a: string, b?: string, c?: string): string {
    return a + b + c;
    // this time we dont need to assign o cz null string add kora o same khotha 
}
console.log(add_string("joy", " adhikary"))



// Arrow function 

// syntax ===>> const function_name = ( perameter : permeter_type ) : return_type => {  function er main kaj }

const joy5 = (a: string, b: string, c: string): string => {
    return a + b + c;
}
console.log(joy5("joy", " adhikary", " Associate_software_engineer"))

