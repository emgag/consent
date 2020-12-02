'use strict';

class Consent_Civic {
    /**
     * @param {Object} config
     */
    constructor(config) {
        this.config = config;
    }

    init(consent, callback) {
        consent.log('Init Civic Cookie Control plugin')

        this.open = false;

        __tcfapi('addEventListener', 2, (tcData, success) => {
            if (!success) {
                consent.log('TCF API (FAIL)', tcData.eventStatus, tcData);
            }

            consent.log('TCF API', tcData.eventStatus, tcData);

            const commit = (tcData) => {
                if (tcData.hasOwnProperty('purpose') && tcData.hasOwnProperty('publisher')) {
                    callback(
                        {
                            'standard': this.annotateStandardConsents(tcData.purpose.consents),
                            'special': tcData.publisher.customPurpose.consents
                        },
                        tcData.tcString
                    );
                }
            }

            switch (tcData.eventStatus) {
                case 'useractioncomplete':
                // fallthrough
                case 'tcloaded':
                    if (this.open) {
                        consent.call('dialog_close');
                        this.open = false
                    }

                    commit(tcData);

                    break;

                case 'cmpuishown':
                    if (!this.open) {
                        consent.call('dialog_open');
                    }

                    this.open = true;
                    break;
            }
        })
    }

    annotateStandardConsents(consents) {
        const c = {}

        for (let i = 1; i <= 10; i++) {
            c[i] = consents.hasOwnProperty(i) ? consents[i] : false;
        }

        return c
    }

    optOut() {
        CookieControl.delete('CookieControl');
        CookieControl.delete('CookieControlTC');
    }

    showUi() {
        CookieControl.open()
    }

}

export default Consent_Civic;
