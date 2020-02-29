'use strict';

const { ConsentString } = require('consent-string');


class Consent_Cookiebot {
    init(consent, callback){
        let handler = function(e){
            // collect consent data
            __cmp('getConsentData', null, (result) => {
                const consentString = result.consentData;
                const cd = new ConsentString(consentString);

                const purposes = {
                    'standard': {
                        "1": cd.isPurposeAllowed(1),
                        "2": cd.isPurposeAllowed(2),
                        "3": cd.isPurposeAllowed(3),
                        "4": cd.isPurposeAllowed(4),
                        "5": cd.isPurposeAllowed(5),
                    },
                    'custom': {
                        "necessary": Cookiebot.consent.necessary,
                        "preferences": Cookiebot.consent.preferences,
                        "statistics": Cookiebot.consent.statistics,
                        "marketing": Cookiebot.consent.marketing
                    }
                };

                callback(purposes, consentString);
            });
        };

        window.addEventListener('CookiebotOnAccept', handler);
        window.addEventListener('CookiebotOnDecline', handler);
    }

    optOut(){
        document.cookie = 'CookieConsent=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'CookieConsentBulkTicket=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}

export default Consent_Cookiebot;
