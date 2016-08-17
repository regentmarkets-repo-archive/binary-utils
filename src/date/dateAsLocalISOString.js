import gmtToLocal from './gmtToLocal';

export default (date: Date): string =>
    gmtToLocal(date).toISOString();
