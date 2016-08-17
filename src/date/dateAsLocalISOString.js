export default (date: Date): string =>
    (new Date(date - date.getTimezoneOffset() * 60 * 1000)).toISOString();
