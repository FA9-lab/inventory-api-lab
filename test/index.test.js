const assert = require('node:assert');
const { greeting } = require('../src/index');

assert.strictEqual(
  greeting(),
  'Hello from inventory-api-lab'
);

console.log('All tests passed');
