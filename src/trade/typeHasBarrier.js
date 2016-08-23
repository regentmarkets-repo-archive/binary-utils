import tradeTypes from './tradeTypes';

export default (type: ContractType): boolean =>
    !!tradeTypes.find(x => x.value === type).barrier;
