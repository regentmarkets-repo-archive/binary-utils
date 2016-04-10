export default x => {
    const tmr = new Date();
    tmr.setDate(tmr.getDate() + x);
    return tmr;
};
