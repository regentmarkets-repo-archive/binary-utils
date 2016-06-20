import nowAsEpoch from './date/nowAsEpoch';

export default function (loginTime, interval) {
    const currentTime = nowAsEpoch();
    const timeLeft = interval - ((currentTime - loginTime) % interval);
    return timeLeft;
}
