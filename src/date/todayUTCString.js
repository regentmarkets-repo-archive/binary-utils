export default (): string =>
    (new Date()).toISOString().slice(0, 10);
