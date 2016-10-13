export default (time: string): boolean => {
    const tokens = time.split(':');
    if (tokens.length !== 2) {
        return false;
    }

    return tokens.map((val, ind) => {
        switch (ind) {
            case 0: return parseInt(val, 0) < 24;
            case 1: return parseInt(val, 0) <= 59;
            default: return parseInt(val, 0) <= 59;
        }
    }).indexOf(false) > -1;
};
