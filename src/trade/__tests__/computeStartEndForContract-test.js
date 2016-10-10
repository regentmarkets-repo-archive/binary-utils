import computeStartEndForContract from '../computeStartEndForContract';
import nowAsEpoch from '../../date/nowAsEpoch';

describe('computeStartEndForContract', () => {
    // note: there's a buffer range for start and end, meaning it always
    // return a timespan slightly larger than the contract actual duration timespan
    // todo: make the buffer customizable if we have such use case

    it('gets start and end for tick trade', () => {
        const contract = {
            date_start: 1475731075,
            tick_count: 5,
        };
        const { start, end } = computeStartEndForContract(contract);
        expect(start).toBeLessThan(1475731075);
        expect(end).toEqual(nowAsEpoch());
    });

    it('get start and end for non-tick trade', () => {
        const contract = {
            date_start: 1475731075,
            date_expiry: 1475731375,
        };
        const { start, end } = computeStartEndForContract(contract);
        expect(start).toBeLessThan(1475731075);
        expect(end).toBeGreaterThan(1475731075);
    });

    it('get start and end for contract ends future', () => {
        const fiveMinsLater = nowAsEpoch() + 300;
        const contract = {
            date_start: fiveMinsLater,
            date_expiry: fiveMinsLater + 300,
        };
        const { start, end } = computeStartEndForContract(contract);
        expect(start).toBeLessThan(fiveMinsLater);
        expect(end).toBeGreaterThan(fiveMinsLater + 300);
    });

    it('throws when contract end before start', () => {
        const fiveMinsLater = nowAsEpoch() + 300;
        const contract = {
            date_start: fiveMinsLater,
            date_expiry: fiveMinsLater - 300,
        };

        expect(() => computeStartEndForContract(contract)).toThrow(RangeError);
    })
});
