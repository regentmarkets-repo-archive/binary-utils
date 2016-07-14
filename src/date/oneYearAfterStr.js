export default () => {
	const d = new Date();
	d.setFullYear(new Date().getFullYear() + 1);
	return d.toLocaleDateString();
}
