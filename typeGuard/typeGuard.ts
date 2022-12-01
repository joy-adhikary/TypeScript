
//akta custom type assign kore then oitar majhe multiple type rekhe dilam 
// akn typeGuard just sei sob vlaue e acpt korbe 

type joy = string | number | boolean

function add(a: joy, b: joy) {
    if (typeof a == "string" && typeof b == "string") {
        return a.concat(b);
    }

    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }

    if (typeof a == "boolean" && typeof b == "boolean") {
        return true;
    }

    return "Invalid argument, input vaild argument plz"

}

console.log(add(55, 50));
console.log(add("hey", 50));
console.log(add("joy", " adhikary"));


export { }
