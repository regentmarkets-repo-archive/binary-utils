import dateToDateString from './dateToDateString';
import yesterdayEpoch from './yesterdayEpoch';

export default (): string =>
    dateToDateString(new Date(yesterdayEpoch() * 1000));
