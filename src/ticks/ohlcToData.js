// open_time is used when data is stream
export default d => [+(d.open_time || d.epoch) * 1000, +d.open, +d.high, +d.low, +d.close];
