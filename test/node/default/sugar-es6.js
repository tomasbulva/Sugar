var runner = require('../setup');

runner.resetPolyfills('es6');

runner.load('../../release/npm/sugar-es6');

// Tests
runner.loadTest('es6/array');
runner.loadTest('es6/number');
runner.loadTest('es6/string');

runner.run(module);
