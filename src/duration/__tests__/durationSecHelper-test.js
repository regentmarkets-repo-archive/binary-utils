import durationSecHelper from '../durationSecHelper';

describe('durationSecHelper', () => {
	it('should convert minutes duration to seconds', () => {
		const d = durationSecHelper('2m');
		expect(d).toEqual(2 * 60);
	});

	it('should convert hours duration to seconds', () => {
		const d = durationSecHelper('2h');
		expect(d).toEqual(2 * 60 * 60);
	});

	it('should convert days duration to seconds', () => {
		const d = durationSecHelper('2d');
		expect(d).toEqual(2 * 60 * 60 * 24);
	});
});
