import { useGame } from './hooks/useGame';
import { useMenu } from './hooks/useMenu';

export type Game = ReturnType<typeof useGame>;
export type Menu = ReturnType<typeof useMenu>;
