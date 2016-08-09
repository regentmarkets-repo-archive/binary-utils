import { expect } from 'chai';
import timeStringSmaller from '../timeStringSmaller';

describe('timeStringSmaller', () => {
    it('should return true when the first time is smaller by minutes', () => {
        const smallerTime = '23:24:25';
        const biggerTime = '23:54:25';
        expect(timeStringSmaller(smallerTime, biggerTime)).to.be.true;
    });

    it('should return true when the first time is smaller by seconds', () => {
        const smallerTime = '23:24:25';
        const biggerTime = '23:24:26';
        expect(timeStringSmaller(smallerTime, biggerTime)).to.be.true;
    })

    it('should return true when the first time is smaller by hour', () => {
        const smallerTime = '22:24:25';
        const biggerTime = '23:24:25';
        expect(timeStringSmaller(smallerTime, biggerTime)).to.be.true;
    })

    it('should return false when the first and second times are equal', () => {
        const smallerTime = '22:24:25';
        const biggerTime = '22:24:25';
        expect(timeStringSmaller(smallerTime, biggerTime)).to.be.false;
    })

    it('should return false when the second time is bigger than the first', () => {
        const smallerTime = '23:24:25';
        const biggerTime = '22:24:25';
        expect(timeStringSmaller(smallerTime, biggerTime)).to.be.false;
    })
})
