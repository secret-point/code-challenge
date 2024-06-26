// module.exports = {
//   responseWithData: (responseObj, responseCode, message = "", data) => {
//     return responseObj.status(responseCode).send({
//       result: true,
//       message: message,
//       payload: data,
//     });
//   },
//   responseWithoutData: (responseObj, responseCode, message = "") => {
//     return responseObj
//       .status(responseCode)
//       .send({ result: true, message: message });
//   },
//   responseWithError: (responseObj, responseCode, message) => {
//     return responseObj
//       .status(responseCode)
//       .send({ result: false, message: message, payload: null });
//   },
// };
import { Response } from "../types/common";

export const responseWithData = (
  responseObj: Response,
  responseCode: number,
  message = "",
  data: any
) => {
  return responseObj.status(responseCode).send({
    result: true,
    message: message,
    payload: data,
  });
};
export const tresponseWithoutData = (
  responseObj: Response,
  responseCode: number,
  message = ""
) => {
  return responseObj
    .status(responseCode)
    .send({ result: true, message: message });
};
export const responseWithError = (
  responseObj: Response,
  responseCode: number,
  message: string
) => {
  return responseObj
    .status(responseCode)
    .send({ result: false, message: message, payload: null });
};
