import { tradeTypes } from './TradeParams';

export default text =>
    tradeTypes.find(x => x.text === text).value;
