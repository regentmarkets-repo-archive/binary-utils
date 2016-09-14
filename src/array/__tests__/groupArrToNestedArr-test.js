import { expect } from 'chai';
import groupArrToNestedArr from '../groupArrToNestedArr';

describe('groupArrToNestedArr', () => {
    it('should return empty arr if input is empty', () => {
        expect(groupArrToNestedArr([], 'a')).to.deep.equal([]);
    });

    it('should return nested arr if input is non empty', () => {
        const input = [{ a: 1 }, { a: 2 }];
        const result = groupArrToNestedArr(input, 'a');

        expect(result).to.have.lengthOf(2);
        expect(result[0]).to.be.array;
    });

    it('should group by key specified', () => {
        const input = [{ a: 1 }, { a: 1 }, { a: 1 }, { a: 2 }];
        const result = groupArrToNestedArr(input, 'a');

        expect(result[0]).to.have.lengthOf(3);
        expect(result[1]).to.have.lengthOf(1);
    });

    it('should preserve order of input arr', () => {
        const input = [{ a: 5 }, { a: 4 }, { a: 1 }, { a: 1 }];
        const result = groupArrToNestedArr(input, 'a');

        expect(result[0]).to.deep.equal([{ a: 5 }]);
        expect(result[1]).to.deep.equal([{ a: 4 }]);
        expect(result[2]).to.deep.equal([{ a: 1 }, { a: 1 }]);
    })
});
