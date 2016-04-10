import dateToTimeString from './dateToTimeString';

export default epoch =>
    dateToTimeString(new Date(epoch * 1000));
