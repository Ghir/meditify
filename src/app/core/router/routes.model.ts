import { RoutesUtils } from '@router/routes.utils';

export type TopRoutesTypes =
  typeof RoutesUtils.TOP_ROUTES[keyof typeof RoutesUtils.TOP_ROUTES];

export type MeditationRoutesTypes =
  typeof RoutesUtils.MEDITATION_ROUTES[keyof typeof RoutesUtils.MEDITATION_ROUTES];

export type TimerRoutesTypes =
  typeof RoutesUtils.TIMER_ROUTES[keyof typeof RoutesUtils.TIMER_ROUTES];

export type PageRoutesTypes =
  typeof RoutesUtils.PAGE_ROUTES[keyof typeof RoutesUtils.PAGE_ROUTES];

export type RoutesTypes = TopRoutesTypes | PageRoutesTypes;
