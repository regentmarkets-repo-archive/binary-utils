export default (m) => {
	const d = new Date(new Date().setMonth(new Date().getMonth() + m));
	return (d);
}
