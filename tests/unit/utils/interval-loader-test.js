import IntervalLoader from 'ember-railio-grid/utils/interval-loader';
import { module, test } from 'qunit';

module('Unit | Utility | interval loader');

test('can be initialized with the store', function(assert) {
  let store = 'testStore';

  let intervalLoader = IntervalLoader.create({ store });

  assert.equal(intervalLoader.store, store);
});
