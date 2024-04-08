import React from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  primary: boolean;
}

export default function Button({ children, primary }: ButtonProps) {
  return (
    <button className={clsx({ [styles.primary]: primary })} type="button">
      {children}
    </button>
  );
}
