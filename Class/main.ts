class Animal {
    move(): void {
        console.log("Moving along!");
    }
}

class Dog extends Animal {
    woof(times: number): void {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}

const d = new Dog();
// accesing base class method
d.move();
// Derived class method
d.woof(3);



//! Function overload 

class Bird {

    Fly(): void {
        console.log("Bird can fly")
    }
    Info(): void {
        console.log("Hello from Base class");
    }
    private TumiBaireThekeUseKortyParbaNah(): void {
        console.log("eita sudu bird e access korty parbe ")
    }

    protected TumiBaireThekeUseKortyParba(): void {
        console.log("Bird class er Protected methods")
    }
}
class Cat extends Bird {

    Info(leg?: number, tail?: boolean): void {
        if (leg && tail) {
            console.log("Cats Information: ", leg, tail);
        } else {
            super.Info()
        }
    }

    // Creating a new method for accessing the parent protected methods  
    CallingProtected(): void {
        this.TumiBaireThekeUseKortyParba()
    }

}

const Obj = new Cat();

// object.TumiBaireThekeUseKortyParbaNah() //? error 

Obj.Fly();
//? This one will print the base class information 
Obj.Info();
//? This one will print the drive class information 
Obj.Info(4, true)

// ? accessing Parent Protected Properties 
Obj.CallingProtected();



class Parent {
    //  parent  protected method  PPM
    protected PPM(): void {
        console.log("Printing Parent ")
    }
}
class Child extends Parent {
    protected CPM(): void {
        this.PPM();
        console.log("Printing child One ")
    }
}

class Child1 extends Child {
    // ? Protected properties gula oi parent er joto gula child thakbe sobai access korty parbe but with in class . class er baire parbe nah 
    C1PM(): void {
        // Both are same 
        this.PPM();
        this.CPM()
        console.log("Printing child Two ")
    }
}


const Child2 = new Child1()

Child2.C1PM();