const gainFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

// eslint-disable-next-line import/prefer-default-export
export function formatGain(gain: number) {
  return gainFormatter.format(gain); // '$3,500'
}
