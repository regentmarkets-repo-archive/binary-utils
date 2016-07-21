export default () =>
    typeof window !== 'undefined' && /Mobile/.test(window.navigator.userAgent);
