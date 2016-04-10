import epochToDate from './epochToDate';

export default epoch =>
    epoch && epochToDate(epoch).toISOString().slice(0, 10);
