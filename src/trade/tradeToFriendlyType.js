import tradeTypeCodeToText from './tradeTypeCodeToText';
import typeHasBarrier from './typeHasBarrier';

export default (code: ContractType, barrier: number): string =>
    tradeTypeCodeToText(code) + (typeHasBarrier(code) ? ' ' + barrier : '');
