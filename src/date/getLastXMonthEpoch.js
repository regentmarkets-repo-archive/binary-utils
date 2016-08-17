export default (x: number): number => {
	const d = new Date();
	d.setMonth(d.getMonth() - x);
	return Math.floor(d.getTime() / 1000);
};
