export default (email: string): boolean =>
    /\S+@\S+\.\S+/.test(email);
