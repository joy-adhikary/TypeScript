
// ! 5 basic primitive data types are exist those are => string, boolean, number, null, undefined  

// ! 3 basic non-primitive types are exist that are passed by reference those are => array, object, function 

// ? difference between primitive and non-primitive types : 

//  Primitive types : akta location a akta matro value rakhty parbo. This data type is predefined means build in type . Primitive data type gula jkn value assign kora hoi tkn seita direct value assign kore . 

//  Non-primitive types: akta location a onk value rakhty parbo. Data type are not predefined means those are made by primitive data types.


//!                                                 0. Fact with some advanced Utility types : 

//? Using Omit for dynamically remove types

// Omit syntax : Omit<Type, Keys ( kon kon property gulo ke remove korte chai )>

interface Admin {
    name: string;
    id: number | string;
    role: string;
    AddUser: () => void;
    RemoveUser: () => void;
    AddItem: () => void;
}

// akn amr user er AddUser , RemoveItem, RemoveUser thekbe nah so sei jonno ami omit use korbo . 
type User = Omit<Admin, "AddUser" | "RemoveUser" | "AddItem">

const Joy: User = {
    name: "Joy",
    id: 66,
    role: "User",
}

//? Using Pick for dynamically add types

// Pick syntax : Pick<Type, Keys ( kon kon property gulo ke rakhte chai )>

// lets say amr type onk gula kintu amr lagbe 3-4 ta matro , to sei jonno ami omit use nah kore pick use  korbo 

type SuperAdmin = Pick<Admin, "AddItem" | "RemoveUser">

const SuperJoy: SuperAdmin = {
    AddItem: () => {
        console.log("AddItem")
    },
    RemoveUser: () => {
        console.log("RemoveUser")
    }
}


// ? Using In operator to specify type 

// let say amr kase akta obj ashbe seita fish or bird je kono tai hote pare kintu ami jani nah konta . to sei jonno ami in diye check korte pari .
// jmn ami bird er kono akta property ashe ki nah oita diye check korte pari 

type fish = {
    swim: () => void;
}
type bird = {
    fly: () => void;
}

const Move = (animal: fish | bird): void => {
    if ("swim" in animal) {
        animal.swim = () => {
            console.log("akn error khabe nah ");
        };
    } else if ("fly" in animal) {
        animal.fly = () => {
            console.log("akn error khabe nah :");
        };
    }
};


//!                                                 1. Fact with Primitive types  : 

let a: number = 0,
    b: number = 10,
    c: number = 100,
    s: string = "joy"


let a2: number = a,
    s2: string = s

console.log("printing a2 =>", a2, "printing s2 =>", s2) //* 0 , "joy" 

s = "Joy adhikary"
a = 400
// this will not impact the s2 string and a2 number bcz its a primitive data type ( storing only value )
console.log("printing a2 =>", a2, "printing s2 =>", s2) //* 0 , "joy" 




//!                                                 2. Fact with  Non primitive type : 

//? Variables that are assigned a non-primitive value are given a reference to that value.  ( direct memory localtion assign kore )
//? That reference points to the object’s location in memory. The variables don’t actually contain the value.

interface emp {
    name: string;
    id: number;
    dept: string;
}

let joy: emp = {
    name: "Joy",
    id: 20,
    dept: "softEng"
}

let joy2: emp = joy

joy2.name = "joy adhikary"

// ? name of the joy will be changed  because object is non-primitiveee type data structure . it direct assign its address to new variable 

console.log("Printing joy ", joy) //* { name: 'joy adhikary', id: 20, dept: 'softEng' }


// 1st copy the object and then made all changes into the coped version of object
const chgNameBestPractice = (obj: emp, name: string): emp => {
    return ({ ...obj, name: name })
}

// directily made changes into the actual object 
const chgNameBadPractice = (obj: emp, name: string): emp => {
    obj.name = name;
    return obj;
}

console.log("applying Best practice ", chgNameBestPractice(joy2, "xxxx")) //* { name: 'xxxx', id: 20, dept: 'softEng' }
console.log("After Using chgNameBestPractice ", joy2)  //* { name: 'joy adhikary', id: 20, dept: 'softEng' }

console.log("applying Bad practice ", chgNameBadPractice(joy2, "xxxx")) //* { name: 'xxxx', id: 20, dept: 'softEng' }
console.log("After Using chgNameBadPractice ", joy2) //* { name: 'xxxx', id: 20, dept: 'softEng' }


// !                                                         3. Fact with Functions 

// When we pass primitive values into a function, the function copies the values into its parameters. It’s effectively the same as using =.

// Functions always return function scope values or global values 

// global scope variables
let x: number = 10, y: number = 100;
const CngNumWithPara = (x: number, y: number): number => {
    x = 20
    y = 30
    return x + y;
}

console.log("Using CngNumWithPara ", CngNumWithPara(x, y)) //* 50

// As x and y are the global variables so the current value of x and y should be 10 and 100 right ?
// No because as we pass x and y as a parameter thats why function first copy its values and create local x and y variables within the function scope. 
// So technically we are reassigning function scope x and y 

console.log("Printing x and y variables after CngNumWithPara ", x, y) //*  10 100

const CngNumWithOutPara = (): number => {
    x = 150
    y = 300
    return x + y;
}

console.log("Using CngNumWithOutPara ", CngNumWithOutPara()) //* 450
// now we are not pass any parameters , for that reason function will directly modify the global  x and y variables 
console.log("Printing x and y variables after CngNumWithOutPara ", x, y) //* 150 300


// ?                            3.2. Fact with non-primitive data types

let Emp: emp = {
    name: "Emp",
    id: 20,
    dept: "Eng"
}
const changeNameAndRest = (Emp: emp): emp => {
    Emp.name = "Change to Emp1";
    Emp.id = 62;

    // ? ei new object assignment original object e kono impact korbe nah . karon akta object ke jkn function a pass kora hoi tkn eitake pass by reference kora hoi 
    // ? tar mane memory address pass kora hoi . Ajonno object er single property acess kora e jai . kintu jkn new obj assign kora hoi tkn new memory address create hoi 
    // ? seijonno main object tai kono impact kore nah .

    Emp = {
        name: "Emp4",
        id: 200,
        dept: "Bng"
    }

    return Emp;
}

var Emp2: emp = changeNameAndRest(Emp)

console.log("changeNameAndRest =>", Emp2) //* { name: 'Emp4', id: 200, dept: 'Bng' }

console.log("Original Emp =>", Emp) //* { name: 'Change to Emp1', id: 62, dept: 'Eng' }





//!                                                            4. Scope variables ( let vs var )

//? let has block scope but var doesnt have any block scope 

function varScoping() {
    var x: number = 1;

    if (true) {
        var x = 2;
        console.log(x); //* will print 2
    }

    console.log(x); //* will print 2
}

function letScoping() {
    let x: number = 1;

    if (true) {
        let x = 2;
        console.log(x); //* will print 2
    }

    console.log(x); //* will print 1
}

function nestedScopeTest() {
    if (true) {
        var functionVariable: number = 1;
        let blockVariable: number = 2;

        console.log(functionVariable); //* will print 1
        console.log(blockVariable); //* will print 2

        if (true) {
            console.log(functionVariable); //* will print 1
            console.log(blockVariable); //* will print 2
        }
    }

    console.log(functionVariable); //* will print 1
    // console.log(blockVariable); //* this will throw an error
}


//!                                                           5. Conditional types and unions

// ? union of string | ull | undefined is a type that can be used to represent a value that can be either a string, null, or undefined.So what will be the type of this CondUnionType
type NullableString = string | null | undefined

type NonNullables<T> = T extends null | undefined ? never : T

type CondUnionType = NonNullables<NullableString>

// this will return string here is the reason : 


type stringLoop = string extends null | undefined ? never : string // string

type nullLoop = null extends null | undefined ? never : null // never

type undefinedLoop = undefined extends null | undefined ? never : undefined // never

type ReturnUnion = stringLoop | nullLoop | undefinedLoop // string

// union return the solid type that is string here


//!                                                           6. Change the existing type with the help of utility types

// object er majhe loop korar syntax ta hocche 
// [ keyName in keyof objectName ] eita kind of amn vabe for (keyName=0; keyName < T.size(); keyName++) 

type agerType = {
    name : string,
    age : number
}

type nutunType1 <T> = {
    // ? T object er sob gula key borabor loop korbe then t[k] er value set kore dibe. THAT means jah cilo tai e. 
    // ? eijaigai T[k] mane holo T object er k key er type for batter under standing comment out this line 
    // [k in keyof T] : k
    //  ei jaigai key kei as a type hisabe set kore dicche .
    [k in keyof T] : T[k]
}

const changedType : nutunType1<agerType> = {
    name: 'joy',
    age: 26
}

// ?                set 2 
type nutunType2 <T> = {
    [k in keyof T] : T[k] extends string ? number : T[k] // ? jodi T[k] er type string hoi tahole number set korbe otherwise T[k] er type eita set korbe
}

const changedType2 : nutunType2<agerType> = {
    // name: 'joy', // error  karon already ami name er type number a change kore felsi 
    name : 55,
    age: 26
}


// ?                set 3

type nutunType3 <T> = {
    //?  removing read only object.
    -readonly [k in keyof T] : T[k]
}

type agerType1 = {
    readonly name : string,
    age : number
}

const readOnlyChangedType : nutunType3<agerType1> = {
    name: 'joy',
    age: 26
}

readOnlyChangedType.name = "joy adhikary"


// ?                set 4 

type nutunType4 <T> = {
    //?  adding optional type.
    [k in keyof T] ?: T[k]
}

const allOptionalType : nutunType4<agerType> = {
    age: 26
    // name removed as it is optional now 
}


// ?                set 5 

type nutunType5 <T> = {
    //? changing the key name.
    [k in keyof T as `nutun${Capitalize<k & string>}`] : T[k]
}

const nameChangedType : nutunType5<agerType> = {
    nutunName: "joy adhikary",
    nutunAge: 26
}


// ?                set 6


type nutunType6 <T> = {
    //? changing the key into function 
    [k in keyof T as `get${Capitalize<k & string>}`] : () => T[k]
}

const nameChangedType1 : nutunType6<agerType> = {
    getName: () => "joy adhikary",
    getAge: () => 25
}