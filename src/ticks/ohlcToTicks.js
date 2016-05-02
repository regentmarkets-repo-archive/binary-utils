export default candles => candles.map(data => ({ quote: +data.open, epoch: +data.epoch }));
