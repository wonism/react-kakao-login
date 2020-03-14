const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { defaults: tsjPreset } = require('ts-jest/presets');

const { compilerOptions } = require('./tsconfig.dev');

module.exports = {
  transform: {
    ...tsjPreset.transform,
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['node_modules'],
  globals: {
    __PATH_PREFIX__: '',
    'ts-jest': {
      diagnostics: true,
      tsConfig: 'tsconfig.dev.json',
      diagnostics: false,
      autoMapModuleNames: true,
    },
  },
  testURL: 'http://localhost',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!<rootDir>/node_modules/',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.ts'],
  coverageReporters: [
    'json-summary',
    'text',
    'lcov',
  ],
};
