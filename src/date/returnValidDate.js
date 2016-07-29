export default (inputValue, bridge) => {
	const d = inputValue.split(bridge)
		        .map((obj) => {
		            switch (obj.length) {
		                case 0 : {
		                    return '01';
		                }
		                case 1 : {
		                    return '0' + (obj === '0' ? '1' : obj);
		                }
		                default:
		                    return obj;
		            }
		        })
		        .join(bridge);
	return d;	        
}
