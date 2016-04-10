import dateToDateString from './dateToDateString';
import yesterdayEpoch from './yesterdayEpoch';

export default () =>
    dateToDateString(new Date(yesterdayEpoch() * 1000));
