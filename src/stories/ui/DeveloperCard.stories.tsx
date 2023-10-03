import type { Meta, StoryObj } from '@storybook/react';
import picSample from 'public/assets/images/SysEgg.png';

import DeveloperCard from '@/components/ui/DeveloperCard';

const meta: Meta<typeof DeveloperCard> = {
  title: 'UI/Developer Card',
  component: DeveloperCard,
};

export default meta;
type Story = StoryObj<typeof DeveloperCard>;

export const Primary: Story = {
  args: {
    course: 'course',
    developerType: 'primary',
    facebook: 'facebookLink',
    fullName: 'Developer',
    imageUrl: picSample,
    instagram: 'instagramLink',
    twitter: 'twitterLink',
  },
  render: (args) => <DeveloperCard {...args} />,
};
