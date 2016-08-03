import { expect } from 'chai';
import extractForwardStartingDuration from '../extractForwardStartingDuration';
import mockedContract from 'binary-test-data/contractsForR50';

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

    it('should return undefined if type not found', () =>{
        const duration = extractForwardStartingDuration(mockedContract, 'CALLA');
        expect(duration).to.be.undefined;
    });
});

