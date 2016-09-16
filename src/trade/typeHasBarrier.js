import tradeTypes from './tradeTypes';

export default (type: ContractType): boolean => {
    const typeDetails = tradeTypes.find(x => x.value === type);
    return !!(typeDetails && typeDetails.barrier);
};
