import { expect } from 'chai';
import isDurationWithinRange from '../isDurationWithinRange';

describe('isDurationWithinRange', () => {
    it('is true if duration is within range', () => {
        const duration = '50';
        const unit = 's';
        const range = [{ unit: 's', min: 10, max: 365 }];

        const result = isDurationWithinRange(duration, unit, range);

        expect(result).to.be.true;
    });

    it('is false if duration is not within range', () => {
        const duration = '2000';
        const unit = 's';
        const range = [{ unit: 's', min: 10, max: 365 }];

        const result = isDurationWithinRange(duration, unit, range);

        expect(result).to.be.false;
    });

    it('is false if duration unit does not match', () => {
        const duration = '100';
        const unit = 'm';
        const range = [{ unit: 's', min: 10, max: 365 }];

        const result = isDurationWithinRange(duration, unit, range);

        expect(result).to.be.false;
    });
});
