export default (inputValue, bridge) =>
	inputValue.split(bridge).map(obj => {
        switch (obj.length) {
            case 0: return '00';
            case 1: return '0' + obj;
            default: return obj;
        }
    })
    .join(bridge);
