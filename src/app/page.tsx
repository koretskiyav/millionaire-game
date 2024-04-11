import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';
import Button from '../components/ui/button/button';

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
        <Button testId="start-button">
          <Link href="/game">Start</Link>
        </Button>
      </div>
    </main>
  );
}
