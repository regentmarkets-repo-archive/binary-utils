import tradeTypes from './constants/tradeTypes';

export default text =>
    tradeTypes.find(x => x.text === text).value;
