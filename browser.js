// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return r!=r}var p=Math.floor;function v(r){return p(r)===r}function b(r){return v(r/2)}function d(r){return b(r>0?r-1:r+1)}var w=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;function _(r){return r===w||r===s}var A=Math.sqrt;function m(r){return Math.abs(r)}var N,h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),U=Object.prototype.toString,g=Object.prototype.hasOwnProperty,j="function"==typeof Symbol?Symbol.toStringTag:"",I=h&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return U.call(r);t=r[j],u=j,n=null!=(o=r)&&g.call(o,u);try{r[j]=void 0}catch(n){return U.call(r)}return e=U.call(r),n?r[j]=t:delete r[j],e}:function(r){return U.call(r)},O="function"==typeof Uint32Array,S="function"==typeof Uint32Array?Uint32Array:null,E="function"==typeof Uint32Array?Uint32Array:void 0;N=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(O&&t instanceof Uint32Array||"[object Uint32Array]"===I(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=N,H="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G([1,3.14,-3.14,NaN]),t=n,r=(H&&t instanceof Float64Array||"[object Float64Array]"===I(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var x,L=F,M="function"==typeof Uint8Array,V="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,256,257]),t=n,r=(M&&t instanceof Uint8Array||"[object Uint8Array]"===I(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k,Y=x,q="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),t=n,r=(q&&t instanceof Uint16Array||"[object Uint16Array]"===I(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:k,uint8:Y};(B=new D.uint16(1))[0]=4660;var J,K,Q=52===new D.uint8(B.buffer)[0];!0===Q?(J=1,K=0):(J=0,K=1);var R={HIGH:J,LOW:K},X=new L(1),Z=new T(X.buffer),$=R.HIGH,rr=R.LOW;function nr(r,n){return X[0]=n,r[0]=Z[$],r[1]=Z[rr],r}function tr(r,n){return 1===arguments.length?nr([0,0],r):nr(r,n)}var er=!0===Q?0:1,or=new L(1),ur=new T(or.buffer);function ir(r,n){return or[0]=r,ur[er]=n>>>0,or[0]}function fr(r){return 0|r}var ar,cr,lr=!0===Q?1:0,yr=new L(1),pr=new T(yr.buffer);function vr(r){return yr[0]=r,pr[lr]}!0===Q?(ar=1,cr=0):(ar=0,cr=1);var br={HIGH:ar,LOW:cr},dr=new L(1),wr=new T(dr.buffer),sr=br.HIGH,_r=br.LOW;function Ar(r,n){return wr[sr]=r,wr[_r]=n,dr[0]}var mr=[0,0];function Nr(r,n){var t,e;return tr(mr,r),t=mr[0],t&=2147483647,e=vr(n),Ar(t|=e&=2147483648,mr[1])}var hr=!0===Q?1:0,Ur=new L(1),gr=new T(Ur.buffer);function jr(r,n){return Ur[0]=r,gr[hr]=n>>>0,Ur[0]}var Ir=1023,Or=1048576,Sr=[1,1.5],Er=[0,.5849624872207642],Fr=[0,1.350039202129749e-8];function Tr(r,n){return y(n)||_(n)?(r[0]=n,r[1]=0,r):0!==n&&m(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Hr=[0,0],Gr=[0,0];function Pr(r,n){var t,e;return 0===n||0===r||y(r)||_(r)?r:(function(r,n){1===arguments.length?Tr([0,0],r):Tr(r,n)}(Hr,r),n+=Hr[1],n+=function(r){var n=vr(r);return(n=(2146435072&n)>>>20)-Ir|0}(r=Hr[0]),n<-1074?Nr(0,r):n>1023?r<0?s:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,tr(Gr,r),t=Gr[0],t&=2148532223,e*Ar(t|=n+Ir<<20,Gr[1])))}var xr=2147483647,Lr=1048575,Mr=1048576,Vr=2147483647,Wr=1083179008,kr=1e300,Yr=1e-300,qr=[0,0],Cr=[0,0];function zr(r,n){var t,e,o,u,i,f,a,c,l,p,b,N,h,U;if(y(r)||y(n))return NaN;if(tr(qr,n),i=qr[0],0===qr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return A(r);if(-.5===n)return 1/A(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(_(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:m(r)<1==(n===w)?0:w}(r,n)}if(tr(qr,r),u=qr[0],0===qr[1]){if(0===u)return function(r,n){return n===s?w:n===w?0:n>0?d(n)?r:0:d(n)?Nr(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&d(n))return-1;if(_(r))return r===s?zr(-0,-n):n<0?0:w}if(r<0&&!1===v(n))return(r-r)/(r-r);if(o=m(r),t=u&Vr|0,e=i&Vr|0,a=i>>>31|0,f=(f=u>>>31|0)&&d(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&vr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*kr*kr:f*Yr*Yr;if(t>1072693248)return 0===a?f*kr*kr:f*Yr*Yr;b=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ir(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Cr,o)}else b=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,d,w,s,_,A,m,N,h,U;return m=0,t<Or&&(m-=53,t=vr(n*=9007199254740992)),m+=(t>>20)-Ir|0,t=1072693248|(N=1048575&t|0),N<=235662?h=0:N<767610?h=1:(h=0,m+=1,t-=Or),i=ir(o=(_=(n=jr(n,t))-(c=Sr[h]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=jr(0,e+=h<<18),s=(u=o*o)*u*(0===(U=u)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=ir(a=3+(u=i*i)+(s+=(f=A*(_-i*a-i*(n-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=ir(y=(_=i*a)+(A=f*a+(s-(a-3-u))*o),0))+.9617966939259756*(A-(y-_))+Fr[h])-((b=ir(b=(p=.9617967009544373*y)+v+(l=Er[h])+(w=m),0))-w-l-p),r[0]=b,r[1]=d,r}(Cr,o,t);if(p=(n-(c=ir(n,0)))*b[0]+n*b[1],l=c*b[0],tr(qr,N=p+l),h=fr(qr[0]),U=fr(qr[1]),h>=Wr){if(0!=(h-Wr|U))return f*kr*kr;if(p+8008566259537294e-32>N-l)return f*kr*kr}else if((h&Vr)>=1083231232){if(0!=(h-3230714880|U))return f*Yr*Yr;if(p<=N-l)return f*Yr*Yr}return N=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&xr|0)>>20)-Ir|0,c=0,l>1071644672&&(o=jr(0,((c=r+(Mr>>y+1)>>>0)&~(Lr>>(y=((c&xr)>>20)-Ir|0)))>>>0),c=(c&Lr|Mr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=fr(r=vr(a=1-((a=(u=.6931471824645996*(o=ir(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Pr(a,c):jr(a,r)}(h,l,p),f*N}var Br=.6931471803691238,Dr=1.9082149292705877e-10,Jr=1048575;function Kr(r){var n,t,e,o,u,i,f,a,c,l,p,v;return 0===r?s:y(r)||r<0?NaN:(u=0,(t=vr(r))<1048576&&(u-=54,t=vr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-Ir|0,u+=(a=614244+(t&=Jr)&1048576|0)>>20|0,f=(r=jr(r,t|1072693248^a))-1,(Jr&2+t)<3?0===f?0===u?0:u*Br+u*Dr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Br-(i-u*Dr-f)):(a=t-398458|0,c=440401-t|0,o=(p=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*Br-(n-(l*(n+i)+u*Dr)-f)):0===u?f-l*(f-i):u*Br-(l*(f-i)-u*Dr-f))))}function Qr(r,n){var t;return y(r)||y(n)||n<0?NaN:0===n?0===r?w:s:r<0||r===w?s:Kr(1/(t=zr(n,2))*r)-zr(r,2)/(2*t)}function Rr(r){return function(){return r}}function Xr(r){return y(r)?Rr(NaN):function(n){return y(n)?NaN:n===r?w:s}}function Zr(r){var n,t;return y(r)||r<0?Rr(NaN):0===r?Xr(0):(t=zr(r,2),n=1/t,function(r){return y(r)?NaN:r<0||r===w?s:Kr(n*r)-zr(r,2)/(2*t)})}l((function(r,n){return y(r)||y(n)?NaN:r===n?w:s}),"factory",Xr),l(Qr,"factory",Zr),r.default=Qr,r.factory=Zr,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).logpdf={});
//# sourceMappingURL=browser.js.map
