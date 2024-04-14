import React from 'react';
import { Option, Icon } from '@/components/ui';
import styles from './board.module.scss';
import { getOptionVariant } from './utils';
import { Game, Menu } from '../../types';

interface BoarProps {
  game: Game;
  menu: Menu;
}

export function Board({ game, menu }: BoarProps) {
  const { question, answers, selected, correct, onSelect } = game;

  return (
    <div className={styles.board}>
      <div className={styles.menu}>
        <Icon name="menu" onClick={menu.open} />
      </div>
      <div className={styles.question}>{question}</div>
      <div className={styles.options}>
        {answers.map((answer, ind) => (
          <Option
            key={answer}
            option={ind}
            onSelect={onSelect}
            answer={answer}
            variant={getOptionVariant(ind, selected, correct)}
          />
        ))}
      </div>
    </div>
  );
}
