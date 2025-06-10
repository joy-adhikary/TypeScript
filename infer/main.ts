
// The infer keyword in TypeScript is useful for manipulating or extracting types because it lets you write expressive code that is safe when it comes to types. This is especially useful when dealing with generic types, complex type operations, or third-party code because it can capture types and save them on the fly.

// "I'll tell you what's inside, but you can't look — just guess from the label."

// type someType <T> = T extends Something<infer value> ? value : never;
type Box<T> = {
    inside: T;
};

// type toyBox = Box<"ami akti type">

type whatIsInside <T> = T extends Box<infer vitoreKi > ? vitoreKi : never;

type toy = whatIsInside<Box<"ami akta nutun type">>; // toy type is "ami akti type"

function describePerson(person: {
    name: string;
    age: number;
    hobbies: [string, string]; // tuple
}) {
    return `${person.name} is ${person.age} years old and loves ${person.hobbies.join(" and  ")}.`;
}


const alex = {
    name: 'Alex',
    age: 20,
    hobbies: ['walking', 'cooking'] // type string[] != [string, string]
}

// describePerson(alex) // error because string[] is not the same as [string , string ]

type GetFirstArgumentOfAnyFunction<T> = T extends (first: infer prothomValue, ...args: any) => any ? prothomValue : never;

const alex1 : GetFirstArgumentOfAnyFunction<typeof describePerson> = {
    name: 'Alex',
    age: 20,
    hobbies: ['walking', 'cooking']
}

describePerson(alex1);