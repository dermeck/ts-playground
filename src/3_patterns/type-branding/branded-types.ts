// nominal types
export type CompanyID = string & { readonly brand: unique symbol };
export type OrderID = string & { readonly brand: unique symbol };
export type UserID = string & { readonly brand: unique symbol };

export type ID = CompanyID | OrderID | UserID;

export function CompanyID(id: string) {
  return id as CompanyID;
}

export function OrderID(id: string) {
  return id as OrderID;
}

export function UserID(id: string) {
  return id as UserID;
}
