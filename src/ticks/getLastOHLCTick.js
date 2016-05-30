export default ticks =>
    ticks && (ticks.length === 0 ? undefined : +(ticks[ticks.length - 1].close));
