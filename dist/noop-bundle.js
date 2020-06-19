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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/noop-bundle.js");
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

/***/ "./src/noop-bundle.js":
/*!****************************!*\
  !*** ./src/noop-bundle.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _integration_noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration/noop */ "./src/integration/noop.js");
/* harmony import */ var _consent_shim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consent/shim */ "./src/consent/shim.js");
/*
 * Consent bundle (shim & noop)
 */

global.Consent_Noop = _integration_noop__WEBPACK_IMPORTED_MODULE_0__["default"];

global.Consent = _consent_shim__WEBPACK_IMPORTED_MODULE_1__["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc2VudC9zaGltLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlZ3JhdGlvbi9ub29wLmpzIiwid2VicGFjazovLy8uL3NyYy9ub29wLWJ1bmRsZS5qcyJdLCJuYW1lcyI6WyJDb25zZW50IiwicHJvdmlkZXIiLCJjb25maWciLCJldmVudHMiLCJwdXJwb3NlcyIsImNvbnNlbnQiLCJkZWJ1ZyIsImhhc093blByb3BlcnR5IiwiaW5pdCIsImNhbGwiLCJ3YXRjaCIsImxvZyIsImFsbG93c1N0YW5kYXJkUHVycG9zZXMiLCJhbGxvd3NTcGVjaWFsUHVycG9zZXMiLCJvbiIsInVuYmxvY2siLCJwdXJwb3NlIiwicCIsInNwbGl0IiwibGVuZ3RoIiwic3RhbmRhcmQiLCJzcGVjaWFsIiwicHJvcGVydHkiLCJtc2ciLCJjb250ZXh0IiwiY29uc29sZSIsImV2ZW50Iiwid2luZG93IiwicG9zdE1lc3NhZ2UiLCJvcmlnaW4iLCJjYWxsYmFjayIsIm9uY2UiLCJiaW5kIiwiaGFuZGxlciIsImUiLCJkYXRhIiwidHlwZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwic3JjIiwicG8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhc3luYyIsInMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJkb21yZWFkeSIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImRhdGFzZXQiLCJyZWR1Y2UiLCJ2IiwiYWxsb3dzIiwiYXR0ciIsImEiLCJzZXRBdHRyaWJ1dGUiLCJyZWFkeVN0YXRlIiwiZG9jdW1lbnRFbGVtZW50IiwiZG9TY3JvbGwiLCJvcHRPdXQiLCJzaG93VWkiLCJrIiwicHVzaCIs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T0FBTCxHQUFlSCxNQUFNLENBQUNLLGNBQVAsQ0FBc0IsU0FBdEIsSUFDVEwsTUFBTSxDQUFDRyxPQURFLEdBRVQsRUFGTjtBQUlBLFNBQUsyQyxRQUFMLEdBQWdCOUMsTUFBTSxDQUFDSyxjQUFQLENBQXNCLFVBQXRCLElBQ1YsQ0FBQyxDQUFDTCxNQUFNLENBQUM4QyxRQURDLEdBRVYsS0FGTjtBQUdIO0FBRUQ7Ozs7Ozs7O3lCQUlLM0MsTyxFQUFTeUIsUSxFQUFVO0FBQUE7O0FBQ3BCLFVBQUksS0FBS2tCLFFBQVQsRUFBbUI7QUFDZjNDLGVBQU8sQ0FBQzJDLFFBQVIsQ0FBaUIsWUFBTTtBQUNuQmxCLGtCQUFRLENBQUMsS0FBSSxDQUFDMUIsUUFBTixFQUFnQixLQUFJLENBQUNDLE9BQXJCLENBQVI7QUFDSCxTQUZEO0FBR0g7O0FBRUR5QixjQUFRLENBQUMsS0FBSzFCLFFBQU4sRUFBZ0IsS0FBS0MsT0FBckIsQ0FBUjtBQUNIOzs7NkJBRVEsQ0FDUjs7Ozs7O0FBR1U4RCwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7OztBQUlBO0FBQ0FDLE1BQU0sQ0FBQ0QsWUFBUCxHQUFzQkEseURBQXRCO0FBRUE7QUFDQUMsTUFBTSxDQUFDcEUsT0FBUCxHQUFpQkEscURBQWpCLEMiLCJmaWxlIjoibm9vcC1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ub29wLWJ1bmRsZS5qc1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBXcmFwcGVyIGFyb3VuZCBDTVAgdG8gc3RvcmUgY29uc2VudCBkYXRhIGFuZCBtYW5hZ2UgY29uc2VudCBldmVudHNcbiAqL1xuY2xhc3MgQ29uc2VudCB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvdmlkZXIgQW4gaW5zdGFuY2Ugb2YgYSBwcm92aWRlciBpbXBsZW1lbnRhdGlvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb3ZpZGVyLmluaXQgRnVuY3Rpb24gdG8gYmUgY2FsbGVkIHRvIGluaXRpYWxpemUgcHJvdmlkZXJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm92aWRlci5vcHRPdXQgRnVuY3Rpb24gdG8gYmUgY2FsbGVkIHRvIG9wdCBvdXQgb2YgY29uc2VudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgYWRkaXRpb25hbCBjb25maWd1cmF0aW9uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjb25maWcuZGVidWcgd2hldGhlciBkZWJ1ZyBzdGF0ZW1lbnRzIHNob3VsZCBiZSBwcmludGVkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvdmlkZXIsIGNvbmZpZykge1xuICAgICAgICB0aGlzLnByb3ZpZGVyID0gcHJvdmlkZXI7XG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgICAgIHRoaXMucHVycG9zZXMgPSB7XG4gICAgICAgICAgICAnc3RhbmRhcmQnOiB7fSxcbiAgICAgICAgICAgICdzcGVjaWFsJzoge30sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29uc2VudCA9ICcnO1xuXG4gICAgICAgIC8vIG1lcmdlIGNvbmZpZ1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIGRlYnVnOiBjb25maWcuaGFzT3duUHJvcGVydHkoJ2RlYnVnJykgPyAhIWNvbmZpZy5kZWJ1ZyA6IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHByb3ZpZGVyLmluaXQodGhpcywgKHB1cnBvc2VzLCBjb25zZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnB1cnBvc2VzID0gcHVycG9zZXM7XG4gICAgICAgICAgICB0aGlzLmNvbnNlbnQgPSBjb25zZW50O1xuICAgICAgICAgICAgdGhpcy5jYWxsKCdjb25zZW50JylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy53YXRjaCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZygnQWN0aXZlIGV2ZW50cycsIHRoaXMuZXZlbnRzKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdDdXJyZW50IGNvbnNlbnQnLCB0aGlzLmNvbnNlbnQpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ0VuYWJsZWQgcHVycG9zZXMnLCB0aGlzLnB1cnBvc2VzKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdBbGwgc3RhbmRhcmQgcHVycG9zZXM/JywgdGhpcy5hbGxvd3NTdGFuZGFyZFB1cnBvc2VzKCkpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ0FsbCBzcGVjaWFsIHB1cnBvc2VzPycsIHRoaXMuYWxsb3dzU3BlY2lhbFB1cnBvc2VzKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uKCdkaWFsb2dfb3BlbicsICgpPT4ge3RoaXMubG9nKCdDb25zZW50IHBvcHVwIHNob3duJyl9KTtcbiAgICAgICAgdGhpcy5vbignZGlhbG9nX2Nsb3NlJywgKCk9PiB7dGhpcy5sb2coJ0NvbnNlbnQgcG9wdXAgY2xvc2UnKX0pO1xuXG4gICAgICAgIHRoaXMud2F0Y2godGhpcy51bmJsb2NrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIGFkIGtleXdvcmRzIGZvciBjdXJyZW50IGNvbnNlbnQuXG4gICAgICpcbiAgICAgKiBBZGRpdGlvbmFsbHksIFwiY29uc2VudF9hbGxcIiB3aWxsIGJlIGFkZGVkIHdoZW4gYWxsIHN0YW5kYXJkIHB1cnBvc2VzIGFyZSBhbGxvd2VkLCBcIm5vY29uc2VudFwiIGlmIG5vdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBnZXQga2V5d29yZHMoKSB7XG4gICAgICAgIGxldCBrID0gW107XG5cbiAgICAgICAgdGhpcy5hbGxvd3NTdGFuZGFyZFB1cnBvc2VzKCkgPyBrLnB1c2goJ2NvbnNlbnRfYWxsJykgOiBrLnB1c2goJ25vY29uc2VudCcpO1xuXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5wdXJwb3Nlcy5zdGFuZGFyZCkge1xuICAgICAgICAgICAgdGhpcy5wdXJwb3Nlcy5zdGFuZGFyZFtwcm9wZXJ0eV0gJiYgay5wdXNoKCdjb25zZW50X3N0YW5kYXJkXycgKyBwcm9wZXJ0eSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5wdXJwb3Nlcy5zcGVjaWFsKSB7XG4gICAgICAgICAgICB0aGlzLnB1cnBvc2VzLnNwZWNpYWxbcHJvcGVydHldICYmIGsucHVzaCgnY29uc2VudF9zcGVjaWFsXycgKyBwcm9wZXJ0eSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9nKCdLZXl3b3JkcycsIGspO1xuICAgICAgICByZXR1cm4ga1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBzcGVjaWZpYyBwdXJwb3NlIGhhcyBjb25zZW50LCBmYWxzZSBpZiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHVycG9zZSBFaXRoZXIgYSBzcGVjaWZpYyBwdXJwb3NlIChzdGFuZGFyZC9YLCBzcGVjaWFsL1gpIG9yIFwic3RhbmRhcmRcIiBvZiBcInNwZWNpYWxcIiBmb3IgYWxsIGluIHRoaXMgY2F0ZWdvcnkuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgYWxsb3dzKHB1cnBvc2Upe1xuICAgICAgICBpZihwdXJwb3NlID09PSAnc3RhbmRhcmQnKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbG93c1N0YW5kYXJkUHVycG9zZXMoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocHVycG9zZSA9PT0gJ3NwZWNpYWwnKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbG93c1NwZWNpYWxQdXJwb3NlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcCA9IHB1cnBvc2Uuc3BsaXQoJy8nKTtcblxuICAgICAgICBpZihwLmxlbmd0aCAhPT0gMil7XG4gICAgICAgICAgICB0aGlzLmxvZygnSW52YWxpZCBwdXJwb3NlIGRlZmluaXRpb24nLCBwdXJwb3NlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBbMF0gPT09ICdzdGFuZGFyZCcgJiYgdGhpcy5wdXJwb3Nlcy5zdGFuZGFyZFtwWzFdXSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBbMF0gPT09ICdzcGVjaWFsJyAmJiB0aGlzLnB1cnBvc2VzLnNwZWNpYWxbcFsxXV0pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBzcGVjaWFsIHB1cnBvc2VzIGhhdmUgY29uc2VudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGFsbG93c1NwZWNpYWxQdXJwb3Nlcygpe1xuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRoaXMucHVycG9zZXMuc3BlY2lhbCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnB1cnBvc2VzLnNwZWNpYWxbcHJvcGVydHldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgYWxsIHN0YW5kYXJkIHB1cnBvc2VzIGhhdmUgY29uc2VudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGFsbG93c1N0YW5kYXJkUHVycG9zZXMoKXtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0aGlzLnB1cnBvc2VzLnN0YW5kYXJkKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHVycG9zZXMuc3RhbmRhcmRbcHJvcGVydHldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmludHMgYSBkZWJ1ZyBtZXNzYWdlIHRvIGJyb3dzZXIgY29uc29sZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtc2dcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGxvZyhtc2csIC4uLmNvbnRleHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5kZWJ1Zykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJDT05TRU5UOlwiLCBtc2csIC4uLmNvbnRleHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIHNwZWNpZmljIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgRXZlbnQgdG8gYmUgdHJpZ2dlcmVkLlxuICAgICAqL1xuICAgIGNhbGwoZXZlbnQpe1xuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2Uoeyd0eXBlJzogJ2NvbnNlbnQnLCAnZXZlbnQnOiBldmVudH0sIHdpbmRvdy5vcmlnaW4pO1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyIGZvciBhIHNwZWNpZmljIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgRXZlbnQgdG8gbGlzdGVuIGZvclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIGV2ZW50IG9jY3Vyc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBSZW1vdmUgZXZlbnQgaGFuZGxlciBhZnRlciBmaXJzdCBydW5cbiAgICAgKi9cbiAgICBvbihldmVudCwgY2FsbGJhY2ssIG9uY2UgPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICAvLyBldmVudCBhbHJlYWR5IGNhbGxlZCwganVzdCBydW4gY2FsbGJhY2tcbiAgICAgICAgICAgIGNhbGxiYWNrLmJpbmQodGhpcykoKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhhbmRsZXIgPSBlID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlLmRhdGEuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSAmJlxuICAgICAgICAgICAgICAgIGUuZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZXZlbnQnKSAmJlxuICAgICAgICAgICAgICAgIGUuZGF0YS50eXBlID09PSAnY29uc2VudCcgJiZcbiAgICAgICAgICAgICAgICBlLmRhdGEuZXZlbnQgPT09IGV2ZW50XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBvbmNlICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYmluZCh0aGlzKSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHdhaXRpbmcgZm9yIGV2ZW50XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FpdCBmb3IgY29uc2VudCBhbmQgcnVuIGNhbGxiYWNrIG9uY2UuIFNob3J0aGFuZCBmb3Igb24oJ2NvbnNlbnQnLCBjYWxsYmFjaywgdHJ1ZSkuXG4gICAgICpcbiAgICAgKiBAc2VlIG9uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICB3YWl0KGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oJ2NvbnNlbnQnLCBjYWxsYmFjaywgdHJ1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW5zIGNhbGxiYWNrIG9uIGNvbnNlbnQgZXZlbnQuIFNob3J0aGFuZCBmb3Igb24oJ2NvbnNlbnQnLCAuLi4pXG4gICAgICpcbiAgICAgKiBAc2VlIG9uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2VcbiAgICAgKi9cbiAgICB3YXRjaChjYWxsYmFjaywgb25jZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMub24oJ2NvbnNlbnQnLCBjYWxsYmFjaywgb25jZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGFuIGFzeW5jaHJvbm91cyBzY3JpcHQgdGFnIGludG8gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBVUkwgdG8gdGhlIHNjcmlwdFxuICAgICAqL1xuICAgIGluamVjdChzcmMpIHtcbiAgICAgICAgbGV0IHBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHBvLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgcG8uYXN5bmMgPSB0cnVlO1xuICAgICAgICBwby5zcmMgPSBzcmM7XG4gICAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocG8sIHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIGZvciBIVE1MIGVsZW1lbnRzIHRvIHVuYmxvY2sgaW4gY3VycmVudCBkb2N1bWVudC5cbiAgICAgKi9cbiAgICB1bmJsb2NrKCl7XG4gICAgICAgIC8vIGRlZmVyIHVudGlsIGRvbSBpcyByZWFkeVxuICAgICAgICB0aGlzLmRvbXJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29uc2VudC1yZXF1aXJlc10nKTtcblxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgICAgICEoJ2NvbnNlbnRBdHRyJyBpbiBlbC5kYXRhc2V0KSB8fFxuICAgICAgICAgICAgICAgICAgICBlbC5kYXRhc2V0Wydjb25zZW50QXR0ciddID09PSAnJyB8fFxuICAgICAgICAgICAgICAgICAgICAnY29uc2VudE1hbmFnZWQnIGluIGVsLmRhdGFzZXRcbiAgICAgICAgICAgICAgICApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHVycG9zZXMgPSBlbC5kYXRhc2V0Wydjb25zZW50UmVxdWlyZXMnXS5zcGxpdCgnLCcpO1xuXG4gICAgICAgICAgICAgICAgaWYoIXB1cnBvc2VzLnJlZHVjZSgocCx2KSA9PiB7cmV0dXJuIHAgJiYgdGhpcy5hbGxvd3Modil9LCB0cnVlKSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nKCdFbGVtZW50IG5vdCB1bmJsb2NrZWQsIG5vdCBlbm91Z2ggY29uc2VudCcsIGVsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBlbC5kYXRhc2V0Wydjb25zZW50QXR0ciddLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgICAgICAgICAvLyByZXdyaXRlIGF0dHJpYnV0ZXMgZnJvbSBkYXRhLWF0dHIgdG8gYXR0clxuICAgICAgICAgICAgICAgIGF0dHIuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYSBpbiBlbC5kYXRhc2V0ICYmIGVsLnNldEF0dHJpYnV0ZShhLCBlbC5kYXRhc2V0W2FdKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nKCdFbGVtZW50IHVuYmxvY2tlZCcsIGVsKTtcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29uc2VudC1tYW5hZ2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JhcHBlciBhcm91bmQgRE9NIHJlYWR5IGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGRvbXJlYWR5KGNhbGxiYWNrKXtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fFxuICAgICAgICAgICAgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJyAmJiAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGN1cnJlbnQgY29uc2VudFxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgb3B0T3V0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVyLm9wdE91dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIHVzZXIgaW50ZXJmYWNlIHRvIGNoYW5nZSBjb25zZW50XG4gICAgICovXG4gICAgc2hvd1VpKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVyLnNob3dVaSgpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25zZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE5vb3AgcHJvdmlkZXIganVzdCBwYXNzZXMgdGhyb3VnaCBwcmUtaW5pdGlhbGl6ZWQgY29uc2VudFxuICovXG5jbGFzcyBDb25zZW50X05vb3Age1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnB1cnBvc2VzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHJpbmdcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmZpZy5kb21yZWFkeVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLnB1cnBvc2VzID0gY29uZmlnLmhhc093blByb3BlcnR5KCdwdXJwb3NlcycpXG4gICAgICAgICAgICA/IGNvbmZpZy5wdXJwb3Nlc1xuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgJ3N0YW5kYXJkJzoge1xuICAgICAgICAgICAgICAgICAgICAnMSc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICcyJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgJzMnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAnNCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICc1JzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2N1c3RvbSc6IHt9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY29uc2VudCA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnY29uc2VudCcpXG4gICAgICAgICAgICA/IGNvbmZpZy5jb25zZW50XG4gICAgICAgICAgICA6ICcnO1xuXG4gICAgICAgIHRoaXMuZG9tcmVhZHkgPSBjb25maWcuaGFzT3duUHJvcGVydHkoJ2RvbXJlYWR5JylcbiAgICAgICAgICAgID8gISFjb25maWcuZG9tcmVhZHlcbiAgICAgICAgICAgIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtDb25zZW50fSBjb25zZW50XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBpbml0KGNvbnNlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbXJlYWR5KSB7XG4gICAgICAgICAgICBjb25zZW50LmRvbXJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLnB1cnBvc2VzLCB0aGlzLmNvbnNlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayh0aGlzLnB1cnBvc2VzLCB0aGlzLmNvbnNlbnQpO1xuICAgIH1cblxuICAgIG9wdE91dCgpIHtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnNlbnRfTm9vcDtcbiIsIi8qXG4gKiBDb25zZW50IGJ1bmRsZSAoc2hpbSAmIG5vb3ApXG4gKi9cblxuaW1wb3J0IENvbnNlbnRfTm9vcCBmcm9tIFwiLi9pbnRlZ3JhdGlvbi9ub29wXCI7XG5nbG9iYWwuQ29uc2VudF9Ob29wID0gQ29uc2VudF9Ob29wO1xuXG5pbXBvcnQgQ29uc2VudCBmcm9tIFwiLi9jb25zZW50L3NoaW1cIjtcbmdsb2JhbC5Db25zZW50ID0gQ29uc2VudDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==