import tradeTypes from './constants/tradeTypes';

export default type =>
    !!tradeTypes.find(x => x.value === type).barrier;
