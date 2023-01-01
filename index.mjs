// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpdf@v0.0.8-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";function l(s,d){var m;return t(s)||t(d)||d<0?NaN:0===d?0===s?i:r:s<0||s===i?r:(m=e(d,2),n(1/m*s)-e(s,2)/(2*m))}function p(s){var e,i;return t(s)||s<0?d(NaN):0===s?m(0):(i=o(s,2),e=1/i,function(s){if(t(s))return NaN;if(s<0||s===a)return r;return n(e*s)-o(s,2)/(2*i)})}s(l,"factory",p);export{l as default,p as factory};
//# sourceMappingURL=index.mjs.map
