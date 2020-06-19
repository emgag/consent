/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/civic-bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@iabtcf/stub/lib/stub.js":
/*!***********************************************!*\
  !*** ./node_modules/@iabtcf/stub/lib/stub.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
!function(){var e=function(){var e,t="__tcfapiLocator",a=[],n=window;for(;n;){try{if(n.frames[t]){e=n;break}}catch(e){}if(n===window.top)break;n=n.parent}e||(!function e(){var a=n.document,r=!!n.frames[t];if(!r)if(a.body){var s=a.createElement("iframe");s.style.cssText="display:none",s.name=t,a.body.appendChild(s)}else setTimeout(e,5);return!r}(),n.__tcfapi=function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return a;if("setGdprApplies"===n[0])n.length>3&&2===parseInt(n[1],10)&&"boolean"==typeof n[3]&&(e=n[3],"function"==typeof n[2]&&n[2]("set",!0));else if("ping"===n[0]){var s={gdprApplies:e,cmpLoaded:!1,cmpStatus:"stub"};"function"==typeof n[2]&&n[2](s)}else a.push(n)},n.addEventListener("message",(function(e){var t="string"==typeof e.data,a={};try{a=t?JSON.parse(e.data):e.data}catch(e){}var n=a.__tcfapiCall;n&&window.__tcfapi(n.command,n.version,(function(a,r){var s={__tcfapiReturn:{returnValue:a,success:r,callId:n.callId}};t&&(s=JSON.stringify(s)),e&&e.source&&e.source.postMessage&&e.source.postMessage(s,"*")}),n.parameter)}),!1))}; true?module.exports=e:undefined}();

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/civic-bundle.js":
/*!*****************************!*\
  !*** ./src/civic-bundle.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _integration_civic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration/civic */ "./src/integration/civic.js");
/* harmony import */ var _integration_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integration/noop */ "./src/integration/noop.js");
/* harmony import */ var _consent_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consent/shim */ "./src/consent/shim.js");
/* harmony import */ var _iabtcf_stub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iabtcf/stub */ "./node_modules/@iabtcf/stub/lib/stub.js");
/* harmony import */ var _iabtcf_stub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iabtcf_stub__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Consent bundle (shim & Civic Cookie Control)
 */

global.Consent_Civic = _integration_civic__WEBPACK_IMPORTED_MODULE_0__["default"];

global.Consent_Noop = _integration_noop__WEBPACK_IMPORTED_MODULE_1__["default"];

global.Consent = _consent_shim__WEBPACK_IMPORTED_MODULE_2__["default"];

_iabtcf_stub__WEBPACK_IMPORTED_MODULE_3___default()();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/consent/shim.js":
/*!*****************************!*\
  !*** ./src/consent/shim.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/**
 * Wrapper around CMP to store consent data and manage consent events
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Consent = /*#__PURE__*/function () {
  /**
   * @param {Object} provider An instance of a provider implementation
   * @param {function} provider.init Function to be called to initialize provider
   * @param {function} provider.optOut Function to be called to opt out of consent
   * @param {Object} config additional configuration
   * @param {boolean} config.debug whether debug statements should be printed
   */
  function Consent(provider, config) {
    var _this = this;

    _classCallCheck(this, Consent);

    this.provider = provider;
    this.events = {};
    this.purposes = {
      'standard': {},
      'special': {}
    };
    this.consent = ''; // merge config

    this.config = {
      debug: config.hasOwnProperty('debug') ? !!config.debug : false
    };
    provider.init(this, function (purposes, consent) {
      _this.purposes = purposes;
      _this.consent = consent;

      _this.call('consent');
    });
    this.watch(function () {
      _this.log('Active events', _this.events);

      _this.log('Current consent', _this.consent);

      _this.log('Enabled purposes', _this.purposes);

      _this.log('All standard purposes?', _this.allowsStandardPurposes());

      _this.log('All special purposes?', _this.allowsSpecialPurposes());
    });
    this.on('dialog_open', function () {
      _this.log('Consent popup shown');
    });
    this.on('dialog_close', function () {
      _this.log('Consent popup close');
    });
    this.watch(this.unblock);
  }
  /**
   * List of ad keywords for current consent.
   *
   * Additionally, "consent_all" will be added when all standard purposes are allowed, "noconsent" if not.
   *
   * @returns {string[]}
   */


  _createClass(Consent, [{
    key: "allows",

    /**
     * Returns true if specific purpose has consent, false if otherwise.
     *
     * @param {string} purpose Either a specific purpose (standard/X, special/X) or "standard" of "special" for all in this category.
     * @returns {boolean}
     */
    value: function allows(purpose) {
      if (purpose === 'standard') {
        return this.allowsStandardPurposes();
      }

      if (purpose === 'special') {
        return this.allowsSpecialPurposes();
      }

      var p = purpose.split('/');

      if (p.length !== 2) {
        this.log('Invalid purpose definition', purpose);
        return false;
      }

      if (p[0] === 'standard' && this.purposes.standard[p[1]]) {
        return true;
      }

      if (p[0] === 'special' && this.purposes.special[p[1]]) {
        return true;
      }

      return false;
    }
    /**
     * Returns true if all special purposes have consent.
     *
     * @returns {boolean}
     */

  }, {
    key: "allowsSpecialPurposes",
    value: function allowsSpecialPurposes() {
      for (var property in this.purposes.special) {
        if (!this.purposes.special[property]) return false;
      }

      return true;
    }
    /**
     * Returns true if all standard purposes have consent.
     *
     * @returns {boolean}
     */

  }, {
    key: "allowsStandardPurposes",
    value: function allowsStandardPurposes() {
      for (var property in this.purposes.standard) {
        if (!this.purposes.standard[property]) return false;
      }

      return true;
    }
    /**
     * Prints a debug message to browser console.
     *
     * @param msg
     * @param context
     */

  }, {
    key: "log",
    value: function log(msg) {
      var _console;

      if (!this.config.debug) {
        return;
      }

      for (var _len = arguments.length, context = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        context[_key - 1] = arguments[_key];
      }

      (_console = console).log.apply(_console, ["CONSENT:", msg].concat(context));
    }
    /**
     * Triggers specific event
     *
     * @param {string} event Event to be triggered.
     */

  }, {
    key: "call",
    value: function call(event) {
      window.postMessage({
        'type': 'consent',
        'event': event
      }, window.origin);
      this.events[event] = true;
    }
    /**
     * Registers an event handler for a specific event
     *
     * @param {string} event Event to listen for
     * @param {function} callback Function to be called when event occurs
     * @param {boolean} once Remove event handler after first run
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      var _this2 = this;

      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (this.events[event]) {
        // event already called, just run callback
        callback.bind(this)();
        return;
      }

      var handler = function handler(e) {
        if (e.data.hasOwnProperty('type') && e.data.hasOwnProperty('event') && e.data.type === 'consent' && e.data.event === event) {
          once && window.removeEventListener('message', handler);
          callback.bind(_this2)();
        }
      }; // waiting for event


      window.addEventListener('message', handler);
    }
    /**
     * Wait for consent and run callback once. Shorthand for on('consent', callback, true).
     *
     * @see on
     * @param {function} callback
     */

  }, {
    key: "wait",
    value: function wait(callback) {
      this.on('consent', callback, true);
    }
    /**
     * Runs callback on consent event. Shorthand for on('consent', ...)
     *
     * @see on
     * @param {function} callback
     * @param {boolean} once
     */

  }, {
    key: "watch",
    value: function watch(callback) {
      var once = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.on('consent', callback, once);
    }
    /**
     * Injects an asynchronous script tag into the current page
     *
     * @param {string} src URL to the script
     */

  }, {
    key: "inject",
    value: function inject(src) {
      var po = document.createElement('script');
      po.type = 'text/javascript';
      po.async = true;
      po.src = src;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(po, s);
    }
    /**
     * Searches for HTML elements to unblock in current document.
     */

  }, {
    key: "unblock",
    value: function unblock() {
      var _this3 = this;

      // defer until dom is ready
      this.domready(function () {
        var elements = document.querySelectorAll('[data-consent-requires]');
        elements.forEach(function (el) {
          if (!('consentAttr' in el.dataset) || el.dataset['consentAttr'] === '' || 'consentManaged' in el.dataset) {
            return;
          }

          var purposes = el.dataset['consentRequires'].split(',');

          if (!purposes.reduce(function (p, v) {
            return p && _this3.allows(v);
          }, true)) {
            _this3.log('Element not unblocked, not enough consent', el);

            return;
          }

          var attr = el.dataset['consentAttr'].split(','); // rewrite attributes from data-attr to attr

          attr.forEach(function (a) {
            a in el.dataset && el.setAttribute(a, el.dataset[a]);
          });

          _this3.log('Element unblocked', el);

          el.setAttribute('data-consent-managed', true);
        });
      });
    }
    /**
     * Wrapper around DOM ready event
     *
     * @param {function} callback
     */

  }, {
    key: "domready",
    value: function domready(callback) {
      if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
        callback();
        return;
      }

      document.addEventListener("DOMContentLoaded", callback);
    }
    /**
     * Clears current consent
     *
     * @returns {*}
     */

  }, {
    key: "optOut",
    value: function optOut() {
      return this.provider.optOut();
    }
    /**
     * Shows user interface to change consent
     */

  }, {
    key: "showUi",
    value: function showUi() {
      return this.provider.showUi();
    }
  }, {
    key: "keywords",
    get: function get() {
      var k = [];
      this.allowsStandardPurposes() ? k.push('consent_all') : k.push('noconsent');

      for (var property in this.purposes.standard) {
        this.purposes.standard[property] && k.push('consent_standard_' + property);
      }

      for (var _property in this.purposes.special) {
        this.purposes.special[_property] && k.push('consent_special_' + _property);
      }

      this.log('Keywords', k);
      return k;
    }
  }]);

  return Consent;
}();

/* harmony default export */ __webpack_exports__["default"] = (Consent);

/***/ }),

/***/ "./src/integration/civic.js":
/*!**********************************!*\
  !*** ./src/integration/civic.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Consent_Civic = /*#__PURE__*/function () {
  /**
   * @param {Object} config
   */
  function Consent_Civic(config) {
    _classCallCheck(this, Consent_Civic);

    this.config = config;
  }

  _createClass(Consent_Civic, [{
    key: "init",
    value: function init(consent, callback) {
      var _this = this;

      this.open = false;

      __tcfapi('addEventListener', 2, function (tcData, success) {
        if (!success) return false;
        consent.log('TCM API', tcData.eventStatus, tcData);

        switch (tcData.eventStatus) {
          case 'useractioncomplete': // fallthrough

          case 'tcloaded':
            if (_this.open) {
              consent.call('dialog_close');
              _this.open = false;
            }

            if (tcData.hasOwnProperty('purpose') && tcData.hasOwnProperty('publisher')) {
              callback({
                'standard': _this.annotateStandardConsents(tcData.purpose.consents),
                'special': tcData.publisher.customPurpose.consents
              }, tcData.tcString);
            }

            break;

          case 'cmpuishown':
            _this.open = true;
            consent.call('dialog_open');
            break;
        }
      });
    }
  }, {
    key: "annotateStandardConsents",
    value: function annotateStandardConsents(consents) {
      var c = {};

      for (var i = 1; i <= 10; i++) {
        c[i] = consents.hasOwnProperty(i) ? consents[i] : false;
      }

      return c;
    }
  }, {
    key: "optOut",
    value: function optOut() {
      window.localStorage.removeItem('_cmpRepromptHash');
    }
  }, {
    key: "showUi",
    value: function showUi() {
      __tcfapi('displayConsentUi', 2, function () {});
    }
  }]);

  return Consent_Civic;
}();

/* harmony default export */ __webpack_exports__["default"] = (Consent_Civic);

/***/ }),

/***/ "./src/integration/noop.js":
/*!*********************************!*\
  !*** ./src/integration/noop.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/**
 * Noop provider just passes through pre-initialized consent
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Consent_Noop = /*#__PURE__*/function () {
  /**
   * @param {Object} config
   * @param {Object} config.purposes
   * @param {string} config.string
   * @param {boolean} config.domready
   */
  function Consent_Noop(config) {
    _classCallCheck(this, Consent_Noop);

    this.purposes = config.hasOwnProperty('purposes') ? config.purposes : {
      'standard': {
        '1': true,
        '2': true,
        '3': true,
        '4': true,
        '5': true
      },
      'custom': {}
    };
    this.consent = config.hasOwnProperty('consent') ? config.consent : '';
    this.domready = config.hasOwnProperty('domready') ? !!config.domready : false;
  }
  /**
   * @param {Consent} consent
   * @param {function} callback
   */


  _createClass(Consent_Noop, [{
    key: "init",
    value: function init(consent, callback) {
      var _this = this;

      if (this.domready) {
        consent.domready(function () {
          callback(_this.purposes, _this.consent);
        });
      }

      callback(this.purposes, this.consent);
    }
  }, {
    key: "optOut",
    value: function optOut() {}
  }]);

  return Consent_Noop;
}();

/* harmony default export */ __webpack_exports__["default"] = (Consent_Noop);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BpYWJ0Y2Yvc3R1Yi9saWIvc3R1Yi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jaXZpYy1idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNlbnQvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZWdyYXRpb24vY2l2aWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVncmF0aW9uL25vb3AuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiQ29uc2VudF9DaXZpYyIsIkNvbnNlbnRfTm9vcCIsIkNvbnNlbnQiLCJtYWtlU3R1YiIsInByb3ZpZGVyIiwiY29uZmlnIiwiZXZlbnRzIiwicHVycG9zZXMiLCJjb25zZW50IiwiZGVidWciLCJoYXNPd25Qcm9wZXJ0eSIsImluaXQiLCJjYWxsIiwid2F0Y2giLCJsb2ciLCJhbGxvd3NTdGFuZGFyZFB1cnBvc2VzIiwiYWxsb3dzU3BlY2lhbFB1cnBvc2VzIiwib24iLCJ1bmJsb2NrIiwicHVycG9zZSIsInAiLCJzcGxpdCIsImxlbmd0aCIsInN0YW5kYXJkIiwic3BlY2lhbCIsInByb3BlcnR5IiwibXNnIiwiY29udGV4dCIsImNvbnNvbGUiLCJldmVudCIsIndpbmRvdyIsInBvc3RNZXNzYWdlIiwib3JpZ2luIiwiY2FsbGJhY2siLCJvbmNlIiwiYmluZCIsImhhbmRsZXIiLCJlIiwiZGF0YSIsInR5cGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNyYyIsInBvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXN5bmMiLCJzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZG9tcmVhZHkiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJkYXRhc2V0IiwicmVkdWNlIiwidiIsImFsbG93cyIsImF0dHIiLCJhIiwic2V0QXR0cmlidXRlIiwicmVhZHlTdGF0ZSIsImRvY3VtZW50RWxlbWVudCIsImRvU2Nyb2xsIiwib3B0T3V0Iiwic2hvd1VpIiwiayIsInB1c2giLCJvcGVuIiwiX190Y2ZhcGkiLCJ0Y0RhdGEiLCJzdWNjZXNzIiwiZXZlbnRTdGF0dXMiLCJhbm5vdGF0ZVN0YW5kYXJkQ29uc2VudHMiLCJjb25zZW50cyIsInB1Ymxpc2hlciIsImN1c3RvbVB1cnBvc2UiLCJ0Y1N0cmluZyIsImMiLCJpIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYSxZQUFZLGlCQUFpQix3Q0FBd0MsS0FBSyxFQUFFLEVBQUUsSUFBSSxnQkFBZ0IsSUFBSSxPQUFPLFVBQVUsd0JBQXdCLFdBQVcsa0JBQWtCLGlD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Q0FBUjtBQUNIOzs7Ozs7QUFJVXZFLDRFQUFmLEU7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFhO0FBRWI7Ozs7Ozs7Ozs7SUFHTUMsWTtBQUNGOzs7Ozs7QUFNQSx3QkFBWUksTUFBWixFQUFvQjtBQUFBOztBQUNoQixTQUFLRSxRQUFMLEdBQWdCRixNQUFNLENBQUNLLGNBQVAsQ0FBc0IsVUFBdEIsSUFDVkwsTUFBTSxDQUFDRSxRQURHLEdBRVY7QUFDRSxrQkFBWTtBQUNSLGFBQUssSUFERztBQUVSLGFBQUssSUFGRztBQUdSLGFBQUssSUFIRztBQUlSLGFBQUssSUFKRztBQUtSLGFBQUs7QUFMRyxPQURkO0FBUUUsZ0JBQVU7QUFSWixLQUZOO0FBYUEsU0FBS0MsT0FBTCxHQUFlSCxNQUFNLENBQUNLLGNBQVAsQ0FBc0IsU0FBdEIsSUFDVEwsTUFBTSxDQUFDRyxPQURFLEdBRVQsRUFGTjtBQUlBLFNBQUsyQyxRQUFMLEdBQWdCOUMsTUFBTSxDQUFDSyxjQUFQLENBQXNCLFVBQXRCLElBQ1YsQ0FBQyxDQUFDTCxNQUFNLENBQUM4QyxRQURDLEdBRVYsS0FGTjtBQUdIO0FBRUQ7Ozs7Ozs7O3lCQUlLM0MsTyxFQUFTeUIsUSxFQUFVO0FBQUE7O0FBQ3BCLFVBQUksS0FBS2tCLFFBQVQsRUFBbUI7QUFDZjNDLGVBQU8sQ0FBQzJDLFFBQVIsQ0FBaUIsWUFBTTtBQUNuQmxCLGtCQUFRLENBQUMsS0FBSSxDQUFDMUIsUUFBTixFQUFnQixLQUFJLENBQUNDLE9BQXJCLENBQVI7QUFDSCxTQUZEO0FBR0g7O0FBRUR5QixjQUFRLENBQUMsS0FBSzFCLFFBQU4sRUFBZ0IsS0FBS0MsT0FBckIsQ0FBUjtBQUNIOzs7NkJBRVEsQ0FDUjs7Ozs7O0FBR1VQLDJFQUFmLEUiLCJmaWxlIjoiY2l2aWMtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2l2aWMtYnVuZGxlLmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7IWZ1bmN0aW9uKCl7dmFyIGU9ZnVuY3Rpb24oKXt2YXIgZSx0PVwiX190Y2ZhcGlMb2NhdG9yXCIsYT1bXSxuPXdpbmRvdztmb3IoO247KXt0cnl7aWYobi5mcmFtZXNbdF0pe2U9bjticmVha319Y2F0Y2goZSl7fWlmKG49PT13aW5kb3cudG9wKWJyZWFrO249bi5wYXJlbnR9ZXx8KCFmdW5jdGlvbiBlKCl7dmFyIGE9bi5kb2N1bWVudCxyPSEhbi5mcmFtZXNbdF07aWYoIXIpaWYoYS5ib2R5KXt2YXIgcz1hLmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7cy5zdHlsZS5jc3NUZXh0PVwiZGlzcGxheTpub25lXCIscy5uYW1lPXQsYS5ib2R5LmFwcGVuZENoaWxkKHMpfWVsc2Ugc2V0VGltZW91dChlLDUpO3JldHVybiFyfSgpLG4uX190Y2ZhcGk9ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQpLHI9MDtyPHQ7cisrKW5bcl09YXJndW1lbnRzW3JdO2lmKCFuLmxlbmd0aClyZXR1cm4gYTtpZihcInNldEdkcHJBcHBsaWVzXCI9PT1uWzBdKW4ubGVuZ3RoPjMmJjI9PT1wYXJzZUludChuWzFdLDEwKSYmXCJib29sZWFuXCI9PXR5cGVvZiBuWzNdJiYoZT1uWzNdLFwiZnVuY3Rpb25cIj09dHlwZW9mIG5bMl0mJm5bMl0oXCJzZXRcIiwhMCkpO2Vsc2UgaWYoXCJwaW5nXCI9PT1uWzBdKXt2YXIgcz17Z2RwckFwcGxpZXM6ZSxjbXBMb2FkZWQ6ITEsY21wU3RhdHVzOlwic3R1YlwifTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuWzJdJiZuWzJdKHMpfWVsc2UgYS5wdXNoKG4pfSxuLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsKGZ1bmN0aW9uKGUpe3ZhciB0PVwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEsYT17fTt0cnl7YT10P0pTT04ucGFyc2UoZS5kYXRhKTplLmRhdGF9Y2F0Y2goZSl7fXZhciBuPWEuX190Y2ZhcGlDYWxsO24mJndpbmRvdy5fX3RjZmFwaShuLmNvbW1hbmQsbi52ZXJzaW9uLChmdW5jdGlvbihhLHIpe3ZhciBzPXtfX3RjZmFwaVJldHVybjp7cmV0dXJuVmFsdWU6YSxzdWNjZXNzOnIsY2FsbElkOm4uY2FsbElkfX07dCYmKHM9SlNPTi5zdHJpbmdpZnkocykpLGUmJmUuc291cmNlJiZlLnNvdXJjZS5wb3N0TWVzc2FnZSYmZS5zb3VyY2UucG9zdE1lc3NhZ2UocyxcIipcIil9KSxuLnBhcmFtZXRlcil9KSwhMSkpfTtcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWU6ZSgpfSgpOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qXG4gKiBDb25zZW50IGJ1bmRsZSAoc2hpbSAmIENpdmljIENvb2tpZSBDb250cm9sKVxuICovXG5cbmltcG9ydCBDb25zZW50X0NpdmljIGZyb20gXCIuL2ludGVncmF0aW9uL2NpdmljXCI7XG5nbG9iYWwuQ29uc2VudF9DaXZpYyA9IENvbnNlbnRfQ2l2aWM7XG5cbmltcG9ydCBDb25zZW50X05vb3AgZnJvbSBcIi4vaW50ZWdyYXRpb24vbm9vcFwiO1xuZ2xvYmFsLkNvbnNlbnRfTm9vcCA9IENvbnNlbnRfTm9vcDtcblxuaW1wb3J0IENvbnNlbnQgZnJvbSBcIi4vY29uc2VudC9zaGltXCI7XG5nbG9iYWwuQ29uc2VudCA9IENvbnNlbnQ7XG5cbmltcG9ydCBtYWtlU3R1YiBmcm9tICdAaWFidGNmL3N0dWInO1xubWFrZVN0dWIoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBXcmFwcGVyIGFyb3VuZCBDTVAgdG8gc3RvcmUgY29uc2VudCBkYXRhIGFuZCBtYW5hZ2UgY29uc2VudCBldmVudHNcbiAqL1xuY2xhc3MgQ29uc2VudCB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvdmlkZXIgQW4gaW5zdGFuY2Ugb2YgYSBwcm92aWRlciBpbXBsZW1lbnRhdGlvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb3ZpZGVyLmluaXQgRnVuY3Rpb24gdG8gYmUgY2FsbGVkIHRvIGluaXRpYWxpemUgcHJvdmlkZXJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm92aWRlci5vcHRPdXQgRnVuY3Rpb24gdG8gYmUgY2FsbGVkIHRvIG9wdCBvdXQgb2YgY29uc2VudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgYWRkaXRpb25hbCBjb25maWd1cmF0aW9uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjb25maWcuZGVidWcgd2hldGhlciBkZWJ1ZyBzdGF0ZW1lbnRzIHNob3VsZCBiZSBwcmludGVkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvdmlkZXIsIGNvbmZpZykge1xuICAgICAgICB0aGlzLnByb3ZpZGVyID0gcHJvdmlkZXI7XG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgICAgIHRoaXMucHVycG9zZXMgPSB7XG4gICAgICAgICAgICAnc3RhbmRhcmQnOiB7fSxcbiAgICAgICAgICAgICdzcGVjaWFsJzoge30sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29uc2VudCA9ICcnO1xuXG4gICAgICAgIC8vIG1lcmdlIGNvbmZpZ1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIGRlYnVnOiBjb25maWcuaGFzT3duUHJvcGVydHkoJ2RlYnVnJykgPyAhIWNvbmZpZy5kZWJ1ZyA6IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHByb3ZpZGVyLmluaXQodGhpcywgKHB1cnBvc2VzLCBjb25zZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnB1cnBvc2VzID0gcHVycG9zZXM7XG4gICAgICAgICAgICB0aGlzLmNvbnNlbnQgPSBjb25zZW50O1xuICAgICAgICAgICAgdGhpcy5jYWxsKCdjb25zZW50JylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy53YXRjaCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZygnQWN0aXZlIGV2ZW50cycsIHRoaXMuZXZlbnRzKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdDdXJyZW50IGNvbnNlbnQnLCB0aGlzLmNvbnNlbnQpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ0VuYWJsZWQgcHVycG9zZXMnLCB0aGlzLnB1cnBvc2VzKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdBbGwgc3RhbmRhcmQgcHVycG9zZXM/JywgdGhpcy5hbGxvd3NTdGFuZGFyZFB1cnBvc2VzKCkpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ0FsbCBzcGVjaWFsIHB1cnBvc2VzPycsIHRoaXMuYWxsb3dzU3BlY2lhbFB1cnBvc2VzKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uKCdkaWFsb2dfb3BlbicsICgpPT4ge3RoaXMubG9nKCdDb25zZW50IHBvcHVwIHNob3duJyl9KTtcbiAgICAgICAgdGhpcy5vbignZGlhbG9nX2Nsb3NlJywgKCk9PiB7dGhpcy5sb2coJ0NvbnNlbnQgcG9wdXAgY2xvc2UnKX0pO1xuXG4gICAgICAgIHRoaXMud2F0Y2godGhpcy51bmJsb2NrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIGFkIGtleXdvcmRzIGZvciBjdXJyZW50IGNvbnNlbnQuXG4gICAgICpcbiAgICAgKiBBZGRpdGlvbmFsbHksIFwiY29uc2VudF9hbGxcIiB3aWxsIGJlIGFkZGVkIHdoZW4gYWxsIHN0YW5kYXJkIHB1cnBvc2VzIGFyZSBhbGxvd2VkLCBcIm5vY29uc2VudFwiIGlmIG5vdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBnZXQga2V5d29yZHMoKSB7XG4gICAgICAgIGxldCBrID0gW107XG5cbiAgICAgICAgdGhpcy5hbGxvd3NTdGFuZGFyZFB1cnBvc2VzKCkgPyBrLnB1c2goJ2NvbnNlbnRfYWxsJykgOiBrLnB1c2goJ25vY29uc2VudCcpO1xuXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5wdXJwb3Nlcy5zdGFuZGFyZCkge1xuICAgICAgICAgICAgdGhpcy5wdXJwb3Nlcy5zdGFuZGFyZFtwcm9wZXJ0eV0gJiYgay5wdXNoKCdjb25zZW50X3N0YW5kYXJkXycgKyBwcm9wZXJ0eSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5wdXJwb3Nlcy5zcGVjaWFsKSB7XG4gICAgICAgICAgICB0aGlzLnB1cnBvc2VzLnNwZWNpYWxbcHJvcGVydHldICYmIGsucHVzaCgnY29uc2VudF9zcGVjaWFsXycgKyBwcm9wZXJ0eSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9nKCdLZXl3b3JkcycsIGspO1xuICAgICAgICByZXR1cm4ga1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBzcGVjaWZpYyBwdXJwb3NlIGhhcyBjb25zZW50LCBmYWxzZSBpZiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHVycG9zZSBFaXRoZXIgYSBzcGVjaWZpYyBwdXJwb3NlIChzdGFuZGFyZC9YLCBzcGVjaWFsL1gpIG9yIFwic3RhbmRhcmRcIiBvZiBcInNwZWNpYWxcIiBmb3IgYWxsIGluIHRoaXMgY2F0ZWdvcnkuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgYWxsb3dzKHB1cnBvc2Upe1xuICAgICAgICBpZihwdXJwb3NlID09PSAnc3RhbmRhcmQnKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbG93c1N0YW5kYXJkUHVycG9zZXMoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocHVycG9zZSA9PT0gJ3NwZWNpYWwnKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbG93c1NwZWNpYWxQdXJwb3NlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcCA9IHB1cnBvc2Uuc3BsaXQoJy8nKTtcblxuICAgICAgICBpZihwLmxlbmd0aCAhPT0gMil7XG4gICAgICAgICAgICB0aGlzLmxvZygnSW52YWxpZCBwdXJwb3NlIGRlZmluaXRpb24nLCBwdXJwb3NlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBbMF0gPT09ICdzdGFuZGFyZCcgJiYgdGhpcy5wdXJwb3Nlcy5zdGFuZGFyZFtwWzFdXSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBbMF0gPT09ICdzcGVjaWFsJyAmJiB0aGlzLnB1cnBvc2VzLnNwZWNpYWxbcFsxXV0pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBzcGVjaWFsIHB1cnBvc2VzIGhhdmUgY29uc2VudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGFsbG93c1NwZWNpYWxQdXJwb3Nlcygpe1xuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRoaXMucHVycG9zZXMuc3BlY2lhbCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnB1cnBvc2VzLnNwZWNpYWxbcHJvcGVydHldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgYWxsIHN0YW5kYXJkIHB1cnBvc2VzIGhhdmUgY29uc2VudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGFsbG93c1N0YW5kYXJkUHVycG9zZXMoKXtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0aGlzLnB1cnBvc2VzLnN0YW5kYXJkKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHVycG9zZXMuc3RhbmRhcmRbcHJvcGVydHldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmludHMgYSBkZWJ1ZyBtZXNzYWdlIHRvIGJyb3dzZXIgY29uc29sZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtc2dcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGxvZyhtc2csIC4uLmNvbnRleHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5kZWJ1Zykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJDT05TRU5UOlwiLCBtc2csIC4uLmNvbnRleHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIHNwZWNpZmljIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgRXZlbnQgdG8gYmUgdHJpZ2dlcmVkLlxuICAgICAqL1xuICAgIGNhbGwoZXZlbnQpe1xuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2Uoeyd0eXBlJzogJ2NvbnNlbnQnLCAnZXZlbnQnOiBldmVudH0sIHdpbmRvdy5vcmlnaW4pO1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyIGZvciBhIHNwZWNpZmljIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgRXZlbnQgdG8gbGlzdGVuIGZvclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIGV2ZW50IG9jY3Vyc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBSZW1vdmUgZXZlbnQgaGFuZGxlciBhZnRlciBmaXJzdCBydW5cbiAgICAgKi9cbiAgICBvbihldmVudCwgY2FsbGJhY2ssIG9uY2UgPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICAvLyBldmVudCBhbHJlYWR5IGNhbGxlZCwganVzdCBydW4gY2FsbGJhY2tcbiAgICAgICAgICAgIGNhbGxiYWNrLmJpbmQodGhpcykoKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhhbmRsZXIgPSBlID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlLmRhdGEuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSAmJlxuICAgICAgICAgICAgICAgIGUuZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZXZlbnQnKSAmJlxuICAgICAgICAgICAgICAgIGUuZGF0YS50eXBlID09PSAnY29uc2VudCcgJiZcbiAgICAgICAgICAgICAgICBlLmRhdGEuZXZlbnQgPT09IGV2ZW50XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBvbmNlICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYmluZCh0aGlzKSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHdhaXRpbmcgZm9yIGV2ZW50XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FpdCBmb3IgY29uc2VudCBhbmQgcnVuIGNhbGxiYWNrIG9uY2UuIFNob3J0aGFuZCBmb3Igb24oJ2NvbnNlbnQnLCBjYWxsYmFjaywgdHJ1ZSkuXG4gICAgICpcbiAgICAgKiBAc2VlIG9uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICB3YWl0KGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oJ2NvbnNlbnQnLCBjYWxsYmFjaywgdHJ1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW5zIGNhbGxiYWNrIG9uIGNvbnNlbnQgZXZlbnQuIFNob3J0aGFuZCBmb3Igb24oJ2NvbnNlbnQnLCAuLi4pXG4gICAgICpcbiAgICAgKiBAc2VlIG9uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2VcbiAgICAgKi9cbiAgICB3YXRjaChjYWxsYmFjaywgb25jZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMub24oJ2NvbnNlbnQnLCBjYWxsYmFjaywgb25jZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGFuIGFzeW5jaHJvbm91cyBzY3JpcHQgdGFnIGludG8gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBVUkwgdG8gdGhlIHNjcmlwdFxuICAgICAqL1xuICAgIGluamVjdChzcmMpIHtcbiAgICAgICAgbGV0IHBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHBvLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgcG8uYXN5bmMgPSB0cnVlO1xuICAgICAgICBwby5zcmMgPSBzcmM7XG4gICAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocG8sIHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIGZvciBIVE1MIGVsZW1lbnRzIHRvIHVuYmxvY2sgaW4gY3VycmVudCBkb2N1bWVudC5cbiAgICAgKi9cbiAgICB1bmJsb2NrKCl7XG4gICAgICAgIC8vIGRlZmVyIHVudGlsIGRvbSBpcyByZWFkeVxuICAgICAgICB0aGlzLmRvbXJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29uc2VudC1yZXF1aXJlc10nKTtcblxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgICAgICEoJ2NvbnNlbnRBdHRyJyBpbiBlbC5kYXRhc2V0KSB8fFxuICAgICAgICAgICAgICAgICAgICBlbC5kYXRhc2V0Wydjb25zZW50QXR0ciddID09PSAnJyB8fFxuICAgICAgICAgICAgICAgICAgICAnY29uc2VudE1hbmFnZWQnIGluIGVsLmRhdGFzZXRcbiAgICAgICAgICAgICAgICApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHVycG9zZXMgPSBlbC5kYXRhc2V0Wydjb25zZW50UmVxdWlyZXMnXS5zcGxpdCgnLCcpO1xuXG4gICAgICAgICAgICAgICAgaWYoIXB1cnBvc2VzLnJlZHVjZSgocCx2KSA9PiB7cmV0dXJuIHAgJiYgdGhpcy5hbGxvd3Modil9LCB0cnVlKSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nKCdFbGVtZW50IG5vdCB1bmJsb2NrZWQsIG5vdCBlbm91Z2ggY29uc2VudCcsIGVsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBlbC5kYXRhc2V0Wydjb25zZW50QXR0ciddLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgICAgICAgICAvLyByZXdyaXRlIGF0dHJpYnV0ZXMgZnJvbSBkYXRhLWF0dHIgdG8gYXR0clxuICAgICAgICAgICAgICAgIGF0dHIuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYSBpbiBlbC5kYXRhc2V0ICYmIGVsLnNldEF0dHJpYnV0ZShhLCBlbC5kYXRhc2V0W2FdKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nKCdFbGVtZW50IHVuYmxvY2tlZCcsIGVsKTtcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29uc2VudC1tYW5hZ2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JhcHBlciBhcm91bmQgRE9NIHJlYWR5IGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGRvbXJlYWR5KGNhbGxiYWNrKXtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fFxuICAgICAgICAgICAgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJyAmJiAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGN1cnJlbnQgY29uc2VudFxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgb3B0T3V0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVyLm9wdE91dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIHVzZXIgaW50ZXJmYWNlIHRvIGNoYW5nZSBjb25zZW50XG4gICAgICovXG4gICAgc2hvd1VpKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVyLnNob3dVaSgpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25zZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDb25zZW50X0NpdmljIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIGluaXQoY29uc2VudCwgY2FsbGJhY2spe1xuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcblxuICAgICAgICBfX3RjZmFwaSgnYWRkRXZlbnRMaXN0ZW5lcicsIDIsICh0Y0RhdGEsIHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgIGlmKCFzdWNjZXNzKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIGNvbnNlbnQubG9nKCdUQ00gQVBJJywgdGNEYXRhLmV2ZW50U3RhdHVzLCB0Y0RhdGEpO1xuXG4gICAgICAgICAgICBzd2l0Y2godGNEYXRhLmV2ZW50U3RhdHVzKXtcbiAgICAgICAgICAgICAgICBjYXNlICd1c2VyYWN0aW9uY29tcGxldGUnOlxuICAgICAgICAgICAgICAgICAgICAvLyBmYWxsdGhyb3VnaFxuICAgICAgICAgICAgICAgIGNhc2UgJ3RjbG9hZGVkJzpcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5vcGVuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNlbnQuY2FsbCgnZGlhbG9nX2Nsb3NlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodGNEYXRhLmhhc093blByb3BlcnR5KCdwdXJwb3NlJykgJiYgdGNEYXRhLmhhc093blByb3BlcnR5KCdwdWJsaXNoZXInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhbmRhcmQnOiB0aGlzLmFubm90YXRlU3RhbmRhcmRDb25zZW50cyh0Y0RhdGEucHVycG9zZS5jb25zZW50cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcGVjaWFsJzogdGNEYXRhLnB1Ymxpc2hlci5jdXN0b21QdXJwb3NlLmNvbnNlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Y0RhdGEudGNTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2NtcHVpc2hvd24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zZW50LmNhbGwoJ2RpYWxvZ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFubm90YXRlU3RhbmRhcmRDb25zZW50cyhjb25zZW50cyl7XG4gICAgICAgIGNvbnN0IGMgPSB7fVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKyl7XG4gICAgICAgICAgICBjW2ldID0gY29uc2VudHMuaGFzT3duUHJvcGVydHkoaSkgPyBjb25zZW50c1tpXSA6IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNcbiAgICB9XG5cbiAgICBvcHRPdXQoKXtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdfY21wUmVwcm9tcHRIYXNoJyk7XG5cbiAgICB9XG5cbiAgICBzaG93VWkoKXtcbiAgICAgICAgX190Y2ZhcGkoJ2Rpc3BsYXlDb25zZW50VWknLCAyLCBmdW5jdGlvbigpIHt9ICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnNlbnRfQ2l2aWM7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTm9vcCBwcm92aWRlciBqdXN0IHBhc3NlcyB0aHJvdWdoIHByZS1pbml0aWFsaXplZCBjb25zZW50XG4gKi9cbmNsYXNzIENvbnNlbnRfTm9vcCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcucHVycG9zZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0cmluZ1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZmlnLmRvbXJlYWR5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHRoaXMucHVycG9zZXMgPSBjb25maWcuaGFzT3duUHJvcGVydHkoJ3B1cnBvc2VzJylcbiAgICAgICAgICAgID8gY29uZmlnLnB1cnBvc2VzXG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAnc3RhbmRhcmQnOiB7XG4gICAgICAgICAgICAgICAgICAgICcxJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgJzInOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAnMyc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICc0JzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgJzUnOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnY3VzdG9tJzoge31cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb25zZW50ID0gY29uZmlnLmhhc093blByb3BlcnR5KCdjb25zZW50JylcbiAgICAgICAgICAgID8gY29uZmlnLmNvbnNlbnRcbiAgICAgICAgICAgIDogJyc7XG5cbiAgICAgICAgdGhpcy5kb21yZWFkeSA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnZG9tcmVhZHknKVxuICAgICAgICAgICAgPyAhIWNvbmZpZy5kb21yZWFkeVxuICAgICAgICAgICAgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0NvbnNlbnR9IGNvbnNlbnRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGluaXQoY29uc2VudCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuZG9tcmVhZHkpIHtcbiAgICAgICAgICAgIGNvbnNlbnQuZG9tcmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMucHVycG9zZXMsIHRoaXMuY29uc2VudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKHRoaXMucHVycG9zZXMsIHRoaXMuY29uc2VudCk7XG4gICAgfVxuXG4gICAgb3B0T3V0KCkge1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uc2VudF9Ob29wO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==