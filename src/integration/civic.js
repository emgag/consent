'use strict';

class Consent_Civic {
    /**
     * @param {Object} config
     */
    constructor(config) {
        this.config = config;
    }

    init(consent, callback){
        this.open = false;

        __tcfapi('addEventListener', 2, (tcData, success) => {
            if(!success) return false
            consent.log('TCM API', tcData.eventStatus, tcData);

            switch(tcData.eventStatus){
                case 'useractioncomplete':
                    // fallthrough
                case 'tcloaded':
                    if(this.open){
                        consent.call('dialog_close');
                        this.open = false
                    }

                    if(tcData.hasOwnProperty('purpose') && tcData.hasOwnProperty('publisher')) {
                        callback(
                            {
                                'standard': this.annotateStandardConsents(tcData.purpose.consents),
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

export default Consent_Civic;
