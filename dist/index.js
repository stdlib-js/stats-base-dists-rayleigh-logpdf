"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=i(function(z,q){
var a=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-pow/dist'),F=require('@stdlib/math-base-special-ln/dist'),f=require('@stdlib/constants-float64-pinf/dist'),o=require('@stdlib/constants-float64-ninf/dist');function d(r,e){var u,t;return a(r)||a(e)||e<0?NaN:e===0?r===0?f:o:r<0||r===f?o:(t=v(e,2),u=1/t,F(u*r)-v(r,2)/(2*t))}q.exports=d
});var l=i(function(A,p){
var I=require('@stdlib/utils-constant-function/dist'),w=require('@stdlib/stats-base-dists-degenerate-logpdf/dist').factory,N=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-pow/dist'),P=require('@stdlib/math-base-special-ln/dist'),O=require('@stdlib/constants-float64-pinf/dist'),R=require('@stdlib/constants-float64-ninf/dist');function b(r){var e,u;if(N(r)||r<0)return I(NaN);if(r===0)return w(0);return u=s(r,2),e=1/u,t;function t(n){return N(n)?NaN:n<0||n===O?R:P(e*n)-s(n,2)/(2*u)}}p.exports=b
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),j=l();h(y,"factory",j);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
