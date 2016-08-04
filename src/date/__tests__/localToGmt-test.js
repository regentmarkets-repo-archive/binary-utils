import LocalToGmt from '../LocalToGmt';
import { expect } from 'chai';

describe('LocalToGmt', () =>{
    it('should convert local to gmt Date', () => {
        const theDate = new Date();
        const expectedDate = new Date(theDate + (theDate.getTimezoneOffset() * 60 * 1000));
        const givenDate = LocalToGmt(theDate);
        expect(givenDate.toDateString()).to.equal(expectedDate.toDateString());
    })
})