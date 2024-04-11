export function getLetter(ind: number): string {
  return String.fromCharCode(65 + ind);
}

export function getFontSize(answer: string) {
  const chapters = answer.length;
  if (chapters < 30) return 20;
  if (chapters > 100) return 14;
  return 20 - ((chapters - 30) * 6) / 70;
}
