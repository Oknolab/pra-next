import { UserType } from "@/types";
import { UserListItem } from "@/components";
import clsx from "clsx";

type UserListProps = {
  users: UserType[];
  className?: string;
}

export const UserList = ({ users, className }: UserListProps) => { 
  const _className = clsx(
    "flex flex-col gap-2 border p-2 overflow-y-scroll",
    className
  );

  return (
    <ul className={_className}>
      {users.map(user => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}
