import type { Metadata }
from 'next';

import MainButton from '@/components/ui/MainButton';
import NavigationBar from '@/components/ui/NavigationBar';

export const metadata: Metadata = { title: 'Sadya 2023', description: '' };

export default function Home() {
    return (
        <main>
            <MainButton label="GET TICKETS" type="get-tickets"/>
            <MainButton label="ABOUT" type="about"/>
            <NavigationBar/>
        </main>
    );
}
