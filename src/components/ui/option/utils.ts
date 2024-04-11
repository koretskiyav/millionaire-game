/* eslint-disable operator-linebreak */
export function getLetter(ind: number): string {
  return String.fromCharCode(65 + ind);
}

export const MIN_FONT_SIZE = 14;
export const MAX_FONT_SIZE = 20;

const START_LIMIT = 30;
const END_LIMIT = 100;

export function getFontSize(answer: string) {
  const chapters = answer.length;
  if (chapters < START_LIMIT) return MAX_FONT_SIZE;
  if (chapters > END_LIMIT) return MIN_FONT_SIZE;
  return (
    MAX_FONT_SIZE -
    ((chapters - START_LIMIT) * (MAX_FONT_SIZE - MIN_FONT_SIZE)) /
      (END_LIMIT - START_LIMIT)
  );
}
