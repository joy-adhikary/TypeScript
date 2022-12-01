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
function joy() {
    console.log("void type does not return anythings");
}
joy();
function joy1() {
    console.log("this one is explicit return type ");
}
joy1();
function joy3(a, b) {
    return a.concat(b);
}
console.log(joy3("joy", "+ adhikary"));
function joy4(a, b) {
    return a + b;
}
console.log(joy4("id", 62));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(4, 5, 6));
function add_string(a, b, c) {
    return a + b + c;
    // this time we dont need to assign o cz null string add kora o same khotha 
}
console.log(add_string("joy", "adhikary"));
// Arrow function 
// syntam ===>> let function_name = ( perameter : permeter_type ) : return_type => {  function er main kaj }
var joy5 = function (a, b, c) {
    return a + b + c;
};
console.log(joy5("joy", " adhikary", " Associate software engineer"));
