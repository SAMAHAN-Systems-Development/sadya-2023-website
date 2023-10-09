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
    course: 'BS Computer Science',
    developerType: 'Full-Stack Developer',
    socials:{
      facebook:'facebookLink',
      instagram: 'instagramLink',
      twitter: 'twitterLink',
    },
    fullName: 'Pancit Canton',
    imageUrl: picSample,
  },
  render: (args) => <DeveloperCard {...args} />,
};
