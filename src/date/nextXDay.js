export default (x: number): Date => {
    const tmr = new Date();
    tmr.setDate(tmr.getDate() + x);
    return tmr;
};
