export default (): boolean =>
    typeof window !== 'undefined' &&
        (document.location.protocol === 'file:' || /Mobile/.test(window.navigator.userAgent));
