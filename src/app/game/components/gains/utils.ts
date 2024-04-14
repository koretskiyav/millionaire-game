import { GainStage } from '@/components/ui';

export function getGainStage(gainInd: number, currentInd: number): GainStage {
  if (gainInd === currentInd) return 'current';
  if (gainInd > currentInd) return 'upcoming';
  return 'passed';
}
