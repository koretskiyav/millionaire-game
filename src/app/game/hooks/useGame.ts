import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import questions from '../../../questions.json';

const WAIT_FOR_ANSWER_TIMEOUT = 500; // ms
const WAIT_FOR_NEXT_STEP_TIMEOUT = 1000; // ms

async function sleep(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

export function useGame() {
  const [currentInd, setCurrentInd] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const router = useRouter();

  const { question, answers, correct } = questions[currentInd];

  const gains = useMemo(() => questions.map((q) => q.gain), []);

  const onSelect = async (answer: number) => {
    if (selected !== null) return;
    setSelected(answer);
    await sleep(WAIT_FOR_ANSWER_TIMEOUT);
    setShowAnswer(true);
    await sleep(WAIT_FOR_NEXT_STEP_TIMEOUT);
    if (!correct.includes(answer)) {
      router.push(`/over?gain=${questions[currentInd - 1]?.gain || 0}`);
    } else if (!questions[currentInd + 1]) {
      router.push(`/over?gain=${questions[currentInd].gain}`);
    } else {
      setCurrentInd((ind) => ind + 1);
    }
    setSelected(null);
    setShowAnswer(false);
  };

  return {
    currentInd,
    question,
    answers,
    selected,
    gains,
    correct: showAnswer ? correct : null,
    onSelect,
  };
}
