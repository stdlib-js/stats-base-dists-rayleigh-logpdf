// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpdf@v0.2.0-esm/index.mjs";function o(t,d){var m;return s(t)||s(d)||d<0?NaN:0===d?0===t?i:r:t<0||t===i?r:(m=e(d,2),n(1/m*t)-e(t,2)/(2*m))}function a(t){var o,a;return s(t)||t<0?d(NaN):0===t?m(0):(a=e(t,2),o=1/a,function(t){if(s(t))return NaN;if(t<0||t===i)return r;return n(o*t)-e(t,2)/(2*a)})}t(o,"factory",a);export{o as default,a as factory};
//# sourceMappingURL=index.mjs.map
