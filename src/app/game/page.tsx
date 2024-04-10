'use client';

import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import questions from '../questions.json';
import Gain from '../components/ui/gain/gain';

export default function Game() {
  const [currentInd, setCurrentInd] = useState(0);
  const router = useRouter();

  const { question, answers, correct } = questions[currentInd];

  const onAnswer = useCallback(
    (answer: number) => {
      if (!correct.includes(answer)) {
        router.push(`/over?gain=${questions[currentInd - 1]?.gain || 0}`);
      } else if (!questions[currentInd + 1]) {
        router.push(`/over?gain=${questions[currentInd].gain}`);
      } else {
        setCurrentInd((ind) => ind + 1);
      }
    },
    [correct, currentInd, router],
  );

  return (
    <main className={styles.main}>
      <div className={styles.board}>
        <div>{question}</div>
        <div>
          {answers.map((answer, ind) => (
            <button type="button" key={answer} onClick={() => onAnswer(ind)}>
              {answer}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.side}>
        {questions.map((q, ind) => (
          <Gain
            key={q.gain}
            gain={q.gain}
            stage={Gain.getGainStage(ind, currentInd)}
          />
        ))}
      </div>
    </main>
  );
}
