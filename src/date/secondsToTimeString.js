export default secs => {
    const days = Math.floor(secs / 60 / 60 / 24);
    const hours = Math.floor(secs % (60 * 60 * 24) / (60 * 60));
    const minutes = Math.floor(secs % (60 * 60) / 60);
    const seconds = Math.floor(secs % 60);
    return (days > 0 ? `${days} day(s) ` : '')
        + (hours > 0 ? `${hours} hour(s)` : '')
        + (minutes > 0 ? `${minutes} minute(s)` : '')
        + (seconds > 0 ? `${seconds} second(s)` : '');
};
