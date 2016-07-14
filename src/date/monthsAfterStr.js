import dateToDateString from './dateToDateString';
export default (m) => {
	const d = new Date(new Date(new Date()).setMonth(new Date().getMonth() + m));
	return dateToDateString(d);
}
