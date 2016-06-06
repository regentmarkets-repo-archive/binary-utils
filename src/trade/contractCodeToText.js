export default code => ({
	contract_id: 'Contract ID',
	purchase_time: 'Purchase Time',
	ask_price: 'Ask Price',
	bid_price: 'Bid Price',
	date_start: 'Start Time',
	date_expiry: 'Expiry Time',
	date_settlement: 'Settlement Time',
    expiry_time: 'Expiry Time',

	current_spot: 'Current Spot',
	current_spot_time: 'Current Spot Time',
	entry_spot: 'Entry Spot',
	entry_tick_time: 'Entry Spot Time',
	sell_price: 'Sell Price',
	payout: 'Payout',
	buy_price: 'Purchase Price',

	barrier: 'Barrier',
	low_barrier: 'Low Barrier',
	high_barrier: 'High Barrier',

	sell_time: 'Sell Time',

	exit_tick_time: 'Exit Spot Time',		// to be confirmed
	exit_tick: 'Exit Spot',				// to show both or not?

	sell_spot_time: 'DO NOT USE',
	entry_tick: 'DO NOT USE',
	sell_spot: 'DO NOT USE',
})[code];
