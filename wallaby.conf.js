module.exports = (wallaby) => ({
    files: [{
        pattern: 'src/**/*.js*',
        load: false,
    }],
    tests: [
        'tests/**/*.js',
    ],
    env: {
        type: 'node',
    },
    testFramework: 'mocha',
    compilers: {
        '**/*.js': wallaby.compilers.babel({
            presets: [
                'es2015',
                'stage-1',
            ],
        }),
    },
});
