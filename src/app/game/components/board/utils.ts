import { OptionVariant } from '@/components/ui';

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
