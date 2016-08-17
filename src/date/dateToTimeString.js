import dateAsLocalISOString from './dateAsLocalISOString';

export default (date: Date): string =>
    dateAsLocalISOString(date).slice(11, 19);
