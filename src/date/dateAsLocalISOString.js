import gmtToLocal from './gmtToLocal';

export default date =>
    gmtToLocal(date).toISOString();
