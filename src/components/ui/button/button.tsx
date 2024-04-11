import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  testId?: string; // eslint-disable-line react/require-default-props
}

export default function Button({ children, testId }: ButtonProps) {
  return (
    <button className={styles.button} type="button" data-testid={testId}>
      {children}
    </button>
  );
}
