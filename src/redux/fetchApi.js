import axios from "axios";
import { fetch_error, fetch_request, fetch_success } from "./actions";

export const fetchApi = () => {
  return (dispatch) => {
    dispatch(fetch_request());

    axios
      .get("https://dummyjson.com/products?select=title,price,images,category")
      .then((data) => {
        dispatch(fetch_success(data.data));
      })
      .catch((error) => {
        dispatch(fetch_error(error));
      });
  };
};
