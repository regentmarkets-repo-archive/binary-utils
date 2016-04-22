import getAbsoluteBarrierFromContract from './getAbsoluteBarrierFromContract';

export default (contract, lastTick) =>
    getAbsoluteBarrierFromContract(contract, lastTick, 'barrier');
