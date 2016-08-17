import type { Candle, Tick } from '../types';

export default (candles: Candle[]): Tick[] =>
    candles.map(data => ({ quote: +data.open, epoch: +data.epoch }));
