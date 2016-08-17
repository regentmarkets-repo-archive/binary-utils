import nowAsEpoch from '../date/nowAsEpoch';

export default (loginTime: number, interval: number): number =>
    interval - (nowAsEpoch() - loginTime) % interval;
