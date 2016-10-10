import mockedContract from 'binary-test-data/contractsForR50';
import extractDuration from '../extractDuration';

describe('extractDuration', () => {
    it('should get duration of specified type', () => {
        const duration = extractDuration(mockedContract, 'CALL');
        expect(duration).toContainEqual({ min: 5, max: 10, unit: 't' });
        expect(duration.length).toEqual(5);
    });

    it('should array of object with shape of {min, max, unit}', () => {
        const duration = extractDuration(mockedContract, 'CALL');
        expect(duration[0].min).toBeDefined();
        expect(duration[0].max).toBeDefined();
        expect(duration[0].unit).toBeDefined();
    });

    it('should return undefined if type not found', () => {
        const duration = extractDuration(mockedContract, 'UNKNOWN TYPE');
        expect(duration).not.toBeDefined()
    });
});
