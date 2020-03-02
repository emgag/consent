'use strict';

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class Consent_OilJS {
    constructor(config = {}) {
        this.config = {
            scrolllock: config.hasOwnProperty('scrolllock') ? !!config.scrolllock : false,
        }
    }

    init(consent, callback){
        window.addEventListener('message', e => {
            let event = e.data;

            switch (event) {
                case 'oil_optin_done':
                case 'oil_has_optedin':
                    // collect consent data
                    __cmp('getConsentData', null, (result) => {
                        const consentString = result.consentData;

                        // collect accepted purposes
                        __cmp('getPublisherConsents', null, (result) => {
                            callback(
                                {
                                    'standard': result.standardPurposeConsents,
                                    'custom': result.customPurposeConsents
                                },
                                consentString
                            );
                        });
                    });

                    break;
            }

            if (this.config.scrolllock) {
                switch (event) {
                    case 'oil_shown':
                        const overlay = document.getElementsByClassName('as-oil-content-overlay');

                        if(overlay.length > 0){
                            disableBodyScroll(overlay[0]);
                        }

                        break;

                    case 'oil_optin_done':
                    case 'oil_has_optedin':
                    case 'oil_hide_layer':
                        clearAllBodyScrollLocks();
                }
            }
        });
    }

    optOut(){
        return AS_OIL.triggerOptOut();
    }
}

export default Consent_OilJS;
