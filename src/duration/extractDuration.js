import extractDurationHelper from './extractDurationHelper';

export default (contracts: AvailableContractDetails[], type: ContractType): ?DurationOption[] => {
    const contractsOfType = contracts.filter(c => c.contract_type === type);
    const nonForwardStartingContracts = contractsOfType.filter(c => !c.forward_starting_options);

    if (nonForwardStartingContracts.length === 0) {
        return undefined;
    }

    return extractDurationHelper(nonForwardStartingContracts, type);
};
