import getUniqueId from '../getUniqueId';

describe('getUniqueId', () => {
    it('ids start from 0', () => {
        const id = getUniqueId();
        expect(id).toEqual(0);
    });

    it('next ids requested are sequential', () => {
        expect(getUniqueId()).toEqual(1);
        expect(getUniqueId()).toEqual(2);
    });

    it('ids are globally unique', () => {
        const id1 = getUniqueId();
        const id2 = getUniqueId();
        expect(id1).not.toEqual(id2);
    });
});
