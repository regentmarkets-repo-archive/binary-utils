import dateAsLocalISOString from './dateAsLocalISOString';

export default =>
    dateAsLocalISOString(date).slice(11, 19);
