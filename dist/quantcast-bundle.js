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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/quantcast-bundle.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ }),

/***/ "./src/integration/quantcast.js":
/*!**************************************!*\
  !*** ./src/integration/quantcast.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Consent_Quantcast = /*#__PURE__*/function () {
  /**
   * @param {Object} config
   * @param {string} config.quantcastId
   */
  function Consent_Quantcast(config) {
    _classCallCheck(this, Consent_Quantcast);

    this.quantcastId = config.hasOwnProperty('quantcastId') ? config.quantcastId : '';
  }
  /**
   * Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0)
   *
   * @param {string} quantcastId
   */


  _createClass(Consent_Quantcast, [{
    key: "tag",
    value: function tag(quantcastId) {
      var host = window.location.hostname;
      var element = document.createElement('script');
      var firstScript = document.getElementsByTagName('script')[0];
      var milliseconds = new Date().getTime();
      var url = 'https://quantcast.mgr.consensu.org'.concat('/choice/', quantcastId, '/', host, '/choice.js').concat('?timestamp=', milliseconds);
      var uspTries = 0;
      var uspTriesLimit = 3;
      element.async = true;
      element.type = 'text/javascript';
      element.src = url;
      firstScript.parentNode.insertBefore(element, firstScript);

      function makeStub() {
        var TCF_LOCATOR_NAME = '__tcfapiLocator';
        var queue = [];
        var win = window;
        var cmpFrame;

        function addFrame() {
          var doc = win.document;
          var otherCMP = !!win.frames[TCF_LOCATOR_NAME];

          if (!otherCMP) {
            if (doc.body) {
              var iframe = doc.createElement('iframe');
              iframe.style.cssText = 'display:none';
              iframe.name = TCF_LOCATOR_NAME;
              doc.body.appendChild(iframe);
            } else {
              setTimeout(addFrame, 5);
            }
          }

          return !otherCMP;
        }

        function tcfAPIHandler() {
          var gdprApplies;
          var args = arguments;

          if (!args.length) {
            return queue;
          } else if (args[0] === 'setGdprApplies') {
            if (args.length > 3 && args[2] === 2 && typeof args[3] === 'boolean') {
              gdprApplies = args[3];

              if (typeof args[2] === 'function') {
                args[2]('set', true);
              }
            }
          } else if (args[0] === 'ping') {
            var retr = {
              gdprApplies: gdprApplies,
              cmpLoaded: false,
              cmpStatus: 'stub'
            };

            if (typeof args[2] === 'function') {
              args[2](retr);
            }
          } else {
            queue.push(args);
          }
        }

        function postMessageEventHandler(event) {
          var msgIsString = typeof event.data === 'string';
          var json = {};

          try {
            if (msgIsString) {
              json = JSON.parse(event.data);
            } else {
              json = event.data;
            }
          } catch (ignore) {}

          var payload = json.__tcfapiCall;

          if (payload) {
            window.__tcfapi(payload.command, payload.version, function (retValue, success) {
              var returnMsg = {
                __tcfapiReturn: {
                  returnValue: retValue,
                  success: success,
                  callId: payload.callId
                }
              };

              if (msgIsString) {
                returnMsg = JSON.stringify(returnMsg);
              }

              event.source.postMessage(returnMsg, '*');
            }, payload.parameter);
          }
        }

        while (win) {
          try {
            if (win.frames[TCF_LOCATOR_NAME]) {
              cmpFrame = win;
              break;
            }
          } catch (ignore) {}

          if (win === window.top) {
            break;
          }

          win = win.parent;
        }

        if (!cmpFrame) {
          addFrame();
          win.__tcfapi = tcfAPIHandler;
          win.addEventListener('message', postMessageEventHandler, false);
        }
      }

      ;
      makeStub();

      var uspStubFunction = function uspStubFunction() {
        var arg = arguments;

        if (_typeof(window.__uspapi) !== uspStubFunction) {
          setTimeout(function () {
            if (typeof window.__uspapi !== 'undefined') {
              window.__uspapi.apply(window.__uspapi, arg);
            }
          }, 500);
        }
      };

      var checkIfUspIsReady = function checkIfUspIsReady() {
        uspTries++;

        if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
          console.warn('USP is not accessible');
        } else {
          clearInterval(uspInterval);
        }
      };

      if (typeof window.__uspapi === 'undefined') {
        window.__uspapi = uspStubFunction;
        var uspInterval = setInterval(checkIfUspIsReady, 6000);
      }
    }
  }, {
    key: "init",
    value: function init(consent, callback) {
      var _this = this;

      this.tag(this.quantcastId);
      this.open = false;

      __tcfapi('addEventListener', 2, function (tcData, success) {
        if (!success) return false;
        consent.log('TCM API', tcData.eventStatus, tcData);

        switch (tcData.eventStatus) {
          case 'useractioncomplete': // fallthrough

          case 'tcloaded':
            // tcloaded should only be called if consent data is available and no UI is shown
            // but Quantcast calls this very early in init and 'useractioncomplete' is always
            // called despite not having any valid consent data available
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

  return Consent_Quantcast;
}();

/* harmony default export */ __webpack_exports__["default"] = (Consent_Quantcast);

/***/ }),

/***/ "./src/quantcast-bundle.js":
/*!*********************************!*\
  !*** ./src/quantcast-bundle.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _integration_quantcast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration/quantcast */ "./src/integration/quantcast.js");
/* harmony import */ var _integration_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integration/noop */ "./src/integration/noop.js");
/* harmony import */ var _consent_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consent/shim */ "./src/consent/shim.js");
/*
 * Consent bundle (shim & Quantcast Coice)
 */

global.Consent_Quantcast = _integration_quantcast__WEBPACK_IMPORTED_MODULE_0__["default"];

global.Consent_Noop = _integration_noop__WEBPACK_IMPORTED_MODULE_1__["default"];

global.Consent = _consent_shim__WEBPACK_IMPORTED_MODULE_2__["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc2VudC9zaGltLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlZ3JhdGlvbi9ub29wLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlZ3JhdGlvbi9xdWFudGNhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1YW50Y2FzdC1idW5kbGUuanMiXSwibmFtZXMiOlsiQ29uc2VudCIsInByb3ZpZGVyIiwiY29uZmlnIiwiZXZlbnRzIiwicHVycG9zZXMiLCJjb25zZW50IiwiZGVidWciLCJoYXNPd25Qcm9wZXJ0eSIsImluaXQiLCJjYWxsIiwid2F0Y2giLCJsb2ciLCJhbGxvd3NTdGFuZGFyZFB1cnBvc2VzIiwiYWxsb3dzU3BlY2lhbFB1cnBvc2VzIiwib24iLCJ1bmJsb2NrIiwicHVycG9zZSIsInAiLCJzcGxpdCIsImxlbmd0aCIsInN0YW5kYXJkIiwic3BlY2lhbCIsInByb3BlcnR5IiwibXNnIiwiY29udGV4dCIsImNvbnNvbGUiLCJldmVudCIsIndpbmRvdyIsInBvc3RNZXNzYWdlIiwib3JpZ2luIiwiY2FsbGJhY2siLCJvbmNlIiwiYmluZCIsImhhbmRsZXIiLCJlIiwiZGF0YSIsInR5cGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNyYyIsInBvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXN5bmMiLCJzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZG9tcmVhZHkiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJkYXRhc2V0IiwicmVkdWNlIiwidiIsImFsbG93cyIsImF0dHIiLCJhIiwic2V0QXR0cmlidXRlIiwicmVhZHlTdGF0ZSIsImRvY3VtZW50RWxlbWVudCIsImRvU2Nyb2xsIiwib3B0T3V0Iiwic2hvd1VpIiwiayIsInB1c2giLCJDb25zZW50X05vb3AiLCJDb25zZW50X1F1YW50Y2FzdCIsInF1YW50Y2FzdElkIiwiaG9zdCIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJlbGVtZW50IiwiZmlyc3RTY3JpcHQiLCJtaWxsaXNlY29uZHMiLCJEYXRlIiwiZ2V0VGltZSIsInVybCIsImNvbmNhdCIsInVzcFRyaWVzIiwidXNwVHJpZXNMaW1pdCIsIm1ha2VTdHViIiwiVENGX0xPQ0FUT1JfTkFNRSIsInF1ZXVlIiwid2luIiwiY21wRnJhbWUiLCJhZGRGcmFtZSIsImRvYyIsIm90aGVyQ01QIiwiZnJhbWVzIiwiYm9keSIsImlmcmFtZSIsInN0eWxlIiwiY3NzVGV4dCIsIm5hbWUiLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJ0Y2ZBUElIYW5kbGVyIiwiZ2RwckFwcGxpZXMiLCJhcmdzIiwiYXJndW1lbnRzIiwicmV0ciIsImNtcExvYWRlZCIsImNtcFN0YXR1cyIsInBvc3RNZXNzYWdlRXZlbnRIYW5kbGVyIiwibXNnSXNTdHJpbmciLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiaWdub3JlIiwicGF5bG9hZCIsIl9fdGNmYXBpQ2FsbCIsIl9fdGNmYXBpIiwiY29tbWFuZCIsInZlcnNpb24iLCJyZXRWYWx1ZSIsInN1Y2Nlc3MiLCJyZXR1cm5Nc2ciLCJfX3RjZmFwaVJldHVybiIsInJldHVyblZhbHVlIiwiY2FsbElkIiwic3RyaW5naWZ5Iiwic291cmNlIiwicGFyYW1ldGVyIiwidG9wIiwicGFyZW50IiwidXNwU3R1YkZ1bmN0aW9uIiwiYXJnIiwiX191c3BhcGkiLCJhcHBseSIsImNoZWNrSWZVc3BJc1JlYWR5Iiwid2FybiIsImNsZWFySW50ZXJ2YWwiLCJ1c3BJbnRlcnZhbCIsInNldEludGVydmFsIiwidGFnIiwib3BlbiIsInRjRGF0YSIsImV2ZW50U3RhdHVzIiwiYW5ub3RhdGVTdGFuZGFyZENvbnNlbnRzIiwiY29uc2VudHMiLCJwdWJsaXNoZXIiLCJjdXN0b21QdXJwb3NlIiwidGNTdHJpbmciLCJjIiwiaSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJnbG9iYWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBYTtBQUViOzs7Ozs7Ozs7O0lBR01BLE87QUFFRjs7Ozs7OztBQU9BLG1CQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QjtBQUFBOztBQUFBOztBQUMxQixTQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtFLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQjtBQUNaLGtCQUFZLEVBREE7QUFFWixpQkFBVztB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SSxJQUFSLENBQWEsYUFBYjtBQUNBO0FBM0JSO0FBNkJILE9BakNPLENBQVI7QUFrQ0g7Ozs2Q0FFd0JvSSxRLEVBQVM7QUFDOUIsVUFBTUksQ0FBQyxHQUFHLEVBQVY7O0FBRUEsV0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLElBQUksRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNEI7QUFDeEJELFNBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQU9MLFFBQVEsQ0FBQ3RJLGNBQVQsQ0FBd0IySSxDQUF4QixJQUE2QkwsUUFBUSxDQUFDSyxDQUFELENBQXJDLEdBQTJDLEtBQWxEO0FBQ0g7O0FBRUQsYUFBT0QsQ0FBUDtBQUNIOzs7NkJBRU87QUFDSnRILFlBQU0sQ0FBQ3dILFlBQVAsQ0FBb0JDLFVBQXBCLENBQStCLGtCQUEvQjtBQUVIOzs7NkJBRU87QUFDSm5DLGNBQVEsQ0FBQyxrQkFBRCxFQUFxQixDQUFyQixFQUF3QixZQUFXLENBQUUsQ0FBckMsQ0FBUjtBQUNIOzs7Ozs7QUFJVTdDLGdGQUFmLEU7Ozs7Ozs7Ozs7OztBQzNPQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFJQTtBQUNBaUYsTUFBTSxDQUFDakYsaUJBQVAsR0FBMkJBLDhEQUEzQjtBQUVBO0FBQ0FpRixNQUFNLENBQUNsRixZQUFQLEdBQXNCQSx5REFBdEI7QUFFQTtBQUNBa0YsTUFBTSxDQUFDckosT0FBUCxHQUFpQkEscURBQWpCLEMiLCJmaWxlIjoicXVhbnRjYXN0LWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3F1YW50Y2FzdC1idW5kbGUuanNcIik7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogV3JhcHBlciBhcm91bmQgQ01QIHRvIHN0b3JlIGNvbnNlbnQgZGF0YSBhbmQgbWFuYWdlIGNvbnNlbnQgZXZlbnRzXG4gKi9cbmNsYXNzIENvbnNlbnQge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3ZpZGVyIEFuIGluc3RhbmNlIG9mIGEgcHJvdmlkZXIgaW1wbGVtZW50YXRpb25cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm92aWRlci5pbml0IEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB0byBpbml0aWFsaXplIHByb3ZpZGVyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvdmlkZXIub3B0T3V0IEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB0byBvcHQgb3V0IG9mIGNvbnNlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIGFkZGl0aW9uYWwgY29uZmlndXJhdGlvblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZmlnLmRlYnVnIHdoZXRoZXIgZGVidWcgc3RhdGVtZW50cyBzaG91bGQgYmUgcHJpbnRlZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3ZpZGVyLCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5wcm92aWRlciA9IHByb3ZpZGVyO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgICAgICB0aGlzLnB1cnBvc2VzID0ge1xuICAgICAgICAgICAgJ3N0YW5kYXJkJzoge30sXG4gICAgICAgICAgICAnc3BlY2lhbCc6IHt9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbnNlbnQgPSAnJztcblxuICAgICAgICAvLyBtZXJnZSBjb25maWdcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICBkZWJ1ZzogY29uZmlnLmhhc093blByb3BlcnR5KCdkZWJ1ZycpID8gISFjb25maWcuZGVidWcgOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICBwcm92aWRlci5pbml0KHRoaXMsIChwdXJwb3NlcywgY29uc2VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wdXJwb3NlcyA9IHB1cnBvc2VzO1xuICAgICAgICAgICAgdGhpcy5jb25zZW50ID0gY29uc2VudDtcbiAgICAgICAgICAgIHRoaXMuY2FsbCgnY29uc2VudCcpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMud2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2coJ0FjdGl2ZSBldmVudHMnLCB0aGlzLmV2ZW50cyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnQ3VycmVudCBjb25zZW50JywgdGhpcy5jb25zZW50KTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdFbmFibGVkIHB1cnBvc2VzJywgdGhpcy5wdXJwb3Nlcyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnQWxsIHN0YW5kYXJkIHB1cnBvc2VzPycsIHRoaXMuYWxsb3dzU3RhbmRhcmRQdXJwb3NlcygpKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdBbGwgc3BlY2lhbCBwdXJwb3Nlcz8nLCB0aGlzLmFsbG93c1NwZWNpYWxQdXJwb3NlcygpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vbignZGlhbG9nX29wZW4nLCAoKT0+IHt0aGlzLmxvZygnQ29uc2VudCBwb3B1cCBzaG93bicpfSk7XG4gICAgICAgIHRoaXMub24oJ2RpYWxvZ19jbG9zZScsICgpPT4ge3RoaXMubG9nKCdDb25zZW50IHBvcHVwIGNsb3NlJyl9KTtcblxuICAgICAgICB0aGlzLndhdGNoKHRoaXMudW5ibG9jayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBhZCBrZXl3b3JkcyBmb3IgY3VycmVudCBjb25zZW50LlxuICAgICAqXG4gICAgICogQWRkaXRpb25hbGx5LCBcImNvbnNlbnRfYWxsXCIgd2lsbCBiZSBhZGRlZCB3aGVuIGFsbCBzdGFuZGFyZCBwdXJwb3NlcyBhcmUgYWxsb3dlZCwgXCJub2NvbnNlbnRcIiBpZiBub3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0IGtleXdvcmRzKCkge1xuICAgICAgICBsZXQgayA9IFtdO1xuXG4gICAgICAgIHRoaXMuYWxsb3dzU3RhbmRhcmRQdXJwb3NlcygpID8gay5wdXNoKCdjb25zZW50X2FsbCcpIDogay5wdXNoKCdub2NvbnNlbnQnKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRoaXMucHVycG9zZXMuc3RhbmRhcmQpIHtcbiAgICAgICAgICAgIHRoaXMucHVycG9zZXMuc3RhbmRhcmRbcHJvcGVydHldICYmIGsucHVzaCgnY29uc2VudF9zdGFuZGFyZF8nICsgcHJvcGVydHkpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRoaXMucHVycG9zZXMuc3BlY2lhbCkge1xuICAgICAgICAgICAgdGhpcy5wdXJwb3Nlcy5zcGVjaWFsW3Byb3BlcnR5XSAmJiBrLnB1c2goJ2NvbnNlbnRfc3BlY2lhbF8nICsgcHJvcGVydHkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZygnS2V5d29yZHMnLCBrKTtcbiAgICAgICAgcmV0dXJuIGtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgc3BlY2lmaWMgcHVycG9zZSBoYXMgY29uc2VudCwgZmFsc2UgaWYgb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHB1cnBvc2UgRWl0aGVyIGEgc3BlY2lmaWMgcHVycG9zZSAoc3RhbmRhcmQvWCwgc3BlY2lhbC9YKSBvciBcInN0YW5kYXJkXCIgb2YgXCJzcGVjaWFsXCIgZm9yIGFsbCBpbiB0aGlzIGNhdGVnb3J5LlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGFsbG93cyhwdXJwb3NlKXtcbiAgICAgICAgaWYocHVycG9zZSA9PT0gJ3N0YW5kYXJkJyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxvd3NTdGFuZGFyZFB1cnBvc2VzKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHB1cnBvc2UgPT09ICdzcGVjaWFsJyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxvd3NTcGVjaWFsUHVycG9zZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHAgPSBwdXJwb3NlLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgaWYocC5sZW5ndGggIT09IDIpe1xuICAgICAgICAgICAgdGhpcy5sb2coJ0ludmFsaWQgcHVycG9zZSBkZWZpbml0aW9uJywgcHVycG9zZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwWzBdID09PSAnc3RhbmRhcmQnICYmIHRoaXMucHVycG9zZXMuc3RhbmRhcmRbcFsxXV0pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwWzBdID09PSAnc3BlY2lhbCcgJiYgdGhpcy5wdXJwb3Nlcy5zcGVjaWFsW3BbMV1dKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgc3BlY2lhbCBwdXJwb3NlcyBoYXZlIGNvbnNlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBhbGxvd3NTcGVjaWFsUHVycG9zZXMoKXtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0aGlzLnB1cnBvc2VzLnNwZWNpYWwpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wdXJwb3Nlcy5zcGVjaWFsW3Byb3BlcnR5XSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBzdGFuZGFyZCBwdXJwb3NlcyBoYXZlIGNvbnNlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBhbGxvd3NTdGFuZGFyZFB1cnBvc2VzKCl7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5wdXJwb3Nlcy5zdGFuZGFyZCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnB1cnBvc2VzLnN0YW5kYXJkW3Byb3BlcnR5XSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJpbnRzIGEgZGVidWcgbWVzc2FnZSB0byBicm93c2VyIGNvbnNvbGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbXNnXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKi9cbiAgICBsb2cobXNnLCAuLi5jb250ZXh0KSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuZGVidWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ09OU0VOVDpcIiwgbXNnLCAuLi5jb250ZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBzcGVjaWZpYyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IEV2ZW50IHRvIGJlIHRyaWdnZXJlZC5cbiAgICAgKi9cbiAgICBjYWxsKGV2ZW50KXtcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsndHlwZSc6ICdjb25zZW50JywgJ2V2ZW50JzogZXZlbnR9LCB3aW5kb3cub3JpZ2luKTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgaGFuZGxlciBmb3IgYSBzcGVjaWZpYyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IEV2ZW50IHRvIGxpc3RlbiBmb3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBGdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBldmVudCBvY2N1cnNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgUmVtb3ZlIGV2ZW50IGhhbmRsZXIgYWZ0ZXIgZmlyc3QgcnVuXG4gICAgICovXG4gICAgb24oZXZlbnQsIGNhbGxiYWNrLCBvbmNlID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICAgICAgLy8gZXZlbnQgYWxyZWFkeSBjYWxsZWQsIGp1c3QgcnVuIGNhbGxiYWNrXG4gICAgICAgICAgICBjYWxsYmFjay5iaW5kKHRoaXMpKCk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoYW5kbGVyID0gZSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZS5kYXRhLmhhc093blByb3BlcnR5KCd0eXBlJykgJiZcbiAgICAgICAgICAgICAgICBlLmRhdGEuaGFzT3duUHJvcGVydHkoJ2V2ZW50JykgJiZcbiAgICAgICAgICAgICAgICBlLmRhdGEudHlwZSA9PT0gJ2NvbnNlbnQnICYmXG4gICAgICAgICAgICAgICAgZS5kYXRhLmV2ZW50ID09PSBldmVudFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb25jZSAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmJpbmQodGhpcykoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyB3YWl0aW5nIGZvciBldmVudFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdhaXQgZm9yIGNvbnNlbnQgYW5kIHJ1biBjYWxsYmFjayBvbmNlLiBTaG9ydGhhbmQgZm9yIG9uKCdjb25zZW50JywgY2FsbGJhY2ssIHRydWUpLlxuICAgICAqXG4gICAgICogQHNlZSBvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgd2FpdChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uKCdjb25zZW50JywgY2FsbGJhY2ssIHRydWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVucyBjYWxsYmFjayBvbiBjb25zZW50IGV2ZW50LiBTaG9ydGhhbmQgZm9yIG9uKCdjb25zZW50JywgLi4uKVxuICAgICAqXG4gICAgICogQHNlZSBvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvbmNlXG4gICAgICovXG4gICAgd2F0Y2goY2FsbGJhY2ssIG9uY2UgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm9uKCdjb25zZW50JywgY2FsbGJhY2ssIG9uY2UpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhbiBhc3luY2hyb25vdXMgc2NyaXB0IHRhZyBpbnRvIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVVJMIHRvIHRoZSBzY3JpcHRcbiAgICAgKi9cbiAgICBpbmplY3Qoc3JjKSB7XG4gICAgICAgIGxldCBwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBwby50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHBvLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgcG8uc3JjID0gc3JjO1xuICAgICAgICBjb25zdCBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBvLCBzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2hlcyBmb3IgSFRNTCBlbGVtZW50cyB0byB1bmJsb2NrIGluIGN1cnJlbnQgZG9jdW1lbnQuXG4gICAgICovXG4gICAgdW5ibG9jaygpe1xuICAgICAgICAvLyBkZWZlciB1bnRpbCBkb20gaXMgcmVhZHlcbiAgICAgICAgdGhpcy5kb21yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbnNlbnQtcmVxdWlyZXNdJyk7XG5cbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICAgICAgICAhKCdjb25zZW50QXR0cicgaW4gZWwuZGF0YXNldCkgfHxcbiAgICAgICAgICAgICAgICAgICAgZWwuZGF0YXNldFsnY29uc2VudEF0dHInXSA9PT0gJycgfHxcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnNlbnRNYW5hZ2VkJyBpbiBlbC5kYXRhc2V0XG4gICAgICAgICAgICAgICAgKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHB1cnBvc2VzID0gZWwuZGF0YXNldFsnY29uc2VudFJlcXVpcmVzJ10uc3BsaXQoJywnKTtcblxuICAgICAgICAgICAgICAgIGlmKCFwdXJwb3Nlcy5yZWR1Y2UoKHAsdikgPT4ge3JldHVybiBwICYmIHRoaXMuYWxsb3dzKHYpfSwgdHJ1ZSkpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZygnRWxlbWVudCBub3QgdW5ibG9ja2VkLCBub3QgZW5vdWdoIGNvbnNlbnQnLCBlbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyID0gZWwuZGF0YXNldFsnY29uc2VudEF0dHInXS5zcGxpdCgnLCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmV3cml0ZSBhdHRyaWJ1dGVzIGZyb20gZGF0YS1hdHRyIHRvIGF0dHJcbiAgICAgICAgICAgICAgICBhdHRyLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGEgaW4gZWwuZGF0YXNldCAmJiBlbC5zZXRBdHRyaWJ1dGUoYSwgZWwuZGF0YXNldFthXSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZygnRWxlbWVudCB1bmJsb2NrZWQnLCBlbCk7XG4gICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnNlbnQtbWFuYWdlZCcsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyYXBwZXIgYXJvdW5kIERPTSByZWFkeSBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBkb21yZWFkeShjYWxsYmFjayl7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHxcbiAgICAgICAgICAgIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycgJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBjdXJyZW50IGNvbnNlbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG9wdE91dCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlci5vcHRPdXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyB1c2VyIGludGVyZmFjZSB0byBjaGFuZ2UgY29uc2VudFxuICAgICAqL1xuICAgIHNob3dVaSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlci5zaG93VWkoKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uc2VudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBOb29wIHByb3ZpZGVyIGp1c3QgcGFzc2VzIHRocm91Z2ggcHJlLWluaXRpYWxpemVkIGNvbnNlbnRcbiAqL1xuY2xhc3MgQ29uc2VudF9Ob29wIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5wdXJwb3Nlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3RyaW5nXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjb25maWcuZG9tcmVhZHlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgdGhpcy5wdXJwb3NlcyA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgncHVycG9zZXMnKVxuICAgICAgICAgICAgPyBjb25maWcucHVycG9zZXNcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICdzdGFuZGFyZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJzEnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAnMic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICczJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgJzQnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAnNSc6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdjdXN0b20nOiB7fVxuICAgICAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvbnNlbnQgPSBjb25maWcuaGFzT3duUHJvcGVydHkoJ2NvbnNlbnQnKVxuICAgICAgICAgICAgPyBjb25maWcuY29uc2VudFxuICAgICAgICAgICAgOiAnJztcblxuICAgICAgICB0aGlzLmRvbXJlYWR5ID0gY29uZmlnLmhhc093blByb3BlcnR5KCdkb21yZWFkeScpXG4gICAgICAgICAgICA/ICEhY29uZmlnLmRvbXJlYWR5XG4gICAgICAgICAgICA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Q29uc2VudH0gY29uc2VudFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgaW5pdChjb25zZW50LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5kb21yZWFkeSkge1xuICAgICAgICAgICAgY29uc2VudC5kb21yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5wdXJwb3NlcywgdGhpcy5jb25zZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2sodGhpcy5wdXJwb3NlcywgdGhpcy5jb25zZW50KTtcbiAgICB9XG5cbiAgICBvcHRPdXQoKSB7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25zZW50X05vb3A7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIENvbnNlbnRfUXVhbnRjYXN0IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5xdWFudGNhc3RJZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLnF1YW50Y2FzdElkID0gY29uZmlnLmhhc093blByb3BlcnR5KCdxdWFudGNhc3RJZCcpXG4gICAgICAgICAgICA/IGNvbmZpZy5xdWFudGNhc3RJZFxuICAgICAgICAgICAgOiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBRdWFudGNhc3QgQ2hvaWNlLiBDb25zZW50IE1hbmFnZXIgVGFnIHYyLjAgKGZvciBUQ0YgMi4wKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHF1YW50Y2FzdElkXG4gICAgICovXG4gICAgdGFnKHF1YW50Y2FzdElkKXtcbiAgICAgICAgdmFyIGhvc3QgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHZhciBmaXJzdFNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vcXVhbnRjYXN0Lm1nci5jb25zZW5zdS5vcmcnXG4gICAgICAgICAgICAuY29uY2F0KCcvY2hvaWNlLycsIHF1YW50Y2FzdElkLCAnLycsIGhvc3QsICcvY2hvaWNlLmpzJylcbiAgICAgICAgICAgIC5jb25jYXQoJz90aW1lc3RhbXA9JywgbWlsbGlzZWNvbmRzKTtcbiAgICAgICAgdmFyIHVzcFRyaWVzID0gMDtcbiAgICAgICAgdmFyIHVzcFRyaWVzTGltaXQgPSAzO1xuICAgICAgICBlbGVtZW50LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgZWxlbWVudC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIGVsZW1lbnQuc3JjID0gdXJsO1xuXG4gICAgICAgIGZpcnN0U2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGZpcnN0U2NyaXB0KTtcblxuICAgICAgICBmdW5jdGlvbiBtYWtlU3R1YigpIHtcbiAgICAgICAgICAgIHZhciBUQ0ZfTE9DQVRPUl9OQU1FID0gJ19fdGNmYXBpTG9jYXRvcic7XG4gICAgICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgICAgIHZhciB3aW4gPSB3aW5kb3c7XG4gICAgICAgICAgICB2YXIgY21wRnJhbWU7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZEZyYW1lKCkge1xuICAgICAgICAgICAgICAgIHZhciBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgdmFyIG90aGVyQ01QID0gISEod2luLmZyYW1lc1tUQ0ZfTE9DQVRPUl9OQU1FXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIW90aGVyQ01QKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2MuYm9keSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlmcmFtZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZS5uYW1lID0gVENGX0xPQ0FUT1JfTkFNRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGFkZEZyYW1lLCA1KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gIW90aGVyQ01QO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiB0Y2ZBUElIYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHZhciBnZHByQXBwbGllcztcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICAgICAgICAgIGlmICghYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJnc1swXSA9PT0gJ3NldEdkcHJBcHBsaWVzJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbMl0gPT09IDIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBhcmdzWzNdID09PSAnYm9vbGVhbidcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZHByQXBwbGllcyA9IGFyZ3NbM107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzWzJdKCdzZXQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJnc1swXSA9PT0gJ3BpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXRyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2RwckFwcGxpZXM6IGdkcHJBcHBsaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY21wTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtcFN0YXR1czogJ3N0dWInXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzWzJdKHJldHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUucHVzaChhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1zZ0lzU3RyaW5nID0gdHlwZW9mIGV2ZW50LmRhdGEgPT09ICdzdHJpbmcnO1xuICAgICAgICAgICAgICAgIHZhciBqc29uID0ge307XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobXNnSXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAganNvbiA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG5cbiAgICAgICAgICAgICAgICB2YXIgcGF5bG9hZCA9IGpzb24uX190Y2ZhcGlDYWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Ll9fdGNmYXBpKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZC5jb21tYW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZC52ZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24ocmV0VmFsdWUsIHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuTXNnID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3RjZmFwaVJldHVybjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWU6IHJldFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxJZDogcGF5bG9hZC5jYWxsSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1zZ0lzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybk1zZyA9IEpTT04uc3RyaW5naWZ5KHJldHVybk1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnNvdXJjZS5wb3N0TWVzc2FnZShyZXR1cm5Nc2csICcqJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZC5wYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdoaWxlICh3aW4pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luLmZyYW1lc1tUQ0ZfTE9DQVRPUl9OQU1FXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY21wRnJhbWUgPSB3aW47XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cblxuICAgICAgICAgICAgICAgIGlmICh3aW4gPT09IHdpbmRvdy50b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbiA9IHdpbi5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNtcEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgYWRkRnJhbWUoKTtcbiAgICAgICAgICAgICAgICB3aW4uX190Y2ZhcGkgPSB0Y2ZBUElIYW5kbGVyO1xuICAgICAgICAgICAgICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgcG9zdE1lc3NhZ2VFdmVudEhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBtYWtlU3R1YigpO1xuXG4gICAgICAgIHZhciB1c3BTdHViRnVuY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhcmcgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5fX3VzcGFwaSAhPT0gdXNwU3R1YkZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuX191c3BhcGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuX191c3BhcGkuYXBwbHkod2luZG93Ll9fdXNwYXBpLCBhcmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY2hlY2tJZlVzcElzUmVhZHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHVzcFRyaWVzKys7XG4gICAgICAgICAgICBpZiAod2luZG93Ll9fdXNwYXBpID09PSB1c3BTdHViRnVuY3Rpb24gJiYgdXNwVHJpZXMgPCB1c3BUcmllc0xpbWl0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdVU1AgaXMgbm90IGFjY2Vzc2libGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh1c3BJbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuX191c3BhcGkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB3aW5kb3cuX191c3BhcGkgPSB1c3BTdHViRnVuY3Rpb247XG4gICAgICAgICAgICB2YXIgdXNwSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGVja0lmVXNwSXNSZWFkeSwgNjAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KGNvbnNlbnQsIGNhbGxiYWNrKXtcbiAgICAgICAgdGhpcy50YWcodGhpcy5xdWFudGNhc3RJZClcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG5cbiAgICAgICAgX190Y2ZhcGkoJ2FkZEV2ZW50TGlzdGVuZXInLCAyLCAodGNEYXRhLCBzdWNjZXNzKSA9PiB7XG4gICAgICAgICAgICBpZighc3VjY2VzcykgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICBjb25zZW50LmxvZygnVENNIEFQSScsIHRjRGF0YS5ldmVudFN0YXR1cywgdGNEYXRhKTtcblxuICAgICAgICAgICAgc3dpdGNoKHRjRGF0YS5ldmVudFN0YXR1cyl7XG4gICAgICAgICAgICAgICAgY2FzZSAndXNlcmFjdGlvbmNvbXBsZXRlJzpcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbHRocm91Z2hcbiAgICAgICAgICAgICAgICBjYXNlICd0Y2xvYWRlZCc6XG4gICAgICAgICAgICAgICAgICAgIC8vIHRjbG9hZGVkIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBpZiBjb25zZW50IGRhdGEgaXMgYXZhaWxhYmxlIGFuZCBubyBVSSBpcyBzaG93blxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgUXVhbnRjYXN0IGNhbGxzIHRoaXMgdmVyeSBlYXJseSBpbiBpbml0IGFuZCAndXNlcmFjdGlvbmNvbXBsZXRlJyBpcyBhbHdheXNcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGVkIGRlc3BpdGUgbm90IGhhdmluZyBhbnkgdmFsaWQgY29uc2VudCBkYXRhIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm9wZW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc2VudC5jYWxsKCdkaWFsb2dfY2xvc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZih0Y0RhdGEuaGFzT3duUHJvcGVydHkoJ3B1cnBvc2UnKSAmJiB0Y0RhdGEuaGFzT3duUHJvcGVydHkoJ3B1Ymxpc2hlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGFuZGFyZCc6IHRoaXMuYW5ub3RhdGVTdGFuZGFyZENvbnNlbnRzKHRjRGF0YS5wdXJwb3NlLmNvbnNlbnRzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NwZWNpYWwnOiB0Y0RhdGEucHVibGlzaGVyLmN1c3RvbVB1cnBvc2UuY29uc2VudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRjRGF0YS50Y1N0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnY21wdWlzaG93bic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNlbnQuY2FsbCgnZGlhbG9nX29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYW5ub3RhdGVTdGFuZGFyZENvbnNlbnRzKGNvbnNlbnRzKXtcbiAgICAgICAgY29uc3QgYyA9IHt9XG5cbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKXtcbiAgICAgICAgICAgIGNbaV0gPSBjb25zZW50cy5oYXNPd25Qcm9wZXJ0eShpKSA/IGNvbnNlbnRzW2ldIDogZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY1xuICAgIH1cblxuICAgIG9wdE91dCgpe1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ19jbXBSZXByb21wdEhhc2gnKTtcblxuICAgIH1cblxuICAgIHNob3dVaSgpe1xuICAgICAgICBfX3RjZmFwaSgnZGlzcGxheUNvbnNlbnRVaScsIDIsIGZ1bmN0aW9uKCkge30gKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uc2VudF9RdWFudGNhc3Q7XG4iLCIvKlxuICogQ29uc2VudCBidW5kbGUgKHNoaW0gJiBRdWFudGNhc3QgQ29pY2UpXG4gKi9cblxuaW1wb3J0IENvbnNlbnRfUXVhbnRjYXN0IGZyb20gXCIuL2ludGVncmF0aW9uL3F1YW50Y2FzdFwiO1xuZ2xvYmFsLkNvbnNlbnRfUXVhbnRjYXN0ID0gQ29uc2VudF9RdWFudGNhc3Q7XG5cbmltcG9ydCBDb25zZW50X05vb3AgZnJvbSBcIi4vaW50ZWdyYXRpb24vbm9vcFwiO1xuZ2xvYmFsLkNvbnNlbnRfTm9vcCA9IENvbnNlbnRfTm9vcDtcblxuaW1wb3J0IENvbnNlbnQgZnJvbSBcIi4vY29uc2VudC9zaGltXCI7XG5nbG9iYWwuQ29uc2VudCA9IENvbnNlbnQ7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=