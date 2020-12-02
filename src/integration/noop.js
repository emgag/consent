'use strict';

/**
 * Noop provider just passes through pre-initialized consent
 */
class Consent_Noop {
    /**
     * @param {Object} config
     * @param {Object} config.purposes
     * @param {string} config.string
     * @param {boolean} config.domready
     */
    constructor(config) {
        this.purposes = config.hasOwnProperty('purposes')
            ? config.purposes
            : {
                'standard': {
                    '1': true,
                    '2': true,
                    '3': true,
                    '4': true,
                    '5': true
                },
                'custom': {}
            };

        this.consent = config.hasOwnProperty('consent')
            ? config.consent
            : '';

        this.domready = config.hasOwnProperty('domready')
            ? !!config.domready
            : false;
    }

    /**
     * @param {Consent} consent
     * @param {function} callback
     */
    init(consent, callback) {
        consent.log('Init Noop plugin')

        if (this.domready) {
            consent.domready(() => {
                callback(this.purposes, this.consent);
            });
        }

        callback(this.purposes, this.consent);
    }

    optOut() {
    }
}

export default Consent_Noop;
