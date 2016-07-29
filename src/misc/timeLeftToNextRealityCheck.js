import nowAsEpoch from '../date/nowAsEpoch';

export default (loginTime, interval) =>
    interval - (nowAsEpoch() - loginTime) % interval;
