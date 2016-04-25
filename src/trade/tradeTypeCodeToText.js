import tradeTypes from './tradeTypes';

export default code =>
    tradeTypes.find(x => x.value === code).text;
