import { expect } from 'chai';
import mockedContract from 'binary-test-data/contractsForR50';
import extractForwardStartingDuration from '../extractForwardStartingDuration';

describe('extractForwardStartingDuration', () => {
    it('should return object with shape of {range, option}', () => {
        const duration = extractForwardStartingDuration(mockedContract, 'CALL');
        expect(duration).to.be.contains.keys(['range', 'options']);
    });

    it('should return option object with shape of {min, max, unit}', () => {
        const forwardDuration = extractForwardStartingDuration(mockedContract, 'CALL');
        expect(forwardDuration.options[0]).to.contains.keys(['min', 'max', 'unit']);
    });

    it('should range object with shape of {open, close, date}', () => {
        const forwardDuration = extractForwardStartingDuration(mockedContract, 'CALL');
        expect(forwardDuration.range[0]).to.contains.keys(['open', 'close', 'date']);
    });

    it('should return undefined if type not found', () => {
        const duration = extractForwardStartingDuration(mockedContract, 'UNKNOWN TYPE');
        expect(duration).to.be.undefined;
    });

    it('exception is thrown if two contracts forward starting for same type', () => {
        const contractFor = [{
            contract_type: 'CALL',
            forward_starting_options: [],
        }, {
            contract_type: 'CALL',
            forward_starting_options: [],
        }];
        expect(() =>
            extractForwardStartingDuration(contractFor, 'CALL')
        ).to.throw(/forward starting/);
    });
});
