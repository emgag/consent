/*
* CMP (Consent managment platform) stuff
 */

'use strict';

// thin layer to store consent data
class Consent {
    constructor(config) {
        this._initialized = false;
        this._adsReady = false;
        this._purposes = '';
        this._consent = '';

        // merge config
        this._config = {
            debug: config.hasOwnProperty('debug') ? !!config.debug : false,
        };

        // mapping of cmp events to global unified events
        window.addEventListener('message', e => {
            let event = e.data;

            switch (event) {
                case 'oil_optin_done':
                case 'oil_has_optedin':
                    // collect consent data
                    __cmp('getConsentData', null, (result) => {
                        this.consent = result.consentData;

                        // collect accepted purposes
                        __cmp('getPublisherConsents', null, (result) => {
                            let purposes = [];

                            for (const e in result.standardPurposeConsents) {
                                result.standardPurposeConsents[e] && purposes.push(+e)
                            }

                            for (const e in result.customPurposeConsents) {
                                result.customPurposeConsents[e] && purposes.push(+e)
                            }

                            this.purposes = purposes;
                            this.initialized = true;
                            window.postMessage('consent', window.origin)
                        });
                    });

                    break;

                case 'consent':
                    this.log('Initialized?', this.initialized);
                    this.log('Current consent', this.consent);
                    this.log('Enabled purposes', this.purposes);
                    this.log('All standard purposes?', this.allowsStandardPurposes);
            }
        });

        this.watch(this.unblock);
    }

    get adsReady() {
        return this._adsReady;
    }

    set adsReady(r) {
        this._adsReady = r
    }

    get config() {
        return this._config;
    }

    set config(c) {
        this._config = c
    }

    get consent() {
        return this._consent;
    }

    set consent(c) {
        this._consent = c
    }

    get initialized() {
        return this._initialized;
    }

    set initialized(i) {
        this._initialized = i
    }

    get purposes() {
        return this._purposes;
    }

    set purposes(p) {
        this._purposes = p
    }

    // indexes from https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/Consent%20string%20and%20vendor%20list%20formats%20v1.1%20Final.md#purposes-features
    get allowsInformation() {
        return this.purposes.includes(1)
    }

    get allowsPersonalisation() {
        return this.purposes.includes(2)
    }

    get allowsAdSelection() {
        return this.purposes.includes(3)
    }

    get allowsContentSelection() {
        return this.purposes.includes(4)
    }

    get allowsMeasurement() {
        return this.purposes.includes(5)
    }

    get allowsStandardPurposes() {
        return this.allowsInformation
            && this.allowsPersonalisation
            && this.allowsAdSelection
            && this.allowsContentSelection
            && this.allowsMeasurement;
    }

    log(msg, ...context) {
        if (!this.config.debug) {
            return;
        }

        console.log("CONSENT:", msg, ...context);
    }

    runAds(callback, once = false) {
        if (this.adsReady) {
            // ads already initialized, just run callback
            callback.bind(this)();
            return
        }

        let handler = e => {
            if (e.data === 'adsReady') {
                once && window.removeEventListener('message', handler);
                callback.bind(this)();
            }
        };

        // waiting for adsReady event
        window.addEventListener('message', handler);
    }

    watch(callback, once = false) {
        if (this.initialized) {
            // consent already initialized, just run callback
            callback.bind(this)();
            return
        }

        let handler = e => {
            if (e.data === 'consent') {
                once && window.removeEventListener('message', handler);
                callback.bind(this)();
            }
        };

        // waiting for consent
        window.addEventListener('message', handler);
    }

    inject(src, oninit = true, once = false) {
        let po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = src;

        let injector = function () {
            const s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
        };

        if (oninit) {
            this.watch(injector, once);
            return
        }

        injector()
    }

    unblock(){
        let handler = function(){
            let elements = document.querySelectorAll('[data-consent-requires]');

            elements.forEach(el => {
                if(
                    !('consentAttr' in el.dataset) ||
                    el.dataset['consentAttr'] === '' ||
                    'consentManaged' in el.dataset
                ){
                    return;
                }

                if(el.dataset['consentRequires'] === 'standard'){
                    if(!this.allowsStandardPurposes){
                        this.log('Element not unblocked, not enough consent', el);
                        return;
                    }
                } else {
                    let purposes = el.dataset['consentRequires'].split(',');

                    if(!purposes.reduce(
                        function(acc, cur){return acc && this.purposes.includes(+cur)}.bind(this),
                        true)
                    ){
                        this.log('Element not unblocked, not enough consent', el);
                        return;
                    }
                }

                let attr = el.dataset['consentAttr'].split(',');

                attr.forEach(a => {
                    if(a in el.dataset){
                        el.setAttribute(a, el.dataset[a]);
                    }
                });

                this.log('Element unblocked', el);
                el.setAttribute('data-consent-managed', true);
            });
        }.bind(this);

        // defer until dom is ready
        if (
            document.readyState === 'complete' ||
            (document.readyState !== 'loading' && !document.documentElement.doScroll)
        ) {
            handler();
            return;
        }

        document.addEventListener("DOMContentLoaded", handler);
    }
}

global.__consent = new Consent(window.__consent_config ? window.__consent_config : {});

export default Consent;



