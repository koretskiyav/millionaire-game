import { OptionVariant } from '../../components/ui/option/types';
import { GainStage } from '../../components/ui/gain/types';

export async function sleep(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

export function getOptionVariant(
  ind: number,
  selected: number | null,
  correct: number[] | null,
): OptionVariant {
  if (correct) {
    if (correct.includes(ind)) return 'correct';
    if (ind === selected) return 'wrong';
    return 'default';
  }
  if (ind === selected) return 'selected';
  return 'default';
}

export function getGainStage(gainInd: number, currentInd: number): GainStage {
  if (gainInd === currentInd) return 'current';
  if (gainInd > currentInd) return 'upcoming';
  return 'passed';
}
