import epochToDate from './epochToDate';

export default (epoch: number): string =>
    epochToDate(epoch).toUTCString();
