// ! Extends will be used to extend the properties of one type to another type.

// Using interface 

interface A {
    name: string;
}

interface B {
    age: number;
}

//  here C extends A and B, which means C will have all the properties of both A and B and can also have its own properties. C is the superSet of A & B. 

interface C extends A, B {
    id: number;
}

const obj: C = {
    name: "Joy",
    age: 20,
    id: 1
};

obj.id = 62;

console.log("After using extends", obj.name, obj.age, obj.id); // Joy 20 62


// type alias doesn't support extends, but we can use intersection types to achieve similar functionality.

type A1 = {
    name: string;
}

type B1 = {
    age: number;
}

type C1 = A1 & B1 & {
    id: number;
}

const obj1: C1 = {
    name: "Joy",
    age: 20,
    id: 62
}

obj1.name = "Joy Adhikary";

console.log("After using extends", obj.name, obj.age, obj.id); // Joy Adhikary 20 62


// Advanced usage of extends with generics