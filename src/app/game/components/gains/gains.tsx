import React from 'react';
import clsx from 'clsx';
import { Gain, Icon } from '@/components/ui';
import styles from './gains.module.scss';
import { Game, Menu } from '../../types';
import { getGainStage } from './utils';

interface GainsProps {
  game: Game;
  menu: Menu;
}
export function Gains({ game, menu }: GainsProps) {
  const { gains, currentInd } = game;

  return (
    <div className={clsx(styles.gains, { [styles.open]: menu.isOpen })}>
      <div className={styles.menu}>
        <Icon name="close" onClick={menu.close} />
      </div>
      {gains.map((gain, ind) => (
        <Gain key={gain} gain={gain} stage={getGainStage(ind, currentInd)} />
      ))}
    </div>
  );
}
