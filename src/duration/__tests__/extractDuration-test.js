import { expect } from 'chai';
import mockedContract from 'binary-test-data/contractsForR50';
import extractDuration from '../extractDuration';

describe('extractDuration', () => {
    it('should get duration of specified type', () => {
        const duration = extractDuration(mockedContract, 'CALL');
        expect(duration).to.be.contains({ min: 5, max: 10, unit: 't' });
        expect(duration).to.have.lengthOf(5);
    });

    it('should array of object with shape of {min, max, unit}', () => {
        const duration = extractDuration(mockedContract, 'CALL');
        expect(duration[0]).to.be.contains.keys(['min', 'max', 'unit']);
    });

    it('should return undefined if type not found', () => {
        const duration = extractDuration(mockedContract, 'UNKNOWN TYPE');
        expect(duration).to.be.undefined;
    });
});
