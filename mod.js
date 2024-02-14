// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return t!=t}function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=r();var o=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;function a(t,r){return null!=t&&e.call(t,r)}var i="function"==typeof Symbol?Symbol:void 0,f="function"==typeof i?i.toStringTag:"";var u=n&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return o.call(t);n=t[f],r=a(t,f);try{t[f]=void 0}catch(r){return o.call(t)}return e=o.call(t),r?t[f]=n:delete t[f],e}:function(t){return o.call(t)},c="function"==typeof Uint32Array;var l="function"==typeof Uint32Array?Uint32Array:null;var y,v="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var t,r,n;if("function"!=typeof l)return!1;try{r=new l(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(c&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?v:function(){throw new Error("not implemented")};var p=y,b=r();var A=Object.prototype.toString;var m="function"==typeof Symbol?Symbol:void 0,S="function"==typeof m?m.toStringTag:"";var d=b&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return A.call(t);n=t[S],r=a(t,S);try{t[S]=void 0}catch(r){return A.call(t)}return o=A.call(t),r?t[S]=n:delete t[S],o}:function(t){return A.call(t)},g="function"==typeof Float64Array;var w="function"==typeof Float64Array?Float64Array:null;var U,h="function"==typeof Float64Array?Float64Array:void 0;U=function(){var t,r,n;if("function"!=typeof w)return!1;try{r=new w([1,3.14,-3.14,NaN]),n=r,t=(g&&n instanceof Float64Array||"[object Float64Array]"===d(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?h:function(){throw new Error("not implemented")};var F=U,s=r();var N=Object.prototype.toString;var T="function"==typeof Symbol?Symbol:void 0,j="function"==typeof T?T.toStringTag:"";var E=s&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return N.call(t);n=t[j],r=a(t,j);try{t[j]=void 0}catch(r){return N.call(t)}return o=N.call(t),r?t[j]=n:delete t[j],o}:function(t){return N.call(t)},O="function"==typeof Uint8Array;var I="function"==typeof Uint8Array?Uint8Array:null;var x,G="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var t,r,n;if("function"!=typeof I)return!1;try{r=new I(r=[1,3.14,-3.14,256,257]),n=r,t=(O&&n instanceof Uint8Array||"[object Uint8Array]"===E(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?G:function(){throw new Error("not implemented")};var P=x,V=r();var Y=Object.prototype.toString;var _="function"==typeof Symbol?Symbol:void 0,k="function"==typeof _?_.toStringTag:"";var q=V&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return Y.call(t);n=t[k],r=a(t,k);try{t[k]=void 0}catch(r){return Y.call(t)}return o=Y.call(t),r?t[k]=n:delete t[k],o}:function(t){return Y.call(t)},z="function"==typeof Uint16Array;var B="function"==typeof Uint16Array?Uint16Array:null;var C,D="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var t,r,n;if("function"!=typeof B)return!1;try{r=new B(r=[1,3.14,-3.14,65536,65537]),n=r,t=(z&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?D:function(){throw new Error("not implemented")};var H,J={uint16:C,uint8:P};(H=new J.uint16(1))[0]=4660;var K=52===new J.uint8(H.buffer)[0],L=!0===K?1:0,M=new F(1),Q=new p(M.buffer);function R(t){return M[0]=t,Q[L]}var W=r();var X=Object.prototype.toString;var Z="function"==typeof Symbol?Symbol:void 0,$="function"==typeof Z?Z.toStringTag:"";var tt=W&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return X.call(t);n=t[$],r=a(t,$);try{t[$]=void 0}catch(r){return X.call(t)}return o=X.call(t),r?t[$]=n:delete t[$],o}:function(t){return X.call(t)},rt="function"==typeof Float64Array;var nt="function"==typeof Float64Array?Float64Array:null;var ot,et="function"==typeof Float64Array?Float64Array:void 0;ot=function(){var t,r,n;if("function"!=typeof nt)return!1;try{r=new nt([1,3.14,-3.14,NaN]),n=r,t=(rt&&n instanceof Float64Array||"[object Float64Array]"===tt(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?et:function(){throw new Error("not implemented")};var at=!0===K?1:0,it=new ot(1),ft=new p(it.buffer);var ut=Number.NEGATIVE_INFINITY;var ct=.6931471803691238,lt=1.9082149292705877e-10;function yt(r){var n,o,e,a,i,f,u,c,l,y,v,p;return 0===r?ut:t(r)||r<0?NaN:(i=0,(o=R(r))<1048576&&(i-=54,o=R(r*=0x40000000000000)),o>=2146435072?r+r:(i+=(o>>20)-1023|0,i+=(c=(o&=1048575)+614244&1048576|0)>>20|0,u=(r=function(t,r){return it[0]=t,ft[at]=r>>>0,it[0]}(r,o|1072693248^c))-1,(1048575&2+o)<3?0===u?0===i?0:i*ct+i*lt:(f=u*u*(.5-.3333333333333333*u),0===i?u-f:i*ct-(f-i*lt-u)):(c=o-398458|0,l=440401-o|0,a=(v=(p=(y=u/(2+u))*y)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(v),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(v),f=e+a,(c|=l)>0?(n=.5*u*u,0===i?u-(n-y*(n+f)):i*ct-(n-(y*(n+f)+i*lt)-u)):0===i?u-y*(u-f):i*ct-(y*(u-f)-i*lt-u))))}var vt=yt(.7853981633974483);function pt(r,n){return t(r)||t(n)||r>=n?NaN:vt+yt(n-r)}export{pt as default};
//# sourceMappingURL=mod.js.map
