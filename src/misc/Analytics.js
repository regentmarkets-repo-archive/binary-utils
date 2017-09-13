type NullFunc = () => void;

const nullFunc: NullFunc = () => {};

const analytics = (ga: any): (...args: Array<any>) => void =>
    ga || (typeof window !== 'undefined' && window.ga) || nullFunc;

export const trackUserId = (userId: string, ga: any): void =>
    analytics(ga)('set', 'userId', userId);

export const trackRoute = (route: string, ga: any): void =>
    analytics(ga)('send', 'pageview', route);

export const trackEvent = (category: string, action: string, label: string, ga: any): void =>
    analytics(ga)('send', {
        hitType: 'event',
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
    });
