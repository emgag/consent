'use strict';

class Consent_OilJS {
    init(callback){
        window.addEventListener('message', e => {
            let event = e.data;

            switch (event) {
                case 'oil_optin_done':
                case 'oil_has_optedin':
                    // collect consent data
                    __cmp('getConsentData', null, (result) => {
                        let consent = result.consentData;

                        // collect accepted purposes
                        __cmp('getPublisherConsents', null, (result) => {
                            let purposes = [];

                            for (const e in result.standardPurposeConsents) {
                                result.standardPurposeConsents[e] && purposes.push(+e)
                            }

                            for (const e in result.customPurposeConsents) {
                                result.customPurposeConsents[e] && purposes.push(+e)
                            }

                            callback(purposes, consent);
                        });
                    });
            }
        });
    }

    optOut(){
        return AS_OIL.triggerOptOut();
    }
}

export default Consent_OilJS;
