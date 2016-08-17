import yesterdayEpoch from './yesterdayEpoch';

export default (): string =>
    (new Date(yesterdayEpoch() * 1000)).toISOString().slice(0, 10);
