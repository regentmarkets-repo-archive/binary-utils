// only supported format = "hh:mm", seconds are not supported
export default (timeString: string): number => {
    const tokens = timeString.split(':');
    if (tokens.length !== 2) {
        throw new Error(`Time string format incorrect, expecting HH:mm, actual: ${timeString}`);
    }
    const h = +tokens[0];
    const m = +tokens[1];

    return (h * 3600) + (m * 60);
};
