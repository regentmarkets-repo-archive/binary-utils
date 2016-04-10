export default date =>
    new Date(date - date.getTimezoneOffset() * 60 * 1000);
