import { tradeTypes } from './TradeParams';

export default code =>
    tradeTypes.find(x => x.value === code).text;
