import tickToData from '../tickToData';

describe('tickToData', () => {
    it('should get an object as parameter', () => {
        expect(() => tickToData()).toThrow();
    });

    it('converts a tick object to array for use by a chart', () => {
        const tick = {
            epoch: 123,
            quote: 123.45,
        };
        const data = tickToData(tick);
        expect(data).toEqual([123 * 1000, 123.45]);
    });
});
