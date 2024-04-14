'use client';

import React from 'react';
import styles from './page.module.scss';
import { Board, Gains } from './components';
import { useGame } from './hooks/useGame';
import { useMenu } from './hooks/useMenu';

export default function Game() {
  const game = useGame();
  const menu = useMenu();

  return (
    <main className={styles.main}>
      <Board game={game} menu={menu} />
      <Gains game={game} menu={menu} />
    </main>
  );
}
