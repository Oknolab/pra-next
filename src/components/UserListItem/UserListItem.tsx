import { UserType } from "@/types";
import clsx from "clsx";

type UserListItemProps = {
  user: UserType;
  className?: string;
}

export const UserListItem = ({user, className}: UserListItemProps) => {
  const _className = clsx(
    'grid grid-cols-4 gap-2 border rounded-sm p-2',
    className
  );

  return (
    <li className={_className}>
      <span className="truncate">{user.id}</span>
      <span className="truncate col-span-2">{user.userName}</span>
      <span className="truncate text-right">{user.age}歳</span>
    </li>
  );
}
