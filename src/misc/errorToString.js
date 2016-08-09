export default text =>
    text.split(')').length > 1 ? text.split(')')[1] : text;
