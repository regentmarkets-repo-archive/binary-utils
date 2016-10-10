import groupArrToNestedArr from '../groupArrayToNestedArray';

describe('groupArrToNestedArr', () => {
    it('should return empty arr if input is empty', () => {
        expect(groupArrToNestedArr([], 'a')).toEqual([]);
    });

    it('should return nested arr if input is non empty', () => {
        const input = [{ a: 1 }, { a: 2 }];
        const result = groupArrToNestedArr(input, 'a');

        expect(result.length).toEqual(2);
    });

    it('should group by key specified', () => {
        const input = [{ a: 1 }, { a: 1 }, { a: 1 }, { a: 2 }];
        const result = groupArrToNestedArr(input, 'a');

        expect(result[0].length).toEqual(3);
        expect(result[1].length).toEqual(1);
    });

    it('should preserve order of input arr', () => {
        const input = [{ a: 5 }, { a: 4 }, { a: 1 }, { a: 1 }];
        const result = groupArrToNestedArr(input, 'a');

        expect(result[0]).toEqual([{ a: 5 }]);
        expect(result[1]).toEqual([{ a: 4 }]);
        expect(result[2]).toEqual([{ a: 1 }, { a: 1 }]);
    });
});
