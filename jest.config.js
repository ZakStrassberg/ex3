module.exports = {
  // verbose: true,
  moduleDirectories: ['src', 'src-example', 'node_modules'],
  roots: ['src'],
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/private/jest/fileMock.js',
    '^(components|containers)$': '<rootDir>/private/jest/componentsMock.js',
    '^(store|\\.\\.)\\/selectors$': '<rootDir>/private/jest/selectorsMock.js',
    '^(store|\\.\\.)\\/actions$': '<rootDir>/private/jest/actionsMock.js',
  },
  setupFiles: ['./private/jest/jestsetup.js'],
};
