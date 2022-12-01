
//which allow you to convert a variable from one type to another type.


// force casting 
let y: number = 5000;
console.log(typeof ((y as unknown) as string))

let x: string = "string";
console.log(typeof ((x as unknown) as number))

let xx: unknown = "string";
console.log(typeof ((xx as unknown) as number))

let yy: unknown = 55;
console.log(typeof (yy))



// advanced ( this is the proper demo how actually it work )

let joy: unknown = 1;
joy = "1st a cilo unknown(number) akn holo string";
joy = {
    aktaMethod: () => {
        console.log("printing object properties, number => string => object property");
    }
} as { aktaMethod: () => void }; // obj er type to unknown akn eita ke akt obj a convert korlam jeita just void return korbe mane just print korbe 

(joy as { aktaMethod: Function }).aktaMethod(); // 1st a joy ke obj a convirt korsi then er properti ke call

//joy.aktaMethod(); eita run korbe nah karon type unknown


let joy2: unknown = 333;

joy2 = {
    add: (a: number, b: number): number => {
        return a * b;
    }
} as { add: (a: number, b: number) => number }


let ex = (joy2 as { add: Function }).add(5, 6);
console.log(ex)



export { }
