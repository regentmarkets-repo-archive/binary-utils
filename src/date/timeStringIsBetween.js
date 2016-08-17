import timeStringBigger from './timeStringBigger';
import timeStringSmaller from './timeStringSmaller';

export default (start: string, end: string, target: string): boolean => {
    if (timeStringBigger(end, start)) {
        return timeStringBigger(target, start) && timeStringSmaller(target, end);
    }
    /**
     * if open time is bigger than close time
     * target should not between close and open time
     * eg. '09:00:00' is not between '23:00:00' (start) and '08:00:00'(close)
     * because it is between '08:00:00' to '23:00:00'
     * */

    return !(timeStringBigger(target, end) && timeStringSmaller(target, start));
};
