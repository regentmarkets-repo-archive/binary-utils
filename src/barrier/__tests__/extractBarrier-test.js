import { expect } from 'chai';
import extractBarrier from '../extractBarrier';
import normalizedContractFor from '../../trade/normalizedContractFor';
import contracts from 'binary-test-data/contractsForR50';

describe('extractBarrier', () => {
    const normalized = normalizedContractFor(contracts);

    describe('CALL/PUT type', () => {

        const callBarrier = extractBarrier(normalized.callput.CALL, 'CALL');

        it('should return contract per expiry type {daily | intraday}', () => {
            expect(callBarrier).to.includes.keys('daily');
            expect(callBarrier).to.includes.keys('intraday');
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
            expect(touchBarrier).to.includes.keys('daily');
            expect(touchBarrier).to.includes.keys('intraday');
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
            expect(endsInBarrier).to.includes.keys('daily');
            expect(endsInBarrier).to.includes.keys('intraday');
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
                expect(digitMatchBarrier).to.includes.keys('tick');
                expect(digitMatchBarrier).to.not.includes.keys('daily');
                expect(digitMatchBarrier).to.not.includes.keys('intraday');
            });

            it('should return "Digit" as barrier name', () => {
                const tick = digitMatchBarrier.tick;
                expect(tick[0]).to.have.property('name', 'Digit');
            });

            it('should return a list of values as digit options', () => {
                const tick = digitMatchBarrier.tick;
                expect(tick[0]).to.includes.keys(['name', 'values', 'defaultValue']);
                expect(tick[0].values).to.have.lengthOf(10);
            });
        });

        describe('DIGITOVER/UNDER', () => {
            it ('should return 9 options for barrier only', () => {
                const digitOverBarrier = extractBarrier(normalized.digits.DIGITOVER, 'DIGITOVER');
                const tick = digitOverBarrier.tick;
                expect(tick[0].values).to.have.lengthOf(9);
            });
        });
    });

    describe('ASIAN and SPREAD', () => {
        const asianBarrier = extractBarrier(normalized.asian.ASIANU, 'ASIANU');
        const spreadBarrier = extractBarrier(normalized.spreads.SPREADU, 'SPREADU');
        it('does not have barrier', () => {
            expect(asianBarrier).to.be.undefined;
            expect(spreadBarrier).to.be.undefined;
        })
    })
});