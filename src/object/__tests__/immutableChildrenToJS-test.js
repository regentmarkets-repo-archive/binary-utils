import { expect } from 'chai';
import { fromJS } from 'immutable';
import immutableChildrenToJS from '../immutableChildrenToJS';

describe('immutableChildrenToJS', () => {
    it('returns undefined when no parameters', () => {
        expect(immutableChildrenToJS()).to.equal(undefined);
    });

    it('returns empty object with empty input', () => {
        const obj = {};
        const actual = immutableChildrenToJS(obj);
        expect(obj).to.deep.equal(actual);
    });

    it('returns new object, and does not transform the input parameter', () => {
        const obj = {};
        const actual = immutableChildrenToJS(obj);
        expect(obj).to.not.equal(actual);
    });

    it('returns the same object if it has no immutable children', () => {
        const obj = {
            someProp: 'someVal',
            anotherProp: 123,
        };
        const actual = immutableChildrenToJS(obj);
        expect(obj).to.deep.equal(actual);
    });

    it('transforms immutable children of plain object', () => {
        const expected = {
            someObj: {
                someProp: 'someVal',
                anotherProp: 123,
            },
        };
        const immutableObj = {
            someObj: fromJS({
                someProp: 'someVal',
                anotherProp: 123,
            }),
        };
        const actual = immutableChildrenToJS(immutableObj);
        expect(expected).to.deep.equal(actual);
    });
});
