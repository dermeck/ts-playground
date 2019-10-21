{
  type CompanyID = string;
  type OrderID = string;
  type UserID = string;

  type ID = CompanyID | OrderID | UserID;

  const queryUser = (id: UserID) => {};

  let oid: OrderID = "110";
  queryUser(oid); // can be called with OrderID :(
}
