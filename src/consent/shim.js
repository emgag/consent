'use strict';

// thin layer to store consent data
class Consent {
    constructor(provider, config) {
        this.provider = provider;
        this.events = {};
        this.purposes = {
            'standard': {},
            'custom': {},
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
            this.log('All custom purposes?', this.allowsCustomPurposes());
        });

        this.watch(this.unblock);
    }

    get keywords() {
        let k = [];

        this.allowsStandardPurposes() ? k.push('consent_all') : k.push('noconsent');

        for (const property in this.purposes.standard) {
            this.purposes.standard[property] && k.push('consent_standard_' + property)
        }

        for (const property in this.purposes.custom) {
            this.purposes.custom[property] && k.push('consent_custom_' + property)
        }

        this.log('Keywords', k);
        return k
    }

    allows(purpose){
        if(purpose === 'standard'){
            return this.allowsStandardPurposes()
        }

        if(purpose === 'custom'){
            return this.allowsCustomPurposes();
        }

        const p = purpose.split('/');

        if(p.length !== 2){
            this.log('Invalid purpose definition', purpose);
            return false;
        }

        if(p[0] === 'standard' && this.purposes.standard[p[1]]){
            return true;
        }

        if(p[0] === 'custom' && this.purposes.custom[p[1]]){
            return true;
        }

        return false;
    }

    allowsCustomPurposes(){
        for (const property in this.purposes.custom) {
            if (!this.purposes.custom[property]) return false;
        }

        return true;
    }

    allowsStandardPurposes(){
        for (const property in this.purposes.standard) {
            if (!this.purposes.standard[property]) return false;
        }

        return true;
    }

    log(msg, ...context) {
        if (!this.config.debug) {
            return;
        }

        console.log("CONSENT:", msg, ...context);
    }

    call(event){
        window.postMessage({'type': 'consent', 'event': event}, window.origin);
        this.events[event] = true;
    }

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

    watch(callback, once = false) {
        this.on('consent', callback, once)
    }

    inject(src) {
        let po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = src;
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    }

    unblock(){
        const handler = () => {
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
        };

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

    optOut(){
        return this.provider.optOut();
    }
}

export default Consent;
