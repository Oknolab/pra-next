import type { Meta, StoryObj } from '@storybook/react';

import {CreateUserForm} from '@/components';

const meta = {
  title: 'CreateUserForm',
  component: CreateUserForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CreateUserForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    className: "w-[300px] border",
  },
};
