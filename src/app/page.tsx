import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import NavButton from '../components/ui/nav-button/nav-button';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/hand.svg"
        alt="hand"
        priority
        width={624}
        height={367}
        className={styles.hand}
      />
      <div className={styles.content}>
        <p data-testid="headline" className={styles.headline}>
          Who wants to be a millionaire?
        </p>
        <NavButton href="/game" text="Start" testId="start-button" />
      </div>
    </main>
  );
}
