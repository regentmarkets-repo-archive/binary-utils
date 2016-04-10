import { tradeTypes } from './TradeParams';

export default type =>
    !!tradeTypes.find(x => x.value === type).barrier;
