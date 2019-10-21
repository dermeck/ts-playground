type Unit = "EUR" | "USD" | "GBP";

export type Currency = {
  unit: Unit;
  value: number;
};

// object with utility methods for type
export const Currency: { from: (value: number, unit?: Unit) => Currency } = {
  from(value: number, unit: Unit = "EUR"): Currency {
    return { unit, value };
  }
};
