import React from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import Button from '../components/ui/button/button';

interface OverProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default function Over({ searchParams }: OverProps) {
  const { gain = 0 } = searchParams;

  return (
    <main className={styles.main}>
      gain:
      {gain}
      <Button primary>
        <Link href="/game">Try again</Link>
      </Button>
    </main>
  );
}
