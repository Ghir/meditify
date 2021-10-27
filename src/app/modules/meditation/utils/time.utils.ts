import * as moment from 'moment';

export const formatTime = (time: number, format: string): string =>
  moment.utc(time * 1000).format(format);
