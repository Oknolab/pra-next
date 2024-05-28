import {
  UserList,
  CreateUserForm,
} from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-[600px] h-[800px] space-y-8">
      <UserList className="w-full h-[600px] border-r" users={[]} />
      <CreateUserForm className="w-[300px]" />
    </div>
  );
}
