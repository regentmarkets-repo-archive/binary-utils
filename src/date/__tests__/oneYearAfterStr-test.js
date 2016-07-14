import { expect } from 'chai';
import oneYearAfterStr from '../oneYearAfterStr';

describe('oneYearAfterStr', () => {
    it('should return a date str with one year after', () => {
        const str = oneYearAfterStr();
        const nextYearStr = (new Date()).getFullYear() + 1;
        expect(str).to.match(new RegExp(nextYearStr + '$'));
    })
})