export default (): boolean =>
    typeof window !== 'undefined' && (/Mobile/.test(window.navigator.userAgent) || !!window.cordova);
