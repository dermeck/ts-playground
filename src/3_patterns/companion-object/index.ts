import { Currency } from "./Currency"; // type and value

let amountDue: Currency = Currency.from(11, "USD");

let amountDue2: Currency = { value: 11, unit: "EUR" };
