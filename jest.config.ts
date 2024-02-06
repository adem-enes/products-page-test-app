module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',

    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
    },
    testPathIgnorePatterns: [
        '/node_modules/',
        '/build/',
        '/dist/',
      ],
};