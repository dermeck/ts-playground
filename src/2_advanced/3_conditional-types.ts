import { isArray } from "util";
// assign one of two types based on type relation check
// T extends U ? A : B
let myConditionalType: number extends string ? boolean : number;

{
  function myFunction<T>(p1: T, p2: T extends string ? boolean : number) {}
}

{
  // remove type from a union type
  type Without<T, U> = T extends U ? never : T;

  type A = Without<boolean | number | string, string>;
  // =   boolean extends string ? never : boolean | number extends string ? never : number | string extends stringe ? never | string
  // =   boolean | number | never
}

{
  // infer (generic types in a condition)
  type ArrayElementType<T> = T extends (infer U)[] ? U : T;
  type Element = ArrayElementType<Array<string>>;

  const moep = (a: number, b: string) => undefined;

  type FirstArg<F> = F extends (p1: infer P1) => any ? P1 : never;
  type A = FirstArg<typeof moep>;
}

{
  // union of member keys that are of type method
  type Person = {
    name: string;
    age: number;
    address: { location: string; zipCode: number };
    greet: () => void;
    run: () => void;
  };

  type Functions = {
    [P in keyof Person]: Person[P] extends Function ? P : never;
  };

  type A = keyof Person;

  type P = Functions[keyof Person];

  type FunctionMember<T> = {
    [P in keyof T]: T[P] extends Function ? P : never;
  }[keyof T];

  type Q = FunctionMember<Person>;
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html
