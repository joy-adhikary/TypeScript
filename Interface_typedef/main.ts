
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

interface Like_Go {
    name: string,
    LastName: string,
    id: number,
    dept: string
}

let joy: Like_Go = {
    name: "joy",
    LastName: "adhikary",
    id: 62,
    dept: "cse",
}

console.log(joy)

export{
    
}