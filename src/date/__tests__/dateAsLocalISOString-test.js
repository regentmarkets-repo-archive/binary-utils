import dateAsLocal from '../dateAsLocalISOString';

describe('dateAsLocalISOString', () => {
    it('should return date as localISOString', () => {
      const date = new Date('2016-07-27 11:38:08');
      const givenDate = dateAsLocal(date);
      const expectedDate = new Date(date - (date.getTimezoneOffset() * 60 * 1000)).toISOString();
      expect(givenDate).toEqual(expectedDate);
    });
});
