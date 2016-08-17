import dateToDateString from './dateToDateString';

export default (): string => {
	const d = new Date();
	d.setFullYear(new Date().getFullYear() + 1);
	return dateToDateString(d);
};
