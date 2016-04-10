export default date =>
    date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
