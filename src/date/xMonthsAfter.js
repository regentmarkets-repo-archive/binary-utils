export default (m: number): Date =>
	new Date(new Date().setMonth(new Date().getMonth() + m));
