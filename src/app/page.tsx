'use client';
import { Accordion } from '@/components/Accordion';
import dynamic from 'next/dynamic';

const Tour = dynamic(() => import('../components/TourInstance'), {
  ssr: false,
});

const Buttons = dynamic(() => import('../components/Buttons'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Tour />
      <h2 className='hero-welcome'>Welcome to Stepherd App!!</h2>
      <Accordion />
      <Buttons />
    </main>
  );
}
