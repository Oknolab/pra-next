"use client";

import { TextField, Button } from "@/components";
import clsx from "clsx";
import { useState } from "react";
import { createUser } from "@/query/createUser";

type CreateUserFormProps = {
  className?: string;
};

export const CreateUserForm = ({ className }: CreateUserFormProps) => {
  const {
    userName,
    age,
    handleChange,
    handleSubmit,
  } = useCreateUserForm();

  const _className = clsx(
    "flex flex-col gap-4 p-4",
    className,
  )

  return (
    <form className={_className}>
      <TextField
        name={"userName"}
        label="ユーザー名"
        value={userName}
        onChange={handleChange}
        className="w-full"
      />
      <TextField
        name={"age"}
        label="年齢"
        value={age}
        onChange={handleChange}
        className="w-full"
      />
      <Button onClick={handleSubmit}>作成</Button>
    </form>
  );
};

type State = {
  userName: string;
  age: string;
}

interface ICreateUserFormController {
  userName: string;
  age: string;
  handleChange: (name: string, value: string) => void;
  handleSubmit: () => void;
}

const initialState: State = {
  userName: "",
  age: "",
};

function useCreateUserForm(): ICreateUserFormController {
  const [state, setState] = useState<State>(initialState);

  function handleChange(name: string, value: string) {    
    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    if (!_validation()) {
      return;
    }

    // TODO: API call
    createUser(state.userName, Number(state.age))
      .then(res => {
        setState(initialState);
      })
      .catch(err => {
        console.error(err);
      });
  }
  
  function _validation() {
    if (!Number.isInteger(Number(state.age))) {
      return false;
    }

    if (state.userName === "") {
      return false;
    }

    return true;
  }

  return {
    userName: state.userName,
    age: state.age,
    handleChange,
    handleSubmit,
  };
}
