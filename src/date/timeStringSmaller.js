import timeStringBigger from './timeStringBigger';

export default (a: string, b: string): boolean => {
    if (a === b) {
        return false;
    }
    return !timeStringBigger(a, b);
};
