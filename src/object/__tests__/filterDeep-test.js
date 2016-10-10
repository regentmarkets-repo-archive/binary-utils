import filterDeep from '../filterDeep';

describe('filterDeep', () => {
    it('empty object filtered results in empty object', () => {
        const result = filterDeep({}, () => true);
        expect(result).toEqual({});
    });

    it('any object with empty predicate will retun an empty object', () => {
        const inputObject = {
            someKey: 'someVal',
            otheKey: {
                deepKey: 'otherVal',
            },
            arrayKey: [1, 2, 3],
        };
        const result = filterDeep(inputObject, () => false);
        expect(result).toEqual({});
    });

    it('Wuut', () => {
        const inputObject = {
            someKey: 'someVal',
            otheKey: {
                deepKey: 'otherVal',
            },
            arrayKey: [1, 2, 3],
        };
        const result = filterDeep(inputObject, x => x === 'someVal');
        expect(result).toEqual({ someKey: 'someVal' });
    });
});
