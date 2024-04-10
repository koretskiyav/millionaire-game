import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';
import Button from '../components/ui/button/button';
import { formatGain } from '../components/ui/gain/utils';

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
        <Button primary>
          <Link href="/game">Try again</Link>
        </Button>
      </div>
    </main>
  );
}
