import yesterdayEpoch from './yesterdayEpoch';

export default () =>
    (new Date(yesterdayEpoch() * 1000)).toISOString().slice(0, 10);
