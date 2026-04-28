import test from 'node:test';
import assert from 'node:assert/strict';
import * as fixtures from '../index.js';

test('fixtures', function() {
    assert.ok(fixtures.geometry, 'creates geometry fixtures');
    assert.ok(fixtures.featurecollection, 'creates featurecollection fixtures');
    assert.ok(fixtures.feature, 'creates feature fixtures');
    assert.ok(fixtures.all, 'generates all');
});
