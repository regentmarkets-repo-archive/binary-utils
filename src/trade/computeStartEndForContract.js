import nowAsEpoch from '../date/nowAsEpoch';

export default contract => {
    const nowEpoch = nowAsEpoch();
    if (contract.tick_count) {
        const start = +(contract.date_start) - 5;
        const exitTime = +(contract.exit_tick_time) + 5;
        const end = exitTime || nowEpoch;
        return { start, end };
    }

    const bufferSize = 0.05;                            // 5 % buffer
    const contractStart = +(contract.date_start);
    const contractEnd = +(contract.exit_tick_time) || +(contract.date_expiry);

    if (contractEnd <= contractStart) {
        const e = new RangeError('Contract ends time is earlier than start time');
        e.name = 'ContractEndsBeforeStart';
        throw e;
    }

    const buffer = (contractEnd - contractStart) * bufferSize;
    const bufferedExitTime = contractEnd + buffer;

    const start = buffer ? contractStart - buffer : contractStart;
    const end = contractEnd ? bufferedExitTime : nowEpoch;

    return {
        end: Math.round(end),
        start: Math.round(start),
    };
};
