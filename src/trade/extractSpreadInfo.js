export default contracts => ({
    amountPerPoint: contracts[0].amount_per_point,
    stopType: contracts[0].stop_type,
    stopLoss: contracts[0].stop_loss,
    stopProfit: contracts[0].stop_profit,
});
