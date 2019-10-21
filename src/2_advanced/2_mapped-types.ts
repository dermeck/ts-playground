// create types by mapping over another types key/value types
// [Key in UnionType]: ValueType
type Person = {
  name: string;
  age: number;
  address?: { location: string; zipCode: number };
};

type MappedPersonAny = {
  [P in keyof Person]: any;
};

type MappedPerson = {
  [P in keyof Person]: Person[P]; // same as Person
};

{
  type MappedType<T> = {
    [P in keyof T]: T[P];
  };

  type MappedPerson2 = MappedType<Person>; // also same as Person
}

{
  {
    type Promisify<T> = {
      [P in keyof T]: Promise<T[P]>;
    };

    type PromisePerson = Promisify<Person>;
  }

  {
    // readonly and ? modifier
    type NonOptionalNonReadonly<T> = {
      readonly [P in keyof T]?: T[P];
    };
    type NonOptionalPerson = NonOptionalNonReadonly<Person>;
  }

  {
    type RecursivePartial<T> = {
      [P in keyof T]?: RecursivePartial<T[P]>;
    };
  }
}

{
  /* built in mapped types

      Record<Keys, Values> => object with keys of type Keys and values of type Value

      Partial<Object> => all fields optional

      Required<Object> => all fields non-optional

      Readonly<Object> => all fields readonly

      Pick<Object, Keys> => subtype of object with gives Keys 
   */
}
