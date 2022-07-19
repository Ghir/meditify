import * as dayjs from 'dayjs';

export const formatTime = (time: number, format: string): string =>
  dayjs(time * 1000).format(format);
