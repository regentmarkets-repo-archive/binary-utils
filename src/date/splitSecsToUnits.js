export default sec => {
    const minute = Math.floor(sec / 60);
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);

    return [sec, minute, hour, day];
};
