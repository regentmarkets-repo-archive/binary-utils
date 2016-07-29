const nullFunc = () => null;
const analytics = ga =>
    ga || (typeof window !== 'undefined' && window.ga) || nullFunc;

export const trackUserId = (userId, ga) =>
    analytics(ga)('set', 'userId', userId);

export const trackRoute = (route, ga) =>
    analytics(ga)('send', 'pageview', route);

export const trackEvent = (category, action, label, ga) =>
    analytics(ga)('send', {
        hitType: 'event',
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
    });
