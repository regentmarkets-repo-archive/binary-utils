import validDate from '../returnValidDate';

describe('timeStringIsBetween', () => {
	it('should construct a new valid date from the date with no days string', () => {
		const expectedDate = validDate('2016-07-', '-');
		expect(expectedDate).toEqual('2016-07-01');
	});

	it('should construct a new valid date from the date with no month string', () => {
		const expectedDate = validDate('2016--24', '-');
		expect(expectedDate).toEqual('2016-01-24');
	});

	it('should construct a new valid date from the date with no year string', () => {
		const expectedDate = validDate('-02-24', '-');
		expect(expectedDate).toEqual('01-02-24');
	});

	it('should not temper with a valid date', () => {
		const expectedDate = validDate('2016-07-28', '-');
		expect(expectedDate).toEqual('2016-07-28');
	});
});
