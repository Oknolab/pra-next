import type { Meta, StoryObj } from '@storybook/react';

import {Button} from './Button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  args: {
    children: '作成',
  },
};

export const Update: Story = {
  args: {
    buttonType: 'plain',
    children: '更新',
  },
};

export const Delete: Story = {
  args: {
    buttonType: 'danger',
    children: '削除',
  },
};

/**
 * クリックするとアラートを表示するボタン
 */
export const SayHello: Story = {
  args: {
    children: 'Say Hello',
    onClick: () => alert('Hello!'),
  },
};
