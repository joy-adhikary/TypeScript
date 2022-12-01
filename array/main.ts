
// Basic 

// syntax ==> let array_name : array_type[] = []

let joy : string[]=[]

joy.push("joy");
joy[1]=" ";
joy.push('adhikary');
// joy[5]=55; error cz string type not num 
console.log(joy);


let joy2 :object[]=[]; // array of type object 
    
joy2.push({name:"joy",id:159992,dept:"cse",sec:"41/7"});
joy2.push({name:"joy1",id:259992,dept:"cse1"});
console.log(joy2);


let scores : (string | number)[]=[];
scores = ['Programming', 5, 'Software Design', 4,"it can take only string and number type data "]; 
console.log(scores)

// Advanced 

//akn multiple type hole ki hobe => in that case we can use tuple 
//A tuple is a typed array with a pre-defined length and types for each index.

let multi:[number,string,boolean];
multi=[55,"joy",true];
console.log(multi);

// there is an issue let take a look 

let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);


//solution is Readonly

const ReadonlyTuple : readonly[number,string,boolean]=[4,"joy",true];
//ReadonlyTuple.push("joydd");   will be throw some error 


 export{}