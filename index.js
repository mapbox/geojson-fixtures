import {readFileSync} from 'fs';

export const geometry = {};

var geoms = ['geometrycollection', 'polygon', 'point', 'multipoint', 'multipolygon', 'polygon', 'multilinestring'];

function readJSON(path) {
    return JSON.parse(readFileSync(new URL(path, import.meta.url)));
}

for (const type of geoms) {
    geometry[type] = readJSON(`data/geometry/${type}.geojson`);
}
for (const type of geoms) {
    geometry[`${type}-xyz`] = readJSON(`data/geometry/${type}-xyz.geojson`);
}

export const featurecollection = {
    one: readJSON(`data/featurecollection/one.geojson`)
};
export const feature = {
    one: readJSON(`data/feature/one.geojson`)
};

export const all = {};

let i = 0;
for (const type of Object.keys(geometry)) {
    all[`${type}-0-${i++}`] = geometry[type];
}

all['one-1-0'] = featurecollection.one;
all['one-2-0'] = feature.one;
