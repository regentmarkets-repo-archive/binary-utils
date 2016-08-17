export default (epoch: number): string =>
    (new Date(epoch * 1000)).toISOString().slice(11, 19);
