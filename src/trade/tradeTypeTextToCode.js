import tradeTypes from './tradeTypes';

export default (text: string): ContractType =>
    tradeTypes.find(x => x.text === text).value;
