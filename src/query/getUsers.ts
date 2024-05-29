import { UserType } from "@/types";
import axios from "axios";
import requests from "./requests";

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
