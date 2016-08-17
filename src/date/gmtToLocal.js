export default (date: Date): Date =>
    new Date(date - date.getTimezoneOffset() * 60 * 1000);
