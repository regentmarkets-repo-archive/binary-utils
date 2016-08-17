export default (date: Date): string =>
    date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
