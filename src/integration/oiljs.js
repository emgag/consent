'use strict';

class Consent_OilJS {
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
            }
        });
    }

    optOut(){
        return AS_OIL.triggerOptOut();
    }
}

export default Consent_OilJS;
