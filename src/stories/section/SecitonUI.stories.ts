import type { Meta, StoryObj } from '@storybook/react';

import SectionUI from '../../components/SectionUI';

const meta: Meta<typeof SectionUI> = {
    title: 'Sections/Section UI',
    component: SectionUI
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      children: "children",
    },
  };