import tradeTypes from './tradeTypes';

export default (code: ContractType): string =>
    tradeTypes.find(x => x.value === code).text;
