import { expect } from 'chai';
import contracts from 'binary-test-data/contractsForR50';
import extractBarrier from '../extractBarrier';
import normalizedContractFor from '../../trade/normalizedContractFor';

describe('extractBarrier', () => {
    const normalized = normalizedContractFor(contracts);

    it('unknown type throws', () => {
        expect(() =>
            extractBarrier(normalized.risefall.CALL, 'nonexisting')
        ).to.throw();
    });

    describe('RISE FALL type', () => {
        const callBarrier = extractBarrier(normalized.risefall.CALL, 'CALL');

        it('should not have barrier', () => {
            expect(callBarrier).to.deep.equal({});
        });
    });

    describe('HIGHER LOWER type', () => {
        const callBarrier = extractBarrier(normalized.higherlower.CALL, 'CALL');

        it('should return contract per expiry type {daily | intraday}', () => {
            expect(callBarrier).to.include.keys('tick');
            expect(callBarrier).to.include.keys('daily');
            expect(callBarrier).to.include.keys('intraday');
        });

        it('should return "Higher than" as barrier name', () => {
            const intraday = callBarrier.intraday;
            expect(intraday[0]).to.have.property('name', 'Higher than');
        });

        it('should return number as default barrier value', () => {
            const intraday = callBarrier.intraday;
            expect(+intraday[0].defaultValue).to.not.be.NaN;
        });
    });

    describe('TOUCH type', () => {
        const touchBarrier = extractBarrier(normalized.touchnotouch.ONETOUCH, 'ONETOUCH');

        it('should return contract per expiry type {daily | intraday}', () => {
            expect(touchBarrier).to.include.keys('daily');
            expect(touchBarrier).to.include.keys('intraday');
        });

        it('should return 1 barrier', () => {
            expect(touchBarrier.intraday).to.have.lengthOf(1);
        });

        it('should return "Touch spot" as barrier name', () => {
            const intraday = touchBarrier.intraday;
            expect(intraday[0]).to.have.property('name', 'Touch spot');
        });

        it('should return number as default barrier value', () => {
            const intraday = touchBarrier.intraday;
            expect(+intraday[0].defaultValue).to.not.be.NaN;
        });
    });

    describe('Ends In/Out, and Stays In/Out', () => {
        const endsInBarrier = extractBarrier(normalized.endsinout.EXPIRYRANGE, 'EXPIRYRANGE');

        it('should return contract per expiry type {daily | intraday}', () => {
            expect(endsInBarrier).to.include.keys('daily');
            expect(endsInBarrier).to.include.keys('intraday');
        });

        it('should return 2 barriers', () => {
            expect(endsInBarrier.intraday).to.have.lengthOf(2);
        });

        it('should return "High barrier" and "Low barrier" as barrier name', () => {
            const intraday = endsInBarrier.intraday;
            expect(intraday[0]).to.have.property('name', 'High barrier');
            expect(intraday[1]).to.have.property('name', 'Low barrier');
        });

        it('should return number as default barrier value', () => {
            const intraday = endsInBarrier.intraday;
            const daily = endsInBarrier.daily;
            expect(+intraday[0].defaultValue).to.not.be.NaN;
            expect(+intraday[1].defaultValue).to.not.be.NaN;
            expect(+daily[0].defaultValue).to.not.be.NaN;
            expect(+daily[1].defaultValue).to.not.be.NaN;
        });
    });

    describe('DIGIT type', () => {
        describe('DIGITMATCH/DIFF', () => {
            const digitMatchBarrier = extractBarrier(normalized.digits.DIGITMATCH, 'DIGITMATCH');

            // digit only have tick trade
            it('should return contract for tick only', () => {
                expect(digitMatchBarrier).to.include.keys('tick');
                expect(digitMatchBarrier).to.not.include.keys('daily');
                expect(digitMatchBarrier).to.not.include.keys('intraday');
            });

            it('should return "Digit" as barrier name', () => {
                const tick = digitMatchBarrier.tick;
                expect(tick[0]).to.have.property('name', 'Digit');
            });

            it('should return a list of values as digit options', () => {
                const tick = digitMatchBarrier.tick;
                expect(tick[0]).to.include.keys(['name', 'values', 'defaultValue']);
                expect(tick[0].values).to.have.lengthOf(10);
            });
        });

        describe('DIGITOVER/UNDER', () => {
            it('should return 9 options for barrier only', () => {
                const digitOverBarrier = extractBarrier(normalized.digits.DIGITOVER, 'DIGITOVER');
                const tick = digitOverBarrier.tick;
                expect(tick[0].values).to.have.lengthOf(9);
            });
        });
    });

    describe('ASIAN', () => {
        const asianBarrier = extractBarrier(normalized.asian.ASIANU, 'ASIANU');
        it('does not have barrier', () => {
            expect(asianBarrier).to.be.undefined;
        });
    });
});
