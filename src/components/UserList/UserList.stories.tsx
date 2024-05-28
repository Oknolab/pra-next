import type { Meta, StoryObj } from '@storybook/react';

import {UserList} from '@/components';

const meta = {
  title: 'UserList',
  component: UserList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    users: [
      {
        id: '1',
        userName: 'sample',
        age: 20,
      },
      {
        id: '2',
        userName: 'sample2',
        age: 30,
      },
    ],
    className: "w-[300px] h-[300px]"
  },
};

export const ManyUsers: Story = {
  args: {
    users: Array.from({ length: 10 }, (_, i) => ({
      id: String(i),
      userName: `user${i}`,
      age: i,
    })),
    className: "w-[300px] h-[300px]"
  },
};
