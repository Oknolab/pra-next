/*
  LookAtMe: ButtonコンポーネントをStorybookで表示するためのファイルである
*/

import type { Meta, StoryObj } from '@storybook/react';

import {Button} from './Button';

/*
  この辺はおまじないである
*/
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

/*
  LookAtMe: ここで一つのカタログを定義している
*/
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

export const Disabled: Story = {
  args: {
    children: '無効',
    disabled: true,
  },
};
