import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import Button from './components/ui/button/button';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/hand.svg"
        alt="hand"
        width={624}
        height={367}
        className={styles.hand}
      />
      <div className={styles.content}>
        <p className={styles.headline}>Who wants to be a millionaire?</p>
        <Button primary>Start</Button>
      </div>
    </main>
  );
}
