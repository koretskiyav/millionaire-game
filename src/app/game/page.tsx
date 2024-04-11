'use client';

import React from 'react';
import clsx from 'clsx';
import Icon from '@/components/ui/icon/icon';
import styles from './page.module.scss';
import Gain from '../../components/ui/gain/gain';
import Option from '../../components/ui/option/option';
import useGame from './useGame';
import { getOptionVariant } from './utils';
import useMenu from './useMenu';

export default function Game() {
  // eslint-disable-next-line object-curly-newline, operator-linebreak
  const { currentInd, question, answers, selected, correct, gains, onSelect } =
    useGame();

  const { isOpenMenu, openMenu, closeMenu } = useMenu();

  return (
    <main className={styles.main}>
      <div className={styles.board}>
        <div className={styles.menu}>
          <Icon name="menu" onClick={openMenu} />
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
      <div className={clsx(styles.side, { [styles.open]: isOpenMenu })}>
        <div className={styles.menu}>
          <Icon name="close" onClick={closeMenu} />
        </div>
        {gains.map((gain, ind) => (
          <Gain
            key={gain}
            gain={gain}
            stage={Gain.getGainStage(ind, currentInd)}
          />
        ))}
      </div>
    </main>
  );
}
