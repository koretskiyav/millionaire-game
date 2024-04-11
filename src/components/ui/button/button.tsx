import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  );
}
