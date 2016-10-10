import historyToTicks from '../historyToTicks';

describe('historyToTicks', () => {
    const serverData = {
        times: [
            '1463130332',
            '1463130334',
            '1463130336',
            '1463130338',
            '1463130340',
            '1463130342',
            '1463130344',
            '1463130346',
            '1463130348',
            '1463130350',
        ],
        prices: [
            '675.1733',
            '675.1620',
            '675.2230',
            '675.3117',
            '675.3250',
            '675.2880',
            '675.1796',
            '675.0785',
            '675.0988',
            '675.1587',
        ],
    };

    it('should convert response from tick history call, to array of tick object', () => {
        const actual = historyToTicks(serverData);
        expect(actual.length).toEqual(10);
        expect(actual[0]).toEqual({ epoch: 1463130332, quote: 675.1733 });
    });
});
