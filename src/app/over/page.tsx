import React from 'react';
import Image from 'next/image';
import { NavButton, formatGain } from '@/components/ui';
import styles from './page.module.scss';

interface OverProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default function Over({ searchParams }: OverProps) {
  const { gain = 0 } = searchParams;

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
        <div>
          <p className={styles.subheader}>Total score:</p>
          <p className={styles.headline}>
            {formatGain(+gain)}
            {' earned'}
          </p>
        </div>
        <NavButton href="/game" text="Try again" />
      </div>
    </main>
  );
}
