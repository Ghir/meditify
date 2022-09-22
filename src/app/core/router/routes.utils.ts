export const topRoutes = {
  home: 'home/',
  meditation: 'meditation/',
  timer: 'timer/',
} as const;

export const meditationRoutes = {
  categories: 'categories',
  meditations: 'meditations',
} as const;

export const timerRoutes = {
  play: 'play',
  stats: 'stats',
} as const;

export const pageRoutes = {
  ...meditationRoutes,
  ...timerRoutes,
} as const;

export class RoutesUtils {
  public static get TOP_ROUTES(): typeof topRoutes {
    return topRoutes;
  }

  public static get MEDITATION_ROUTES(): typeof meditationRoutes {
    return meditationRoutes;
  }

  public static get TIMER_ROUTES(): typeof timerRoutes {
    return timerRoutes;
  }

  public static get PAGE_ROUTES(): typeof pageRoutes {
    return pageRoutes;
  }

  public static get ROUTES(): typeof topRoutes & typeof pageRoutes {
    return {
      ...topRoutes,
      ...pageRoutes,
    };
  }
}
