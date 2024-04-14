import React from 'react';
import clsx from 'clsx';
import styles from './gain.module.scss';
import { formatGain } from './utils';
import { GainStage } from './types';

interface GainProps {
  gain: number;
  stage: GainStage;
}

export default function Gain({ gain, stage }: GainProps) {
  return (
    <div className={styles.gain}>
      <div className={clsx(styles.line, styles[stage])} />
      <div className={clsx(styles.content, styles[stage])}>
        {formatGain(gain)}
      </div>
      <div className={clsx(styles.line, styles[stage])} />
    </div>
  );
}
