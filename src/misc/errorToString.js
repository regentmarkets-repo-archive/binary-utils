export default (text: string): string =>
    text.split(')').length > 1 ? text.split(')')[1] : text;
