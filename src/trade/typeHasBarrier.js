import type { ContractType } from '../types';
import tradeTypes from './tradeTypes';

export default (type: ContractType): boolean =>
    !!tradeTypes.find(x => x.value === type).barrier;
