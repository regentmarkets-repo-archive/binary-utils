import { expect } from 'chai';
import calculateLastDigitStats from '../calculateLastDigitStats';

const testTicks = [
    {
        "epoch": 1465871888,
        "quote": 36377.39
    },
    {
        "epoch": 1465871890,
        "quote": 36378.36
    },
    {
        "epoch": 1465871892,
        "quote": 36387.37
    },
    {
        "epoch": 1465871894,
        "quote": 36379.5
    },
    {
        "epoch": 1465871896,
        "quote": 36367.73
    },
    {
        "epoch": 1465871898,
        "quote": 36375.82
    },
    {
        "epoch": 1465871900,
        "quote": 36383.13
    },
    {
        "epoch": 1465871902,
        "quote": 36384.34
    },
    {
        "epoch": 1465871904,
        "quote": 36367.51
    },
    {
        "epoch": 1465871906,
        "quote": 36365.41
    },
    {
        "epoch": 1465871908,
        "quote": 36365.49
    },
    {
        "epoch": 1465871910,
        "quote": 36366.21
    },
    {
        "epoch": 1465871912,
        "quote": 36377.85
    },
    {
        "epoch": 1465871914,
        "quote": 36376.71
    },
    {
        "epoch": 1465871916,
        "quote": 36369.57
    },
    {
        "epoch": 1465871918,
        "quote": 36372.31
    },
    {
        "epoch": 1465871920,
        "quote": 36374.92
    },
    {
        "epoch": 1465871922,
        "quote": 36367.2
    },
    {
        "epoch": 1465871924,
        "quote": 36360.37
    },
    {
        "epoch": 1465871926,
        "quote": 36365.34
    },
    {
        "epoch": 1465871928,
        "quote": 36380.4
    },
    {
        "epoch": 1465871930,
        "quote": 36382.93
    },
    {
        "epoch": 1465871932,
        "quote": 36379.04
    },
    {
        "epoch": 1465871934,
        "quote": 36398.61
    },
    {
        "epoch": 1465871936,
        "quote": 36403.4
    },
    {
        "epoch": 1465871938,
        "quote": 36383.15
    },
    {
        "epoch": 1465871940,
        "quote": 36394.37
    },
    {
        "epoch": 1465871942,
        "quote": 36398.44
    },
    {
        "epoch": 1465871944,
        "quote": 36400.9
    },
    {
        "epoch": 1465871946,
        "quote": 36404.09
    },
    {
        "epoch": 1465871948,
        "quote": 36410.41
    },
    {
        "epoch": 1465871950,
        "quote": 36386.06
    },
    {
        "epoch": 1465871952,
        "quote": 36378.89
    },
    {
        "epoch": 1465871954,
        "quote": 36381.77
    },
    {
        "epoch": 1465871956,
        "quote": 36369
    },
    {
        "epoch": 1465871958,
        "quote": 36359.57
    },
    {
        "epoch": 1465871960,
        "quote": 36356.5
    },
    {
        "epoch": 1465871962,
        "quote": 36357.97
    },
    {
        "epoch": 1465871964,
        "quote": 36355.96
    },
    {
        "epoch": 1465871966,
        "quote": 36366.27
    },
    {
        "epoch": 1465871968,
        "quote": 36364.37
    },
    {
        "epoch": 1465871970,
        "quote": 36365
    },
    {
        "epoch": 1465871972,
        "quote": 36352.07
    },
    {
        "epoch": 1465871974,
        "quote": 36358.76
    },
    {
        "epoch": 1465871976,
        "quote": 36356.63
    },
    {
        "epoch": 1465871978,
        "quote": 36335.67
    },
    {
        "epoch": 1465871980,
        "quote": 36334.68
    },
    {
        "epoch": 1465871982,
        "quote": 36333.97
    },
    {
        "epoch": 1465871984,
        "quote": 36334.63
    },
    {
        "epoch": 1465871986,
        "quote": 36339.86
    },
    {
        "epoch": 1465871988,
        "quote": 36341.12
    },
    {
        "epoch": 1465871990,
        "quote": 36345.58
    },
    {
        "epoch": 1465871992,
        "quote": 36338.08
    },
    {
        "epoch": 1465871994,
        "quote": 36353.15
    },
    {
        "epoch": 1465871996,
        "quote": 36356.11
    },
    {
        "epoch": 1465871998,
        "quote": 36367.12
    },
    {
        "epoch": 1465872000,
        "quote": 36358.25
    },
    {
        "epoch": 1465872002,
        "quote": 36342.67
    },
    {
        "epoch": 1465872004,
        "quote": 36338.96
    },
    {
        "epoch": 1465872006,
        "quote": 36342.28
    },
    {
        "epoch": 1465872008,
        "quote": 36337.78
    },
    {
        "epoch": 1465872010,
        "quote": 36323.46
    },
    {
        "epoch": 1465872012,
        "quote": 36319.47
    },
    {
        "epoch": 1465872014,
        "quote": 36312.57
    },
    {
        "epoch": 1465872016,
        "quote": 36315.15
    },
    {
        "epoch": 1465872018,
        "quote": 36312.99
    },
    {
        "epoch": 1465872020,
        "quote": 36292.82
    },
    {
        "epoch": 1465872022,
        "quote": 36288.42
    },
    {
        "epoch": 1465872024,
        "quote": 36290.4
    },
    {
        "epoch": 1465872026,
        "quote": 36284.45
    },
    {
        "epoch": 1465872028,
        "quote": 36287.58
    },
    {
        "epoch": 1465872030,
        "quote": 36296.13
    },
    {
        "epoch": 1465872032,
        "quote": 36282.75
    },
    {
        "epoch": 1465872034,
        "quote": 36286.01
    },
    {
        "epoch": 1465872036,
        "quote": 36279.15
    },
    {
        "epoch": 1465872038,
        "quote": 36288.61
    },
    {
        "epoch": 1465872040,
        "quote": 36294.33
    },
    {
        "epoch": 1465872042,
        "quote": 36303.19
    },
    {
        "epoch": 1465872044,
        "quote": 36289.15
    },
    {
        "epoch": 1465872046,
        "quote": 36282.82
    },
    {
        "epoch": 1465872048,
        "quote": 36297.31
    },
    {
        "epoch": 1465872050,
        "quote": 36305.41
    },
    {
        "epoch": 1465872052,
        "quote": 36311.51
    },
    {
        "epoch": 1465872054,
        "quote": 36311.82
    },
    {
        "epoch": 1465872056,
        "quote": 36308.01
    },
    {
        "epoch": 1465872058,
        "quote": 36303.24
    },
    {
        "epoch": 1465872060,
        "quote": 36300.83
    },
    {
        "epoch": 1465872062,
        "quote": 36290.24
    },
    {
        "epoch": 1465872064,
        "quote": 36297.82
    },
    {
        "epoch": 1465872066,
        "quote": 36311.06
    },
    {
        "epoch": 1465872068,
        "quote": 36312.75
    },
    {
        "epoch": 1465872070,
        "quote": 36325.18
    },
    {
        "epoch": 1465872072,
        "quote": 36321.99
    },
    {
        "epoch": 1465872074,
        "quote": 36340.11
    },
    {
        "epoch": 1465872076,
        "quote": 36347.63
    },
    {
        "epoch": 1465872078,
        "quote": 36336.84
    },
    {
        "epoch": 1465872080,
        "quote": 36330.59
    },
    {
        "epoch": 1465872082,
        "quote": 36339.66
    },
    {
        "epoch": 1465872084,
        "quote": 36346.89
    },
    {
        "epoch": 1465872086,
        "quote": 36339.78
    },
    {
        "epoch": 1465872088,
        "quote": 36332.86
    },
    {
        "epoch": 1465872090,
        "quote": 36332.73
    },
    {
        "epoch": 1465872092,
        "quote": 36344.25
    },
    {
        "epoch": 1465872094,
        "quote": 36354.03
    },
    {
        "epoch": 1465872096,
        "quote": 36354.75
    },
    {
        "epoch": 1465872098,
        "quote": 36347.46
    },
    {
        "epoch": 1465872100,
        "quote": 36332.99
    },
    {
        "epoch": 1465872102,
        "quote": 36316.95
    },
    {
        "epoch": 1465872104,
        "quote": 36307.84
    },
    {
        "epoch": 1465872106,
        "quote": 36309.61
    },
    {
        "epoch": 1465872108,
        "quote": 36323.03
    }
];

describe('calculateLastDigitStats', () => {
    it('empty array results in 0s', () => {
        const input = [];
        const result = calculateLastDigitStats(input);
        expect(result).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });

    it('empty array results in 0s', () => {
        const input = [{ quote: 123 }];
        const result = calculateLastDigitStats(input);
        expect(result).to.deep.equal([0, 0, 0, 100, 0, 0, 0, 0, 0, 0]);
    });

    it('the sum of all percentage should be 100%', () => {
        const result = calculateLastDigitStats(testTicks, 2);
        const sum = result.reduce((a, b) => a + b);

        expect(result[0]).to.closeTo(8.10, 0.01);
        expect(sum).to.equal(100);
    });
    
    it('works correctly', () => {
        const input = [
            { quote: 10 },
            { quote: 55 },
            { quote: 3 },
            { quote: 777 },
        ];
        const result = calculateLastDigitStats(input);
        expect(result).to.deep.equal([25, 0, 0, 25, 0, 25, 0, 25, 0, 0]);
    });

    it('works with non zero pip size', () => {
        const input = [
            { quote: 1.23 },
            { quote: 5.43 },
            { quote: 5.43 },
            { quote: 12.345 },
        ];
        const result = calculateLastDigitStats(input, 2);
        expect(result).to.deep.equal([0, 0, 0, 75, 0, 25, 0, 0, 0, 0]);
    });
});
