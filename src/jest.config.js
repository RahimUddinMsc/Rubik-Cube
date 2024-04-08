module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: [
        '**/tests/jest/**/*.ts'
    ],
    collectCoverage:true,
    coverageReporters: ["json", "lcov", "text", "clover", "cobertura"],
    coverageDirectory: './tests/coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/src/constants/'
    ]
};