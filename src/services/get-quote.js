import axios from "axios";
import { BASE_URL, GET_QUOTE_ENDPOINT } from "@/constants/api-config-constant";

export const getQuote = async ({
  email,
  name = "",
  message = "",
  tel = "",
  remark = "",
}) => {
  let mobNo;
  let pageName;
  tel ? (mobNo = "+91" + tel) : (mobNo = "");
  remark.trim().length === 0 ? (pageName = "overview") : (pageName = remark);
  const url = BASE_URL + GET_QUOTE_ENDPOINT;
  return await axios.post(url, {
    email: email,
    name: name,
    message: message,
    mobile_number: mobNo,
    remark: pageName,
  });
};