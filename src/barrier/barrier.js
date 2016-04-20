import commonRelativeBarrier from './commonRelativeBarrier';

export default (barrier, barrierType, lastTick, entrySpot) => {
    return barrierType === 'absolute' ? barrier : commonRelativeBarrier(barrier, entrySpot, lastTick);
}
