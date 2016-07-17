import { expect } from 'chai';
import durationToSecs from '../durationToSecs';

describe('durationToSecs', () => {
    it('throws when duration unit is not recognized', () => {
        expect(() => durationToSecs(-10, 'random')).to.throw();
    });

    it('when unit is "s" treat input as seconds', () => {
        expect(durationToSecs(-1, 's')).to.equal(-1);
        expect(durationToSecs(0, 's')).to.equal(0);
        expect(durationToSecs(10, 's')).to.equal(10);
        expect(durationToSecs(100, 's')).to.equal(100);
    });

    it('when unit is "m" treat input as minutes', () => {
        expect(durationToSecs(-1, 'm')).to.equal(-60);
        expect(durationToSecs(0, 'm')).to.equal(0);
        expect(durationToSecs(10, 'm')).to.equal(600);
        expect(durationToSecs(100, 'm')).to.equal(6000);
    });

    it('when unit is "h" treat input as hours', () => {
        expect(durationToSecs(-1, 'h')).to.equal(-3600);
        expect(durationToSecs(0, 'h')).to.equal(0);
        expect(durationToSecs(10, 'h')).to.equal(36000);
        expect(durationToSecs(100, 'h')).to.equal(360000);
    });

    it('when unit is "s" treat as days', () => {
        expect(durationToSecs(-1, 'd')).to.equal(-86400);
        expect(durationToSecs(0, 'd')).to.equal(0);
        expect(durationToSecs(10, 'd')).to.equal(864000);
        expect(durationToSecs(100, 'd')).to.equal(8640000);
    });
});
