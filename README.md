# geojson-fixtures

Test fixtures of [GeoJSON](http://geojson.org/) objects.

## API

* `fixtures.geometry.*`
* `fixtures.feature.*`
* `fixtures.featurecollection.*`
* `fixtures.all[]`: all kinds of fixtures

## Helper

Includes a test helper for writing fixture-based tests with [substack/tape](https://github.com/substack/tape).

```js
// first argument is require('tape') or a 't' test runner
// second is the type of fixtures: 'all', 'geometry', 'feature', 'featurecollection'
// third is the function to run to turn input into output: the tested function.
// fourth is the directory where test output should be stored.
// fifth is whether to enable geojsonhint as a last step. set to false to disable.
// sixth is a postcondition that can be any arbitrary test
geojsonFixtures(test, 'all', centroid, __dirname + '/test', true, function(t, input, output) {
    t.ok(input);
});
```

## Install

    npm install --save-dev @mapbox/geojson-fixtures
