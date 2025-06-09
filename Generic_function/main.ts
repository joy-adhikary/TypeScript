// Only for numbers
const GetFirstElementNumber = (Items: number[]): number => {
    return Items[0];
};

console.log(
    "With number of items: ",
    GetFirstElementNumber([10, 20, 30, 40, 50])
);

// Only for strings
const GetFirstElementString = (Items: string[]): string => {
    return Items[0];
};

console.log(
    "With string of items: ",
    GetFirstElementString(["A", "B", "C", "D", "E", "F"])
);

// ? Now Using generic function to use dynamic variables

const GetFirstElement = <dynamic_Type>(Item: dynamic_Type[]): dynamic_Type => {
    return Item[0];
};

console.log(
    "For String",
    GetFirstElement<String>(["A", "B", "C", "D", "E", "F"])
);
// console.log("For String", GetFirstElement(["A", "B", "C", "D", "E", "F"]))   //? Both are same for primitive types But if we use custom types then we need to specify which type of type it is

console.log("For Number", GetFirstElement<number>([10, 20, 30, 40, 50]));

//! generic types multiple hoite pare

const MargeObj = <X, Y, T>(Obj1: X, Obj2: Y): T => {
    return {
        ...Obj1,
        ...Obj2,
    } as T;
};

const obj1 = { a: 1, b: 2 },
    obj2 = { b: 3, c: 4, e: "joy" };

console.log("Using multiple dynamic types :", MargeObj(obj1, obj2));

//? but ami jodi akn ei jaigai string pass kori taholeu error ashbe nah karon MargeObj type jane nah , oh dekhbe type ta ki dicche seita just  assign kore dibe
// MargeObj(obj1,"string")  //? this will not throw any kind of error but it is an error , for that reason we use extende

//  extend mane oitai hoite hobe or oi property thaktei hobe T er majhe
const MargeObj1 = <X extends object, Y extends object, T>(Obj1: X, Obj2: Y): T => {
    return {
        ...Obj1,
        ...Obj2,
    } as T;
};

// MargeObj1(obj1, "string") //? now it will throw an error , string is not assignable to object . this is how we can more explicitly define types


// ? extends FirstName and id mane amr object er majhe at least ei 2 ta thaktei hobe baki onno kisu thakleu prob nai
const MargeObj2 = <
    X extends { FirstName: string; id: number },
    Y extends object,
    T
>(
    Obj1: X,
    Obj2: Y
): T => {
    return {
        ...Obj1,
        ...Obj2,
    } as T;
};

let margedObj = MargeObj2(
    {
        FirstName: "joy",
        id: 20,
        dept: "Engg"
    },
    {
        lastName: "Roy"
    }
);

console.log(margedObj);

// ! Generic Interface

interface ApiResponse<T> {
    status: number;
    type: string;
    sucess: boolean;
    // ? i am not sure what actually data type is. it might be string or object or undefined so we can use union or generic type
    // data: string | undefined | object,
    data: T;
}

const response: ApiResponse<string> = {
    status: 200,
    type: "Good",
    sucess: true,
    data: "Data in string format",
};

const response2: ApiResponse<object> = {
    status: 200,
    type: "Good",
    sucess: true,
    data: {
        name: "somethings",
        length: 100,
        previous: null,
    },
};
