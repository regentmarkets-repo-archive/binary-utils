import tradeTypes from './tradeTypes';

export default type =>
    !!tradeTypes.find(x => x.value === type).barrier;
