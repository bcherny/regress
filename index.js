"use strict";
var lodash_1 = require('lodash');
var square = lodash_1.partialRight(Math.pow, 2);
function linear() {
    var as = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        as[_i - 0] = arguments[_i];
    }
    if (!as.length) {
        return {
            b: undefined,
            m: undefined,
            fn: function () { return undefined; },
            r2: undefined
        };
    }
    var _a = lodash_1.unzip(as), xs = _a[0], ys = _a[1];
    var _b = [xs, ys].map(lodash_1.sum), sum_x = _b[0], sum_y = _b[1];
    var sum_x2 = lodash_1.sum(xs.map(function (_) { return _ * _; }));
    var sum_xy = lodash_1.sum(as.map(function (_a) {
        var a = _a[0], b = _a[1];
        return a * b;
    }));
    var n = as.length;
    var mean_y = lodash_1.mean(ys);
    var m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x * sum_x);
    var b = (sum_y - m * sum_x) / n;
    var fn = function (x) { return m * x + b; };
    // @see https://en.wikipedia.org/wiki/Coefficient_of_determination
    var ss_res = lodash_1.sum(as.map(function (_a) {
        var x = _a[0], y = _a[1];
        return square(y - fn(x));
    }));
    var ss_tot = lodash_1.sum(ys.map(function (y) { return square(y - mean_y); }));
    var r2 = 1 - ss_res / ss_tot;
    return { b: b, m: m, fn: fn, r2: r2 };
}
exports.linear = linear;
