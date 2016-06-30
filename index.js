"use strict";
const lodash_1 = require('lodash');
const square = lodash_1.partialRight(Math.pow, 2);
function linear(...as) {
    if (!as.length) {
        return {
            b: undefined,
            m: undefined,
            fn: () => undefined,
            r2: undefined
        };
    }
    const [xs, ys] = lodash_1.unzip(as);
    const [sum_x, sum_y] = [xs, ys].map(lodash_1.sum);
    const sum_x2 = lodash_1.sum(xs.map(_ => _ * _));
    const sum_xy = lodash_1.sum(as.map(([a, b]) => a * b));
    const n = as.length;
    const mean_y = lodash_1.mean(ys);
    const m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x * sum_x);
    const b = (sum_y - m * sum_x) / n;
    const fn = (x) => m * x + b;
    // @see https://en.wikipedia.org/wiki/Coefficient_of_determination
    const ss_res = lodash_1.sum(as.map(([x, y]) => square(y - fn(x))));
    const ss_tot = lodash_1.sum(ys.map(y => square(y - mean_y)));
    const r2 = 1 - ss_res / ss_tot;
    return { b: b, m: m, fn: fn, r2: r2 };
}
exports.linear = linear;
