'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.scss';
import Button from '../components/ui/button/button';

export default function Home() {
  const params = useSearchParams();
  const gain = params.get('gain') || 0;

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
