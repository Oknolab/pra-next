import { UserType } from "@/types";
import requests from "./requests";
import axios from "axios";

type CreateUserRequestType = {
  user: {
    userName: string;
    age: number;
  };
};

type CreateUserResponseType = {
  user: UserType;
};

export const createUser = async (
  userName: string,
  age: number
): Promise<CreateUserResponseType> => {
  return new Promise<CreateUserResponseType>((resolve, reject) => {
    axios
      .post(requests.createUser, {
        user: {
          userName,
          age,
        },
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
