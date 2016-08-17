import epochToDate from './epochToDate';
import dateToDateString from './dateToDateString';

export default (epoch: number = 0): string =>
    dateToDateString(epochToDate(epoch));
