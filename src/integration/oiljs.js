'use strict';

class Consent_OilJS {
    init(consent, callback){
        this.open = false;

        window.addEventListener('message', e => {
            let event = e.data;

            switch (event) {
                case 'oil_optin_done':
                    consent.call('dialog_close');

                    // fallthrough
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

                case 'oil_shown':
                    consent.call('dialog_open');
                    break;

                case 'oil_hide_layer':
                    consent.call('dialog_close');
                    break;

            }

        });
    }

    optOut(){
        return AS_OIL.triggerOptOut();
    }
}

export default Consent_OilJS;
