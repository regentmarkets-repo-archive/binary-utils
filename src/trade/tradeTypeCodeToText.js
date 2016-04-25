import tradeTypes from '../constants/tradeTypes';

export default code =>
    tradeTypes.find(x => x.value === code).text;
