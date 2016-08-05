import { expect } from 'chai';
import dateToGMTString from '../dateToGMTString';


describe('dateToGMTString', () => {
	it('should convert date to gmt string equivalent', () => {
		const date = new Date();
		const expectedDate = new Date(dateToGMTString(date));
		const timeOffSett = date.getTimezoneOffset() / 60;
		const newDate = new Date(date.setHours(date.getHours() + timeOffSett));
		expect(newDate.getHours()).to.equal(expectedDate.getHours());
	});
});
