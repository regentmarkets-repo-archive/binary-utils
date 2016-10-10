import brandColor from '../brandColor';

describe('brandColor', () => {
    it('Returns brand blue color with specified opacity', () => {
        expect(brandColor(0.75)).toContain('0.75');
    });
});
