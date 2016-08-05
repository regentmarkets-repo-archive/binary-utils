import { expect } from 'chai';
import splitSecsToUnits from '../splitSecsToUnits';

describe('splitSecsToUnits', () => {
    it('should split seconds to seconds unit', () => {
        const minute = 24 % 60;
        const newUnit = splitSecsToUnits(24);
        const givenUnits = newUnit.filter(x => x > 0);
        expect(givenUnits).to.include(minute);
        expect(givenUnits).to.have.lengthOf(1);
    });

    it('should split seconds to minute unit', () => {
        const minute = Math.floor(120 / 60);
        const newUnit = splitSecsToUnits(120);
        const givenUnits = newUnit.filter(x => x > 0);
        expect(givenUnits).to.include(minute);
        expect(givenUnits).to.have.lengthOf(2);
    });

    it('should split seconds to hours units', () => {
        const minute = Math.floor((60 * 120) / 60);
        const hour = Math.floor(minute / 60);
        const newUnit = splitSecsToUnits(60 * 120);
        const givenUnits = newUnit.filter(x => x > 0);
        expect(givenUnits).to.include(hour);
        expect(givenUnits).to.have.lengthOf(3);
    });

    it('should split seconds to days units', () => {
        const minute = Math.floor((60 * 120 * 48) / 60);
        const hour = Math.floor(minute / 60);
        const day = Math.floor(hour / 24);
        const newUnit = splitSecsToUnits((60 * 120 * 48));
        const givenUnits = newUnit.filter(x => x > 0);
        expect(givenUnits).to.include(day);
        expect(givenUnits).to.have.lengthOf(4);
    });
});
