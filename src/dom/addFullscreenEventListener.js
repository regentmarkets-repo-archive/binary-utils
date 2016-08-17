export default (handler: (x: bool) => EventListener) => {
    document.addEventListener('fullscreenchange', () => handler(document.fullscreen));
    document.addEventListener('webkitfullscreenchange', () => handler(document.webkitIsFullScreen));
    document.addEventListener('mozfullscreenchange', () => handler(document.mozFullScreen));
    document.addEventListener('MSFullscreenChange', () => handler(document.msFullscreenElement));
};
