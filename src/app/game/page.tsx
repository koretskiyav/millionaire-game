'use client';

import React from 'react';
import styles from './page.module.scss';
import Gain from '../../components/ui/gain/gain';
import Option from '../../components/ui/option/option';
import useGame from './useGame';
import { getOptionVariant } from './utils';

export default function Game() {
  // eslint-disable-next-line object-curly-newline, operator-linebreak
  const { currentInd, question, answers, selected, correct, gains, onSelect } =
    useGame();

  return (
    <main className={styles.main}>
      <div className={styles.board}>
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
      <div className={styles.side}>
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
