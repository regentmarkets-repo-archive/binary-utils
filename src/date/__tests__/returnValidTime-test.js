import { expect } from 'chai';
import validTime from '../returnValidTime';

describe('timeStringIsBetween', () => {
	it('should construct a new valid time from the time with no seconds string', () => {
		const expectedTime = validTime('01:33:3', ':');
		expect(expectedTime).to.equal('01:33:03');
	});

	it('should construct a new valid time from the time with no minutes string', () => {
		const expectedTime = validTime('01::33', ':');
		expect(expectedTime).to.equal('01:00:33');
	});

	it('should construct a new valid time from the time with no hour string', () => {
		const expectedTime = validTime(':33:33', ':');
		expect(expectedTime).to.equal('00:33:33');
	});

	it('should not temper with a valid time', () => {
		const expectedTime = validTime('03:33:33', ':');
		expect(expectedTime).to.equal('03:33:33');
	});
});
