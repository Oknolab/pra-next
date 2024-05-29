import { UserType } from "@/types";
import axios from "axios"; // LookAtMe: js及びtsでAPIを叩く場合は、大抵axiosを使用する
import requests from "./requests";

/*
  LookAtMe: ここでAPIで受け取るデータの型を定義している
*/
type GetUsersResponseType = {
  users: UserType[];
};

export const getUsers = async () => {
  return new Promise<GetUsersResponseType>((resolve, reject) => {
    axios
      .get(requests.createUser)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
