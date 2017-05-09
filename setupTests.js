require('./ignoreUnknownPropsError')
jest.mock('Animated',()=> require('./node_modules/react-native-mock-render/build/react-native.js').Animated)
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 60 * 1000;
