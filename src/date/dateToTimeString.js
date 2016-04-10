import dateAsLocalISOString from './dateAsLocalISOString';

export default date =>
    dateAsLocalISOString(date).slice(11, 19);
