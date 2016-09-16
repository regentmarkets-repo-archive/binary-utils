import tradeTypes from './tradeTypes';

export default (text: string): ContractType => {
    const tradeType = tradeTypes.find(x => x.text === text);
    if (!tradeType) throw new Error('Unknown trade type text');
    return tradeType.value;
};
