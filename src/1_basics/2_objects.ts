{
  // object
  let person: object = { a: b };
}

{
  // object literals
  type Person = { name: string; age: number };
  let person: Person = { name: "Bob", age: 12 };
}

{
  // index signature (multiple keys)
  type Foo = {
    [index: string]: any;
    [index: number]: string;
  };

  let foo: Foo = { bar: 2, 1: "1" };

  interface A {
    a: string;
  }
}

{
  // array
  let persons: string[] = ["Bob", "Alice"];
  let persons2: Array<string> = ["Bob", "Alice"];

  // tuple
  type PersonTuple = [string, number];
  let person: PersonTuple = ["Bob", 12];
}

{
  // class
  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return "Hello, " + this.greeting;
    }
  }

  let greeter = new Greeter("world");
}

{
  // interface
  interface Person {
    name: string;
    age: number;
  }
}
