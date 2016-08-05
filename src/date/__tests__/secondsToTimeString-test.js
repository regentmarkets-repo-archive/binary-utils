import { expect } from 'chai';
import secondsToTimeString from '../secondsToTimeString';

describe('secondsToTimeString', () => {
    it('should be able to convert seconds to seconds string', () => {
        const givenSeconds = secondsToTimeString(24);
        const seconds = Math.floor(24 % 60) + ' second(s)';
        expect(givenSeconds).to.equal(seconds);
        expect(givenSeconds).to.equal('24 second(s)');
    });

    it('should be able to convert seconds to minutes string', () => {
        const givenMinutes = secondsToTimeString(60 * 3);
        const minutes = Math.floor((60 * 3) % (60 * 60) / 60) + ' minute(s)';
        expect(givenMinutes).to.equal(minutes);
        expect(givenMinutes).to.equal('3 minute(s)');
    });

    it('should be able to convert seconds to hours string', () => {
        const givenHours = secondsToTimeString(60 * 60);
        const hours = Math.floor((60 * 60) % (60 * 60 * 24) / (60 * 60)) + ' hour(s)';
        expect(givenHours).to.equal(hours);
        expect(givenHours).to.equal('1 hour(s)');
    });

    it('should be able to convert seconds to days string', () => {
        const givenDays = secondsToTimeString(60 * 60 * 48);
        const days = Math.floor((60 * 60 * 48) / 60 / 60 / 24) + ' day(s)';
        expect(givenDays).to.equal(days);
        expect(givenDays).to.equal('2 day(s)');
    });

    it('should be able to convert seconds to seconds, minutes, hours and days strings', () => {
        const givenSeconds = secondsToTimeString(100000);
        const days = Math.floor(100000 / 60 / 60 / 24) + ' day(s)';
        const hours = Math.floor(100000 % (60 * 60 * 24) / (60 * 60)) + ' hour(s)';
        const minutes = Math.floor(100000 % (60 * 60) / 60) + ' minute(s)';
        const seconds = Math.floor(100000 % 60) + ' second(s)';
        const newArray = givenSeconds.split(')').filter(x => x !== '');
        expect(newArray).to.have.lengthOf(4);
        expect(givenSeconds).to.equal(days + hours + minutes + seconds);
    });
});
