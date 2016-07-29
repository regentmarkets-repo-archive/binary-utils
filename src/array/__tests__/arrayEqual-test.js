import { expect } from 'chai';
import arrayEqual from '../arrayEqual';

describe('arrayEqual', () => {
     it('two empty arrays are equal', () => {
        const arr1 = [];
        const arr2 = [];
        const result = arrayEqual(arr1, arr2);
        expect(result).to.be.true;
    });

    it('arrays with different lengths are different', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3, 4];
        const result = arrayEqual(arr1, arr2);
        expect(result).to.be.false;
    });

    it('arrays with different values are not equal', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [6, 7, 8, 9, 10];
        const result = arrayEqual(arr1, arr2);
        expect(result).to.be.false;
    });

    it('arrays with different types are not equal', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = ['1', '2', '3', '4', '5'];
        const result = arrayEqual(arr1, arr2);
        expect(result).to.be.false;
    });

    it('arrays with each value equaling are equal', () => {
        const arr1 = [1, '2', true, 4, -5];
        const arr2 = [1, '2', true, 4, -5];
        const result = arrayEqual(arr1, arr2);
        expect(result).to.be.true;
    });
});
