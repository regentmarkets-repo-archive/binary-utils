export default epoch =>
    (new Date(epoch * 1000)).toISOString().slice(11, 19);
