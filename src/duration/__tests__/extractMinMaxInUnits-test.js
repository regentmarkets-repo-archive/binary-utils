import extractMinMaxInUnits from '../extractMinMaxInUnits';

describe('extractMinMaxInUnits', () => {

	it('should extract minutes duration from the range', ()=> {
		const minInUnits = 60 ;
		const maxInUnit = 60 * 2;
		const result = extractMinMaxInUnits(minInUnits, maxInUnit);
		expect(result).toContainEqual({ unit: 'm', min: 1, max: 2 });
	})

	it('should extract hours duration from the range', ()=> {
		const minInUnits = 60 * 60;
		const maxInUnit = 60 * 60 * 2;
		const result = extractMinMaxInUnits(minInUnits, maxInUnit);
		expect(result).toContainEqual({ unit: 'h', min: 1, max: 2 });
	})

	it('should extract days duration from the range', ()=> {
		const minInUnits = 60 * 60 * 24 ;
		const maxInUnit = 60 * 60 * 24 * 2;
		const result = extractMinMaxInUnits(minInUnits, maxInUnit);
		expect(result).toContainEqual({ unit: 'd', min: 1, max: 2 });
	})

	it('should extract minutes , hours and days durations from the range', () => {
		const minInUnits = 60 ;
		const maxInUnit = 60 * 60 * 24 * 2;
		expect(extractMinMaxInUnits(60, 60 * 60 * 24 * 2).length).toEqual(3);
	});
})
