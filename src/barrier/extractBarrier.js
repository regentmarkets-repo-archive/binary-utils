import type { Contract, ContractType } from '../types';
import groupByKey from '../object/groupByKey';

const extractDigitBarrierHelper = (contractsGroupedByExpiry: any): any => {
    const expiryTypes = Object.keys(contractsGroupedByExpiry);
    const result = {};
    expiryTypes.forEach(et => {
        const contractsByExpiry = contractsGroupedByExpiry[et];
        result[et] = [{
            name: 'Digit',
            values: contractsByExpiry[0].last_digit_range,
            defaultValue: contractsByExpiry[0].last_digit_range[0],
        }];
    });
    return result;
};

const extract2BarriersHelper = (contractsGroupedByExpiry: any): any => {
    const expiryTypes = Object.keys(contractsGroupedByExpiry);
    const result = {};
    expiryTypes.forEach(et => {
        const contractsByExpiry = contractsGroupedByExpiry[et];
        result[et] = [
            { name: 'High barrier', defaultValue: contractsByExpiry[0].high_barrier },
            { name: 'Low barrier', defaultValue: contractsByExpiry[0].low_barrier },
        ];
    });
    return result;
};

const extract1BarrierHelper = (contractGroupedByExpiry: any, barrierName: string): any => {
    const expiryTypes = Object.keys(contractGroupedByExpiry);
    const result = {};
    expiryTypes.forEach(et => {
        const contractsByExpiry = contractGroupedByExpiry[et];
        const contractWithBarrier = contractsByExpiry.find(c => !!c.barrier);
        if (!contractWithBarrier) {
            return;
        }
        result[et] = [{ name: barrierName, defaultValue: contractWithBarrier.barrier }];
    });
    return result;
};

export default (contracts: Contract[], type: ContractType): ?number => {
    const groupByExpiryType = groupByKey(contracts, 'expiry_type');

    switch (type) {
        // types with 1 barrier
        case 'CALL':
            return extract1BarrierHelper(groupByExpiryType, 'Higher than');
        case 'PUT':
            return extract1BarrierHelper(groupByExpiryType, 'Lower than');
        case 'ONETOUCH':
        case 'NOTOUCH':
            return extract1BarrierHelper(groupByExpiryType, 'Touch spot');

        // types with 2 barriers
        case 'EXPIRYMISS':
        case 'EXPIRYRANGE':
        case 'RANGE':
        case 'UPORDOWN':
            return extract2BarriersHelper(groupByExpiryType);

        // special case: digit type
        case 'DIGITMATCH':
        case 'DIGITDIFF':
        case 'DIGITOVER':
        case 'DIGITUNDER':
            return extractDigitBarrierHelper(groupByExpiryType);

        // These types do not have barrier
        case 'DIGITODD':
        case 'DIGITEVEN':
        case 'ASIANU':
        case 'ASIAND':
        case 'SPREADU':
        case 'SPREADD':
            return undefined;
        default: {
            throw new Error(`Unknown trade type: ${type}`);
        }
    }
};
