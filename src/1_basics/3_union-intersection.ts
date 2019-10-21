// intersection
{
  type A1 = { a1: string; a11: boolean };
  type A2 = { a2: number; a22: boolean };
  type AI = A1 & A2;
  let a: AI = { a1: "a", a11: true, a2: 1, a22: true };
}

// intersection with overlapping keys
{
  type A = { a1: string; c: { c1: string } };

  type B = { c: { c2: number } };

  type I = A & B;

  let i: I = { a1: "a", c: {} };
}

// union
{
  type A1 = { a1: string; a11: boolean };
  type A2 = { a2: number; a22: boolean };
  let a: A1 | A2 = { a1: "a", a11: true, a2: 1, a22: true };
}

// union with overlapping keys
{
  type A1 = { a1: string; c: { a1: string } };
  type A2 = { a2: number; c: { a2: number } };
  let a: A1 | A2 = { a1: "a", a2: 1, c: { a1: "a1", a2: 1 } };
}
