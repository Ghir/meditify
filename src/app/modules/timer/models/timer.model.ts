export const timer = {
  timer: 'timer',
  stats: 'stats',
} as const;

export type TimerMenu = typeof timer[keyof typeof timer];
