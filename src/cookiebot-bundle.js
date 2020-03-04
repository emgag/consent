/*
 * Consent bundle (shim & cookiebot)
 */

import Consent_Cookiebot from "./integration/cookiebot";
global.Consent_Cookiebot = Consent_Cookiebot;

import Consent_Noop from "./integration/noop";
global.Consent_Noop = Consent_Noop;

import Consent from "./consent/shim";
global.Consent = Consent;

