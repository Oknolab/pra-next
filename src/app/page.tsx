/*
  LookAtMe: ユーザを作成するページである
  components/で定義したコンポーネントを集めて、一つのページを作成する
*/

"use client";

import {
  UserList,
  CreateUserForm,
} from '@/components';
import { getUsers } from '@/query';
import { UserType } from '@/types';
import { useEffect, useState } from 'react';

export default function Home() {
  const { users } = useUserList();

  return (
    <div className="flex flex-col justify-center items-center w-[600px] h-[800px] space-y-8">
      <UserList className="w-full h-[600px] border-r" users={users} />
      <CreateUserForm className="w-[300px]" />
    </div>
  );
}

interface UserListController {
  users: UserType[];
}

export function useUserList(): UserListController {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    getUsers().then((res) => {
      console.log(res);
      setUsers(res.users);
    });
  }, []);

  return { users };
}
