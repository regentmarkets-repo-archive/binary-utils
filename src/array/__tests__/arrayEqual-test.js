import arrayEqual from '../arrayEqual';
import { expect } from 'chai';

describe('arrayEqual', () => {
    it('Determine if two given arrays are not equal', () => {
        const arr1 = [10,20,30, 500, -1];
        const arr2 = [5,10,20, 100, -1];
        const givenArray = arrayEqual(arr1, arr2);
        expect(givenArray).to.equal(false);
    });

    it('Determine if two given equal arrays are equal', () => {
        const arr1 = [10,20,30, 500, -1];
        const arr2 = [10,20,30, 500, -1];
        const givenArray = arrayEqual(arr1, arr2);
        expect(givenArray).to.equal(true);
    });

     it('Determine if two empty arrays are equal', () => {
        const arr1 = [];
        const arr2 = [];
        const givenArray = arrayEqual(arr1, arr2);
        expect(givenArray).to.equal(true);
    });

     it('Determine if two arrays of different types are equal', () => {
        const arr1 = [10,20,30, 500, -1];
        const arr2 = ['10','20','30', '500', '-1'];
        const givenArray = arrayEqual(arr1, arr2);
        expect(givenArray).to.equal(false);
    });
});