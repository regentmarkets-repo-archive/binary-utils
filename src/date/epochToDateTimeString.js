import epochToDate from './epochToDate';

export default epoch =>
    epochToDate(epoch).toUTCString();
