import { UserID, CompanyID, OrderID } from "./branded-types";

const queryUser = (id: UserID) => {};

let oid: OrderID = OrderID("32131");
// queryUser(oid); // error

let uid: UserID = UserID("1312321");
queryUser(uid); // yay
