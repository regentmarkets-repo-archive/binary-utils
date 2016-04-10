import epochToDate from './epochToDate';
import dateToDateString from './dateToDateString';

export default epoch =>
    epoch && dateToDateString(epochToDate(epoch));
