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
      CookieControl.delete('CookieControl');
      CookieControl.delete('CookieControlTC');
    }
  }, {
    key: "showUi",
    value: function showUi() {
      CookieControl.open();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BpYWJ0Y2Yvc3R1Yi9saWIvc3R1Yi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jaXZpYy1idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNlbnQvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZWdyYXRpb24vY2l2aWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVncmF0aW9uL25vb3AuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiQ29uc2VudF9DaXZpYyIsIkNvbnNlbnRfTm9vcCIsIkNvbnNlbnQiLCJtYWtlU3R1YiIsInByb3ZpZGVyIiwiY29uZmlnIiwiZXZlbnRzIiwicHVycG9zZXMiLCJjb25zZW50IiwiZGVidWciLCJoYXNPd25Qcm9wZXJ0eSIsImluaXQiLCJjYWxsIiwid2F0Y2giLCJsb2ciLCJhbGxvd3NTdGFuZGFyZFB1cnBvc2VzIiwiYWxsb3dzU3BlY2lhbFB1cnBvc2VzIiwib24iLCJ1bmJsb2NrIiwicHVycG9zZSIsInAiLCJzcGxpdCIsImxlbmd0aCIsInN0YW5kYXJkIiwic3BlY2lhbCIsInByb3BlcnR5IiwibXNnIiwiY29udGV4dCIsImNvbnNvbGUiLCJldmVudCIsIndpbmRvdyIsInBvc3RNZXNzYWdlIiwib3JpZ2luIiwiY2FsbGJhY2siLCJvbmNlIiwiYmluZCIsImhhbmRsZXIiLCJlIiwiZGF0YSIsInR5cGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNyYyIsInBvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXN5bmMiLCJzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZG9tcmVhZHkiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJkYXRhc2V0IiwicmVkdWNlIiwidiIsImFsbG93cyIsImF0dHIiLCJhIiwic2V0QXR0cmlidXRlIiwicmVhZHlTdGF0ZSIsImRvY3VtZW50RWxlbWVudCIsImRvU2Nyb2xsIiwib3B0T3V0Iiwic2hvd1VpIiwiayIsInB1c2giLCJvcGVuIiwiX190Y2ZhcGkiLCJ0Y0RhdGEiLCJzdWNjZXNzIiwiZXZlbnRTdGF0dXMiLCJhbm5vdGF0ZVN0YW5kYXJkQ29uc2VudHMiLCJjb25zZW50cyIsInB1Ymxpc2hlciIsImN1c3RvbVB1cnBvc2UiLCJ0Y1N0cmluZyIsImMiLCJpIiwiQ29va2llQ29udHJvbCIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYSxZQUFZLGlCQUFpQix3Q0FBd0MsS0FBSyxFQUFFLEVBQUUsSUFBSSxnQkFBZ0IsSUFBSSxPQUFPLFVBQVUsd0JBQXdCLFdBQVcsa0JBQWtCLGlDQUFp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RSw0RUFBZixFOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFBYTtBQUViOzs7Ozs7Ozs7O0lBR01DLFk7QUFDRjs7Ozs7O0FBTUEsd0JBQVlJLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsU0FBS0UsUUFBTCxHQUFnQkYsTUFBTSxDQUFDSyxjQUFQLENBQXNCLFVBQXRCLElBQ1ZMLE1BQU0sQ0FBQ0UsUUFERyxHQUVWO0FBQ0Usa0JBQVk7QUFDUixhQUFLLElBREc7QUFFUixhQUFLLElBRkc7QUFHUixhQUFLLElBSEc7QUFJUixhQUFLLElBSkc7QUFLUixhQUFLO0FBTEcsT0FEZDtBQVFFLGdCQUFVO0FBUlosS0FGTjtBQWFBLFNBQUtDLE9BQUwsR0FBZUgsTUFBTSxDQUFDSyxjQUFQLENBQXNCLFNBQXRCLElBQ1RMLE1BQU0sQ0FBQ0csT0FERSxHQUVULEVBRk47QUFJQSxTQUFLMkMsUUFBTCxHQUFnQjlDLE1BQU0sQ0FBQ0ssY0FBUCxDQUFzQixVQUF0QixJQUNWLENBQUMsQ0FBQ0wsTUFBTSxDQUFDOEMsUUFEQyxHQUVWLEtBRk47QUFHSDtBQUVEOzs7Ozs7Ozt5QkFJSzNDLE8sRUFBU3lCLFEsRUFBVTtBQUFBOztBQUNwQixVQUFJLEtBQUtrQixRQUFULEVBQW1CO0FBQ2YzQyxlQUFPLENBQUMyQyxRQUFSLENBQWlCLFlBQU07QUFDbkJsQixrQkFBUSxDQUFDLEtBQUksQ0FBQzFCLFFBQU4sRUFBZ0IsS0FBSSxDQUFDQyxPQUFyQixDQUFSO0FBQ0gsU0FGRDtBQUdIOztBQUVEeUIsY0FBUSxDQUFDLEtBQUsxQixRQUFOLEVBQWdCLEtBQUtDLE9BQXJCLENBQVI7QUFDSDs7OzZCQUVRLENBQ1I7Ozs7OztBQUdVUCwyRUFBZixFIiwiZmlsZSI6ImNpdmljLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NpdmljLWJ1bmRsZS5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiOyFmdW5jdGlvbigpe3ZhciBlPWZ1bmN0aW9uKCl7dmFyIGUsdD1cIl9fdGNmYXBpTG9jYXRvclwiLGE9W10sbj13aW5kb3c7Zm9yKDtuOyl7dHJ5e2lmKG4uZnJhbWVzW3RdKXtlPW47YnJlYWt9fWNhdGNoKGUpe31pZihuPT09d2luZG93LnRvcClicmVhaztuPW4ucGFyZW50fWV8fCghZnVuY3Rpb24gZSgpe3ZhciBhPW4uZG9jdW1lbnQscj0hIW4uZnJhbWVzW3RdO2lmKCFyKWlmKGEuYm9keSl7dmFyIHM9YS5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO3Muc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6bm9uZVwiLHMubmFtZT10LGEuYm9keS5hcHBlbmRDaGlsZChzKX1lbHNlIHNldFRpbWVvdXQoZSw1KTtyZXR1cm4hcn0oKSxuLl9fdGNmYXBpPWZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0KSxyPTA7cjx0O3IrKyluW3JdPWFyZ3VtZW50c1tyXTtpZighbi5sZW5ndGgpcmV0dXJuIGE7aWYoXCJzZXRHZHByQXBwbGllc1wiPT09blswXSluLmxlbmd0aD4zJiYyPT09cGFyc2VJbnQoblsxXSwxMCkmJlwiYm9vbGVhblwiPT10eXBlb2YgblszXSYmKGU9blszXSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuWzJdJiZuWzJdKFwic2V0XCIsITApKTtlbHNlIGlmKFwicGluZ1wiPT09blswXSl7dmFyIHM9e2dkcHJBcHBsaWVzOmUsY21wTG9hZGVkOiExLGNtcFN0YXR1czpcInN0dWJcIn07XCJmdW5jdGlvblwiPT10eXBlb2YgblsyXSYmblsyXShzKX1lbHNlIGEucHVzaChuKX0sbi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLChmdW5jdGlvbihlKXt2YXIgdD1cInN0cmluZ1wiPT10eXBlb2YgZS5kYXRhLGE9e307dHJ5e2E9dD9KU09OLnBhcnNlKGUuZGF0YSk6ZS5kYXRhfWNhdGNoKGUpe312YXIgbj1hLl9fdGNmYXBpQ2FsbDtuJiZ3aW5kb3cuX190Y2ZhcGkobi5jb21tYW5kLG4udmVyc2lvbiwoZnVuY3Rpb24oYSxyKXt2YXIgcz17X190Y2ZhcGlSZXR1cm46e3JldHVyblZhbHVlOmEsc3VjY2VzczpyLGNhbGxJZDpuLmNhbGxJZH19O3QmJihzPUpTT04uc3RyaW5naWZ5KHMpKSxlJiZlLnNvdXJjZSYmZS5zb3VyY2UucG9zdE1lc3NhZ2UmJmUuc291cmNlLnBvc3RNZXNzYWdlKHMsXCIqXCIpfSksbi5wYXJhbWV0ZXIpfSksITEpKX07XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lOmUoKX0oKTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKlxuICogQ29uc2VudCBidW5kbGUgKHNoaW0gJiBDaXZpYyBDb29raWUgQ29udHJvbClcbiAqL1xuXG5pbXBvcnQgQ29uc2VudF9DaXZpYyBmcm9tIFwiLi9pbnRlZ3JhdGlvbi9jaXZpY1wiO1xuZ2xvYmFsLkNvbnNlbnRfQ2l2aWMgPSBDb25zZW50X0NpdmljO1xuXG5pbXBvcnQgQ29uc2VudF9Ob29wIGZyb20gXCIuL2ludGVncmF0aW9uL25vb3BcIjtcbmdsb2JhbC5Db25zZW50X05vb3AgPSBDb25zZW50X05vb3A7XG5cbmltcG9ydCBDb25zZW50IGZyb20gXCIuL2NvbnNlbnQvc2hpbVwiO1xuZ2xvYmFsLkNvbnNlbnQgPSBDb25zZW50O1xuXG5pbXBvcnQgbWFrZVN0dWIgZnJvbSAnQGlhYnRjZi9zdHViJztcbm1ha2VTdHViKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogV3JhcHBlciBhcm91bmQgQ01QIHRvIHN0b3JlIGNvbnNlbnQgZGF0YSBhbmQgbWFuYWdlIGNvbnNlbnQgZXZlbnRzXG4gKi9cbmNsYXNzIENvbnNlbnQge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3ZpZGVyIEFuIGluc3RhbmNlIG9mIGEgcHJvdmlkZXIgaW1wbGVtZW50YXRpb25cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm92aWRlci5pbml0IEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB0byBpbml0aWFsaXplIHByb3ZpZGVyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvdmlkZXIub3B0T3V0IEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB0byBvcHQgb3V0IG9mIGNvbnNlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIGFkZGl0aW9uYWwgY29uZmlndXJhdGlvblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZmlnLmRlYnVnIHdoZXRoZXIgZGVidWcgc3RhdGVtZW50cyBzaG91bGQgYmUgcHJpbnRlZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3ZpZGVyLCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5wcm92aWRlciA9IHByb3ZpZGVyO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgICAgICB0aGlzLnB1cnBvc2VzID0ge1xuICAgICAgICAgICAgJ3N0YW5kYXJkJzoge30sXG4gICAgICAgICAgICAnc3BlY2lhbCc6IHt9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbnNlbnQgPSAnJztcblxuICAgICAgICAvLyBtZXJnZSBjb25maWdcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICBkZWJ1ZzogY29uZmlnLmhhc093blByb3BlcnR5KCdkZWJ1ZycpID8gISFjb25maWcuZGVidWcgOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICBwcm92aWRlci5pbml0KHRoaXMsIChwdXJwb3NlcywgY29uc2VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wdXJwb3NlcyA9IHB1cnBvc2VzO1xuICAgICAgICAgICAgdGhpcy5jb25zZW50ID0gY29uc2VudDtcbiAgICAgICAgICAgIHRoaXMuY2FsbCgnY29uc2VudCcpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMud2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2coJ0FjdGl2ZSBldmVudHMnLCB0aGlzLmV2ZW50cyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnQ3VycmVudCBjb25zZW50JywgdGhpcy5jb25zZW50KTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdFbmFibGVkIHB1cnBvc2VzJywgdGhpcy5wdXJwb3Nlcyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnQWxsIHN0YW5kYXJkIHB1cnBvc2VzPycsIHRoaXMuYWxsb3dzU3RhbmRhcmRQdXJwb3NlcygpKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdBbGwgc3BlY2lhbCBwdXJwb3Nlcz8nLCB0aGlzLmFsbG93c1NwZWNpYWxQdXJwb3NlcygpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vbignZGlhbG9nX29wZW4nLCAoKT0+IHt0aGlzLmxvZygnQ29uc2VudCBwb3B1cCBzaG93bicpfSk7XG4gICAgICAgIHRoaXMub24oJ2RpYWxvZ19jbG9zZScsICgpPT4ge3RoaXMubG9nKCdDb25zZW50IHBvcHVwIGNsb3NlJyl9KTtcblxuICAgICAgICB0aGlzLndhdGNoKHRoaXMudW5ibG9jayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBhZCBrZXl3b3JkcyBmb3IgY3VycmVudCBjb25zZW50LlxuICAgICAqXG4gICAgICogQWRkaXRpb25hbGx5LCBcImNvbnNlbnRfYWxsXCIgd2lsbCBiZSBhZGRlZCB3aGVuIGFsbCBzdGFuZGFyZCBwdXJwb3NlcyBhcmUgYWxsb3dlZCwgXCJub2NvbnNlbnRcIiBpZiBub3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0IGtleXdvcmRzKCkge1xuICAgICAgICBsZXQgayA9IFtdO1xuXG4gICAgICAgIHRoaXMuYWxsb3dzU3RhbmRhcmRQdXJwb3NlcygpID8gay5wdXNoKCdjb25zZW50X2FsbCcpIDogay5wdXNoKCdub2NvbnNlbnQnKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRoaXMucHVycG9zZXMuc3RhbmRhcmQpIHtcbiAgICAgICAgICAgIHRoaXMucHVycG9zZXMuc3RhbmRhcmRbcHJvcGVydHldICYmIGsucHVzaCgnY29uc2VudF9zdGFuZGFyZF8nICsgcHJvcGVydHkpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRoaXMucHVycG9zZXMuc3BlY2lhbCkge1xuICAgICAgICAgICAgdGhpcy5wdXJwb3Nlcy5zcGVjaWFsW3Byb3BlcnR5XSAmJiBrLnB1c2goJ2NvbnNlbnRfc3BlY2lhbF8nICsgcHJvcGVydHkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZygnS2V5d29yZHMnLCBrKTtcbiAgICAgICAgcmV0dXJuIGtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgc3BlY2lmaWMgcHVycG9zZSBoYXMgY29uc2VudCwgZmFsc2UgaWYgb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHB1cnBvc2UgRWl0aGVyIGEgc3BlY2lmaWMgcHVycG9zZSAoc3RhbmRhcmQvWCwgc3BlY2lhbC9YKSBvciBcInN0YW5kYXJkXCIgb2YgXCJzcGVjaWFsXCIgZm9yIGFsbCBpbiB0aGlzIGNhdGVnb3J5LlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGFsbG93cyhwdXJwb3NlKXtcbiAgICAgICAgaWYocHVycG9zZSA9PT0gJ3N0YW5kYXJkJyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxvd3NTdGFuZGFyZFB1cnBvc2VzKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHB1cnBvc2UgPT09ICdzcGVjaWFsJyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxvd3NTcGVjaWFsUHVycG9zZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHAgPSBwdXJwb3NlLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgaWYocC5sZW5ndGggIT09IDIpe1xuICAgICAgICAgICAgdGhpcy5sb2coJ0ludmFsaWQgcHVycG9zZSBkZWZpbml0aW9uJywgcHVycG9zZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwWzBdID09PSAnc3RhbmRhcmQnICYmIHRoaXMucHVycG9zZXMuc3RhbmRhcmRbcFsxXV0pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwWzBdID09PSAnc3BlY2lhbCcgJiYgdGhpcy5wdXJwb3Nlcy5zcGVjaWFsW3BbMV1dKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgc3BlY2lhbCBwdXJwb3NlcyBoYXZlIGNvbnNlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBhbGxvd3NTcGVjaWFsUHVycG9zZXMoKXtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0aGlzLnB1cnBvc2VzLnNwZWNpYWwpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wdXJwb3Nlcy5zcGVjaWFsW3Byb3BlcnR5XSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBzdGFuZGFyZCBwdXJwb3NlcyBoYXZlIGNvbnNlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBhbGxvd3NTdGFuZGFyZFB1cnBvc2VzKCl7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5wdXJwb3Nlcy5zdGFuZGFyZCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnB1cnBvc2VzLnN0YW5kYXJkW3Byb3BlcnR5XSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJpbnRzIGEgZGVidWcgbWVzc2FnZSB0byBicm93c2VyIGNvbnNvbGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbXNnXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKi9cbiAgICBsb2cobXNnLCAuLi5jb250ZXh0KSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuZGVidWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ09OU0VOVDpcIiwgbXNnLCAuLi5jb250ZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBzcGVjaWZpYyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IEV2ZW50IHRvIGJlIHRyaWdnZXJlZC5cbiAgICAgKi9cbiAgICBjYWxsKGV2ZW50KXtcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsndHlwZSc6ICdjb25zZW50JywgJ2V2ZW50JzogZXZlbnR9LCB3aW5kb3cub3JpZ2luKTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgaGFuZGxlciBmb3IgYSBzcGVjaWZpYyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IEV2ZW50IHRvIGxpc3RlbiBmb3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBGdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBldmVudCBvY2N1cnNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgUmVtb3ZlIGV2ZW50IGhhbmRsZXIgYWZ0ZXIgZmlyc3QgcnVuXG4gICAgICovXG4gICAgb24oZXZlbnQsIGNhbGxiYWNrLCBvbmNlID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICAgICAgLy8gZXZlbnQgYWxyZWFkeSBjYWxsZWQsIGp1c3QgcnVuIGNhbGxiYWNrXG4gICAgICAgICAgICBjYWxsYmFjay5iaW5kKHRoaXMpKCk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoYW5kbGVyID0gZSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZS5kYXRhLmhhc093blByb3BlcnR5KCd0eXBlJykgJiZcbiAgICAgICAgICAgICAgICBlLmRhdGEuaGFzT3duUHJvcGVydHkoJ2V2ZW50JykgJiZcbiAgICAgICAgICAgICAgICBlLmRhdGEudHlwZSA9PT0gJ2NvbnNlbnQnICYmXG4gICAgICAgICAgICAgICAgZS5kYXRhLmV2ZW50ID09PSBldmVudFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb25jZSAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmJpbmQodGhpcykoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyB3YWl0aW5nIGZvciBldmVudFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdhaXQgZm9yIGNvbnNlbnQgYW5kIHJ1biBjYWxsYmFjayBvbmNlLiBTaG9ydGhhbmQgZm9yIG9uKCdjb25zZW50JywgY2FsbGJhY2ssIHRydWUpLlxuICAgICAqXG4gICAgICogQHNlZSBvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgd2FpdChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uKCdjb25zZW50JywgY2FsbGJhY2ssIHRydWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVucyBjYWxsYmFjayBvbiBjb25zZW50IGV2ZW50LiBTaG9ydGhhbmQgZm9yIG9uKCdjb25zZW50JywgLi4uKVxuICAgICAqXG4gICAgICogQHNlZSBvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvbmNlXG4gICAgICovXG4gICAgd2F0Y2goY2FsbGJhY2ssIG9uY2UgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm9uKCdjb25zZW50JywgY2FsbGJhY2ssIG9uY2UpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhbiBhc3luY2hyb25vdXMgc2NyaXB0IHRhZyBpbnRvIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVVJMIHRvIHRoZSBzY3JpcHRcbiAgICAgKi9cbiAgICBpbmplY3Qoc3JjKSB7XG4gICAgICAgIGxldCBwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBwby50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHBvLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgcG8uc3JjID0gc3JjO1xuICAgICAgICBjb25zdCBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBvLCBzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2hlcyBmb3IgSFRNTCBlbGVtZW50cyB0byB1bmJsb2NrIGluIGN1cnJlbnQgZG9jdW1lbnQuXG4gICAgICovXG4gICAgdW5ibG9jaygpe1xuICAgICAgICAvLyBkZWZlciB1bnRpbCBkb20gaXMgcmVhZHlcbiAgICAgICAgdGhpcy5kb21yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbnNlbnQtcmVxdWlyZXNdJyk7XG5cbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICAgICAgICAhKCdjb25zZW50QXR0cicgaW4gZWwuZGF0YXNldCkgfHxcbiAgICAgICAgICAgICAgICAgICAgZWwuZGF0YXNldFsnY29uc2VudEF0dHInXSA9PT0gJycgfHxcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnNlbnRNYW5hZ2VkJyBpbiBlbC5kYXRhc2V0XG4gICAgICAgICAgICAgICAgKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHB1cnBvc2VzID0gZWwuZGF0YXNldFsnY29uc2VudFJlcXVpcmVzJ10uc3BsaXQoJywnKTtcblxuICAgICAgICAgICAgICAgIGlmKCFwdXJwb3Nlcy5yZWR1Y2UoKHAsdikgPT4ge3JldHVybiBwICYmIHRoaXMuYWxsb3dzKHYpfSwgdHJ1ZSkpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZygnRWxlbWVudCBub3QgdW5ibG9ja2VkLCBub3QgZW5vdWdoIGNvbnNlbnQnLCBlbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyID0gZWwuZGF0YXNldFsnY29uc2VudEF0dHInXS5zcGxpdCgnLCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmV3cml0ZSBhdHRyaWJ1dGVzIGZyb20gZGF0YS1hdHRyIHRvIGF0dHJcbiAgICAgICAgICAgICAgICBhdHRyLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGEgaW4gZWwuZGF0YXNldCAmJiBlbC5zZXRBdHRyaWJ1dGUoYSwgZWwuZGF0YXNldFthXSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZygnRWxlbWVudCB1bmJsb2NrZWQnLCBlbCk7XG4gICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnNlbnQtbWFuYWdlZCcsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyYXBwZXIgYXJvdW5kIERPTSByZWFkeSBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBkb21yZWFkeShjYWxsYmFjayl7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHxcbiAgICAgICAgICAgIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycgJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBjdXJyZW50IGNvbnNlbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG9wdE91dCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlci5vcHRPdXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyB1c2VyIGludGVyZmFjZSB0byBjaGFuZ2UgY29uc2VudFxuICAgICAqL1xuICAgIHNob3dVaSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlci5zaG93VWkoKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uc2VudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ29uc2VudF9DaXZpYyB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBpbml0KGNvbnNlbnQsIGNhbGxiYWNrKXtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG5cbiAgICAgICAgX190Y2ZhcGkoJ2FkZEV2ZW50TGlzdGVuZXInLCAyLCAodGNEYXRhLCBzdWNjZXNzKSA9PiB7XG4gICAgICAgICAgICBpZighc3VjY2VzcykgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICBjb25zZW50LmxvZygnVENNIEFQSScsIHRjRGF0YS5ldmVudFN0YXR1cywgdGNEYXRhKTtcblxuICAgICAgICAgICAgc3dpdGNoKHRjRGF0YS5ldmVudFN0YXR1cyl7XG4gICAgICAgICAgICAgICAgY2FzZSAndXNlcmFjdGlvbmNvbXBsZXRlJzpcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbHRocm91Z2hcbiAgICAgICAgICAgICAgICBjYXNlICd0Y2xvYWRlZCc6XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMub3Blbil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zZW50LmNhbGwoJ2RpYWxvZ19jbG9zZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRjRGF0YS5oYXNPd25Qcm9wZXJ0eSgncHVycG9zZScpICYmIHRjRGF0YS5oYXNPd25Qcm9wZXJ0eSgncHVibGlzaGVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YW5kYXJkJzogdGhpcy5hbm5vdGF0ZVN0YW5kYXJkQ29uc2VudHModGNEYXRhLnB1cnBvc2UuY29uc2VudHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3BlY2lhbCc6IHRjRGF0YS5wdWJsaXNoZXIuY3VzdG9tUHVycG9zZS5jb25zZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGNEYXRhLnRjU3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdjbXB1aXNob3duJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc2VudC5jYWxsKCdkaWFsb2dfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhbm5vdGF0ZVN0YW5kYXJkQ29uc2VudHMoY29uc2VudHMpe1xuICAgICAgICBjb25zdCBjID0ge31cblxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspe1xuICAgICAgICAgICAgY1tpXSA9IGNvbnNlbnRzLmhhc093blByb3BlcnR5KGkpID8gY29uc2VudHNbaV0gOiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjXG4gICAgfVxuXG4gICAgb3B0T3V0KCl7XG4gICAgICAgIENvb2tpZUNvbnRyb2wuZGVsZXRlKCdDb29raWVDb250cm9sJylcbiAgICAgICAgQ29va2llQ29udHJvbC5kZWxldGUoJ0Nvb2tpZUNvbnRyb2xUQycpXG4gICAgfVxuXG4gICAgc2hvd1VpKCl7XG4gICAgICAgIENvb2tpZUNvbnRyb2wub3BlbigpXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnNlbnRfQ2l2aWM7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTm9vcCBwcm92aWRlciBqdXN0IHBhc3NlcyB0aHJvdWdoIHByZS1pbml0aWFsaXplZCBjb25zZW50XG4gKi9cbmNsYXNzIENvbnNlbnRfTm9vcCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcucHVycG9zZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0cmluZ1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZmlnLmRvbXJlYWR5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHRoaXMucHVycG9zZXMgPSBjb25maWcuaGFzT3duUHJvcGVydHkoJ3B1cnBvc2VzJylcbiAgICAgICAgICAgID8gY29uZmlnLnB1cnBvc2VzXG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAnc3RhbmRhcmQnOiB7XG4gICAgICAgICAgICAgICAgICAgICcxJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgJzInOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAnMyc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICc0JzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgJzUnOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnY3VzdG9tJzoge31cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb25zZW50ID0gY29uZmlnLmhhc093blByb3BlcnR5KCdjb25zZW50JylcbiAgICAgICAgICAgID8gY29uZmlnLmNvbnNlbnRcbiAgICAgICAgICAgIDogJyc7XG5cbiAgICAgICAgdGhpcy5kb21yZWFkeSA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnZG9tcmVhZHknKVxuICAgICAgICAgICAgPyAhIWNvbmZpZy5kb21yZWFkeVxuICAgICAgICAgICAgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0NvbnNlbnR9IGNvbnNlbnRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGluaXQoY29uc2VudCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuZG9tcmVhZHkpIHtcbiAgICAgICAgICAgIGNvbnNlbnQuZG9tcmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMucHVycG9zZXMsIHRoaXMuY29uc2VudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKHRoaXMucHVycG9zZXMsIHRoaXMuY29uc2VudCk7XG4gICAgfVxuXG4gICAgb3B0T3V0KCkge1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uc2VudF9Ob29wO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==