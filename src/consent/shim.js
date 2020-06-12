'use strict';

/**
 * Wrapper around CMP to store consent data and manage consent events
 */
class Consent {

    /**
     * @param {Object} provider An instance of a provider implementation
     * @param {function} provider.init Function to be called to initialize provider
     * @param {function} provider.optOut Function to be called to opt out of consent
     * @param {Object} config additional configuration
     * @param {boolean} config.debug whether debug statements should be printed
     */
    constructor(provider, config) {
        this.provider = provider;
        this.events = {};
        this.purposes = {
            'standard': {},
            'special': {},
        };
        this.consent = '';

        // merge config
        this.config = {
            debug: config.hasOwnProperty('debug') ? !!config.debug : false,
        };

        provider.init(this, (purposes, consent) => {
            this.purposes = purposes;
            this.consent = consent;
            this.call('consent')
        });

        this.watch(() => {
            this.log('Active events', this.events);
            this.log('Current consent', this.consent);
            this.log('Enabled purposes', this.purposes);
            this.log('All standard purposes?', this.allowsStandardPurposes());
            this.log('All special purposes?', this.allowsSpecialPurposes());
        });

        this.on('dialog_open', ()=> {this.log('Consent popup shown')});
        this.on('dialog_close', ()=> {this.log('Consent popup close')});

        this.watch(this.unblock);
    }

    /**
     * List of ad keywords for current consent.
     *
     * Additionally, "consent_all" will be added when all standard purposes are allowed, "noconsent" if not.
     *
     * @returns {string[]}
     */
    get keywords() {
        let k = [];

        this.allowsStandardPurposes() ? k.push('consent_all') : k.push('noconsent');

        for (const property in this.purposes.standard) {
            this.purposes.standard[property] && k.push('consent_standard_' + property)
        }

        for (const property in this.purposes.special) {
            this.purposes.special[property] && k.push('consent_special_' + property)
        }

        this.log('Keywords', k);
        return k
    }

    /**
     * Returns true if specific purpose has consent, false if otherwise.
     *
     * @param {string} purpose Either a specific purpose (standard/X, special/X) or "standard" of "special" for all in this category.
     * @returns {boolean}
     */
    allows(purpose){
        if(purpose === 'standard'){
            return this.allowsStandardPurposes()
        }

        if(purpose === 'special'){
            return this.allowsSpecialPurposes();
        }

        const p = purpose.split('/');

        if(p.length !== 2){
            this.log('Invalid purpose definition', purpose);
            return false;
        }

        if(p[0] === 'standard' && this.purposes.standard[p[1]]){
            return true;
        }

        if(p[0] === 'special' && this.purposes.special[p[1]]){
            return true;
        }

        return false;
    }

    /**
     * Returns true if all special purposes have consent.
     *
     * @returns {boolean}
     */
    allowsSpecialPurposes(){
        for (const property in this.purposes.special) {
            if (!this.purposes.special[property]) return false;
        }

        return true;
    }

    /**
     * Returns true if all standard purposes have consent.
     *
     * @returns {boolean}
     */
    allowsStandardPurposes(){
        for (const property in this.purposes.standard) {
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
    log(msg, ...context) {
        if (!this.config.debug) {
            return;
        }

        console.log("CONSENT:", msg, ...context);
    }

    /**
     * Triggers specific event
     *
     * @param {string} event Event to be triggered.
     */
    call(event){
        window.postMessage({'type': 'consent', 'event': event}, window.origin);
        this.events[event] = true;
    }

    /**
     * Registers an event handler for a specific event
     *
     * @param {string} event Event to listen for
     * @param {function} callback Function to be called when event occurs
     * @param {boolean} once Remove event handler after first run
     */
    on(event, callback, once = false) {
        if (this.events[event]) {
            // event already called, just run callback
            callback.bind(this)();
            return
        }

        let handler = e => {
            if (
                e.data.hasOwnProperty('type') &&
                e.data.hasOwnProperty('event') &&
                e.data.type === 'consent' &&
                e.data.event === event
            ) {
                once && window.removeEventListener('message', handler);
                callback.bind(this)();
            }
        };

        // waiting for event
        window.addEventListener('message', handler);
    }

    /**
     * Wait for consent and run callback once. Shorthand for on('consent', callback, true).
     *
     * @see on
     * @param {function} callback
     */
    wait(callback) {
        this.on('consent', callback, true)
    }

    /**
     * Runs callback on consent event. Shorthand for on('consent', ...)
     *
     * @see on
     * @param {function} callback
     * @param {boolean} once
     */
    watch(callback, once = false) {
        this.on('consent', callback, once)
    }

    /**
     * Injects an asynchronous script tag into the current page
     *
     * @param {string} src URL to the script
     */
    inject(src) {
        let po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = src;
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    }

    /**
     * Searches for HTML elements to unblock in current document.
     */
    unblock(){
        // defer until dom is ready
        this.domready(() => {
            const elements = document.querySelectorAll('[data-consent-requires]');

            elements.forEach(el => {
                if(
                    !('consentAttr' in el.dataset) ||
                    el.dataset['consentAttr'] === '' ||
                    'consentManaged' in el.dataset
                ){
                    return;
                }

                const purposes = el.dataset['consentRequires'].split(',');

                if(!purposes.reduce((p,v) => {return p && this.allows(v)}, true)){
                    this.log('Element not unblocked, not enough consent', el);
                    return;
                }

                const attr = el.dataset['consentAttr'].split(',');

                // rewrite attributes from data-attr to attr
                attr.forEach(a => {
                    a in el.dataset && el.setAttribute(a, el.dataset[a]);
                });

                this.log('Element unblocked', el);
                el.setAttribute('data-consent-managed', true);
            });
        });
    }

    /**
     * Wrapper around DOM ready event
     * @param {function} callback
     */
    domready(callback){
        if (
            document.readyState === 'complete' ||
            (document.readyState !== 'loading' && !document.documentElement.doScroll)
        ) {
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
    optOut(){
        return this.provider.optOut();
    }

    /**
     * Shows user interface to change consent
     */
    showUi(){
        return this.provider.showUi();
    }

}

export default Consent;
