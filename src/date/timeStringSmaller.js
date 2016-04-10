import timeStringBigger from './timeStringBigger';

export default (a, b) => {
    if (a === b) {
        return false;
    }
    return !timeStringBigger(a, b);
};
