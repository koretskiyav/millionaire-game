import React from 'react';
import clsx from 'clsx';
import styles from './option.module.scss';
import { OptionVariant } from './types';
import { getLetter } from './utils';

interface OptionProps {
  option: number;
  answer: string;
  variant: OptionVariant;
  onSelect: (key: number) => void;
}

export default function Option({
  option,
  answer,
  variant,
  onSelect,
}: OptionProps) {
  return (
    <div className={styles.option}>
      <div className={clsx(styles.line, styles[variant])} />
      <button
        type="button"
        className={clsx(styles.button, styles[variant])}
        onClick={() => onSelect(option)}
      >
        <b>{getLetter(option)}</b>
        <span>{answer}</span>
      </button>
      <div className={clsx(styles.line, styles[variant])} />
    </div>
  );
}
