

let joy: { name: string, id: number, dpt: string } = {
    name: "joy",
    id: 4343,
    dpt: "cse"
}
console.log(joy);


let joy1 :{name?:string,id?:number,dept:string}={ //?: is the optional 
    dept:"cse"
    // name & id optional 
}


// jodi property age theke bola nah jai tkn     [index:index_type]:value_type     syntax use kora jai 
// like ami jani nah joy3 te firstName , lastName , id ashe ... egula pore push kora hoise \


let joy2:{[index:string]:string}={}

joy2.firstName="joy";
joy2.lastName="adhikary";
console.log(joy2)


let joy3:{[index:string]:(string|number)}={}  
joy3.firstName="joy";
joy3.lastName="adhikary";
joy3.id=1819062

console.log(joy3)

export{}
