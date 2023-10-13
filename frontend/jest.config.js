module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };

// module.exports = {
//   moduleDirectories: [
//     'node_modules'
//   ],
//   transform: {
//     "\\.tsx?$": "ts-jest",
//     "\\.jsx?$": "babel-jest",
//   },
//   globals: {
//     "ts-jest": {
//       "tsConfig": '<rootDir>/tsconfig.json'
//     }
//   }
