import type { Meta, StoryObj } from '@storybook/react';

import {UserListItem} from './UserListItem';

const meta = {
  title: 'UserListItem',
  component: UserListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    user: {
      id: '1',
      userName: 'sample',
      age: 20,
    },
    className: "w-[300px]"
  },
};

export const LongName: Story = {
  args: {
    user: {
      id: '2',
      userName: 'This is a very long name',
      age: 5,
    },
    className: "w-[300px]"
  },
};
