module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: [
        '**/tests/jest/**/*.ts'
    ],
    collectCoverage:true,
    coverageReporters: ["json", "lcov", "text", "clover", "cobertura"],
    coverageDirectory: './tests/jest/coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/src/constants/'
    ]
};