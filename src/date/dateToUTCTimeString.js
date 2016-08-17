export default (date: Date): string =>
    date.toISOString().slice(11, 19);
