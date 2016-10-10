import secondsToTimeString from '../secondsToTimeString';

describe('secondsToTimeString', () => {
    it('should be able to convert seconds to seconds string', () => {
        const givenSeconds = secondsToTimeString(24);
        const seconds = Math.floor(24 % 60) + ' second(s)';
        expect(givenSeconds).toEqual(seconds);
        expect(givenSeconds).toEqual('24 second(s)');
    });

    it('should be able to convert seconds to minutes string', () => {
        const givenMinutes = secondsToTimeString(60 * 3);
        const minutes = Math.floor((60 * 3) % (60 * 60) / 60) + ' minute(s)';
        expect(givenMinutes).toEqual(minutes);
        expect(givenMinutes).toEqual('3 minute(s)');
    });

    it('should be able to convert seconds to hours string', () => {
        const givenHours = secondsToTimeString(60 * 60);
        const hours = Math.floor((60 * 60) % (60 * 60 * 24) / (60 * 60)) + ' hour(s)';
        expect(givenHours).toEqual(hours);
        expect(givenHours).toEqual('1 hour(s)');
    });

    it('should be able to convert seconds to days string', () => {
        const givenDays = secondsToTimeString(60 * 60 * 48);
        const days = Math.floor((60 * 60 * 48) / 60 / 60 / 24) + ' day(s)';
        expect(givenDays).toEqual(days);
        expect(givenDays).toEqual('2 day(s)');
    });

    it('should be able to convert seconds to seconds, minutes, hours and days strings', () => {
        const givenSeconds = secondsToTimeString(100000);
        const days = Math.floor(100000 / 60 / 60 / 24) + ' day(s)';
        const hours = Math.floor(100000 % (60 * 60 * 24) / (60 * 60)) + ' hour(s)';
        const minutes = Math.floor(100000 % (60 * 60) / 60) + ' minute(s)';
        const seconds = Math.floor(100000 % 60) + ' second(s)';
        const newArray = givenSeconds.split(')').filter(x => x !== '');
        expect(newArray.length).toEqual(4);
        expect(givenSeconds).toEqual(days + hours + minutes + seconds);
    });
});
