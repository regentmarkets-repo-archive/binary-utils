export default password =>
    /^[ -~]{6,25}$/.test(password);
