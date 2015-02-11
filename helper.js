var fs = require('fs'),
    geojsonhint = require('geojsonhint').hint,
    fixtures = require('./');

function values(o) {
    return Object.keys(o).map(function(k) { return o[k]; });
}

module.exports = function(t, type, fn, dir, hint, postcondition) {
    t.test('fixtures: ' + type, function(t) {
        for (var k in fixtures[type]) {
            var input = JSON.parse(JSON.stringify(fixtures[type][k]));
            var output = fn(input);
            if (process.env.UPDATE) {
                fs.writeFileSync(
                    dir + '/' + k + '.output.json',
                    JSON.stringify(output, null, 2));
            }
            if (hint !== false) {
                t.deepEqual(geojsonhint(output), [], 'geojsonhint-safe');
            }
            if (postcondition) {
                postcondition(t, input, output);
            }
            t.deepEqual(output,
                JSON.parse(fs.readFileSync(dir + '/' + k + '.output.json')), k);
        }
        t.end();
    });
};
