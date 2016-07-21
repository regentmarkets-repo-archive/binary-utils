import dateToDateString from './dateToDateString';
export default (m) => {
	const d = new Date();
	const newDate = new Date(d.setMonth(d.getMonth() + m));
	return dateToDateString(newDate);
}
