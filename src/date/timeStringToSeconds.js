// only supported format = "hh:mm", seconds are not supported
export default (timeString: string): number => {
    const h = +timeString.slice(0, 2);
    const m = +timeString.slice(3, 5);

    return (h * 3600) + (m * 60);
};
