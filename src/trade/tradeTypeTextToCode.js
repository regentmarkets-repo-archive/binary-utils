import tradeTypes from './tradeTypes';

export default text =>
    tradeTypes.find(x => x.text === text).value;
