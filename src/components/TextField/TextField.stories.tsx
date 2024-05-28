import type { Meta, StoryObj } from '@storybook/react';

import {TextField} from './TextField';

const meta = {
  title: 'TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    label: '名前',
    placeholder: '名前を入力してください',
    className: 'w-64 h-8',
    name: 'name',
    onChange: (name: string, value: string) => console.log(name, value),
  },
};
