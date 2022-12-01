//which allow you to convert a variable from one type to another type.
// force casting 
var y = 5000;
console.log(typeof y);
var x = "string";
console.log(typeof x);
var xx = "string";
console.log(typeof xx);
var yy = 55;
console.log(typeof (yy));
// advanced ( this is the proper demo how actually it work )
var joy = 1;
joy = "1st a cilo unknown(number) akn holo string";
joy = {
    aktaMethod: function () {
        console.log("printing object properties, number => string => object property");
    }
}; // obj er type to unknown akn eita ke akt obj a convert korlam jeita just void return korbe mane just print korbe 
joy.aktaMethod(); // 1st a joy ke obj a convirt korsi then er properti ke call
//joy.aktaMethod(); eita run korbe nah karon type unknown
var joy2 = 333;
joy2 = {
    add: function (a, b) {
        return a * b;
    }
};
var ex = joy2.add(5, 6);
console.log(ex);
