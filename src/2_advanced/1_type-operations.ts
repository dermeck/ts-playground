{
  // keyof (index type query eturns union type of property keys (string literals))
  type Person = { name: string; age: number };

  type PersonKeys = keyof Person; // "name" | "age"
}

{
  // lookup type (index access type) returns the type of a field
  type Person = {
    name: string;
    gender: "m" | "f";
    address: { city: string; zipCode: number };
  };

  let myAddress: Person["address"]; // {city: string, zipCode: number}
  myAddress = { city: "Wü", zipCode: 97074 };
}

{
  // in - create type from key union
  type Moep = { [P in "key1" | "key2" | "key3"]: any };
  let m: Moep = { key1: "hallo", key2: "welt", key3: true };
}
