'use strict';

class Consent_Civic {
    /**
     * @param {Object} config
     */
    constructor(config) {
        this.config = config;
    }

    init(consent, callback) {
        this.open = false;

        __tcfapi('addEventListener', 2, (tcData, success) => {
            if (!success) return false
            consent.log('TCM API', tcData.eventStatus, tcData);

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

                    const closeHandler = e => {
                        this.open = false;
                        consent.call('dialog_close');

                        // consent is commited now and can be accessed, but not with provided
                        // tcData object, needs to be requested again
                        __tcfapi('getTCData', 2, (tcData, success) => { commit((tcData)) })
                    }

                    // every change in the UI triggers a cmpuishown event, but closing the UI using
                    // either the close icon, ESC key or the save preferences button does not trigger
                    // an event.
                    window.addEventListener(
                        'keydown',
                        e => {
                            let isEscape = false;
                            if ("key" in e) {
                                isEscape = (e.key === "Escape" || e.key === "Esc");
                            } else {
                                isEscape = (e.keyCode === 27);
                            }

                            if (isEscape) {
                                closeHandler(e)
                            }
                        },
                        {once: true}
                    );

                    document.getElementById('ccc-dismiss-button').addEventListener(
                        'click',
                        closeHandler,
                        {once: true}
                    );

                    document.getElementById('ccc-close').addEventListener(
                        'click',
                        closeHandler,
                        {once: true}
                    );


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
