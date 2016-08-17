export default (duration: string): boolean =>
    !!duration && duration.slice(-1) === 't';
