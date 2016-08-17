import dateToTimeString from './dateToTimeString';

export default (epoch: number): string =>
    dateToTimeString(new Date(epoch * 1000));
