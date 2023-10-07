import type { Meta, StoryObj } from '@storybook/react';

import SectionTitle from '@/components/ui/SectionTitle';

const meta: Meta<typeof SectionTitle> = {
  title: ' UI/Section Title',
  component: SectionTitle,
};

export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const Primary: Story = {
  args: {
    title: 'patrick',
    subtitle: 'matayabas',
  },
  render: (args) => <SectionTitle {...args} />,
};
