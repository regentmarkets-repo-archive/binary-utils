import dateAsLocalISOString from './dateAsLocalISOString';

export default date =>
    dateAsLocalISOString(date).slice(0, 10);
