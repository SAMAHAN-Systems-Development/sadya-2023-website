import type { Meta, StoryObj } from '@storybook/react';

import EventCard from 'src/components/ui/EventCard';

const meta: Meta<typeof EventCard> = {
  title: 'Event Card',
  component: EventCard,
};

export default meta;
type Story = StoryObj<typeof EventCard>;

export const Primary: Story = {
  args: {
    title: 'Ticketed Entry',
    date: 'October 23, 2023',
    description: 'BTOB & Creative Series Short Film Showcase',
    floor: 'Floor - Building - Lorem Ipsum',
  },
  render: (args) => <EventCard {...args} />,
};
