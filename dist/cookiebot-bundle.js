!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist/",t(t.s="lkRs")}({CDww:function(e,n,t){"use strict";var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=t("jkv+"),s=r.encodeToBase64,i=r.padRight;function a(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t="",o=1;o<=e;o+=1)t+=-1!==n.indexOf(o)?"1":"0";return i(t,Math.max(0,e-t.length))}function u(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set,t=0,o=0;o<e.length;o+=1)t=Math.max(t,e[o].id);for(var r=0;r<n.length;r+=1)t=Math.max(t,n[r]);for(var s="",i=1;i<=t;i+=1)s+=-1!==n.indexOf(i)?"1":"0";return s}function d(e,n){for(var t=[],o=[],r=e.map((function(e){return e.id})),s=0;s<e.length;s+=1){var i=e[s].id;if(-1!==n.indexOf(i)&&t.push(i),(-1===n.indexOf(i)||s===e.length-1||-1===r.indexOf(i+1))&&t.length){var a=t.shift(),u=t.pop();t=[],o.push({isRange:"number"==typeof u,startVendorId:a,endVendorId:u})}}return o}function c(e){var n=0;return e.forEach((function(e){e.id>n&&(n=e.id)})),n}e.exports={convertVendorsToRanges:d,encodeConsentString:function(e){var n=e.maxVendorId,t=e.vendorList,r=void 0===t?{}:t,i=e.allowedPurposeIds,l=e.allowedVendorIds,f=r.vendors,p=void 0===f?[]:f,v=r.purposes,h=void 0===v?[]:v;n||(n=c(p));var g=s(o({},e,{maxVendorId:n,purposeIdBitString:u(h,i),isRange:!1,vendorIdBitString:a(n,l)})),m=d(p,l),y=s(o({},e,{maxVendorId:n,purposeIdBitString:u(h,i),isRange:!0,defaultConsent:!1,numEntries:m.length,vendorRangeList:m}));return g.length<y.length?g:y},getMaxVendorId:c,encodeVendorIdsToBits:a,encodePurposeIdsToBits:u}},Dj5N:function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(n,t){var o=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.provider=n,this.events={},this.purposes={standard:{},custom:{}},this.consent="",this.config={debug:!!t.hasOwnProperty("debug")&&!!t.debug},n.init(this,(function(e,n){o.purposes=e,o.consent=n,o.call("consent")})),this.watch((function(){o.log("Active events",o.events),o.log("Current consent",o.consent),o.log("Enabled purposes",o.purposes),o.log("All standard purposes?",o.allowsStandardPurposes()),o.log("All custom purposes?",o.allowsCustomPurposes())})),this.on("dialog_open",(function(){o.log("Consent popup shown")})),this.on("dialog_close",(function(){o.log("Consent popup close")})),this.watch(this.unblock)}var n,t,r;return n=e,(t=[{key:"allows",value:function(e){if("standard"===e)return this.allowsStandardPurposes();if("custom"===e)return this.allowsCustomPurposes();var n=e.split("/");return 2!==n.length?(this.log("Invalid purpose definition",e),!1):!("standard"!==n[0]||!this.purposes.standard[n[1]])||!("custom"!==n[0]||!this.purposes.custom[n[1]])}},{key:"allowsCustomPurposes",value:function(){for(var e in this.purposes.custom)if(!this.purposes.custom[e])return!1;return!0}},{key:"allowsStandardPurposes",value:function(){for(var e in this.purposes.standard)if(!this.purposes.standard[e])return!1;return!0}},{key:"log",value:function(e){var n;if(this.config.debug){for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];(n=console).log.apply(n,["CONSENT:",e].concat(o))}}},{key:"call",value:function(e){window.postMessage({type:"consent",event:e},window.origin),this.events[e]=!0}},{key:"on",value:function(e,n){var t=this,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.events[e])n.bind(this)();else{var r=function r(s){s.data.hasOwnProperty("type")&&s.data.hasOwnProperty("event")&&"consent"===s.data.type&&s.data.event===e&&(o&&window.removeEventListener("message",r),n.bind(t)())};window.addEventListener("message",r)}}},{key:"wait",value:function(e){this.on("consent",e,!0)}},{key:"watch",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.on("consent",e,n)}},{key:"inject",value:function(e){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=e;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(n,t)}},{key:"unblock",value:function(){var e=this;this.domready((function(){document.querySelectorAll("[data-consent-requires]").forEach((function(n){"consentAttr"in n.dataset&&""!==n.dataset.consentAttr&&!("consentManaged"in n.dataset)&&(n.dataset.consentRequires.split(",").reduce((function(n,t){return n&&e.allows(t)}),!0)?(n.dataset.consentAttr.split(",").forEach((function(e){e in n.dataset&&n.setAttribute(e,n.dataset[e])})),e.log("Element unblocked",n),n.setAttribute("data-consent-managed",!0)):e.log("Element not unblocked, not enough consent",n))}))}))}},{key:"domready",value:function(e){"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?e():document.addEventListener("DOMContentLoaded",e)}},{key:"optOut",value:function(){return this.provider.optOut()}},{key:"keywords",get:function(){var e=[];for(var n in this.allowsStandardPurposes()?e.push("consent_all"):e.push("noconsent"),this.purposes.standard)this.purposes.standard[n]&&e.push("consent_standard_"+n);for(var t in this.purposes.custom)this.purposes.custom[t]&&e.push("consent_custom_"+t);return this.log("Keywords",e),e}}])&&o(n.prototype,t),r&&o(n,r),e}();n.a=r},EZ4Y:function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.purposes=n.hasOwnProperty("purposes")?n.purposes:{standard:{1:!0,2:!0,3:!0,4:!0,5:!0},custom:{}},this.consent=n.hasOwnProperty("consent")?n.consent:"",this.domready=!!n.hasOwnProperty("domready")&&!!n.domready}var n,t,r;return n=e,(t=[{key:"init",value:function(e,n){var t=this;this.domready&&e.domready((function(){n(t.purposes,t.consent)})),n(this.purposes,this.consent)}},{key:"optOut",value:function(){}}])&&o(n.prototype,t),r&&o(n,r),e}();n.a=r},TMfF:function(e,n,t){"use strict";e.exports={versionNumBits:6,vendorVersionMap:{1:{version:1,metadataFields:["version","created","lastUpdated","cmpId","cmpVersion","consentScreen","vendorListVersion"],fields:[{name:"version",type:"int",numBits:6},{name:"created",type:"date",numBits:36},{name:"lastUpdated",type:"date",numBits:36},{name:"cmpId",type:"int",numBits:12},{name:"cmpVersion",type:"int",numBits:12},{name:"consentScreen",type:"int",numBits:6},{name:"consentLanguage",type:"language",numBits:12},{name:"vendorListVersion",type:"int",numBits:12},{name:"purposeIdBitString",type:"bits",numBits:24},{name:"maxVendorId",type:"int",numBits:16},{name:"isRange",type:"bool",numBits:1},{name:"vendorIdBitString",type:"bits",numBits:function(e){return e.maxVendorId},validator:function(e){return!e.isRange}},{name:"defaultConsent",type:"bool",numBits:1,validator:function(e){return e.isRange}},{name:"numEntries",numBits:12,type:"int",validator:function(e){return e.isRange}},{name:"vendorRangeList",type:"list",listCount:function(e){return e.numEntries},validator:function(e){return e.isRange},fields:[{name:"isRange",type:"bool",numBits:1},{name:"startVendorId",type:"int",numBits:16},{name:"endVendorId",type:"int",numBits:16,validator:function(e){return e.isRange}}]}]}}}},YuTi:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},aqBw:function(e,n,t){(function(e,o){var r;/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */!function(s){var i=n,a=(e&&e.exports,"object"==typeof o&&o);a.global!==a&&a.window;var u=function(e){this.message=e};(u.prototype=new Error).name="InvalidCharacterError";var d=function(e){throw new u(e)},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=/[\t\n\f\r ]/g,f={encode:function(e){e=String(e),/[^\0-\xFF]/.test(e)&&d("The string to be encoded contains characters outside of the Latin1 range.");for(var n,t,o,r,s=e.length%3,i="",a=-1,u=e.length-s;++a<u;)n=e.charCodeAt(a)<<16,t=e.charCodeAt(++a)<<8,o=e.charCodeAt(++a),i+=c.charAt((r=n+t+o)>>18&63)+c.charAt(r>>12&63)+c.charAt(r>>6&63)+c.charAt(63&r);return 2==s?(n=e.charCodeAt(a)<<8,t=e.charCodeAt(++a),i+=c.charAt((r=n+t)>>10)+c.charAt(r>>4&63)+c.charAt(r<<2&63)+"="):1==s&&(r=e.charCodeAt(a),i+=c.charAt(r>>2)+c.charAt(r<<4&63)+"=="),i},decode:function(e){var n=(e=String(e).replace(l,"")).length;n%4==0&&(n=(e=e.replace(/==?$/,"")).length),(n%4==1||/[^+a-zA-Z0-9/]/.test(e))&&d("Invalid character: the string to be decoded is not correctly encoded.");for(var t,o,r=0,s="",i=-1;++i<n;)o=c.indexOf(e.charAt(i)),t=r%4?64*t+o:o,r++%4&&(s+=String.fromCharCode(255&t>>(-2*r&6)));return s},version:"0.1.0"};void 0===(r=function(){return f}.call(n,t,n,e))||(e.exports=r)}()}).call(this,t("YuTi")(e),t("yLpj"))},g8Jf:function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=t("gqE+").ConsentString,s=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,s;return n=e,(t=[{key:"init",value:function(e,n){var t=function(e){__cmp("getConsentData",null,(function(e){var t=e.consentData,o=new r(t),s={standard:{1:o.isPurposeAllowed(1),2:o.isPurposeAllowed(2),3:o.isPurposeAllowed(3),4:o.isPurposeAllowed(4),5:o.isPurposeAllowed(5)},custom:{necessary:Cookiebot.consent.necessary,preferences:Cookiebot.consent.preferences,statistics:Cookiebot.consent.statistics,marketing:Cookiebot.consent.marketing}};n(s,t)}))};window.addEventListener("CookiebotOnAccept",t),window.addEventListener("CookiebotOnDecline",t)}},{key:"optOut",value:function(){document.cookie="CookieConsent=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="CookieConsentBulkTicket=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}])&&o(n.prototype,t),s&&o(n,s),e}();n.a=s},"gqE+":function(e,n,t){"use strict";var o=t("tpW5").ConsentString,r=t("qsFB").decodeConsentString,s=t("CDww").encodeConsentString;e.exports={ConsentString:o,decodeConsentString:r,encodeConsentString:s}},"jkv+":function(e,n,t){"use strict";var o=t("aqBw"),r=t("TMfF"),s=r.versionNumBits,i=r.vendorVersionMap;function a(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",t="",o=0;o<e;o+=1)t+=n;return t}function u(e,n){return a(Math.max(0,n))+e}function d(e,n){return e+a(Math.max(0,n))}function c(e,n){var t="";return"number"!=typeof e||isNaN(e)||(t=parseInt(e,10).toString(2)),n>=t.length&&(t=u(t,n-t.length)),t.length>n&&(t=t.substring(0,n)),t}function l(e){return c(!0===e?1:0,1)}function f(e,n){return e instanceof Date?c(e.getTime()/100,n):c(e,n)}function p(e,n){return c(e.toUpperCase().charCodeAt(0)-65,n)}function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return p(e.slice(0,1),n/2)+p(e.slice(1),n/2)}function h(e,n,t){return parseInt(e.substr(n,t),2)}function g(e,n,t){return new Date(100*h(e,n,t))}function m(e,n){return 1===parseInt(e.substr(n,1),2)}function y(e){var n=h(e);return String.fromCharCode(n+65).toLowerCase()}function w(e,n,t){var o=e.substr(n,t);return y(o.slice(0,t/2))+y(o.slice(t/2))}function b(e){var n=e.input,t=e.field,o=t.name,r=t.type,s=t.numBits,i=t.encoder,a=t.validator;if("function"==typeof a&&!a(n))return"";if("function"==typeof i)return i(n);var u="function"==typeof s?s(n):s,p=n[o],h=null==p?"":p;switch(r){case"int":return c(h,u);case"bool":return l(h);case"date":return f(h,u);case"bits":return d(h,u-h.length).substring(0,u);case"list":return h.reduce((function(e,n){return e+V({input:n,fields:t.fields})}),"");case"language":return v(h,u);default:throw new Error("ConsentString - Unknown field type "+r+" for encoding")}}function V(e){var n=e.input;return e.fields.reduce((function(e,t){return e+=b({input:n,field:t})}),"")}function C(e){var n=e.input,t=e.output,o=e.startPosition,r=e.field,s=r.type,i=r.numBits,a=r.decoder,u=r.validator,d=r.listCount;if("function"==typeof u&&!u(t))return{newPosition:o};if("function"==typeof a)return a(n,t,o);var c="function"==typeof i?i(t):i;switch(s){case"int":return{fieldValue:h(n,o,c)};case"bool":return{fieldValue:m(n,o)};case"date":return{fieldValue:g(n,o,c)};case"bits":return{fieldValue:n.substr(o,c)};case"list":return function(e,n,t,o,r){var s=0;"function"==typeof r?s=r(n):"number"==typeof r&&(s=r);for(var i=t,a=[],u=0;u<s;u+=1){var d=I({input:e,fields:o.fields,startPosition:i});i=d.newPosition,a.push(d.decodedObject)}return{fieldValue:a,newPosition:i}}(n,t,o,r,d);case"language":return{fieldValue:w(n,o,c)};default:throw new Error("ConsentString - Unknown field type "+s+" for decoding")}}function I(e){var n=e.input,t=e.fields,o=e.startPosition,r=void 0===o?0:o;return{decodedObject:t.reduce((function(e,t){var o=t.name,s=t.numBits,i=C({input:n,output:e,startPosition:r,field:t}),a=i.fieldValue,u=i.newPosition;return void 0!==a&&(e[o]=a),void 0!==u?r=u:"number"==typeof s&&(r+=s),e}),{}),newPosition:r}}function k(e,n){var t=e.version;if("number"!=typeof t)throw new Error("ConsentString - No version field to encode");if(n[t])return V({input:e,fields:n[t].fields});throw new Error("ConsentString - No definition for version "+t)}e.exports={padRight:d,padLeft:u,encodeField:b,encodeDataToBits:k,encodeIntToBits:c,encodeBoolToBits:l,encodeDateToBits:f,encodeLanguageToBits:v,encodeLetterToBits:p,encodeToBase64:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,t=k(e,n);if(t){for(var r=d(t,7-(t.length+7)%8),s="",a=0;a<r.length;a+=8)s+=String.fromCharCode(parseInt(r.substr(a,8),2));return o.encode(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}return null},decodeBitsToIds:function(e){return e.split("").reduce((function(e,n,t){return"1"===n&&-1===e.indexOf(t+1)&&e.push(t+1),e}),[])},decodeBitsToInt:h,decodeBitsToDate:g,decodeBitsToBool:m,decodeBitsToLanguage:w,decodeBitsToLetter:y,decodeFromBase64:function(e,n){for(var t=e;t.length%4!=0;)t+="=";t=t.replace(/-/g,"+").replace(/_/g,"/");for(var r=o.decode(t),a="",d=0;d<r.length;d+=1){var c=r.charCodeAt(d).toString(2);a+=u(c,8-c.length)}return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,t=h(e,0,s);if("number"!=typeof t)throw new Error("ConsentString - Unknown version number in the string to decode");if(!i[t])throw new Error("ConsentString - Unsupported version "+t+" in the string to decode");var o=n[t].fields,r=I({input:e,fields:o}),a=r.decodedObject;return a}(a,n)}}},lkRs:function(e,n,t){"use strict";t.r(n),function(e){var n=t("g8Jf"),o=t("EZ4Y"),r=t("Dj5N");e.Consent_Cookiebot=n.a,e.Consent_Noop=o.a,e.Consent=r.a}.call(this,t("yLpj"))},qsFB:function(e,n,t){"use strict";var o=t("jkv+"),r=o.decodeBitsToIds,s=o.decodeFromBase64;e.exports={decodeConsentString:function(e){var n=s(e),t=n.version,o=n.cmpId,i=n.vendorListVersion,a=n.purposeIdBitString,u=n.maxVendorId,d=n.created,c=n.lastUpdated,l=n.isRange,f=n.defaultConsent,p=n.vendorIdBitString,v=n.vendorRangeList,h=n.cmpVersion,g=n.consentScreen,m=n.consentLanguage,y={version:t,cmpId:o,vendorListVersion:i,allowedPurposeIds:r(a),maxVendorId:u,created:d,lastUpdated:c,cmpVersion:h,consentScreen:g,consentLanguage:m};if(l){var w=v.reduce((function(e,n){for(var t=n.isRange,o=n.startVendorId,r=n.endVendorId,s=t?r:o,i=o;i<=s;i+=1)e[i]=!0;return e}),{});y.allowedVendorIds=[];for(var b=1;b<=u;b+=1)(f&&!w[b]||!f&&w[b])&&-1===y.allowedVendorIds.indexOf(b)&&y.allowedVendorIds.push(b)}else y.allowedVendorIds=r(p);return y}}},tpW5:function(e,n,t){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i=t("CDww"),a=i.encodeConsentString,u=i.getMaxVendorId,d=i.encodeVendorIdsToBits,c=i.encodePurposeIdsToBits,l=t("qsFB").decodeConsentString,f=t("TMfF").vendorVersionMap,p=/^[a-z]{2}$/,v=void 0,h=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;s(this,e),this.maxVendorId=0,this.created=new Date,this.lastUpdated=new Date,this.version=1,this.vendorList=null,this.vendorListVersion=null,this.cmpId=null,this.cmpVersion=null,this.consentScreen=null,this.consentLanguage=null,this.allowedPurposeIds=[],this.allowedVendorIds=[],n&&(v=n,Object.assign(this,l(n)))}return r(e,[{key:"getConsentString",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=void 0;if(v&&!e)n=v;else{if(!this.vendorList)throw new Error("ConsentString - A vendor list is required to encode a consent string");!0===e&&(this.lastUpdated=new Date),n=a({version:this.getVersion(),vendorList:this.vendorList,allowedPurposeIds:this.allowedPurposeIds,allowedVendorIds:this.allowedVendorIds,created:this.created,lastUpdated:this.lastUpdated,cmpId:this.cmpId,cmpVersion:this.cmpVersion,consentScreen:this.consentScreen,consentLanguage:this.consentLanguage,vendorListVersion:this.vendorListVersion}),v=n}return n}},{key:"getLastUpdated",value:function(){return this.lastUpdated}},{key:"setLastUpdated",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;v="",this.lastUpdated=e?new Date(e):new Date}},{key:"getCreated",value:function(){return this.created}},{key:"setCreated",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;v="",this.created=e?new Date(e):new Date}},{key:"getMaxVendorId",value:function(){return this.maxVendorId||this.vendorList&&(this.maxVendorId=u(this.vendorList.vendors)),this.maxVendorId}},{key:"getParsedVendorConsents",value:function(){return d(u(this.vendorList.vendors),this.allowedVendorIds)}},{key:"getParsedPurposeConsents",value:function(){return c(this.vendorList.purposes,this.allowedPurposeIds)}},{key:"getMetadataString",value:function(){return a({version:this.getVersion(),created:this.created,lastUpdated:this.lastUpdated,cmpId:this.cmpId,cmpVersion:this.cmpVersion,consentScreen:this.consentScreen,vendorListVersion:this.vendorListVersion})}},{key:"getVersion",value:function(){return this.version}},{key:"getVendorListVersion",value:function(){return this.vendorListVersion}},{key:"setGlobalVendorList",value:function(e){if("object"!==(void 0===e?"undefined":o(e)))throw new Error("ConsentString - You must provide an object when setting the global vendor list");if(!e.vendorListVersion||!Array.isArray(e.purposes)||!Array.isArray(e.vendors))throw new Error("ConsentString - The provided vendor list does not respect the schema from the IAB EU’s GDPR Consent and Transparency Framework");this.vendorList&&this.vendorListVersion===e.vendorListVersion||(v="",this.vendorList={vendorListVersion:e.vendorListVersion,lastUpdated:e.lastUpdated,purposes:e.purposes,features:e.features,vendors:e.vendors.slice(0).sort((function(e,n){return e.id<n.id?-1:1}))},this.vendorListVersion=e.vendorListVersion)}},{key:"getGlobalVendorList",value:function(){return this.vendorList}},{key:"setCmpId",value:function(e){e!==this.cmpId&&(v="",this.cmpId=e)}},{key:"getCmpId",value:function(){return this.cmpId}},{key:"setCmpVersion",value:function(e){e!==this.cmpVersion&&(v="",this.cmpVersion=e)}},{key:"getCmpVersion",value:function(){return this.cmpVersion}},{key:"setConsentScreen",value:function(e){e!==this.consentScreen&&(v="",this.consentScreen=e)}},{key:"getConsentScreen",value:function(){return this.consentScreen}},{key:"setConsentLanguage",value:function(e){if(!1===p.test(e))throw new Error("ConsentString - The consent language must be a two-letter ISO639-1 code (en, fr, de, etc.)");e!==this.consentLanguage&&(v="",this.consentLanguage=e)}},{key:"getConsentLanguage",value:function(){return this.consentLanguage}},{key:"setPurposesAllowed",value:function(e){v="",this.allowedPurposeIds=e}},{key:"getPurposesAllowed",value:function(){return this.allowedPurposeIds}},{key:"setPurposeAllowed",value:function(e,n){var t=this.allowedPurposeIds.indexOf(e);v="",!0===n?-1===t&&this.allowedPurposeIds.push(e):!1===n&&-1!==t&&this.allowedPurposeIds.splice(t,1)}},{key:"isPurposeAllowed",value:function(e){return-1!==this.allowedPurposeIds.indexOf(e)}},{key:"setVendorsAllowed",value:function(e){v="",this.allowedVendorIds=e}},{key:"getVendorsAllowed",value:function(){return this.allowedVendorIds}},{key:"setVendorAllowed",value:function(e,n){var t=this.allowedVendorIds.indexOf(e);v="",!0===n?-1===t&&this.allowedVendorIds.push(e):!1===n&&-1!==t&&this.allowedVendorIds.splice(t,1)}},{key:"isVendorAllowed",value:function(e){return-1!==this.allowedVendorIds.indexOf(e)}}],[{key:"decodeMetadataString",value:function(e){var n=l(e),t={};return f[n.version].metadataFields.forEach((function(e){t[e]=n[e]})),t}}]),e}();e.exports={ConsentString:h}},yLpj:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t}});