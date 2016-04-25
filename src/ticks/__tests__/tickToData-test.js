import { expect } from 'chai';
import tickToData from '../tickToData';

describe('tickToData', () => {
    it('should get an object as parameter', () => {
        expect(() => tickToData()).to.throw();
    });

    it('converts a tick object to array for use by a chart', () => {
        const tick = {
            epoch: 123,
            quote: 123.45,
        };
        const data = tickToData(tick);
        expect(data).to.deep.equal([123 * 1000, 123.45]);
    });
});
