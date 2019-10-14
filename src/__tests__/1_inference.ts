test("infers undefined if not value is assigned", () => {
  let a;
  expect(typeof a).toBe("undefined");
});

test("infers concrete type on value assignment", () => {
  let a = true;
  expect(typeof a).toBe("boolean");

  let b = 1;
  expect(typeof b).toBe("number");

  let c = "hello world";
  expect(typeof c).toBe("string");

  const enum Moep {
    "a1" = "1",
    "a2" = 1
  }
  let d = Moep.a1;
  let e = Moep.a2;

  expect(typeof d).toBe("string");
  expect(typeof e).toBe("number");
});

test("type annotations", () => {});

// let c2: typeof c = "a";
test.todo("typeof");
