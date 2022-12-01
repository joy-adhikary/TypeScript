
//variable 
let firstName: string = "Dylan"

//array

// syntax  let array: array_type[] = [];
let array1: (string | number)[] = [] // take only string & number 

//object  { bole dite hobe ki ki type er data contain korbe eita }
let obj: { name: string, id: number } = {
    name: "joy",
    id: 55
};

let obj1: { name?: string, id?: number } = {

    //name and id optional here 
}

//type defning  or typedef 

type num = number
type str = string

type Car = {
    year: num,
    type: str,
}
let CarYear: num = 555;
let CarType: str = "TATA"

let car: Car = {
    year: CarYear,
    type: CarType,
}


// interface 

interface go_er_moto_functionality {
    name: string,
    LastName: string,
    id: number,
    dept: string
}

let joy: go_er_moto_functionality = {
    name: "joy",
    LastName: "adhikary",
    id: 62,
    dept: "cse",
}

console.log(joy)

//fucntion   ==> let name = ( perameter: perameter_type ):return_type => { main function body }

let joyx = (a: string, b: string): string => {

    return a.concat(b);
}
joyx("joy", "adhikary");

export { }