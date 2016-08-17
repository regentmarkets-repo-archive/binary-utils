export default (password: string): boolean =>
    /^[ -~]{6,25}$/.test(password);
