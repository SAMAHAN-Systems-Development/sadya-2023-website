import type { Meta, StoryObj } from '@storybook/react';

import MainButton from '@/components/ui/MainButton';

const meta: Meta<typeof MainButton> = {
  title: 'UI/MainButton',
  component: MainButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GetTickets: Story = {
  args: {
    type: 'get-tickets',
    label: 'GET TICKETS',
  }
}

export const About: Story = {
  args: {
    type: 'about',
    label: 'GET TICKETS',
  }
}