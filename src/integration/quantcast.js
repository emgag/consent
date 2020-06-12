'use strict';

class Consent_Quantcast {
    /**
     * @param {Object} config
     * @param {string} config.quantcastId
     */
    constructor(config) {
        this.quantcastId = config.hasOwnProperty('quantcastId')
            ? config.quantcastId
            : '';
    }

    /**
     * Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0)
     *
     * @param {string} quantcastId
     */
    tag(quantcastId){
        var host = window.location.hostname;
        var element = document.createElement('script');
        var firstScript = document.getElementsByTagName('script')[0];
        var milliseconds = new Date().getTime();
        var url = 'https://quantcast.mgr.consensu.org'
            .concat('/choice/', quantcastId, '/', host, '/choice.js')
            .concat('?timestamp=', milliseconds);
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
                var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

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
                    if (
                        args.length > 3 &&
                        args[2] === 2 &&
                        typeof args[3] === 'boolean'
                    ) {
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
                    window.__tcfapi(
                        payload.command,
                        payload.version,
                        function(retValue, success) {
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
                        },
                        payload.parameter
                    );
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
        };

        makeStub();

        var uspStubFunction = function() {
            var arg = arguments;
            if (typeof window.__uspapi !== uspStubFunction) {
                setTimeout(function() {
                    if (typeof window.__uspapi !== 'undefined') {
                        window.__uspapi.apply(window.__uspapi, arg);
                    }
                }, 500);
            }
        };

        var checkIfUspIsReady = function() {
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

    init(consent, callback){
        this.tag(this.quantcastId)
        this.open = false;

        __tcfapi('addEventListener', 2, (tcData, success) => {
            if(!success) return false
            consent.log('TCM API', tcData.eventStatus, tcData);

            switch(tcData.eventStatus){
                case 'useractioncomplete':
                    // fallthrough
                case 'tcloaded':
                    // tcloaded should only be called if consent data is available and no UI is shown
                    // but Quantcast calls this very early in init and 'useractioncomplete' is always
                    // called despite not having any valid consent data available
                    if(this.open){
                        consent.call('dialog_close');
                        this.open = false
                    }

                    if(tcData.hasOwnProperty('publisher')){
                        callback(
                            {
                                'standard': this.annotateStandardConsents(tcData.publisher.consents),
                                'special': tcData.publisher.customPurpose.consents
                            },
                            tcData.tcString
                        );
                    }

                    break;

                case 'cmpuishown':
                    this.open = true;
                    consent.call('dialog_open');
                    break;
            }
        })
    }

    annotateStandardConsents(consents){
        const c = {}

        for(let i = 1; i <= 10; i++){
            c[i] = consents.hasOwnProperty(i) ? consents[i] : false;
        }

        return c
    }

    optOut(){
        window.localStorage.removeItem('_cmpRepromptHash');

    }

    showUi(){
        __tcfapi('displayConsentUi', 2, function() {} );
    }

}

export default Consent_Quantcast;
