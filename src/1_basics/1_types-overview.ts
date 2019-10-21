// type hierarchy https://www.oreilly.com/library/view/programming-typescript/9781492037644/ch03.html

// node_modules/typescript/bin/tsc --watch

// any
let a1 = null; // any
let a2: any;
a2 = 1;
a2 = "1";
a2.myMethod(); // allowed

// unknown: type-safe counterpart of any (top type)
let b: unknown;
b = 1;
b = "1";
// b.myMethod(); // not allowed

// void: absence of a type, typically return value of functions that don't return a value
let v: void = undefined;

// undefined: value has not been assigned
let u1; // inferred undefined
let u: undefined = undefined;
// let u: undefined = null; // error

// null: no value
let n: null = null; // null
// null and undefined can be assigned to other types with --strictNullChecks=false

// number: floating point numbers
let num = 1;
// num = undefined; // only with with --strictNullChecks=false

// string: textual data

// boolean

// bigint: big interger values
let foo: bigint = BigInt(100); // BigInt function
// let bar: bigint = 100n; // BigInt literal (ESNext)

// symbol
let s = Symbol();
s = Symbol("a");
const s1: unique symbol = Symbol();

// never (bottom type)

// literal types (number, string, boolean), every constant is a type
let lit1: "foo";
lit1 = "foo";
// lit1 = "bar"; // error

// enum member types (number, string)
const enum Moep {
  "a1" = "1",
  "a2" = 1
}
let d = Moep.a1; // "1"
let e = Moep.a2; // 1
