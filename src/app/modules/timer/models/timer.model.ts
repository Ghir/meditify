export const timer = {
  timer: 'play',
  stats: 'stats',
} as const;

export type TimerMenu = typeof timer[keyof typeof timer];

export const DEFAULT_DURATION = 15;
