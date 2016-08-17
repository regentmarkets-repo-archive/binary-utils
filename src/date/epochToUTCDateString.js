import epochToDate from './epochToDate';

export default (epoch: number = 0): string =>
    epochToDate(epoch).toISOString().slice(0, 10);
