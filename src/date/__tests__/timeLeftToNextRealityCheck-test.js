import timeLeft from '../timeLeftToNextRealityCheck';

describe('timeLeftToNextRealityCheck', () => {
    it('should calculate the time left for till the next reality check', () => {
        const theDate = new Date();
        const epoch = theDate.getTime() / 1000;
        theDate.setMinutes(theDate.getMinutes() + 10);
        const interval = theDate.getTime() / 1000;
        const givenTime = timeLeft(epoch, interval);
        const expectedTime = interval - (Math.floor(Date.now() / 1000) - epoch) % interval;
        expect(new Date(givenTime * 1000).toDateString()).toEqual(new Date(expectedTime * 1000).toDateString());
        expect(new Date(givenTime * 1000).getHours()).toEqual(new Date(expectedTime * 1000).getHours());
        expect(new Date(givenTime * 1000).getMinutes()).toEqual(new Date(expectedTime * 1000).getMinutes());
        expect(Math.floor(givenTime - epoch)).toEqual(10 * 60);
    });
});
