// tagged union types / discriminated union

{
  type Success = {
    payload: string;
    message: string;
  };

  type ErrorResult = {
    payload: number;
    reason: string;
  };

  type RequestResult = Success | ErrorResult;

  let r: RequestResult = { payload: "m", message: "m" };

  const receive = (result: RequestResult) => {
    if (typeof result.payload === "string") {
      // Success ?
      let p = result.payload;
      // let message = result.message; // property 'message' does not exist on type 'RequestResult'.  Property 'message' does not exist on type 'ErrorResult'.
    }
  };
}

{
  type Success = {
    tag: "success";
    payload: string;
    message: string;
  };

  type ErrorResult = {
    tag: "error";
    payload: number;
    code: number;
  };

  type RequestResult = Success | ErrorResult;

  let r: RequestResult = {
    tag: "success",
    payload: "pl",
    message: "m"
  };

  const receive = (result: RequestResult) => {
    let r = result;
    if (result.tag === "success") {
      let s = result; // Success
      return;
    }

    if (result.tag === "error") {
      return;
    }

    let n: never = result;
  };
}
