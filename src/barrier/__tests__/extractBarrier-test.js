import contracts from 'binary-test-data/contractsForR50';
import extractBarrier from '../extractBarrier';
import normalizedContractFor from '../../trade/normalizedContractFor';

describe('extractBarrier', () => {
    const normalized = normalizedContractFor(contracts);

    it('unknown type return undefined', () => {
        const barrier = extractBarrier(normalized.risefall.CALL, 'nonexisting');
        expect(barrier).toBeUndefined();
    });

    describe('RISE FALL type', () => {
        const callBarrier = extractBarrier(normalized.risefall.CALL, 'CALL');

        it('should not have barrier', () => {
            expect(callBarrier).toEqual({});
        });
    });

    describe('HIGHER LOWER type', () => {
        const callBarrier = extractBarrier(normalized.higherlower.CALL, 'CALL');

        it('should return contract per expiry type {daily | intraday}', () => {
            expect(callBarrier.tick).toBeDefined();
            expect(callBarrier.daily).toBeDefined();
            expect(callBarrier.intraday).toBeDefined();
        });

        it('should return "Higher than" as barrier name', () => {
            const intraday = callBarrier.intraday;
            expect(intraday[0].name).toEqual('Higher than');
        });

        it('should return number as default barrier value', () => {
            const intraday = callBarrier.intraday;
            expect(+intraday[0].defaultValue).toBeTruthy();
        });
    });

    describe('TOUCH type', () => {
        const touchBarrier = extractBarrier(normalized.touchnotouch.ONETOUCH, 'ONETOUCH');

        it('should return contract per expiry type {daily | intraday}', () => {
            expect(touchBarrier.daily).toBeDefined();
            expect(touchBarrier.intraday).toBeDefined();
        });

        it('should return 1 barrier', () => {
            expect(touchBarrier.intraday.length).toEqual(1);
        });

        it('should return "Touch spot" as barrier name', () => {
            const intraday = touchBarrier.intraday;
            expect(intraday[0].name).toEqual('Touch spot');
        });

        it('should return number as default barrier value', () => {
            const intraday = touchBarrier.intraday;
            expect(+intraday[0].defaultValue).toBeTruthy();
        });
    });

    describe('Ends In/Out, and Stays In/Out', () => {
        const endsInBarrier = extractBarrier(normalized.endsinout.EXPIRYRANGE, 'EXPIRYRANGE');

        it('should return contract per expiry type {daily | intraday}', () => {
            expect(endsInBarrier.daily).toBeDefined();
            expect(endsInBarrier.intraday).toBeDefined();
        });

        it('should return 2 barriers', () => {
            expect(endsInBarrier.intraday.length).toEqual(2);
        });

        it('should return "High barrier" and "Low barrier" as barrier name', () => {
            const intraday = endsInBarrier.intraday;
            expect(intraday[0].name).toEqual('High barrier');
            expect(intraday[1].name).toEqual('Low barrier');
        });

        it('should return number as default barrier value', () => {
            const intraday = endsInBarrier.intraday;
            const daily = endsInBarrier.daily;
            expect(+intraday[0].defaultValue).toBeTruthy();
            expect(+intraday[1].defaultValue).toBeTruthy();
            expect(+daily[0].defaultValue).toBeTruthy();
            expect(+daily[1].defaultValue).toBeTruthy();
        });
    });

    describe('DIGIT type', () => {
        describe('DIGITMATCH/DIFF', () => {
            const digitMatchBarrier = extractBarrier(normalized.digits.DIGITMATCH, 'DIGITMATCH');

            // digit only have tick trade
            it('should return contract for tick only', () => {
                expect(digitMatchBarrier.tick).toBeDefined();
                expect(digitMatchBarrier.daily).not.toBeDefined();
                expect(digitMatchBarrier.intraday).not.toBeDefined();
            });

            it('should return "Digit" as barrier name', () => {
                const tick = digitMatchBarrier.tick;
                expect(tick[0].name).toEqual('Digit');
            });

            it('should return a list of values as digit options', () => {
                const tick = digitMatchBarrier.tick;
                expect(tick[0].name).toBeDefined();
                expect(tick[0].values).toBeDefined();
                expect(tick[0].defaultValue).toBeDefined();
                expect(tick[0].values.length).toEqual(10);
            });
        });

        describe('DIGITOVER/UNDER', () => {
            it('should return 9 options for barrier only', () => {
                const digitOverBarrier = extractBarrier(normalized.digits.DIGITOVER, 'DIGITOVER');
                const tick = digitOverBarrier.tick;
                expect(tick[0].values.length).toEqual(9);
            });
        });
    });

    describe('ASIAN', () => {
        const asianBarrier = extractBarrier(normalized.asian.ASIANU, 'ASIANU');
        it('does not have barrier', () => {
            expect(asianBarrier).not.toBeDefined();
        });
    });
});
