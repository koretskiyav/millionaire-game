import React from 'react';
import Link from 'next/link';
import styles from './nav-button.module.scss';

interface NavButtonProps {
  href: string;
  text: string;
  testId?: string; // eslint-disable-line react/require-default-props
}

export default function NavButton({ href, text, testId }: NavButtonProps) {
  return (
    <Link className={styles.link} href={href}>
      <button className={styles.button} type="button" data-testid={testId}>
        {text}
      </button>
    </Link>
  );
}
