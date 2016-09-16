import tradeTypes from './tradeTypes';

export default (code: ContractType): string => {
    const tradeType = tradeTypes.find(x => x.value === code);
    return tradeType ? tradeType.text : 'Unknown';
};
